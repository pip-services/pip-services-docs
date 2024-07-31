
```python
from abc import ABC
from typing import Optional
from pip_services4_data.query import FilterParams

class IMyDataPersistence(ABC):

    # CRUD operations
    def get_one_random(self, trace_id: Optional[str], filter: FilterParams) -> MyFriend:
        raise NotImplemented()
    
    def create(self, trace_id: Optional[str], item: MyFriend) -> MyFriend:
        raise NotImplemented()
```
