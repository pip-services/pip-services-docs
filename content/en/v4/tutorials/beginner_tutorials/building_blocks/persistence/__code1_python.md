
```python
from pip_services4_mongodb.persistence import MongoDbPersistence


class MyObject:
    def __init__(self, key: str = None, name: str = None):
        self.name = key
        self.content = name


class MyMongoDbPersistence(MongoDbPersistence):

    def __init__(self):
        super(MyMongoDbPersistence, self).__init__('mycollection')

    def get_by_name(self, correlation_id: str, name: str) -> MyObject:
        criteria = {'name': name}
        res = self.get_list_by_filter(correlation_id, criteria, None, None)
        return None if len(res) < 0 else res[0]

    def create_default(self, correlation_id: str, name: str) -> MyObject:
        name = name or 'unknown'
        key = name.lower().replace(" #$%^&", "_")
        item = MyObject(key, name)

        result = self._collection.insert_one(item)
        item = self._collection.find_one({'_id': result.inserted_id})

        item = self._convert_to_public(item)
        return item

    def delete_by_name(self, correlation_id: str, name: str):
        criteria = {'name': name}
        self.delete_by_filter(correlation_id, criteria)
```
