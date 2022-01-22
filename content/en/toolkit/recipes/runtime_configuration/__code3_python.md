
```python
from pip_services3_mysql.persistence import IdentifiableMySqlPersistence


class HelloFriendPersistence1(IdentifiableMySqlPersistence, IMyDataPersistence):

    def __init__(self):
        super(HelloFriendPersistence, self).__init__('myfriends3')

    def _define_schema(self):
        self._clear_schema()
        self._ensure_schema(
            'CREATE TABLE IF NOT EXISTS `' + self._table_name + '` (id VARCHAR(32) PRIMARY KEY, `type` VARCHAR(50), `name` TEXT)')
        #self._ensure_index(self._table_name + '_key', {'type': 1}, {'unique': True})
    
    def _compose_filter(self, filter: FilterParams):
        filter = filter or FilterParams()
        type = filter.get_as_nullable_string('type')
        name = filter.get_as_nullable_string('name')

        filter_condition = ''
        if type is not None:
            filter_condition += "`type`='" + type + "'"
        if name is not None:
            filter_condition += "`name`='" + name + "'"

        return filter_condition
    
    def get_one_random(self, correlation_id: Optional[str], filter: FilterParams) -> MyFriend:
        return super().get_one_random(correlation_id, self._compose_filter(filter)) 
```

