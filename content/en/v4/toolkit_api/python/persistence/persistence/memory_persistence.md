---
type: docs
title: "MemoryPersistence"
linkTitle: "MemoryPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
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

> MemoryPersistence(loader: [ILoader](../../read/iloader) = None, saver: [ISaver](../../write/isaver) = None)

- **loader**: [ILoader](../../read/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver](../../write/isaver) - (optional) saver used to save items to an external datasource.


### Fields

<span class="hide-title-link">

#### _lock
Threading lock.
> **_lock**: threading.Lock

#### _logger
Logger.
> **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _items
Items to load/save.
> **_items**: List[Any]

#### _loader
Loader.
> **_loader**: [ILoader](../../read/iloader)

#### _saver
Saver.
> **_saver**: [ISaver](../../write/isaver)

#### _opened
Boolean that indicates whether the compent is open or not.
> **_opened**: bool

#### _max_page_size
Maximum amount of items per page.
> **_max_page_size** = 100

</span>


### Instance methods

#### clear
Clears the component's state.

> clear(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### create
Creates a data item.

> create(context: Optional[IContext], item: T): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: T - created item


#### delete_by_filter
Deletes data items that match to a given filter.
This method shall be called by a public **delete_by_filter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> delete_by_filter(context: Optional[IContext], filter: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any - (optional) filter function used to filter items.


#### get_count_by_filter
Gets the number of items retrieved by a given filter.

This method shall be called by a public **get_count_by_filter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> get_count_by_filter(context: Optional[IContext], filter: Any): int

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any -  id of the item to be deleted
- **returns**: int - number of data items that satisfy the filter.


#### get_list_by_filter
Gets a list of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **get_list_by_filter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> get_list_by_filter(context: Optional[IContext], filter: Any, sort: Any = None, select: Any = None): List[T]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any - (optional) filter function used to filter items
- **sort**: Any - (optional) sorting parameters
- **select**: Any - (optional) projection parameters (not used yet)
- **returns**: List[T] - data list of filtered results.


#### get_one_random
Gets a random item from items that match to a given filter.

This method shall be called by a public **get_one_random** method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> get_one_random(context: Optional[IContext], filter: Any = None): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any - (optional) a filter function to filter items.
- **returns**: T - random item.


#### get_page_by_filter
Gets a page of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a public **get_page_by_filter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> get_page_by_filter(context: Optional[IContext], filter: Any, paging: [PagingParams](../../../data/query/paging_params), sort: Any = None, select: Any = None): [DataPage](../../../data/query/data_page)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: Any - filter function used to filter items
- **paging**: [PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sort**: Any - (optional) sorting parameters
- **select**: Any - (optional) projection parameters (not used yet)
- **returns**: [DataPage](../../../data/query/data_page) - data page with filterd results.


#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - True if the component is open and False otherwise.


#### load
Loads items.

> load(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### open
Opens the component.

> open(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### save
Saves items to an external data source using a configured saver component.

> save(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### set_references
Sets the component's references. References must match configured dependencies.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to set.

### Examples

```python
class MyMemoryPersistence(MemoryPersistence):

    def get_by_name(self, context, name):
        item = self.find(name)
        ...
        return item

persistence = MyMemoryPersistence()
persistence.set("123", MyData("ABC"))

print str(persistence.get_by_name("123", "ABC")))

```

### See also
- #### [MemoryPersistence](../memory_persistence)
