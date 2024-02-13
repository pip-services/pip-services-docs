---
type: docs
title: "SQLite module"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-sqlite-node"
no_list: true
weight: 500
description: > 
  A set of components to implement SQLite persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create SQLite persistence components. 
- [**Connect**](connect) - connection component to configure SQLite connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Install the NPM package as
```bash
npm install pip-services4-sqlite-node --save
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

The persistence component shall implement the following interface with a basic set of CRUD operations:

```typescript
export interface IMyPersistence {
  getPageByFilter(context: IContext, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>>;
    
  getOneById(context: IContext, id: string): Promise<MyObject>;
    
  getOneByKey(context: IContext, key: string): Promise<MyObject>;
    
  create(context: IContext, item: MyObject): Promise<MyObject>;
    
  update(context: IContext, item: MyObject): Promise<MyObject>;
    
  deleteById(context: IContext, id: string): Promise<MyObject>;
}
```

To implement SQLite persistence component you shall inherit `IdentifiableSqlitePersistence`. 
Most CRUD operations will come from the base class. You only need to override `getPageByFilter` method with a custom filter function.
And implement a `getOneByKey` custom persistence method that doesn't exist in the base class.

```typescript
import { IdentifiableSqlitePersistence } from 'pip-services3-sqlite-nodex';

export class MySqlitePersistence extends IdentifableSqlitePersistence<MyObject, string> {
  public constructor() {
    super("myobjects");
    this.autoCreateObject("CREATE TABLE myobjects (id VARCHAR(32) PRIMARY KEY, key VARCHAR(50), value TEXT");
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
  
  public getOneByKey(context: IContext, key: string): Promise<MyObject> {
    
    let query = "SELECT * FROM " + this.quotedTableName() + " WHERE \"key\"=?";
    let params = [ key ];

    return return new Promise((resolve, reject) => {
      this._client.get(query, params, (err, result) => {
        err = err || null;

        if (item == null)
          this._logger.trace(context, "Nothing found from %s with key = %s", this._tableName, key);
        else
          this._logger.trace(context, "Retrieved from %s with key = %s", this._tableName, key);

        if (err) reject(err);
        
        item = this.convertToPublic(item);
        resolve(item);
      });
    });
  }

}
```

Alternatively you can store data in non-relational format using `IdentificableJsonSqlitePersistence`.
It stores data in tables with two columns - `id` with unique object id and `data` with object data serialized as JSON.
To access data fields you shall use `JSON_EXTRACT(data, '$.field')` expression.

```typescript
import { IdentifiableJsonSqlitePersistence } from 'pip-services3-sqlite-nodex';

export class MySqlitePersistence extends IdentifableJsonSqlitePersistence<MyObject, string> {
  public constructor() {
    super("myobjects");
    this.ensureTable("VARCHAR(32)", "JSON");
    this.ensureIndex("myobjects_key", { "JSON_EXTRACT(data, '$.key')": 1 }, { unique: true });
  }

  private composeFilter(filter: FilterParams): any {
    filter = filter || new FilterParams();
    
    let criteria = [];

    let id = filter.getAsNullableString('id');
    if (id != null)
        criteria.push("JSON_EXTRACT(data, '$.id')='" + id + "'");

    let tempIds = filter.getAsNullableString("ids");
    if (tempIds != null) {
        let ids = tempIds.split(",");
        filters.push("JSON_EXTRACT(data, '$.id') IN ('" + ids.join("','") + "')");
    }

    let key = filter.getAsNullableString("key");
    if (key != null)
        criteria.push("JSON_EXTRACT(data, '$.key')='" + key + "'");

    return criteria.length > 0 ? criteria.join(" AND ") : null;
  }
  
  public getPageByFilter(context: IContext, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>> {
    return super.getPageByFilter(context, this.composeFilter(filter), paging, "id", null);
  }  
  
  public getOneByKey(context: string, key: string,
    callback: (err: any, item: MyObject) => void): void {
    
    let query = "SELECT * FROM " + this.quotedTableName() + " WHERE JSON_EXTRACT(data, '$.key')=?";
    let params = [ key ];

    return return new Promise((resolve, reject) => {
      this._client.get(query, params, (err, result) => {
        err = err || null;

        if (item == null)
          this._logger.trace(context, "Nothing found from %s with key = %s", this._tableName, key);
        else
          this._logger.trace(context, "Retrieved from %s with key = %s", this._tableName, key);

        if (err) reject(err);

        item = this.convertToPublic(item);
        resolve(item);
      });
    });
  }

}
```

The configuration for your microservice that includes SQLite persistence may look the following way:

```yaml
...
{{#if SQLITE_ENABLED}}
- descriptor: pip-services:connection:postgres:con1:1.0
  connection:
    database: {{SQLITE_DB}}{{#unless SQLITE_DB}}./data/app.db{{/unless}}
    
- descriptor: myservice:persistence:postgres:default:1.0
  dependencies:
    connection: pip-services:connection:postgres:con1:1.0
  table: {{SQLITE_TABLE}}{{#unless SQLITE_TABLE}}myobjects{{/unless}}
{{/if}}
...
```
