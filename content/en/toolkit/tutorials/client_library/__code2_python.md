**/src/version1/IBeaconClientV1.py**

```python
from typing import Optional, List, Any

from pip_services3_commons.data import PagingParams, DataPage, FilterParams

from src.data.version1 import BeaconV1


class IBeaconsClientV1:
    def get_beacons_by_filter(self, correlation_id: Optional[str], filter: FilterParams,
                              paging: PagingParams) -> DataPage:
        raise NotImplementedError('Method from interface definition')

    def get_beacon_by_id(self, correlation_id: Optional[str], id: str) -> dict:
        raise NotImplementedError('Method from interface definition')

    def get_beacon_by_udi(self, correlation_id: Optional[str], udi: str) -> dict:
        raise NotImplementedError('Method from interface definition')

    def calculate_position(self, correlation_id: Optional[str], site_id: str, udis: List[str]) -> Any:
        raise NotImplementedError('Method from interface definition')

    def create_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> dict:
        raise NotImplementedError('Method from interface definition')

    def update_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> dict:
        raise NotImplementedError('Method from interface definition')

    def delete_beacon_by_id(self, correlation_id: Optional[str], id: str) -> dict:
        raise NotImplementedError('Method from interface definition')

```
