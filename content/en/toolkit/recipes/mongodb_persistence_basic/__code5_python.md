
```python
class MyMongoDbPersistence(MongoDbPersistence):
    
    def __init__(self):
        super(MyMongoDbPersistence, self).__init__("mydata2")
        
persistence = MyMongoDbPersistence()

persistence.open("123")
```
