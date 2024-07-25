
```python
from typing import Optional, List, Any

from pip_services4_data.query import DataPage, FilterParams, PagingParams
from pip_services4_http.clients import CommandableHttpClient

from .IBeaconsClientV1 import IBeaconsClientV1
from ...data.version1 import BeaconV1


class BeaconsHttpClientV1(CommandableHttpClient, IBeaconsClientV1):
    def __init__(self):
        super(BeaconsHttpClientV1, self).__init__("v1/beacons")

    def get_beacons_by_filter(self, context: Optional[IContext], filter: FilterParams,
                              paging: PagingParams) -> DataPage:
        result = self.call_command(
            'get_beacons',
            context,
            {
                'filter': filter,
                'paging': paging
            }
        )
        return DataPage(result['data'], result['total'])

    def get_beacon_by_id(self, context: Optional[IContext], id: str) -> dict:
        return self.call_command(
            'get_beacon_by_id',
            context,
            {
                'id': id
            }
        )

    def get_beacon_by_udi(self, context: Optional[IContext], udi: str) -> dict:
        return self.call_command(
            'get_beacon_by_udi',
            context,
            {
                'udi': udi
            }
        )

    def calculate_position(self, context: Optional[IContext], site_id: str, udis: List[str]) -> Any:
        return self.call_command(
            'calculate_position',
            context,
            {
                'site_id': site_id,
                'udis': udis
            }
        )

    def create_beacon(self, context: Optional[IContext], entity: BeaconV1) -> dict:
        return self.call_command(
            'create_beacon',
            context,
            {
                'beacon': entity
            }
        )

    def update_beacon(self, context: Optional[IContext], entity: BeaconV1) -> dict:
        return self.call_command(
            'update_beacon',
            context,
            {
                'beacon': entity
            }
        )

    def delete_beacon_by_id(self, context: Optional[IContext], id: str) -> dict:
        return self.call_command(
            'delete_beacon_by_id',
            context,
            {
                'id': id
            }
        )

```
