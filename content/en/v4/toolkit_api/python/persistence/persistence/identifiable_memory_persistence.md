---
type: docs
title: "IdentifiableMemoryPersistence"
linkTitle: "IdentifiableMemoryPersistence"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-persistence-python"
description: >
    Abstract persistence component that stores data in memory
    and implements a number of CRUD operations over data items with unique ids.
    
---

**Implements:** [MemoryPersistence](../memory_persistence), [IWriter](../../write/iwriter), [IGetter](../../read/igetter), [ISetter](../../write/isetter), [iidentifiable](../../../data/data/iidentifiable)

### Description

The IdentifiableMemoryPersistence class allows you to create persistence components that store data in memory and implement a number of CRUD operations over data items with unique ids.

**Important points**

- The data items must implement [IIdentifiable](../../../data/data/iidentifiable).
- In basic scenarios child classes shall only override [get_page_by_filter](../memory_persistence/#get_page_by_filter), [get_list_by_filter](../memory_persistence/#get_list_by_filter) or [delete_by_filter](../memory_persistence/#delete_by_filter) operations with a specific filter function. All other operations can be used out of the box. 
- In complex scenarios child classes can implement additional operations by accessing cached items via the this._items property and calling the **save** method on updates.

#### Configuration parameters

**options**:
- **max_page_size**: maximum number of items returned in a single page (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) (../../../components/log/ilogger) components to pass log messages

### Constructors
Creates a new instance of the identifiable file persistence component.

> IdentifiableFilePersistence(loader: [ILoader](../../read/iloader) = None, saver: [ISaver](../../write/isaver) = None)

- **loader**: [ILoader](../../read/iloader) - (optional) loader used to load items from an external datasource.
- **saver**: [ISaver](../../write/isaver) - (optional) saver used to save items to  and external datasource.


### Instance methods

#### create
Creates a data item.

> create(context: Optional[IContext], item: T): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: T - created item


#### delete_by_id
Deletes a data item based on it's unique id.

> delete_by_id(context: Optional[IContext], id: Any): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: Any -  id of the item to be deleted
- **returns**: T - deleted item.


#### delete_by_ids
Deletes multiple data items based on their unique ids.

> delete_by_ids(context: Optional[str], ids: List[Any])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: List[Any] -  ids of data items to be deleted.


#### get_list_by_ids
Gets a list of data items retrieved by given unique ids.

> get_list_by_ids(context: Optional[IContext], ids: List[Any]): List[T]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **ids**: List[Any] -  ids of data items to be retrieved
- **returns**: List[T] - data list of results by ids.


#### get_one_by_id
Gets a data item based on its unique id.

> get_one_by_id(context: Optional[str], id: Any): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: Any - id of data item to be retrieved.
- **returns**: T - data item by id.


#### set
Sets a data item. If the data item exists, it updates it; otherwise, it creates a new data item.

> set(context: Optional[IContext], item: T): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: T - updated item


#### update
Updates a data item.

> update(context: Optional[IContext], new_item: T): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **new_item**: T - item to be updated.
- **returns**: T - updated item.


#### update_partially
Updates only a few selected fields in a data item.

> update_partially(context: Optional[IContext], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): T

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: Any - id of a data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: T - updated item.

### Examples

```python
from typing import Any, Optional, Callable 
 
from pip_services4_data.data import DataPage, PagingParams, IStringIdentifiable, FilterParams 
from pip_services4_persistence.persistence import IdentifiableMemoryPersistence 
 
 
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
 
    def get_page_by_filter(self, context: Optional[IContext], filter: Any, paging: PagingParams, sort: Any = None, 
                           select: Any = None) -> DataPage: 
        return super().get_page_by_filter(context, self.__compose_filter(filter), paging, None) 
 
 
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
