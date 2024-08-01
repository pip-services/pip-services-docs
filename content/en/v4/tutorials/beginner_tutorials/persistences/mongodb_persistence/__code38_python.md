
```python
from pip_services4_mongodb.persistence import IdentifiableMongoDbPersistence
from pip_services4_components.config import ConfigParams
import pymongo

class MyIdentifiableMongoDbPersistence(IdentifiableMongoDbPersistence):
    
    def __init__(self):
        super(MyIdentifiableMongoDbPersistence, self).__init__("mydata")
		
persistence = MyIdentifiableMongoDbPersistence()

from pip_services3_commons.data import IStringIdentifiable

class MyData(IStringIdentifiable): 
    def __init__(self, id: str = None, key: str = None, content: str = None): 
        self.id = id 
        self.key = key 
        self.content = content 

data1 = MyData('1', 'key 1', 'content 1') 

config = ConfigParams.from_tuples(
    'connection.host', 'localhost', 
    'connection.port', 27017, 
    'connection.database', 'mydb'
)
persistence.configure(config)

persistence.open("123")
persistence.clear("123")

def print_result(operation_name: str, res: MyData):
    print(f"==================== {operation_name} ====================")
    print(f'MyData with ID: {res.id}')
    print(f'MyData Key: {res.key}')
    print(f'MyData Content: {res.content}')

# CRUD
# 1 - Create
result = persistence.create(None, data1)
print_result('Create', result)

# 2 - Retrieve
item = persistence.get_one_by_id('123','1')
print_result('Get by id', item)

# 3 - Update
update = persistence.update(None, MyData('1', 'key 2', 'new content 2') )
print_result('Update', update)

# 4 - Delete
delete = persistence.delete_by_id(None, "1") 
print_result('Delete by id', delete)

persistence.close(None)
```
