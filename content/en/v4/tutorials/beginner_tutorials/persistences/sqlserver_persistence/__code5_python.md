
```python
from typing import Optional, Any, List
from pip_services4_sqlserver.persistence import SqlServerPersistence
from pip_services4_components.context import IContext
from pip_services4_data.query import PagingParams, DataPage

class MySqlServerPersistence(SqlServerPersistence):
    def __init__(self):
        super(MySqlServerPersistence, self).__init__('mydata')

    def _define_schema(self):
        self._clear_schema()
        self._ensure_schema(
            'CREATE TABLE [' + self._table_name + \
            '] ([id] VARCHAR(32) PRIMARY KEY, [key] VARCHAR(50), [content] VARCHAR(MAX))')
        self._ensure_index(self._table_name + '_key', {'key': 1}, {'unique': True})

    def get_one_random(self, context: Optional[IContext], filter: Any) -> MyData:
        return super().get_one_random(context, filter)

    def get_list_by_filter(self, context: Optional[IContext], filter: Any, sort: Any, select: Any) -> List[MyData]:
        return super().get_list_by_filter(context, filter, sort, select)

    def get_count_by_filter(self, context: Optional[IContext], filter: Any) -> int:
        return super().get_count_by_filter(context, filter)

    def get_page_by_filter(self, context: Optional[IContext], filter: Any, paging: PagingParams, sort: Any, select: Any) -> DataPage: 
        return super().get_page_by_filter(context, filter, paging, sort, select)
```
