---
type: docs
title: "SQLServer module"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-sqlserver-nodex"
no_list: true
weight: 30
description: > 
    SQLServer components for Node.js / ES2017. 

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
---

### Packages

The module contains the following packages:
- [**Build**](build) - a standard factory for constructing components
- [**Connect**](connect) - instruments for configuring connections to the database.
- [**Persistence**](persistence) - abstract classes for working with the database that can be used for connecting to collections and performing basic CRUD operations


### Use

Install the NPM package as
```bash
npm install pip-services3-sqlserver-nodex --save
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
  getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>>;
    
  getOneById(correlationId: string, id: string): Promise<MyObject>;
    
  getOneByKey(correlationId: string, key: string): Promise<MyObject>;
    
  create(correlationId: string, item: MyObject): Promise<MyObject>;
    
  update(correlationId: string, item: MyObject): Promise<MyObject>;
    
  deleteById(correlationId: string, id: string): Promise<MyObject>;
}
```

To implement sql server persistence component you shall inherit `IdentifiableSqlServerPersistence`. 
Most CRUD operations will come from the base class. You only need to override `getPageByFilter` method with a custom filter function.
And implement a `getOneByKey` custom persistence method that doesn't exist in the base class.

```typescript
import { IdentifiableSqlServerPersistence } from 'pip-services3-sqlserver-nodex';

export class MySqlServerPersistence extends IdentifableSqlServerPersistence<MyObject, string> {
  public constructor() {
    super("myobjects");
    this.ensureSchema("CREATE TABLE [myobjects] ([id] VARCHAR(32) PRIMARY KEY, [key] VARCHAR(50), [value] NVARCHAR(255)");
    this.ensureIndex("myobjects_key", { '[key]': 1 }, { unique: true });
  }

  private composeFilter(filter: FilterParams): any {
    filter = filter || new FilterParams();
    
    let criteria = [];

    let id = filter.getAsNullableString('id');
    if (id != null)
        criteria.push("[id]='" + id + "'");

    let tempIds = filter.getAsNullableString("ids");
    if (tempIds != null) {
        let ids = tempIds.split(",");
        filters.push("[id] IN ('" + ids.join("','") + "')");
    }

    let key = filter.getAsNullableString("key");
    if (key != null)
        criteria.push("[key]='" + key + "'");

    return criteria.length > 0 ? criteria.join(" AND ") : null;
  }
  
  public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>> {
    return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, "id", null);
  }  
  
  public getOneByKey(correlationId: string, key: string): Promise<MyObject> {
    
    let query = "SELECT * FROM " + this.quoteIdentifier(this._tableName) + " WHERE [key]=@1";
    let params = [ key ];

    let request = this.createRequest(params);
    return return new Promise((resolve, reject) => {
      request.query(query, (err, result) => {
        err = err || null;

        let item = result && result.recordset ? result.recordset[0] || null : null; 

        if (item == null)
          this._logger.trace(correlationId, "Nothing found from %s with key = %s", this._tableName, key);
        else
          this._logger.trace(correlationId, "Retrieved from %s with key = %s", this._tableName, key);

        if (err) reject(err);

        item = this.convertToPublic(item);
        resolve(item);
      });
    });
  }

}
```

Alternatively you can store data in non-relational format using `IdentificableJsonSqlServerPersistence`.
It stores data in tables with two columns - `id` with unique object id and `data` with object data serialized as JSON.
To access data fields you shall use `JSON_VALUE([data],'$.field')` expression.

```typescript
import { IdentifiableJsonSqlServerPersistence } from 'pip-services3-sqlserver-nodex';

export class MySqlServerPersistence extends IdentifableJsonSqlServerPersistence<MyObject, string> {
  public constructor() {
    super("myobjects");
    this.ensureTable();
    this.autoCreateObject("ALTER TABLE [myobjects] ADD [data_key] AS JSON_VALUE([data],'$.key')")
    this.ensureIndex('myobjects_key', { data_key: 1 }, { unique: true });
  }

  private composeFilter(filter: FilterParams): any {
    filter = filter || new FilterParams();
    
    let criteria = [];

    let id = filter.getAsNullableString('id');
    if (id != null)
        criteria.push("JSON_VALUE([data],'$.id')='" + id + "'");

    let tempIds = filter.getAsNullableString("ids");
    if (tempIds != null) {
        let ids = tempIds.split(",");
        filters.push("JSON_VALUE([data],'$.id') IN ('" + ids.join("','") + "')");
    }

    let key = filter.getAsNullableString("key");
    if (key != null)
        criteria.push("JSON_VALUE([data],'$.key')='" + key + "'");

    return criteria.length > 0 ? criteria.join(" AND ") : null;
  }
  
  public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>> {
    return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, "id", null);
  }  
  
  public getOneByKey(correlationId: string, key: string): Promise<MyObject> {
    
    let query = "SELECT * FROM " + this.quoteIdentifier(this._tableName) + " WHERE JSON_VALUE([data],'$.key')=@1";
    let params = [ key ];

    let request = this.createRequest(params);
    return return new Promise((resolve, reject) => {

      request.query(query, (err, result) => {
        err = err || null;

        let item = result && result.recordset ? result.recordset[0] || null : null; 

        if (item == null)
          this._logger.trace(correlationId, "Nothing found from %s with key = %s", this._tableName, key);
        else
          this._logger.trace(correlationId, "Retrieved from %s with key = %s", this._tableName, key);

        if (err) reject(err);

        item = this.convertToPublic(item);
        resolve(item);
      });
    });
  }

}
```

Configuration for your microservice that includes sqlserver persistence may look the following way.

```yaml
...
{{#if SQLSERVER_ENABLED}}
- descriptor: pip-services:connection:sqlserver:con1:1.0
  table: {{SQLSERVER_TABLE}}{{#unless SQLSERVER_TABLE}}myobjects{{/unless}}
  connection:
    uri: {{{SQLSERVER_SERVICE_URI}}}
    host: {{{SQLSERVER_SERVICE_HOST}}}{{#unless SQLSERVER_SERVICE_HOST}}localhost{{/unless}}
    port: {{SQLSERVER_SERVICE_PORT}}{{#unless SQLSERVER_SERVICE_PORT}}1433{{/unless}}
    database: {{SQLSERVER_DB}}{{#unless SQLSERVER_DB}}app{{/unless}}
  credential:
    username: {{SQLSERVER_USER}}
    password: {{SQLSERVER_PASS}}
    
- descriptor: myservice:persistence:sqlserver:default:1.0
  dependencies:
    connection: pip-services:connection:sqlserver:con1:1.0
{{/if}}
...
```