---
type: docs
title: "MongoDB module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mongodb-dotnet"
no_list: true
weight: 30
description: > 
    MongoDB components for Pip.Services for Pip.Services .NET. 

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It provides a set of components used to implement MongoDB persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - factory to create MongoDB persistence components.
- [**Connect**](connect) - connection component to configure connections to MongoDB databases.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Install the dotnet package as
```bash
dotnet add package PipServices3.Mongodb
```

As an example, lets create persistence for the following data object.

```cs
using PipServices3.Commons.Data;

class MyObject : IIdentifiable<string>
{
    public string Id { get; set; }
    public string key;
    public int value;
}

```

The persistence component shall implement the following interface with a basic set of CRUD operations:

```cs
interface IMyPersistance
{
    void GetPageByFilter(string correlationId, FilterParams filter, PagingParams paging);

    void GetOneById(string correlationId, string id);

    void GetOneByKey(string correlationId, string id);

    void Create(string correlationId, MyObject item);

    void Update(string correlationId, MyObject item);

    void DeleteById(string correlationId, string id);
}

```

To implement mongodb persistence component you shall inherit `IdentifiableMongoDbPersistence`. 
Most CRUD operations will come from the base class. You only need to override `GetPageByFilter` method with a custom filter function.
And then, implement a `GetOneByKey` custom persistence method that doesn't exist in the base class.

```cs
class MyMongoDbPersistence : IdentifiableMongoDbPersistence<MyObject, string>
{
    public MyMongoDbPersistence() : base("myobjects") { }

    protected override FilterDefinition<MyObject> ComposeFilter(FilterParams filter)
    {
        filter = filter != null ? filter : new FilterParams();

        var criteria = new BsonArray();

        string id = filter.GetAsNullableString("id");
        if (id != null)
            criteria.Add(new BsonDocument("_id", id));

        string tempIds = filter.GetAsNullableString("ids");
        if (tempIds != null)
        {
            string[] ids = tempIds.Split(",");
            criteria.Add(new BsonDocument(new Dictionary<string, object> { { "$in", ids } }));
        }

        string key = filter.GetAsNullableString("key");
        if (key != null)
            criteria.Add(new BsonDocument("key", key));


        return criteria.Count > 0 ? new BsonDocument("$and", criteria) : null;
    }

    public async Task<DataPage<MyObject>> GetPageByFilter(string correlationId, FilterParams filter, PagingParams paging)
    {
        return await base.GetPageByFilterAsync(correlationId, this.ComposeFilter(filter), paging).Result;
    }

    public Task<MyObject> GetOneByKey(string correlationId, string key)
    {
        var filter = new BsonDocument("key", key);
        var item = await this._collection.FindAsync(filter).First<MyObject>();

        if (item == null)
            this._logger.Trace(correlationId, "Nothing found from %s with key = %s", this._collectionName, key);
        else
            this._logger.Trace(correlationId, "Retrieved from %s with key = %s", this._collectionName, key);

        item = this.ConvertToPublic(item);

        return item;
    }
}
```

The configuration for your microservice that includes mongodb persistence may look the following way:

```yaml
...
{{#if MONGODB_ENABLED}}
- descriptor: pip-services:connection:mongodb:con1:1.0
  collection: {{MONGO_COLLECTION}}{{#unless MONGO_COLLECTION}}myobjects{{/unless}}
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
{{/if}}
...
```
