---
type: docs
title: "MemoryPersistence<T>"
linkTitle: "MemoryPersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Persistence component that stores data in memory.

---

**Inherits:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The MemoryPersistence class allows you to create persistence components that store data in memory.

**Important points**
    
- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the this._items property and calling the **Save** method.
- The component supports loading and saving items from another data source. This allows to use it as a base class for file and other types of persistence components that cache all data in memory. 

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

### Constructors
Creates a new instance of the memory persistence component.

> `protected` MemoryPersistence([ILoader<T>](../../read/iloader) loader, [ISaver<T>](../../write/isaver) saver)

- **loader**: [ILoader<T>](../../read/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver<T>](../../write/isaver) - (optional) saver used to save items to an external datasource.

Creates a new instance of the persistence.

> `public` MemoryPersistence()


### Fields

<span class="hide-title-link">

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _items
Items to load/save.
> `protected` **_items**: List\<T\>

#### _loader
Loader.
> `protected` **_loader**: [ILoader<T>](../../read/iloader)

#### _saver
Saver.
> `protected` **_saver**: [ISaver<T>](../../write/isaver)

#### _opened
Boolean that indicates whether the compent is open or not.
> `protected` **_opened**: bool = false

#### _maxPageSize
Maximum amount of items per page.
> `protected` **_maxPageSize**: int = 100

</span>


### Instance methods

#### Clear
Clears the component's state.

> `public` Task ClearAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures the component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Create
Creates a data item.

> `public virtual` Task\<T\> CreateAsync(IContext context, T item)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: Task\<T\> - created item


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **DeleteByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `public` Task DeleteByFilterAsync(IContext context, IList\<Func\<T, bool\>\> matchFunctions)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **matchFunctions**: IList\<Func\<T, bool\>\> - (optional) filter function used to filter items.


#### GetCountByFilter

**Note: this method is not implemented yet**

Gets the number of items retrieved by a given filter.

This method shall be called by a public **GetCountByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` GetCountByFilter(context: IContext, filter: object): Task\<int\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: object -  id of the item to be deleted
- **returns**: Task\<int\> - number of data items that satisfy the filter.


#### GetListByFilterAsync
Gets a list of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **GetListByFilterAsync** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `public` Task\<List\<T\>\> GetListByFilterAsync(IContext context, IList\<Func\<T, bool\>\> matchFunctions)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **matchFunctions**: IList\<Func\<T, bool\>\> - (optional) filter function used to filter items
- **returns**: Task\<List\<T\>\> - data list of filtered results.


#### GetOneRandomAsync
Gets a random item from items that match to a given filter.

This method shall be called by a public **GetOneRandomAsync** method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `public` Task\<T\> GetOneRandomAsync(IContext context, IList\<Func\<T, bool\>\> matchFunctions)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **matchFunctions**: IList\<Func\<T, bool\>\> - (optional) filter function to filter items.
- **returns**: Task\<T\> - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **getPageByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `public` async Task<[DataPage<T>](../../../data/query/data_page)> GetPageByFilterAsync(IContext context, IList\<Func\<T, bool\>\> matchFunctions, [PagingParams](../../../data/query/paging_params) paging)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **matchFunctions**: IList\<Func\<T, bool\>\> - filter function used to filter items
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **returns**: Task<[DataPage<T>](../../../data/query/data_page)> - data page with filterd results.


#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### LoadAsync
Loads items.

> `private` Task LoadAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### SaveAsync
Saves items to an external data source using a configured saver component.

> `public` Task SaveAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### SetReferences
Sets the component's references. References must match configured dependencies.

> `public` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to set.

### Examples

```cs
class MyMemoryPersistence extends MemoryPersistence<MyData>
{
    public MyData GetByName(IContext context, String name)
    {
        MyData item = _items.Find((mydata) => { return mydata.Name == name; });
        ...
        return item;
    } 
    public MyData Set(String correlatonId, MyData item)
    {
        this._items = _items.Filter((mydata) => { return mydata.Name != name; });
        ...
        this._items.add(item);
        this.save(context);
    }
    
var persistence = new MyMemoryPersistence();

persistence.Set("123", new MyData("ABC"));
Console.Out.WriteLine(persistence.getByName("123", "ABC")).toString(); // Result: { name: "ABC" }

```


