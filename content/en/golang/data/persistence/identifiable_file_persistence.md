---
type: docs
title: "IdentifiableFilePersistence"
linkTitle: "IdentifiableFilePersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Abstract persistence component that stores data in flat files
    and implements a number of CRUD operations over data items with
    unique ids. 
---

**Implements:** [IdentifiableMemoryPersistence](../identifiable_memory_persistence)

### Description

The IdentifiableFilePersistence class allows you to create persistence components that store data in flat files and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement the [IIdentifiable](../../../commons/data/iidentifiable) interface.
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

> NewIdentifiableFilePersistence(prototype reflect.Type, persister [*JsonFilePersister](../json_file_persister)) [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)

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

> (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)) Configure(config [*config.ConfigParams](../../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

### Examples

```go
type MyFilePersistence  struct {
	IdentifiableFilePersistence
}

func NewMyFilePersistence(path string)(mfp *MyFilePersistence) {
	mfp = MyFilePersistence{}
	prototype := reflect.TypeOf(MyData{})
	mfp.IdentifiableFilePersistence = *NewJsonPersister(prototype,path)
	return mfp
}
  
func composeFilter(filter cdata.FilterParams)(func (item interface{})bool) {
	if &filter == nil {
		filter = NewFilterParams()
	}
    name := filter.GetAsNullableString("name");
    return func (item interface) bool {
        dummy, ok := item.(MyData)
		if *name != "" && ok && dummy.Name != *name {
			return false
		}
        return true
    }
}
  
func (c *MyFilePersistence ) GetPageByFilter(correlationId string, filter FilterParams, paging PagingParams)(pagecdata.MyDataPage, err error){
	tempPage, err := c.GetPageByFilter(correlationId, composeFilter(filter), paging, nil, nil)
	dataLen := int64(len(tempPage.Data))
	data := make([]MyData, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v.(MyData)
	}
	page = *NewMyDataPage(&dataLen, data)
	return page, err
}
  
persistence := NewMyFilePersistence("./data/data.json")
  
_, errc := persistence.Create("123", { Id: "1", Name: "ABC" })
if (errc != nil) {
	panic()
}
page, errg := persistence.GetPageByFilter("123", NewFilterParamsFromTuples("Name", "ABC"), nil)
if errg != nil {
	panic("Error")
}
fmt.Println(page.Data)         // Result: { Id: "1", Name: "ABC" )
persistence.DeleteById("123", "1")
```


### See also
- #### [MemoryPersistence](../memory_persistence)
