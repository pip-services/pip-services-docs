
```python
from pip_services3_commons.data import IStringIdentifiable

class MyFriend(IStringIdentifiable):
    def __init__(self, id, type, name):
        self.id = id
        self.type = type
        self.name = name
```
