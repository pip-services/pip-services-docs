
```python
from pip_services4_postgres.persistence import IdentifiablePostgresPersistence

class HelloFriendPersistence2(IdentifiablePostgresPersistence, IMyDataPersistence):

    def __init__(self):
        super().__init__('myfriends3')

    def _define_schema(self):
        self._clear_schema()
        self._ensure_schema('CREATE TABLE IF NOT EXISTS' + self._table_name + ' (id TEXT PRIMARY KEY, type TEXT, name TEXT)')

    def _compose_filter(self, filter: FilterParams):
        filter = filter or FilterParams()
        key = filter.get_as_nullable_string('key')
        content = filter.get_as_nullable_string('content')

        filter_condition = ''
        if key is not None:
            filter_condition += "key='" + key + "'"
        if content is not None:
            filter_condition += "content='" + content + "'"

        return filter_condition

    def get_one_random(self, trace_id: Optional[str], filter: FilterParams) -> MyFriend:
        return super().get_one_random(trace_id, self._compose_filter(filter))
```
