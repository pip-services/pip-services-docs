---
type: docs
title: "IdentifiableMemoryPersistence"
linkTitle: "IdentifiableMemoryPersistence"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Abstract persistence component that stores data in memory
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Implements:** [MemoryPersistence](memory_persistence), [IWriter](../../core/iwriter), [IGetter](../../core/igetter), [ISetter](../../core/isetter), [iidentifiable](../../../commons/data/iidentifiable)

### Description

The IdentifiableMemoryPersistence class allows you to create persistence components that store data in memory and implement a number of CRUD operations over data items with unique ids.

Important points

- The data items must implement [IIdentifiable](../../../commons/data/iidentifiable).
- In basic scenarios child classes shall only override **get_page_by_filter**, **get_list_by_filter** or **delete_by_filter** operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via the this._items property and calling the **save** method on updates.

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

### Constructors
Creates a new instance of the identifiable file persistence component.

> IdentifiableFilePersistence(loader: [ILoader](../../core/iloader) = None, saver: [ISaver](../../core/isaver) = None)

- **loader**: [ILoader](../../core/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver](../../core/isaver) - (optional) saver used to save items to  and external datasource.


### Instance methods

#### create
Creates a data item.

> create(correlation_id: Optional[str], item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: T - created item


#### delete_by_id
Deletes a data item based on it's unique id.

> delete_by_id(correlation_id: Optional[str], id: T): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: T -  id of the item to be deleted
- **returns**: T - deleted item.


#### delete_by_ids
Deletes multiple data items based on their unique ids.

> delete_by_ids(correlation_id: Optional[str], ids: List[Any])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **ids**: List[Any] -  ids of data items to be deleted.


#### get_list_by_ids
Gets a list of data items retrieved by given unique ids.

> get_list_by_ids(correlation_id: Optional[str], ids: List[Any]): List[T]

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **ids**: List[Any] -  ids of data items to be retrieved
- **returns**: List[T] - data list of results by ids.


#### get_one_by_id
Gets a data item based on its unique id.

> get_one_by_id(correlation_id: Optional[str], id: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any - id of data item to be retrieved.
- **returns**: T - data item by id.


#### set
Sets a data item. If the data item exists, it updates it; otherwise, it creates a new data item.

> set(correlation_id: Optional[str], item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: T - updated item


#### update
Updates a data item.

> update(correlation_id: Optional[str], new_item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **new_item**: T - item to be updated.
- **returns**: T - updated item.


#### update_partially
Updates only a few selected fields in a data item.

> update_partially(correlation_id: Optional[str], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any - id of a data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: T - updated item.

### Examples

```python
class MyMemoryPersistence(IdentifiableMemoryPersistence):

    def get_page_by_filter(self, correlationId, filter, paging):
        super().get_page_by_filter(correlationId, filter, paging, None)
        
    persistence = MyMemoryPersistence("./data/data.json")
    item = persistence.create("123", MyData("1", "ABC"))
    mydata = persistence.get_page_by_filter("123", FilterParams.from_tuples("name", "ABC"), None, None)

    print str(mydata.get_data())
    persistence.delete_by_id("123", "1")

```

### See also
- #### [MemoryPersistence](../memory_persistence)
