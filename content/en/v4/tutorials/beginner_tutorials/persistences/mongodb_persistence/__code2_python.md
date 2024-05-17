
```python
from pip_services4_data.data import IStringIdentifiable

class MyData(IStringIdentifiable): 
    def __init__(self, id: str = None, key: str = None, content: str = None): 
        self.id = id 
        self.key = key 
        self.content = content 
```
