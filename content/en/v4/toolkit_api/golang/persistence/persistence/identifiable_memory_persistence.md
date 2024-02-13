---
type: docs
title: "IdentifiableMemoryPersistence"
linkTitle: "IdentifiableMemoryPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Abstract persistence component that stores data in memory
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Implements:** [MemoryPersistence](../memory_persistence)
   

### Description

The IdentifiableMemoryPersistence class allows you to create persistence components that store data in memory and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement [IIdentifiable](../../../data/data/iidentifiable).
- In basic scenarios child classes shall only override [GetPageByFilter](../memory_persistence/#getpagebyfilter), [GetListByFilter](../memory_persistence/#getlistbyfilter) or [DeleteByFilter](../memory_persistence/#deletebyfilter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via the this._items property and calling the **Save** method on updates.

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../observability/log/ilogger) components to pass log messages

### Constructors

#### NewIdentifiableMemoryPersistence
Creates a new instance of the identifiable file persistence component.

> NewIdentifiableMemoryPersistence T any, K any (c [*IdentifiableMemoryPersistence[T,K]](../identifiable_memory_persistence))

- **T**: [IIdentifiable[K]](../../../data/data/iidentifiable) - any type that implemented [IIdentifiable[K]](../../../data/data/iidentifiable) interface of getting element
- **K**: any - type if id (key)
- **prototype**: reflect.Type - data type of contains items


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*IdentifiableMemoryPersistence[T,K]](../identifiable_memory_persistence)) Configure(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### Create
Creates a data item.

> (c [*IdentifiableMemoryPersistence[T,K]]](../identifiable_memory_persistence)) Create(ctx context.Context, context [IContext](../../../components/context/icontext), item any) (result any, err error)

- **ctx**: context.Contex - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: any - item to be created.
- **returns**: (result any, err error) - created item


#### DeleteById
Deletes a data item based on it's unique id.

> (c [*IdentifiableMemoryPersistence[T,K]]](../identifiable_memory_persistence)) DeleteById(ctx context.Context, context [IContext](../../../components/context/icontext), id any) (result any, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: any -  id of the item to be deleted
- **returns**: (result any, err error) - deleted item.


#### DeleteByIds
Deletes multiple data items based on their unique ids.

> (c [*IdentifiableMemoryPersistence[T,K]]](../identifiable_memory_persistence)) DeleteByIds(ctx context.Context, context [IContext](../../../components/context/icontext), ids []any) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: []any -  ids of data items to be deleted.
- **returns**: error - returns error if not deleted 

#### GetIndexById
GetIndexById get index by "Id" field

> (c *IdentifiableMemoryPersistence[T, K]) GetIndexById(id K) int

- **id**: K - id parameter of data struct
- **returns**: int - element index.

#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c [*IdentifiableMemoryPersistence[T,K]]](../identifiable_memory_persistence)) GetListByIds(ctx context.Context, context [IContext](../../../components/context/icontext), ids []any) (result []any, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: []any -  ids of data items to be retrieved
- **returns**: (result []any, err error) - data list of results by ids.


#### GetOneById
Gets a data item based on its unique id.

> (c [*IdentifiableMemoryPersistence[T,K]]](../identifiable_memory_persistence)) GetOneById(ctx context.Context, context [IContext](../../../components/context/icontext), id any) (result any, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: any - id of data item to be retrieved.
- **returns**: (result any, err error) - data item by id.


#### Set
Sets a data item. If the data item exists, it updates it; otherwise, it creates a new data item.

> (c [*IdentifiableMemoryPersistence[T,K]]](../identifiable_memory_persistence)) Set(ctx context.Context, context [IContext](../../../components/context/icontext), item any) (result any, err error)

- **ctx**: context.Context - operation contex.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: any - item to be set.
- **returns**: (result any, err error) - updated item


#### Update
Updates a data item.

> (c [*IdentifiableMemoryPersistence[T,K]]](../identifiable_memory_persistence)) Update(ctx context.Context, context [IContext](../../../components/context/icontext), item any) (result any, err error)

- **ctx**: context.Context - operation contex.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: any - item to be updated.
- **returns**: (result any, err error) - updated item.


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiableMemoryPersistence[T,K]]](../identifiable_memory_persistence)) UpdatePartially(ctx context.Context, context [IContext](../../../components/context/icontext), id any, data [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (result any, err error)

- **ctx**: context.Context - operation contex.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: any - id of a data item to be updated.
- **data**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (result any, err error) - updated item.

### Examples

```go
type MyMemoryPersistence struct {
	*IdentifiableMemoryPersistence[*MyData, string]
}

func NewMyMemoryPersistence() *MyMemoryPersistence {
	return &MyMemoryPersistence{IdentifiableMemoryPersistence: NewIdentifiableMemoryPersistence[*MyData, string]()}
}
func (c *MyMemoryPersistence) composeFilter(filter cdata.FilterParams) func(item *MyData) bool {
	name, _ := filter.GetAsNullableString("Name")
	return func(item *MyData) bool {
		if name != "" && item.Name != name {
			return false
		}
		return true
	}
}

func (c *MyMemoryPersistence) GetPageByFilter(ctx context.Context, context IContext,
	filter FilterParams, paging PagingParams) (page cdata.DataPage[*MyData], err error) {
	return c.GetPageByFilter(ctx, context, c.composeFilter(filter), paging, nil, nil)
}

func f() {
	persistence := NewMyMemoryPersistence()

	item, err := persistence.Create(context.Background(), "123", &MyData{Id: "1", Name: "ABC"})
	// ...
	page, err := persistence.GetPageByFilter(context.Background(), *NewFilterParamsFromTuples("Name", "ABC"), nil)
	if err != nil {
		panic("Error can't get data")
	}
	data := page.Data
	fmt.Println(data) // Result: { Id: "1", Name: "ABC" }
	item, err = persistence.DeleteById(context.Background(), "123", "1")
	// ...
}

func (c *MyData) Clone() *MyData {
	return &MyData{Id: c.Id, Name: c.Name}
}

type MyData struct {
	Id   string
	Name string
}
```

### See also
- #### [MemoryPersistence](../memory_persistence)

