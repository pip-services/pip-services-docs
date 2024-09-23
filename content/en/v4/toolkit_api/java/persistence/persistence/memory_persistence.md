---
type: docs
title: "MemoryPersistence<T>"
linkTitle: "MemoryPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-persistence-java"
description: >
    Persistence component that stores data in memory.

---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable),
[IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The MemoryPersistence class allows you to create persistence components that store data in memory.

Important points
    
- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the this._items property and calling the **save** method.
- The component supports loading and saving items from another data source. This allows to use it as a base class for file and other types of persistence components that cache all data in memory. 

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

### Constructors
Creates a new instance of the memory persistence component.

> `public` MemoryPersistence(Class<T> type, [ILoader<T>](../../read/iloader) loader, [ISaver<T>](../../write/isaver) saver)

- **loader**: [ILoader<T>](../../read/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver<T>](../../write/isaver) - (optional) saver used to save items to an external datasource.


### Fields

<span class="hide-title-link">

#### _logger
Logger.
> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new CompositeLogger()

#### _items
Items to load/save.
> `protected` List<T> **_items** = new ArrayList<>()

#### _loader
Loader.
> `protected` [ILoader<T>](../../read/iloader) **_loader**

#### _saver
Saver.
> `protected` [ISaver<T>](../../write/isaver) **_saver**

#### _opened
Boolean that indicates whether the compent is open or not.
> `protected` boolean **_opened** = false

#### _maxPageSize
Maximum amount of items per page.
> `protected` int **_maxPageSize** = 100

</span>


### Instance methods

#### clear
Clears the component's state.

> `public` void clear([IContext](../../../components/context/icontext)t context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### create
Creates a data item.

> `public` T create([IContext](../../../components/context/icontext) context, T item) throws IOException, ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: T - created item


#### deleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a public **deleteByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` void deleteByFilter([IContext](../../../components/context/icontext) context, Predicate<T> filter) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Predicate<T> - (optional) filter function used to filter items.


#### getCountByFilter
Gets the number of items retrieved by a given filter.

This method shall be called by a public **getCountByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` int getListByFilter([IContext](../../../components/context/icontext) context, Predicate<T> filter) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Predicate<T> -  (optional) a filter function to filter items
- **returns**: int - number of data items that satisfy the filter.


#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` List<T> getListByFilter(context: [IContext](../../../components/context/icontext), Predicate<T> filter, Comparator<T> sort)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Predicate<T> - (optional) filter function used to filter items
- **sort**: Comparator<T> - (optional) sorting parameters
- **returns**: List<T> - data list of filtered results.

#### getListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **getListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` List<T> getListByFilter(context: [IContext](../../../components/context/icontext), Predicate<T> filter, Comparator<T> sort,  Function<T, T> select)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Predicate<T> - (optional) filter function used to filter items
- **sort**: Comparator<T> - (optional) sorting parameters
- **select**: Function<T, T> - (optional) projection parameters (not used yet)
- **returns**: List<T> - data list of filtered results.


#### getOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a public **getOneRandom** method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> `protected` T getOneRandom([IContext](../../../components/context/icontext) context, Predicate<T> filter)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Predicate<T> - (optional) a filter function to filter items.
- **returns**: T - random item.


#### getPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **getPageByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

[DataPage<T>](../../../data/query/data_page) getPageByFilter([IContext](../../../components/context/icontext) context, Predicate<T> filter, [PagingParams](../../../data/query/paging_params) paging, Comparator<T> sort)


- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Predicate<T> - filter function used to filter items
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: Comparator<T> - (optional) sorting parameters
- **returns**: [DataPage<T>](../../../data/query/data_page) - data page with filterd results.


#### isOpen
Checks if the component is open.

> `public` boolean isOpen()

- **returns**: boolean - True if the component is open and False otherwise.


#### load
Loads items.

> `protected` void load([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### open
Opens the component.

> `public` void open(context: [IContext](../../../components/context/icontext))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### save
Saves items to an external data source using a configured saver component.

> `public` void save([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets the component's references. References must match configured dependencies.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to set.

### Examples

```java
{@code
 
  class MyMemoryPersistence extends MemoryPersistence {
    public MyData getByName(IContext context, String name) {
      MyData item = find(name); // search method
      ...
      return item;
    });
 
    public MyData set(IContext context, MyData item) {
      this._items = filter(); // filter method
      ...
      this._items.add(item);
      this.save(context);
    }
 
  }
 
  MyMemoryPersistence persistence = new MyMemoryPersistence();
 
  persistence.set("123", new MyData("ABC"));
  System.out.println(persistence.getByName("123", "ABC")).toString(); // Result: { name: "ABC" }
  }
```

### See also
- #### [MemoryPersistence](../memory_persistence)
