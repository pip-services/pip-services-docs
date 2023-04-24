
```python
from pip_services3_commons.data import IIdentifiable

class MyIdentifiableObject(IIdentifiable):
    def __init__(self, id: str = None, name: str = None, value: str = None):
        self.id = id
        self.name = name
        self.value = value
```