---
type: docs
title: "Cassandra module"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-cassandra-nodex"
no_list: true
weight: 30
description: > 
    Cassandra components for Pip.Services in Node.js / ES2017

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It provides a set of components to implement Cassandra persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - Factory used to create Cassandra persistence components.
- [**Connect**](connect) - Connection component to configure Cassandra connection to database.
- [**Persistence**](persistence) - abstract persistence components used to perform basic CRUD operations.


### Use

Install the NPM package as
```bash
npm install pip-services3-cassandra-nodex --save
```

As an example, lets create persistence for the following data object.

```typescript
import { IIdentifiable } from 'pip-services3-commons-nodex';

export class MyObject implements IIdentifiable {
  public id: string;
  public key: string;
  public value: number;
}
```

The persistence component shall implement the following interface with a basic set of CRUD operations.

```typescript
export interface IMyPersistence {
  getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams):  Promise<DataPage<MyObject>>;
    
  getOneById(correlationId: string, id: string,): Promise<MyObject>;
    
  getOneByKey(correlationId: string, key: string): Promise<MyObject>;
    
  create(correlationId: string, item: MyObject): Promise<MyObject>;
    
  update(correlationId: string, item: MyObject): Promise<MyObject>;
    
  deleteById(correlationId: string, id: string): Promise<MyObject>;
}
```

To implement cassandraql persistence component you shall inherit `IdentifiableCassandraPersistence`. 
Most CRUD operations will come from the base class. You only need to override the `getPageByFilter` method with a custom filter function.
And implement a `getOneByKey` custom persistence method that doesn't exist in the base class.

```typescript
import { IdentifiableCassandraPersistence } from 'pip-services3-cassandra-nodex';

export class MyCassandraPersistence extends IdentifableCassandraPersistence {
  public constructor() {
    super("mykeyspace.myobjects");
  }

  protected defineSchema(): void {
    this.clearSchema();
    this.ensureSchema("CREATE TABLE " + this.quotedTableName() + " (id TEXT PRIMARY KEY, key TEXT, value TEXT)");
    this.ensureIndex("key", { key: 1 }, { unique: true });
  }

  private composeFilter(filter: FilterParams): any {
    filter = filter || new FilterParams();
    
    let criteria = [];

    let id = filter.getAsNullableString('id');
    if (id != null)
        criteria.push("id='" + id + "'");

    let tempIds = filter.getAsNullableString("ids");
    if (tempIds != null) {
        let ids = tempIds.split(",");
        filters.push("id IN ('" + ids.join("','") + "')");
    }

    let key = filter.getAsNullableString("key");
    if (key != null)
        criteria.push("key='" + key + "'");

    return criteria.length > 0 ? criteria.join(" AND ") : null;
  }
  
  public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>> {
    return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, "id", null);
  }  
  
  public getOneByKey(correlationId: string, key: string): Promise<MyObject> {
    let query = "SELECT * FROM " + this.quoteIdentifier(this._tableName) + " WHERE \"key\"=?";
    let params = [ key ];

    let result = this._client.execute(query, params);
    let item = result && result.rows ? result.rows[0] || null : null; 

    if (item == null)
      this._logger.trace(correlationId, "Nothing found from %s with key = %s", this._tableName, key);
    else
      this._logger.trace(correlationId, "Retrieved from %s with key = %s", this._tableName, key);

    item = this.convertToPublic(item);
    return item;
  }

}
```

A configuration for your microservice that includes cassandraql persistence may look the following way:

```yaml
...
{{#if CASSANDRA_ENABLED}}
- descriptor: pip-services:connection:cassandra:con1:1.0
  connection:
    uri: {{{CASSANDRA_SERVICE_URI}}}
    host: {{{CASSANDRA_SERVICE_HOST}}}{{#unless CASSANDRA_SERVICE_HOST}}localhost{{/unless}}
    port: {{CASSANDRA_SERVICE_PORT}}{{#unless CASSANDRA_SERVICE_PORT}}9042{{/unless}}
    datacenter: {{CASSANDRA_DATACENTER}}{{#unless CASSANDRA_DATACENTER}}datacenter1{{/unless}}
  credential:
    username: {{CASSANDRA_USER}}
    password: {{CASSANDRA_PASS}}
    
- descriptor: myservice:persistence:cassandra:default:1.0
  dependencies:
    connection: pip-services:connection:cassandra:con1:1.0
  table: {{CASSANDRA_TABLE}}{{#unless CASSANDRA_TABLE}}mykeyspace.myobjects{{/unless}}
{{/if}}
...
```
