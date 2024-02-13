
```python
from abc import ABC
from typing import Optional
from pip_services3_commons.data import FilterParams

class IMyDataPersistence(ABC):

    # CRUD operations
    def get_one_random(self, correlation_id: Optional[str], filter: FilterParams) -> MyFriend:
        raise NotImplemented()
    
    def create(self, correlation_id: Optional[str], item: MyFriend) -> MyFriend:
        raise NotImplemented()
```

