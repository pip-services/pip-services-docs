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

**Important points**

- The data items must implement [IIdentifiable](../../../commons/data/iidentifiable).
- In basic scenarios child classes shall only override [get_page_by_filter](../mysql_persistence/#get_page_by_filter), [get_list_by_filter](../memory_persistence/#get_list_by_filter) or [delete_by_filter](../mysql_persistence/#delete_by_filter) operations with a specific filter function. All other operations can be used out of the box. 
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

> delete_by_id(correlation_id: Optional[str], id: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any -  id of the item to be deleted
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
from typing import Any, Optional, Callable 
 
from pip_services3_commons.data import DataPage, PagingParams, IStringIdentifiable, FilterParams 
from pip_services3_data.persistence import IdentifiableMemoryPersistence 
 
 
class MyData(IStringIdentifiable): 
    def __init__(self, id: str = None, name: str = None, content: str = None): 
        self.id = id 
        self.name = name 
        self.content = content 
 
    def get_data(self): 
        # Helper method for output data 
        return { 
            'id': self.id, 
            'name': self.name, 
            'content': self.content 
        } 
 
 
class MyMemoryPersistence(IdentifiableMemoryPersistence): 
 
    def __compose_filter(self, filter_params: FilterParams) -> Callable[[MyData], bool]: 
        filter_params = filter_params or FilterParams() 
 
        id = filter_params.get_as_nullable_string('id') 
        content = filter_params.get_as_nullable_string('content') 
        name = filter_params.get_as_nullable_string('name') 
 
        def filter_action(item: MyData) -> bool: 
            if id is not None and item.id != id: 
                return False 
            if content is not None and item.content != content: 
                return False 
            if name is not None and item.name != name: 
                return False 
            return True 
 
        return filter_action 
 
    def get_page_by_filter(self, correlation_id: Optional[str], filter: Any, paging: PagingParams, sort: Any = None, 
                           select: Any = None) -> DataPage: 
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, None) 
 
 
persistence = MyMemoryPersistence() 
item = persistence.create("123", MyData('1', 'ABC', 'Content 1')) 
mydata = persistence.get_page_by_filter("123", FilterParams.from_tuples("name", "ABC"), None, None) 
 
print(mydata.data[0].get_data()) 
 
result = persistence.delete_by_id("123", "1") 
 
if result is not None: 
    print(f'Deleted item: {result.get_data()}')

```
The result is:

{'id': '1', 'name': 'ABC', 'content': 'Content 1'}      
Deleted item: {'id': '1', 'name': 'ABC', 'content': 'Content 1'}

### See also
- #### [MemoryPersistence](../memory_persistence)
