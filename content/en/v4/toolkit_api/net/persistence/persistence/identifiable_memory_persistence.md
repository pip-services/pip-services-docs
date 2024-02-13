---
type: docs
title: "IdentifiableMemoryPersistence<T, K>"
linkTitle: "IdentifiableMemoryPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-persistence-dotnet"
description: >
    Abstract persistence component that stores data in memory
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Inherits:** [MemoryPersistence<T>](../memory_persistence), [IWriter<T, K>](../../write/iwriter), [IGetter<T, K>](../../read/igetter), [ISetter<T>](../../write/isetter)
   

### Description

The IdentifiableMemoryPersistence class allows you to create persistence components that store data in memory and implement a number of CRUD operations over data items with unique ids.

**Important points**

- The data items must implement [IIdentifiable](../../../commons/data/iidentifiable).
- In basic scenarios, child classes shall only override [GetPageByFilter](../memory_persistence/#getlistbyfilterasync), [GetListByFilter](../memory_persistence/#getlistbyfilter) or [DeleteByFilter](../memory_persistence/#deletebyfilter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios, child classes can implement additional operations by accessing cached items via the this._items property and calling the **Save** method on updates.

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

### Constructors
Creates a new instance of the identifiable file persistence component.

> `protected` IdentifiableMemoryPersistence([ILoader<T>](../../read/iloader) loader, [ISaver<T>](../../write/isaver) saver)

- **loader**: [ILoader<T>](../../read/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver<T>](../../write/isaver) - (optional) saver used to save items to  and external datasource.

Creates a new instance of the persistence.

> `public` IdentifiableMemoryPersistence()


### Instance methods

#### Create
Creates a data item.

> `public override` Task\<T\> CreateAsync(string context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Task\<T\> - created item


#### DeleteByIdAsync
Deletes a data item based on it's unique id.

> `public` Task\<T\> DeleteByIdAsync(string context, K id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K -  id of the item to be deleted
- **returns**: Task\<T\> - deleted item.


#### DeleteByIdsAsync
Deletes multiple data items based on their unique ids.

> `public` Task DeleteByIdAsync(IContext context, K[] ids)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] - ids of data items to be deleted.


#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> `public` Task\<List\<T\>\> GetListByIdsAsync(IContext context, K[] ids)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: K[] -  ids of data items to be retrieved
- **returns**: Task\<List\<T\>\> - data list of results by ids.


#### GetOneById
Gets a data item based on its unique id.

> `public` Task\<T\> GetOneByIdAsync(IContext context, K id)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of data item to be retrieved.
- **returns**: Task\<T\> - data item by id.


#### Set
Sets a data item. If the data item exists, it updates it; otherwise, it creates a new data item.

> `public` Task\<T\> SetAsync(IContext context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: Task\<T\> - updated item


#### Update
Updates a data item.

> `public` Task\<T\> UpdateAsync(IContext context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: Task\<T\> - updated item.


#### UpdatePartially

**Note: this method is not implemented yet.**

Updates only a few selected fields in a data item.

> `public` Task\<T\> UpdatePartially(context: IContext, id: K, data: [AnyValueMap](../../../commons/data/any_value_map)): Task\<T\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of a data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Task\<T\> - updated item.

### Examples

```cs
class MyMemoryPersistence: IdentifiableMemoryPersistence<MyData, string> 
{
    public MyFilePersistence(string path)
    {
        base(MyData.class, new JsonPersister(path));
        
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
    
    public DataPage<MyData> GetPageByFilter(IContext context, FilterParams filter, PagingParams paging)
    {
        base.GetPageByFilter(context, this.composeFilter(filter), paging, null, null);
    }
}
 
var persistence = new MyMemoryPersistence("./data/data.json");
var item = persistence.Create("123", new MyData("1", "ABC"));
var mydata = persistence.GetPageByFilter(
    "123",
    FilterParams.fromTuples("name", "ABC"),
null, null, null);
Console.Out.WriteLine(page.Data);          // Result: { id: "1", name: "ABC" }
persistence.DeleteById("123", "1");
...

```

### See also
- #### [MemoryPersistence](../memory_persistence)

