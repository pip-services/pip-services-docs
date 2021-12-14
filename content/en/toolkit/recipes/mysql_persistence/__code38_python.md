
```python
class MyMySqlPersistence(IdentifiableJsonMySqlPersistence):

    def __init__(self):
        super(MyMySqlPersistence, self).__init__('mydata_json')
    def _define_schema(self):
        self._clear_schema()
        self._ensure_table()
        self._ensure_index(self._table_name + '_json_key', {"(data->>'key')": 1}, {'unique': True})
```
