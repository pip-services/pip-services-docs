
```python
from pip_services4_data.data import IIdentifiable

class MyIdentifiableObject(IIdentifiable):
    def __init__(self, id: str = None, name: str = None, value: str = None):
        self.id = id
        self.name = name
        self.value = value
```
