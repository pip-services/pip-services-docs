
```python
from copy import deepcopy
from typing import Optional, Any

import pymongo
from pip_services4_components.config import ConfigParams
from pip_services4_data.data import IStringIdentifiable 
from pip_services4_data.query import FilterParams
from pip_services4_mongodb.persistence import MongoDbPersistence


class MyData(IStringIdentifiable):
    def __init__(self, id: str = None, key: str = None, content: str = None):
        self.id = id
        self.key = key
        self.content = content

class MyMongoDbPersistence(MongoDbPersistence):

    def __init__(self):
        super(MyMongoDbPersistence, self).__init__("mydata")

    def _compose_filter(self, filter: FilterParams):
        filter = filter or FilterParams()
        key = filter.get_as_nullable_string('key')

        filter_condition = {}

        if key is not None:
            filter_condition['key'] = key
    
        return filter_condition
    
    def get_list_by_filter(self, context: Optional[IContext], filter: FilterParams, sort: SortParams) -> List[MyData]:

         return super().get_list_by_filter(context, self._compose_filter(filter), None, None)
        
    def update(self, context: Optional[IContext], item: Any) -> Any:
        if item is None or item.id is None:
            return
        new_item = deepcopy(item)
        new_item = self._convert_from_public(new_item)
        _id = item.id

        result = self._collection.find_one_and_update(
            {'_id': _id}, {'$set': new_item},
            return_document=pymongo.ReturnDocument.AFTER
        )

        new_item = self._convert_to_public(result)

        return new_item

    def delete_by_filter(self, context: Optional[IContext], filter: FilterParams):
        super().delete_by_filter(context, self._compose_filter(filter))


data1 = MyData(None, 'key 1', 'content 1')

persistence = MyMongoDbPersistence()

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
    print(f'MyData with Id: {res.id}')
    print(f'MyData Key: {res.key}')
    print(f'MyData Content: {res.content}')


# CRUD
# 1 - Create
result = persistence.create(None, data1)
print_result('Create', result)

# 2 - Retrieve
items = persistence.get_list_by_filter('123', FilterParams.from_tuples('key', 'key 1'), None)  
print_result('Get by id', items[0])

# 3 - Update
items[0].content = 'new content 2'
items[0].key = 'key 2'

update = persistence.update(None, items[0])  
print_result('Update', update)

# 4 - Delete
persistence.delete_by_filter(None, FilterParams.from_tuples('key', 'key 1')) 

persistence.close("123")

```
