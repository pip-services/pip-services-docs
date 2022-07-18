---
type: docs
title: "IdentifiableMemoryPersistence"
linkTitle: "IdentifiableMemoryPersistence"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Abstract persistence component that stores data in memory
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Implements:** [MemoryPersistence](../memory_persistence)
   

### Description

The IdentifiableMemoryPersistence class allows you to create persistence components that store data in memory and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement [IIdentifiable](../../../commons/data/iidentifiable).
- In basic scenarios child classes shall only override [GetPageByFilter](../memory_persistence/#getpagebyfilter), [GetListByFilter](../memory_persistence/#getlistbyfilter) or [DeleteByFilter](../memory_persistence/#deletebyfilter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via the this._items property and calling the **Save** method on updates.

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

### Constructors

#### NewIdentifiableMemoryPersistence
Creates a new instance of the identifiable file persistence component.

> NewIdentifiableMemoryPersistence(prototype reflect.Type) (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence))

- **prototype**: reflect.Type - data type of contains items


### Methods

#### Create
Creates a data item.

> (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)) Create(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (result interface{}, err error) - created item


#### DeleteById
Deletes a data item based on it's unique id.

> (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)) DeleteById(correlationId string, id interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} -  id of the item to be deleted
- **returns**: (result interface{}, err error) - deleted item.


#### DeleteByIds
Deletes multiple data items based on their unique ids.

> (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)) DeleteByIds(correlationId string, ids []interface{}) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []interface{} -  ids of data items to be deleted.
- **returns**: error - returns error if not deleted 


#### GetListByIds
Gets a list of data items retrieved by given unique ids.

> (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)) GetListByIds(correlationId string, ids []interface{}) (result []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **ids**: []interface{} -  ids of data items to be retrieved
- **returns**: (result []interface{}, err error) - data list of results by ids.


#### GetOneById
Gets a data item based on its unique id.

> (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)) GetOneById(correlationId string, id interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of data item to be retrieved.
- **returns**: (result interface{}, err error) - data item by id.


#### Set
Sets a data item. If the data item exists, it updates it; otherwise, it creates a new data item.

> (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)) Set(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be set.
- **returns**: (result interface{}, err error) - updated item


#### Update
Updates a data item.

> (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)) Update(correlationId string, item interface{}) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be updated.
- **returns**: (result interface{}, err error) - updated item.


#### UpdatePartially
Updates only a few selected fields in a data item.

> (c [*IdentifiableMemoryPersistence](../identifiable_memory_persistence)) UpdatePartially(correlationId string, id interface{}, data [*cdata.AnyValueMap](../../../commons/data/any_value_map)) (result interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of a data item to be updated.
- **data**: [*cdata.AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: (result interface{}, err error) - updated item.

### Examples

```go
type MyMemoryPersistence struct{
	IdentifiableMemoryPersistence
}

func composeFilter(filter: FilterParams) (func (item interface{}) bool ) {
    if &filter == nil {
		filter = NewFilterParams()
	}
    name := filter.getAsNullableString("Name");
    return func(item interface{}) bool {
		dummy, ok := item.(MyData)
        if (*name != "" && ok && item.Name != *name)
            return false;
        return true;
    };
}
  
func (mmp * MyMemoryPersistence) GetPageByFilter(correlationId string, filter FilterParams, paging PagingParams)(page DataPage, err error) {
    tempPage, err := c.GetPageByFilter(correlationId, composeFilter(filter), paging, nil, nil)
	dataLen := int64(len(tempPage.Data))
	data := make([]MyData, dataLen)
	for i, v := range tempPage.Data {
		data[i] = v.(MyData)
	}
	page = *NewMyDataPage(&dataLen, data)
	return page, err
}
  
persistence := NewMyMemoryPersistence();
  
item, err := persistence.Create("123", { Id: "1", Name: "ABC" })
...
page, err := persistence.GetPageByFilter("123", NewFilterParamsFromTuples("Name", "ABC"), nil)
if err != nil {
	panic("Error can't get data")
}
fmt.Prnitln(page.data)         // Result: { Id: "1", Name: "ABC" }
item, err := persistence.DeleteById("123", "1")
...

```

### See also
- #### [MemoryPersistence](../memory_persistence)
