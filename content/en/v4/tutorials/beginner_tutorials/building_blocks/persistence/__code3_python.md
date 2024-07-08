
```python
from abc import ABC

from pip_services4_data.data import IIdentifiable
from pip_services4_postgres.persistence import IdentifiablePostgresPersistence
from pip_services4_data.query import FilterParams, PagingParams, DataPage


class MyIdentifiableObject(IIdentifiable):
    def __init__(self, id: str = None, name: str = None, value: str = None):
        self.id = id
        self.name = name
        self.value = value


class MyIdentifiablePersistence(ABC):
    def get_page_by_filter(self, correlation_id: str, filter: FilterParams, paging: PagingParams) -> DataPage:
        pass

    def create(self, correlation_id: str, item: MyIdentifiableObject) -> MyIdentifiableObject:
        pass

    def get_one_by_id(self, correlation_id: str, id: str) -> MyIdentifiableObject:
        pass

    def delete_by_id(self, correlation_id: str, id: str) -> MyIdentifiableObject:
        pass


class MyIdentifiablePostgreSqlPersistence(IdentifiablePostgresPersistence, MyIdentifiablePersistence):
    def __init__(self):
        super(MyIdentifiablePostgreSqlPersistence, self).__init__('mycollection')

    def _compose_filter(self, filter_params: FilterParams):
        filter_params = filter_params or FilterParams()
        criteria = []

        id = filter_params.get_as_string("id")
        if id is not None and id != "":
            criteria.append("id='" + id + "'")

        name = filter_params.get_as_string("name")
        if name is not None and name != "":
            criteria.append("name='" + name + "'")

        return None if len(criteria) < 0 else " AND ".join(criteria)

    def get_page_by_filter(self, correlation_id: str, filter: FilterParams, paging: PagingParams) -> DataPage:
        criteria = self._compose_filter(filter)
        return super(MyIdentifiablePostgreSqlPersistence, self).get_page_by_filter(correlation_id, criteria, paging, None, None)
```
