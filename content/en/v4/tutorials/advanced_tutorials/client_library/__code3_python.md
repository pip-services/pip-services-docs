
```python
from typing import Optional, List, Any

from pip_services4_components.context import IContext
from pip_services4_data.query import PagingParams, FilterParams
from pip_services4_components.refer import Descriptor
from pip_services4_rpc.clients import DirectClient

from .IBeaconsClientV1 import IBeaconsClientV1
from ...data.version1 import BeaconV1


class BeaconsDirectClientV1(DirectClient, IBeaconsClientV1):
    def __init__(self):
        super(BeaconsDirectClientV1, self).__init__()
        self._dependency_resolver.put('service', Descriptor('beacons', 'service', '*', '*', '1.0'))

    def get_beacons_by_filter(self, context: Optional[IContext], filter: FilterParams, paging: PagingParams) -> dict:
        timing = self._instrument(context, 'beacons.get_beacons')
        result = self._service.get_beacons_by_filter(context, filter, paging)
        timing.end_timing()
        return result

    def get_beacon_by_id(self, context: Optional[IContext], id: str) -> dict:
        timing = self._instrument(context, 'beacons.get_beacon_by_id')
        result = self._service.get_beacon_by_id(context, id)
        timing.end_timing()
        return result

    def get_beacon_by_udi(self, context: Optional[IContext], udi: str) -> dict:
        timing = self._instrument(context, 'beacons.get_beacon_by_udi')
        result = self._service.get_beacon_by_udi(context, udi)
        timing.end_timing()
        return result

    def calculate_position(self, context: Optional[IContext], site_id: str, udis: List[str]) -> Any:
        timing = self._instrument(context, 'beacons.calculate_position')
        result = self._service.calculate_position(context, site_id, udis)
        timing.end_timing()
        return result

    def create_beacon(self, context: Optional[IContext], entity: BeaconV1) -> dict:
        timing = self._instrument(context, 'beacons.create_beacon')
        result = self._service.create_beacon(context, entity)
        timing.end_timing()
        return result

    def update_beacon(self, context: Optional[IContext], entity: BeaconV1) -> dict:
        timing = self._instrument(context, 'beacons.update_beacon')
        result = self._service.update_beacon(context, entity)
        timing.end_timing()
        return result

    def delete_beacon_by_id(self, context: Optional[IContext], id: str) -> dict:
        timing = self._instrument(context, 'beacons.delete_beacon_by_id')
        result = self._service.delete_beacon_by_id(context, id)
        timing.end_timing()
        return result

```
