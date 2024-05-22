
```python
from typing import Callable, Optional, Any 
from pip_services4_persistence.persistence import IdentifiableMemoryPersistence 
from pip_services4_data.query import FilterParams, PagingParams, DataPage 

class MyMemoryPersistence(IdentifiableMemoryPersistence): 
    def __init__(self): 
        super(MyMemoryPersistence, self).__init__() 
 
    def __compose_filter(self, filter_params: FilterParams) -> Callable[[Dummy], bool]: 
        filter_params = filter_params or FilterParams() 
        id = filter_params.get_as_nullable_string("id") 
        temp_ids = filter_params.get_as_nullable_string("ids") 
        ids = temp_ids.split(",") if temp_ids is not None else None 
        key = filter_params.get_as_nullable_string("key") 
 
        def inner(item: Dummy) -> bool: 
            if id is not None and item.id != id: 
                return False 
            if ids is not None and item.id in ids: 
                return False 
            if key is not None and item.key != key: 
                return False 
            return True 
 
        return inner 
 
    def get_page_by_filter(self, correlation_id: Optional[str], filter: Any, paging: PagingParams, sort: Any = None, 
                           select: Any = None) -> DataPage: 
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, sort, select) 
 
    def get_one_by_key(self, correlation_id, key): 
        for item in self._items: 
            if item.key == key: 
                self._logger.trace(correlation_id, "Found object by key={}", key) 
                return item 
             
        self._logger.trace(correlation_id, "Cannot find by key={}", key) 
 

persistence = MyMemoryPersistence() 

```
