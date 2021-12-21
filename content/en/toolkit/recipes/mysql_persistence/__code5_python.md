
```python
class MyMySqlPersistence(MySqlPersistence):

    def __init__(self):
        super(MyMySqlPersistence, self).__init__('mydata')

    def _define_schema(self):
        self._clear_schema()
        self._ensure_schema(
            'CREATE TABLE `' + self._table_name + '` (id VARCHAR(32) PRIMARY KEY, `key` VARCHAR(50), `content` TEXT)')
        self._ensure_index(self._table_name + '_key', {'key': 1}, {'unique': True})
```
