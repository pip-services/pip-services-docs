---
type: docs
title: "MemoryPersistence"
linkTitle: "MemoryPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Persistence component that stores data in memory.

---

### Description

The MemoryPersistence class allows you to create persistence components that store data in memory.

Important points
    
- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the **Items** property and calling the **Save** method.
- The component supports loading and saving items from another data source. This allows to use it as a base class for file and other types of persistence components that cache all data in memory. 

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../observability/log/ilogger) components to pass log messages

### Constructors

#### NewMemoryPersistence
Creates a new instance of the memory persistence component.

> NewMemoryPersistence[T any]() [*MemoryPersistence[T]]()

### Fields

<span class="hide-title-link">

#### Logger
Logger.
> **Logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### Items
Items to load/save.
> **Items**: []interface{}

#### Loader
Loader.
> **Loader**: [ILoader](../../read/iloader)

#### Saver
Saver.
> **Saver**: [ISaver](../../write/isaver)

#### opened
Boolean that indicates whether the compent is open or not.
> **opened**: bool = false

#### MaxPageSize
Maximum amount of items per page.
> **MaxPageSize**: int

</span>


### Methods

#### Close
Closes multiple components.

To be closed components must implement [IClosable](../../../components/run/iclosable) interface.
If they don't the call to this method has no effect.

> Close(ctx context.Context, context [IContext](../../../components/context/icontext), components []any) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: []any - list of components that are to be closed.
- **returns**: error - return error if not closed

#### Clear
Clears the component's state.

> (c [*MemoryPersistence[T]]()) Clear(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - returns error if not cleaned


#### Create
Creates a data item.

> (c [*MemoryPersistence[T]]()) Create(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (result T, err error)

- **ctx**: context.Context - operation context.
- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: (result T, err error) - created item


#### DeleteByFilter
Deletes data items that match to a given filter.
This method shall be called by a func **DeleteByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence[T]]()) DeleteByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filterFunc func(T) bool) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filterFunc**: func(T) bool - (optional) filter function used to filter items.
- **returns**: error - returns error if not deleted


#### GetCountByFilter
Gets the number of items retrieved by a given filter.

This method shall be called by a func **GetCountByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence[T]]()) GetCountByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filterFunc func(T) bool) (count int64, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filterFunc**: func(T) bool -  id of the item to be deleted
- **returns**: (count int64, err error) - number of data items that satisfy the filter.


#### GetListByFilter
Gets a list of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a func **GetListByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence[T]]()) GetListByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filterFunc func(T) bool, sortFunc func(a, b T) bool, selectFunc func(T) T) (results []T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filterFunc**: func(T) bool - (optional) filter function used to filter items
- **sortFunc**: func(a, b T) bool - (optional) sorting parameters
- **selectFunc**: func(T) T - (optional) projection parameters (not used yet)
- **returns**: (results []T, err error) - data list of filtered results.


#### GetOneRandom
Gets a random item from items that match to a given filter.

This method shall be called by a func **GetOneRandom** method from a child class
that receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence[T]]()) GetOneRandom(ctx context.Context, context [IContext](../../../components/context/icontext), filterFunc func(T) bool) (result T, err error)

- **ctx**: context.Context - operation context
- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id used to trace execution through the call chain.
- **filterFunc**: func(T) bool - (optional) a filter function to filter items.
- **returns**: (result T, err error) - random item.


#### GetPageByFilter
Gets a page of data items retrieved by a given filter and sorted according to sorting parameters.

This method shall be called by a func **GetPageByFilter** method from a child class that
receives [FilterParams](../../../data/query/filter_params) and converts them into a filter function.

> (c [*MemoryPersistence[T]]()) GetPageByFilter(ctx context.Context, context [IContext](../../../components/context/icontext), filterFunc func(T) bool, paging [*cdata.PagingParams](../../../data/query/paging_params), sortFunc func(a, b T) bool, selectFunc func(T) T)) (page [*cdata.DataPage[T]](../../../data/query/data_page), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filterFunc**: func(T) bool - filter function used to filter items
- **paging**: [*cdata.PagingParams](../../../data/query/paging_params) - (optional) paging parameters
- **sortFunc**: func(a, b T) bool - (optional) sorting parameters
- **selectFunc**: func(T) T - (optional) projection parameters (not used yet)
- **returns**: (page [*cdata.DataPage[T]](../../../data/query/data_page), err error) - data page with filterd results.


#### IsOpen
Checks if the component is open.

> (c [*MemoryPersistence[T]]()) IsOpen() bool

- **returns**: bool - True if the component is open and False otherwise.


#### Load
Loads items.

> (c [*MemoryPersistence[T]]()) load(context [IContext](../../../components/context/icontext)) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - returns error if not loaded


#### Open
Opens the component.

> (c [*MemoryPersistence[T]]()) Open(ctx context.Context,  context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - returns error if not opened


#### Save
Saves items to an external data source using a configured saver component.

> (c [*MemoryPersistence[T]]()) Save(context [IContext](../../../components/context/icontext)) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - returns error if not saved


#### SetReferences
Sets the component's references. References must match configured dependencies.

> (c [*MemoryPersistence[T]]()) SetReferences(ctx context.Context, references [refer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [refer.IReferences](../../../components/refer/ireferences) - references to set.

### Examples

```go
type MyMemoryPersistence struct {
	*MemoryPersistence[MyData]
}

func (c *MyMemoryPersistence) GetByName(ctx context.Context, context IContext,
	name string) (MyData, error) {
	for _, v := range c.Items {
		if v.Name == name {
			return v
		}
	}
	var defaultValue T
	return defaultValue, nil
}

```

### See also
- #### [MemoryPersistence](../memory_persistence)

