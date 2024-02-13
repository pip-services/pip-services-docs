---
type: docs
title: "Postgres module"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-postgres-node"
no_list: true
weight: 500
description: > 
   A set of components used to implement PostgreSQL persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create PostreSQL persistence components.
- [**Connect**](connect) - connection component to configure PostgreSQL connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Install the NPM package as
```bash
npm install pip-services4-postgres-node --save
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
  getPageByFilter(context: IContext, filter: FilterParams, paging: PagingParams):  Promise<DataPage<MyObject>>;
    
  getOneById(context: IContext, id: string,): Promise<MyObject>;
    
  getOneByKey(context: IContext, key: string): Promise<MyObject>;
    
  create(context: IContext, item: MyObject): Promise<MyObject>;
    
  update(context: IContext, item: MyObject): Promise<MyObject>;
    
  deleteById(context: IContext, id: string): Promise<MyObject>;
}
```

To implement postgresql persistence component you shall inherit `IdentifiablePostgresPersistence`. 
Most CRUD operations will come from the base class. You only need to override `getPageByFilter` method with a custom filter function.
And implement a `getOneByKey` custom persistence method that doesn't exist in the base class.

```typescript
import { IdentifiablePostgresPersistence } from 'pip-services3-postgres-nodex';

export class MyPostgresPersistence extends IdentifablePostgresPersistence {
  public constructor() {
    super("myobjects");
    this.autoCreateObject("CREATE TABLE myobjects (id VARCHAR(32) PRIMARY KEY, key VARCHAR(50), value VARCHAR(255)");
    this.ensureIndex("myobjects_key", { key: 1 }, { unique: true });
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
  
  public getPageByFilter(context: IContext, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>> {
    return super.getPageByFilter(context, this.composeFilter(filter), paging, "id", null);
  }  
  
  public getOneByKey(context: string, key: string): Promise<MyObject> {
    let query = "SELECT * FROM " + this.quotedTableName() + " WHERE \"key\"=$1";
    let params = [ key ];

    return new Promise((resolve, reject) => {
      this._client.query(query, params, (err, result) => {
        if (err != null) {
          reject(err);
          return;
        }

        let item = result && result.rows ? result.rows[0] || null : null; 

        if (item == null)
          this._logger.trace(context, "Nothing found from %s with key = %s", this._tableName, key);
        else
          this._logger.trace(context, "Retrieved from %s with key = %s", this._tableName, key);

        item = this.convertToPublic(item);
        resolve(item);
      });
    });
  }

}
```

Alternatively you can store data in non-relational format using `IdentificableJsonPostgresPersistence`.
It stores data in tables with two columns - `id` with unique object id and `data` with object data serialized as JSON.
To access data fields you shall use `data->'field'` expression or `data->>'field'` expression for string values.

```typescript
import { IdentifiableJsonPostgresPersistence } from 'pip-services3-postgres-nodex';

export class MyPostgresPersistence extends IdentifableJsonPostgresPersistence {
  public constructor() {
    super("myobjects");
    this.ensureTable("VARCHAR(32)", "JSONB");
    this.ensureIndex("myobjects_key", { "data->>'key'": 1 }, { unique: true });
  }

  private composeFilter(filter: FilterParams): any {
    filter = filter || new FilterParams();
    
    let criteria = [];

    let id = filter.getAsNullableString('id');
    if (id != null)
        criteria.push("data->>'id'='" + id + "'");

    let tempIds = filter.getAsNullableString("ids");
    if (tempIds != null) {
        let ids = tempIds.split(",");
        filters.push("data->>'id' IN ('" + ids.join("','") + "')");
    }

    let key = filter.getAsNullableString("key");
    if (key != null)
        criteria.push("data->>'key'='" + key + "'");

    return criteria.length > 0 ? criteria.join(" AND ") : null;
  }
  
  public getPageByFilter(context: IContext, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>> {
    return super.getPageByFilter(context, this.composeFilter(filter), paging, "id", null);
  }  
  
  public getOneByKey(context: IContext, key: string): Promise<MyObject> { 
    let query = "SELECT * FROM " + this.quotedTableName() + " WHERE data->>'key'=$1";
    let params = [ key ];

    return new Promise((resolve, reject) => {
      this._client.query(query, params, (err, result) => {
        if (err != null) {
          reject(err);
          return;
        }

        let item = result && result.rows ? result.rows[0] || null : null; 

        if (item == null)
          this._logger.trace(context, "Nothing found from %s with key = %s", this._tableName, key);
        else
          this._logger.trace(context, "Retrieved from %s with key = %s", this._tableName, key);

        item = this.convertToPublic(item);
        resolve(item);
      });
    });
  }

}
```

Configuration for your microservice that includes postgresql persistence may look the following way.

```yaml
...
{{#if POSTGRES_ENABLED}}
- descriptor: pip-services:connection:postgres:con1:1.0
  connection:
    uri: {{{POSTGRES_SERVICE_URI}}}
    host: {{{POSTGRES_SERVICE_HOST}}}{{#unless POSTGRES_SERVICE_HOST}}localhost{{/unless}}
    port: {{POSTGRES_SERVICE_PORT}}{{#unless POSTGRES_SERVICE_PORT}}5432{{/unless}}
    database: {{POSTGRES_DB}}{{#unless POSTGRES_DB}}app{{/unless}}
  credential:
    username: {{POSTGRES_USER}}
    password: {{POSTGRES_PASS}}
    
- descriptor: myservice:persistence:postgres:default:1.0
  dependencies:
    connection: pip-services:connection:postgres:con1:1.0
  table: {{POSTGRES_TABLE}}{{#unless POSTGRES_TABLE}}myobjects{{/unless}}
{{/if}}
...
```
