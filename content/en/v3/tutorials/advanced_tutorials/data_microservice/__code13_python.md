
**/src/logic/BeaconsController.py**

```python
from typing import List, Any, Optional

from pip_services3_commons.commands import ICommandable, CommandSet
from pip_services3_commons.config import IConfigurable, ConfigParams
from pip_services3_commons.data import FilterParams, PagingParams, DataPage
from pip_services3_commons.refer import IReferenceable, Descriptor, IReferences

from ..data.version1 import BeaconV1
from ..logic.BeaconsCommandSet import BeaconsCommandSet
from ..logic.IBeaconsController import IBeaconsController
from ..persistence import IBeaconsPersistence


class BeaconsController(IBeaconsController, IConfigurable, IReferenceable, ICommandable):

    def __init__(self):
        self.__persistence: IBeaconsPersistence = None
        self.__command_set: BeaconsCommandSet = None

    def configure(self, config: ConfigParams):
        pass

    def get_command_set(self) -> CommandSet:
        if self.__command_set is None:
            self.__command_set = BeaconsCommandSet(self)
        return self.__command_set

    def set_references(self, references: IReferences):
        self.__persistence = references.get_one_required(Descriptor("beacons", "persistence", "*", "*", "1.0"))

    def get_beacons_by_filter(self, correlation_id: Optional[str], filter: FilterParams, paging: PagingParams) -> DataPage:
        return self.__persistence.get_page_by_filter(correlation_id, filter, paging)

    def get_beacon_by_id(self, correlation_id: Optional[str], id: str) -> BeaconV1:
        return self.__persistence.get_one_by_id(correlation_id, id)

    def get_beacon_by_udi(self, correlation_id: Optional[str], udi: str) -> BeaconV1:
        return self.__persistence.get_one_by_udi(correlation_id, udi)

    def calculate_position(self, correlation_id: Optional[str], site_id: str, udis: List[str]) -> Any:
        if udis is None or len(udis) == 0:
            return None

        result = self.__persistence.get_page_by_filter(correlation_id,
                                                       FilterParams.from_tuples("site_id", site_id, "udis", udis), None)
        beacons = result.data

        lat = 0
        lng = 0
        count = 0
        for beacon in beacons:
            if beacon.center is not None and beacon.center['type'] == "Point" and len(
                    beacon.center['coordinates']) > 1:
                lng = lng + beacon.center['coordinates'][0]
                lat = lat + beacon.center['coordinates'][1]
                count = count + 1

        if count == 0:
            return None

        position = {"type": 'Point', "coordinates": [lng / count, lat / count]}
        return position

    def create_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> BeaconV1:
        return self.__persistence.create(correlation_id, entity)

    def update_beacon(self, correlation_id: Optional[str], entity: BeaconV1) -> BeaconV1:
        return self.__persistence.update(correlation_id, entity)

    def delete_beacon_by_id(self, correlation_id: Optional[str], id: str) -> BeaconV1:
        return self.__persistence.delete_by_id(correlation_id, id)

```
