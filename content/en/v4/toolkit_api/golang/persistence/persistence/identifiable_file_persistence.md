---
type: docs
title: "IdentifiableFilePersistence"
linkTitle: "IdentifiableFilePersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Abstract persistence component that stores data in flat files
    and implements a number of CRUD operations over data items with
    unique ids. 
---

**Implements:** [IdentifiableMemoryPersistence](../identifiable_memory_persistence)

### Description

The IdentifiableFilePersistence class allows you to create persistence components that store data in flat files and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../data/data/iidentifiable) interface.
- In basic scenarios child classes shall only override [GetPageByFilter](../memory_persistence/#getpagebyfilter), [GetListByFilter](../memory_persistence/#getlistbyfilter) or [DeleteByFilter](../memory_persistence/#deletebyfilter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via the self._items property and calling the **Save** method on updates.

#### Configuration parameters

- **path**: path to the file where data is stored

- **options**:
	- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages


### Constructors

#### NewIdentifiableFilePersistence
Creates a new instance of the persistence.

> NewIdentifiableFilePersistence[T any, K any](persister [*JsonFilePersister](../json_file_persister)) [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)

- **T**: [IIdentifiable[K]](../../../data/data/iidentifiable) -  any type that implemented [IIdentifiable[K]](../../../data/data/iidentifiable) interface of getting element
- **K**: any - type if id (key)
- **persister**: [*JsonFilePersister](../json_file_persister) - (optional) a persister component that loads and saves data from/to flat file.

### Fields

<span class="hide-title-link">

#### Persister
JSON file persister.
> **Persister**: [*JsonFilePersister](../json_file_persister)

</span>


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*IdentifiableFilePersistence](../identifiable_memory_persistence)) Configure(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

### Examples

```go
type MyFilePersistence struct {
	*IdentifiableFilePersistence[*MyData, string]
}

func NewMyFilePersistence(path string) (mfp *MyFilePersistence) {
	mfp = &MyFilePersistence{}
	mfp.IdentifiableFilePersistence = NewIdentifiableFilePersistence[*MyData, string](NewJsonFilePersister[*MyData](path))
	return mfp
}

func (c *MyFilePersistence) composeFilter(filter cdata.FilterParams) func(item *MyData) bool {
	if &filter == nil {
		filter = NewFilterParams()
	}
	name, _ := filter.GetAsNullableString("name")
	return func(item *MyData) bool {
		if name != "" && item.Name != name {
			return false
		}
		return true
	}
}

func (c *MyFilePersistence) GetPageByFilter(ctx context.Context, context IContext,
	filter FilterParams, paging PagingParams) (page cdata.DataPage[MyData], err error) {
	return c.GetPageByFilter(context, c.composeFilter(filter), paging, nil, nil)
}

func (c *MyData) Clone() *MyData {
	return &MyData{Id: c.Id, Name: c.Name}
}

type MyData struct {
	Id   string
	Name string
}

persistence := NewMyFilePersistence("./data/data.json")
_, err := persistence.Create(context.Background(), "123", &MyData{Id: "1", Name: "ABC"})
if err != nil {
	panic(err)
}
page, err := persistence.GetPageByFilter(context.Background(), "123", *NewFilterParamsFromTuples("Name", "ABC"), nil)
if err != nil {
	panic("Error")
}
data := page.Data
fmt.Println(data) // Result: { Id: "1", Name: "ABC" )
```


### See also
- #### [MemoryPersistence](../memory_persistence)

