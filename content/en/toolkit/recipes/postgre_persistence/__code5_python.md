
```python
class MyPostgresPersistence(PostgresPersistence):
    def __init__(self):
        super(MyPostgresPersistence, self).__init__('mydata')

    def _define_schema(self):
        self._clear_schema()
        self._ensure_schema('CREATE TABLE ' + self._table_name + ' (id TEXT PRIMARY KEY, key TEXT, content TEXT)')
        self._ensure_index(self._table_name + '_key', {'key': 1}, {'unique': True})

```
