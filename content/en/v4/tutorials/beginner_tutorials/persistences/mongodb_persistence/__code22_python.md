
```python
class MyIdentifiableMongoDbPersistence(IdentifiableMongoDbPersistence):
    
    def __init__(self):
        super(MyIdentifiableMongoDbPersistence, self).__init__("mydata")
        
persistence = MyIdentifiableMongoDbPersistence()

from pip_services4_components.config import ConfigParams

config = ConfigParams.from_tuples(
    'connection.host', 'localhost', 
    'connection.port', 27017, 
    'connection.database', 'pipdatabase'
)

persistence.configure(config)
```
