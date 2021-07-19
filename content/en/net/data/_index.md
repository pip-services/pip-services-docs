---
type: docs
title: "Data module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
no_list: true
weight: 30
description: > 
    Data processing and persistence components for .NET

   
    Persistence components for Node.js This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It contains generic interfaces for data access components as well as abstract implementations for in-memory and file persistence.      
    
    The persistence components come in two kinds. The first kind is a basic persistence that can work with any object types and provides only minimal set of operations. The second kind is so called "identifieable" persistence with works with "identifable" data objects, i.e. objects that have unique ID field. The identifiable persistence provides a full set or CRUD operations that covers most common cases.


---


### Packages

The module contains the following packages:

* [**Core**](core) - interfaces for data access components. 
* [**Persistence**](persistence) - in-memory and file persistence components, as well as JSON persister class.


### Use

Install the dotnet package as
```bash
dotnet add package PipServices3.Data
```

As an example, lets implement persistence for the following data object.

```cs
using PipServices3.Commons.Data;

 class MyObject : IIdentifiable<string>
{
    public string Id { get; set; }
    public string key;
    public int value;
}
```

Our persistence component shall implement the following interface with a basic set of CRUD operations.

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

To implement in-memory persistence component you shall inherit `IdentifiableMemoryPersistence`. 
Most CRUD operations will come from the base class. You only need to override `GetPageByFilter` method with a custom filter function.
And implement a `GetOneByKey` custom persistence method that doesn't exist in the base class.

```cs
using PipServices3.Data.Persistence;


class MyMemoryPersistence : IdentifiableMemoryPersistence<MyObject, string>
{
    public MyMemoryPersistence() : base() { }

    private List<Func<MyData, bool>> ComposeFilter(FilterParams filter)
    {
        filter = filter != null ? filter : new FilterParams();

        string id = filter.GetAsNullableString("id");
        string tempIds = filter.GetAsNullableString("ids");
        string[] ids = tempIds != null ? tempIds.Split(",") : null;
        string key = filter.GetAsNullableString("key");

        return new List<Func<MyData, bool>>() {
            (item) => {
                if (item.key != key)
                    return false;
                return true;
            }
        };

    }

    public async Task<DataPage<MyObject>> GetPageByFilter(string correlationId, FilterParams filter, PagingParams paging)
    {
        return await base.GetPageByFilterAsync(correlationId, this.ComposeFilter(filter), paging).Result;
    }

    public MyObjectGetOneByKey(string correlationId, List<MyObject> item, string key)
    {
        List<MyObject> items = item.Find(x => x.key == key);

        if (item.Count > 0)
            this._logger.Trace(correlationId, "Found object by key=%s", key);
        else
            this._logger.Trace(correlationId, "Cannot find by key=%s", key);


        return item;
    }
}
```

It is easy to create file persistence by adding a persister object to the implemented in-memory persistence component.

```cs
using PipServices3.Data.Persistence;
using PipServices3.Commons.Config;

class MyFilePersistence: MyMemoryPersistence
{
    protected JsonFilePersister<MyObject> _persister;

    public MyFilePersistence(string path=null): base()
    {
        this._persister = new JsonFilePersister<MyObject>(path);
        this._loader = this._persister;
        this._saver = this._persister;
    }

    public void Configure(ConfigParams config)
    {
        base.Configure(config);
        this._persister.Configure(config);
    }
}
```

Configuration for your microservice that includes memory and file persistence may look the following way.

```yaml
...
{{#if MEMORY_ENABLED}}
- descriptor: "myservice:persistence:memory:default:1.0"
{{/if}}

{{#if FILE_ENABLED}}
- descriptor: "myservice:persistence:file:default:1.0"
  path: {{FILE_PATH}}{{#unless FILE_PATH}}"../data/data.json"{{/unless}}
{{/if}}
...
```