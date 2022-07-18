---
type: docs
title: "MemoryPersistence<T>"
linkTitle: "MemoryPersistence"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Persistence component that stores data in memory.

---

**Inherits:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

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

> `protected` MemoryPersistence([ILoader<T>](../../core/iloader) loader, [ISaver<T>](../../core/isaver) saver)

- **loader**: [ILoader<T>](../../core/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver<T>](../../core/isaver) - (optional) saver used to save items to an external datasource.

Creates a new instance of the persistence.

> `public` MemoryPersistence()


### Fields

<span class="hide-title-link">

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _items
Items to load/save.
> `protected` **_items**: List\<T\>

#### _loader
Loader.
> `protected` **_loader**: [ILoader<T>](../../core/iloader)

#### _saver
Saver.
> `protected` **_saver**: [ISaver<T>](../../core/isaver)

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

> `public` Task ClearAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures the component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Create
Creates a data item.

> `public virtual` Task\<T\> CreateAsync(string correlationId, T item)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: Task\<T\> - created item


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **DeleteByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `public` Task DeleteByFilterAsync(string correlationId, IList\<Func\<T, bool\>\> matchFunctions)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **matchFunctions**: IList\<Func\<T, bool\>\> - (optional) filter function used to filter items.


#### GetCountByFilter

**Note: this method is not implemented yet**

Gets the number of items retrieved by a given filter.

This method shall be called by a public **GetCountByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `protected` GetCountByFilter(correlationId: string, filter: object): Task\<int\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **filter**: object -  id of the item to be deleted
- **returns**: Task\<int\> - number of data items that satisfy the filter.


#### GetListByFilterAsync
Gets a list of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **GetListByFilterAsync** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `public` Task\<List\<T\>\> GetListByFilterAsync(string correlationId, IList\<Func\<T, bool\>\> matchFunctions)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **matchFunctions**: IList\<Func\<T, bool\>\> - (optional) filter function used to filter items
- **returns**: Task\<List\<T\>\> - data list of filtered results.


#### GetOneRandomAsync
Gets a random item from items that match to a given filter.

This method shall be called by a public **GetOneRandomAsync** method from a child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `public` Task\<T\> GetOneRandomAsync(string correlationId, IList\<Func\<T, bool\>\> matchFunctions)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **matchFunctions**: IList\<Func\<T, bool\>\> - (optional) filter function to filter items.
- **returns**: Task\<T\> - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **getPageByFilter** method from a child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> `public` async Task<[DataPage<T>](../../../commons/data/data_page)> GetPageByFilterAsync(string correlationId, IList\<Func\<T, bool\>\> matchFunctions, [PagingParams](../../../commons/data/paging_params) paging)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **matchFunctions**: IList\<Func\<T, bool\>\> - filter function used to filter items
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **returns**: Task<[DataPage<T>](../../../commons/data/data_page)> - data page with filterd results.


#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### LoadAsync
Loads items.

> `private` Task LoadAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### SaveAsync
Saves items to an external data source using a configured saver component.

> `public` Task SaveAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### SetReferences
Sets the component's references. References must match configured dependencies.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to set.

### Examples

```cs
class MyMemoryPersistence extends MemoryPersistence<MyData>
{
    public MyData GetByName(String correlationId, String name)
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
        this.save(correlationId);
    }
    
var persistence = new MyMemoryPersistence();

persistence.Set("123", new MyData("ABC"));
Console.Out.WriteLine(persistence.getByName("123", "ABC")).toString(); // Result: { name: "ABC" }

```

