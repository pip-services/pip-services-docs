
```python
from pip_services4_data.data import IStringIdentifiable

class Dummy(IStringIdentifiable): 
    def __init__(self, id: str = None, key: str = None, content: str = None): 
        self.id = id 
        self.key = key 
        self.content = content 
        
dummy1 = Dummy('1', 'key 1', 'content 1') 
dummy2 = Dummy('id 1', 'key 2', 'content 2') 
dummy3 = Dummy(None, 'key 3', 'content 3')
```
