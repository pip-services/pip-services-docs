
```python
from typing import Optional, List, Any

from pip_services4_data.query import PagingParams, DataPage, FilterParams
from pip_services4_components.context import IContext

#from src.data.version1 import BeaconV1


class IBeaconsClientV1:
    def get_beacons_by_filter(self, context: Optional[IContext], filter: FilterParams,
                              paging: PagingParams) -> DataPage:
        raise NotImplementedError('Method from interface definition')

    def get_beacon_by_id(self, context: Optional[IContext], id: str) -> dict:
        raise NotImplementedError('Method from interface definition')

    def get_beacon_by_udi(self, context: Optional[IContext], udi: str) -> dict:
        raise NotImplementedError('Method from interface definition')

    def calculate_position(self, context: Optional[IContext], site_id: str, udis: List[str]) -> Any:
        raise NotImplementedError('Method from interface definition')

    def create_beacon(self, context: Optional[IContext], entity: BeaconV1) -> dict:
        raise NotImplementedError('Method from interface definition')

    def update_beacon(self, context: Optional[IContext], entity: BeaconV1) -> dict:
        raise NotImplementedError('Method from interface definition')

    def delete_beacon_by_id(self, context: Optional[IContext], id: str) -> dict:
        raise NotImplementedError('Method from interface definition')

```
