---
type: docs
no_list: true
title: "Memory Persistence"
linkTitle: "Memory Persistence"
weight: 40
---

- by Artyom Grishchenko

### Introduction

The Pip.Services Toolkit offers a few abstract implementations for developing persistent components. One of them is the MemoryPersistence, which stores all of its data in memory. Its usefulness is limited in production, but very handy in unit tests. This persistence allows us to cut dependencies on external persistent storages and makes tests easy to set up and lighting fast!

### The MemoryPersistence class

The most basic implementation is the [MemoryPersistence](../../data/persistence/memory_persistence/) class defined in the [Data module](../../data). It is only capable of storing a collection of objects, opening, and closing. It does not provide any data access methods.

The implementation we will be working with is called [IdentifiableMemoryPersistence](../../data/persistence/identifiable_memory_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../commons/data/iidentifiable/) interface defined in the [Commons module](../../commons).

```cs
public interface IIdentifiable<T>
{
    T Id { get; set; }
}

```

The **IdentifiableMemoryPersistence** implements a number of CRUD methods:

```cs
public class IdentifiableMemoryPersistence<T, K> : MemoryPersistence<T>, IWriter<T, K>, IGetter<T, K>, ISetter<T>
    where T : IIdentifiable<K>
    where K : class
{
    protected IdentifiableMemoryPersistence(ILoader<T> loader, ISaver<T> saver);

    public async Task<List<T>> GetListByIdsAsync(string correlationId, K[] ids);

    public Task<T> GetOneByIdAsync(string correlationId, K id);

    public override async Task<T> CreateAsync(string correlationId, T item);

    public async Task<T> SetAsync(string correlationId, T item);

    public async Task<T> UpdateAsync(string correlationId, T item);

    public async Task<T> DeleteByIdAsync(string correlationId, K id);

    public async Task DeleteByIdsAsync(string correlationId, K[] ids);

}



```

In most scenarios, child classes only need to override the **GetPageByFilterAsync()**, **GetListByFilterAsync()**, or **DeleteByFilterAsync()** operations using a custom filter function. All other operations can be used right out of the box. Developers can implement custom methods by accessing stored data objects via the **this._items** property and complete transactions by calling the **Save()** method. See the [Data module’s API](../../data) documentation for more details.

### Filtering

Persistent components in the Pip.Services Toolkit use a number of data patterns. **IdentifiedMemoryPersistence**, for example, supports Filtering. This pattern allows clients to use a [FilterParams](../../commons/data/filter_params/) object to describe a subset of data as key-value pairs. These FilterParams can then be used for retrieving data in accordance with certain search criteria (see the [Commons module](../../commons)).

```cs

var filter = FilterParams.FromTuples(
    'name', 'ABC'
)
var result = await persistence.GetPageByFilterAsync(correlation_id, filter, paging);
```

In the persistence component, the developer is responsible for parsing the **FilterParams** and passing a filter function to the persistent methods of the base class.


```cs
private List<Func<MyData, bool>> ComposeFilter(FilterParams filter)
{
    filter = filter != null ? filter : new FilterParams();
    String name = filter.getAsNullableString("name");

    return List<Func<MyData, bool>>() {
        (item) => {
            if (name != null && item.name != name)
                return false;
            return true;
        }
    };
}
    
public Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging)
{
    return await base.GetPageByFilterAsync(correlationId, this.composeFilter(filter), paging, null, null);
}

```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks through multiple calls to the storage. To do this, a client specifies a set of [PagingParams](../../commons/data/paging_params/), which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using **PagingParams**, but this parameter is optional. The service returns a subset of the data as a [DataPage](../../commons/data/data_page/) object.

```cs
//skip = 25, take = 50, total = False
var paging = new PagingParams(25, 50, false);
var result = await persistence.GetPageByFilterAsync(null, null, paging);
```

### Custom Persistence Methods

As mentioned above, developers can also implement custom persistent methods. Inside those methods, they can access data objects via the **_items** property. When stored data is modified, developers must finish the transaction by calling the base class’s **Save()** method.
Below is an example of a custom persistent method.

```cs
public async Task<MyData> GetOneByNameAsync(string correlationId, string name)
{
    MyData item = null;
    lock (_lock)
    {
        item = _items.Find((x) => { return x.Name == name; });
    }

    if (item != null)
        _logger.Trace(correlationId, "Found by Name {0}", name);
    else
        _logger.Trace(correlationId, "Cannot find by Id {0}", name);

    return await Task.FromResult(item);
}
```

When we put everything together, we get the following component:

```cs

class MyMemoryPersistence : IdentifiableMemoryPersistence<MyData, string>
{
    public MyMemoryPersistence()
    {
        _maxPageSize = 1000;
    }
    private List<Func<MyData, bool>> ComposeFilter(FilterParams filter)
    {
        filter = filter != null ? filter : new FilterParams();
        String name = filter.getAsNullableString("name");
        return List<Func<MyData, bool>>() {
            (item) =>
            {
                if (name != null && item.name != name)
                    return false;
                return true;
            }};
    }

    public Task<DataPage<MyData>> GetPageByFilterAsync(string correlationId, FilterParams filter, PagingParams paging)
    {
        return await base.GetPageByFilterAsync(correlationId, this.composeFilter(filter), paging, null, null);
    }

    public async Task<MyData> GetOneByNameAsync(string correlationId, string name)
    {
        MyData item = null;
        lock (_lock)
        {
            item = _items.Find((x) => { return x.Name == name; });
        }
        if (item != null)
            _logger.Trace(correlationId, "Found by name {0}", name);
        else
            _logger.Trace(correlationId, "Cannot find by name {0}", name);

        return await Task.FromResult(item);
    }
}

```

A demonstration of how we can use our custom memory persistence is presented below:


```cs
public void UseMemoryPersistenceAsync()
{
    // arrange 
    var persistence = new MyMemoryPersistence();
    var item = persistence.Create("123", new MyData("1", "ABC"));
    // filter by id
    var filter = FilterParams.FromTuples(
        "name", "ABC"
    );
    // act
    var result = await persistence.GetPageByFilterAsync(null, filter,new PagingParams(0, 100, false));
    //clean
    persistence.DeleteById("123", "1");
}
```

### FileMemoryPersistence

The memory persistence component actually has one more trick up its sleeve: it can easily be extended to create a **FileMemoryPersistence**. The only thing you’ll need to add is the assignment of a **PersisterObject** in the **FileMemoryPersistence**’s constructor. The File persistence can be used for certain system test scenarios.

```cs
using My.Data.Version1;
using PipServices3.Commons.Config;
using PipServices3.Data.Persistence;
namespace My.Persistence
{
    public class MyFilePersistence : MyMemoryPersistence
    {
        protected JsonFilePersister<BeaconV1> _persister;
        public MyFilePersistence()
        {
            _persister = new JsonFilePersister<BeaconV1>();
            _loader = _persister;
            _saver = _persister;
        }
        public override void Configure(ConfigParams config)
        {
            base.Configure(config);
            _persister.Configure(config);
        }
    }
}
    
```
