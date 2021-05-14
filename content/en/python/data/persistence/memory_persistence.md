---
type: docs
title: "MemoryPersistence"
linkTitle: "MemoryPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Abstract persistence component that stores data in memory.


    This is the most basic persistence component that is only
    able to store data items of any type. Specific CRUD operations
    over the data items must be implemented in child classes by
    accessing <code>this._items</code> property and calling [[save]] method.


    The component supports loading and saving items from another data source.
    That allows to use it as a base class for file and other types
    of persistence components that cache all data in memory. 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable),
[IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

See also [MemoryPersistence](../memory_persistence)

#### Configuration parameters

**options**:
- **max_page_size**: Maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

**Example:**
```python
class MyMemoryPersistence(MemoryPersistence):

    def get_by_name(self, correlationId, name):
        item = self.find(name)
        ...
        return item

persistence = MyMemoryPersistence()
persistence.set("123", MyData("ABC"))

print str(persistence.get_by_name("123", "ABC")))

```

### Constructors
Creates a new instance of the persistence.

> MemoryPersistence(loader: [ILoader](../../core/iloader) = None, saver: [ISaver](../../core/isaver) = None)

- **loader**: [ILoader](../../core/iloader) - (optional) a loader to load items from external datasource.
- **saver**: [ISaver](../../core/isaver) - (optional) a saver to save items to external datasource.


### Fields

<span class="hide-title-link">

#### _lock
TODO add description
> **_lock**: threading.Lock

#### _logger
TODO add description
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _items
TODO add description
> **_items**: List[Any]

#### _loader
TODO add description
> **_loader**: [ILoader](../../core/iloader)

#### _saver
TODO add description
> **_saver**: [ISaver](../../core/isaver)

#### _opened
TODO add description
> **_opened**: bool

#### _max_page_size
TODO add description
> **_max_page_size** = 100

</span>


### Methods

#### clear
Clears component state.

> clear(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### create
Creates a data item.

> create(correlation_id: Optional[str], item: Any): dict

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: Any - an item to be created.
- **returns**: dict - a created item


#### delete_by_filter
Deletes data items that match to a given filter.
This method shall be called by a public delete_by_filter method from child class that
receives FilterParams and converts them into a filter function.

> delete_by_filter(correlation_id: Optional[str], filter: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - (optional) a filter function to filter items.


#### get_count_by_filter
Gets a number of items retrieved by a given filter.

This method shall be called by a public get_count_by_filter method from child class that
receives FilterParams and converts them into a filter function.

> get_count_by_filter(correlation_id: Optional[str], filter: Any): int

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any -  an id of the item to be deleted
- **returns**: int - a number of data items that satisfy the filter.


#### get_list_by_filter
Gets a list of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **get_list_by_filter** method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_list_by_filter(self, correlation_id: Optional[str], filter: Any, sort: Any = None, select: Any = None): List[dict]:

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - (optional) a filter function to filter items
- **sort**: Any - (optional) sorting parameters
- **select**: Any - (optional) projection parameters (not used yet)
- **returns**: List[dict] - a data list of results by filter.


#### get_one_random
Gets a random item from items that match to a given filter.

This method shall be called by a public **get_one_random** method from child class
that receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_one_random(correlation_id: Optional[str]) -> T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: Any - a random item.


#### get_page_by_filter
Gets a page of data items retrieved by a given filter and sorted according to sort parameters.

This method shall be called by a public **get_page_by_filter** method from child class that
receives [FilterParams](../../../commons/data/filter_params) and converts them into a filter function.

> get_page_by_filter(correlation_id: Optional[str], filter: Any, paging: [PagingParams](../../../commons/data/paging_params), sort: Any = None, select: Any = None): [DataPage](../../../commons/data/data_page)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **filter**: Any - a filter function to filter items
- **paging**: [PagingParams](../../../commons/data/paging_params) - (optional) paging parameters
- **sort**: Any - (optional) sorting parameters
- **select**: Any - (optional) projection parameters (not used yet)
- **returns**: [DataPage](../../../commons/data/data_page) - a data page of result by filter.


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### load
TODO add description

> load(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### save
Saves items to external data source using configured saver component.

> save(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### set_references
Sets the component references. References must match configured dependencies.

> set_references(references: [IReferences](../ireferences))

- references: [IReferences](../ireferences) - references to set.



### See also
- #### [MemoryPersistence](../memory_persistence)