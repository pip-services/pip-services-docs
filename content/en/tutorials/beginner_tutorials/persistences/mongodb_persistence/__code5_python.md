
```python
class MyMongoDbPersistence(MongoDbPersistence):
    
    def __init__(self):
        super(MyMongoDbPersistence, self).__init__("mydata")
        
persistence = MyMongoDbPersistence()

from pip_services3_commons.config import ConfigParams

config = ConfigParams.from_tuples(
    'connection.host', 'localhost', 
    'connection.port', 27017, 
    'connection.database', 'pipdatabase'
)

persistence.configure(config)

persistence.open("123")
```
