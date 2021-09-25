---
type: docs
title: "MongoDB module"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mongodb-nodex"
no_list: true
weight: 30
description: > 
    MongoDB components for Pip.Services for Pip.Services in Node.js / ES2017.  


    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.  
    
    It provides a set of components used to implement MongoDB persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - Factory to create MongoDB persistence components.
- [**Connect**](connect) - Connection component to configure MongoDB connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Install the NPM package as
```bash
npm install pip-services3-mongodb-nodex --save
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

To implement mongodb persistence component you shall inherit `IdentifiableMongoDbPersistence`. 
Most CRUD operations will come from the base class. You only need to override `getPageByFilter` method with a custom filter function.
And implement a `getOneByKey` custom persistence method that doesn't exist in the base class.

```typescript
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-nodex';

export class MyMongoDbPersistence extends IdentifableMongoDbPersistence<MyObject, string> {
  public constructor() {
    super("myobjects");
    this.ensureIndex({ key: 1 }, { unique: true });
  }

  private composeFilter(filter: FilterParams): any {
    filter = filter || new FilterParams();
    
    let criteria = [];

    let id = filter.getAsNullableString('id');
    if (id != null)
        criteria.push({ _id: id });

    let tempIds = filter.getAsNullableString("ids");
    if (tempIds != null) {
        let ids = tempIds.split(",");
        criteria.push({ _id: { $in: ids } });
    }

    let key = filter.getAsNullableString("key");
    if (key != null)
        criteria.push({ key: key });

    return criteria.length > 0 ? { $and: criteria } : null;
  }
  
  public getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyObject>> {
    return super.getPageByFilter(correlationId, this.composeFilter(filter), paging, "_id", null);
  }  
  
  public getOneByKey(correlationId: string, key: string): Promise<MyObject> {
    
    let filter = { key: key };

    return return new Promise((resolve, reject) => {
        this._collection.findOne(filter, (err, item) => {
          if (item == null)
            this._logger.trace(correlationId, "Nothing found from %s with key = %s", this._collectionName, key);
          else
            this._logger.trace(correlationId, "Retrieved from %s with key = %s", this._collectionName, key);

          item = this.convertToPublic(item);
          resolve(item)
      });
    });
  }

}
```

Configuration for your microservice that includes mongodb persistence may look the following way.

```yaml
...
{{#if MONGODB_ENABLED}}
- descriptor: pip-services:connection:mongodb:con1:1.0
  connection:
    uri: {{{MONGO_SERVICE_URI}}}
    host: {{{MONGO_SERVICE_HOST}}}{{#unless MONGO_SERVICE_HOST}}localhost{{/unless}}
    port: {{MONGO_SERVICE_PORT}}{{#unless MONGO_SERVICE_PORT}}27017{{/unless}}
    database: {{MONGO_DB}}{{#unless MONGO_DB}}app{{/unless}}
  credential:
    username: {{MONGO_USER}}
    password: {{MONGO_PASS}}
    
- descriptor: myservice:persistence:mongodb:default:1.0
  dependencies:
    connection: pip-services:connection:mongodb:con1:1.0
  collection: {{MONGO_COLLECTION}}{{#unless MONGO_COLLECTION}}myobjects{{/unless}}
{{/if}}
...
```
