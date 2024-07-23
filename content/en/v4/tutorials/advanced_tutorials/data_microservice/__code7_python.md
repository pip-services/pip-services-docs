
**/src/persistence/IBeaconsPersistence.py**

```python
from typing import Optional

from pip_services4_data.query import PagingParams, FilterParams, DataPage
from pip_services4_components.context import IContext

from src.data.version1 import BeaconV1


class IBeaconsPersistence:

    def get_page_by_filter(self, context: Optional[IContext], filter: FilterParams, paging: PagingParams) -> DataPage:
        raise NotImplementedError('Method from interface definition')

    def get_one_by_id(self, context: Optional[IContext], id: str) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def get_one_by_udi(self, context: Optional[IContext], udi: str) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def create(self, context: Optional[IContext], entity: BeaconV1) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def update(self, context: Optional[IContext], entity: BeaconV1) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')

    def delete_by_id(self, context: Optional[IContext], id: str) -> BeaconV1:
        raise NotImplementedError('Method from interface definition')
```
