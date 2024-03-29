
```python
from pip_services4_data.data import IStringIdentifiable

class MyFriend(IStringIdentifiable):
    def __init__(self, id: str, type: str, name: str):
        self.id = id
        self.type = type
        self.name = name
```
