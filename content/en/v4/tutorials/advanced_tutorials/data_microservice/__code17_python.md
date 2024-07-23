
**/test/services/version1/test_BeaconsHttpServiceV1.py**

```python
import json
import time
from json import JSONDecodeError
from typing import Union

import requests
from pip_services4_components.config import ConfigParams
from pip_services4_components.refer import References, Descriptor
from pip_services4_commons.reflect import PropertyReflector
from pip_services4_components.exec import Parameters

from src.data.version1 import BeaconV1, BeaconTypeV1
from src.logic.BeaconsService import BeaconsService
from src.persistence.BeaconsMemoryPersistence import BeaconsMemoryPersistence
from src.controllers.version1.BeaconsHttpServiceV1 import BeaconsHttpControllerV1

BEACON1 = BeaconV1("1", "1", BeaconTypeV1.AltBeacon, "00001", "TestBeacon1", {"type": 'Point', "coordinates": [0, 0]},
                   50.0)
BEACON2 = BeaconV1("2", "1", BeaconTypeV1.iBeacon, "00002", "TestBeacon2", {"type": 'Point', "coordinates": [2, 2]},
                   70.0)
BEACON3 = BeaconV1("3", "2", BeaconTypeV1.AltBeacon, "00003", "TestBeacon3", {"type": 'Point', "coordinates": [10, 10]},
                   50.0)


class TestBeaconsHttpControllerV1:
    _persistence: BeaconsMemoryPersistence
    _controller: BeaconsService
    _service: BeaconsHttpControllerV1

    @classmethod
    def setup_class(cls):
        cls._persistence = BeaconsMemoryPersistence()
        cls._controller = BeaconsController()
        cls._service = BeaconsHttpServiceV1()

        cls._service.configure(ConfigParams.from_tuples(
            'connection.protocol', 'http',
            'connection.port', 3002,
            'connection.host', 'localhost'))

        references = References.from_tuples(Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'),
                                            cls._persistence,
                                            Descriptor('beacons', 'service', 'default', 'default', '1.0'),
                                            cls._service,
                                            Descriptor('beacons', 'controller', 'http', 'default', '1.0'),
                                            cls._controller)
        cls._controller.set_references(references)
        cls._service.set_references(references)

        cls._persistence.open(None)
        cls._controller.open(None)

    @classmethod
    def teardown_class(cls):
        cls._persistence.close(None)
        cls._service.close(None)

    def test_crud_operations(self):
        time.sleep(2)
        # Create the first beacon
        beacon1 = self.invoke("/v1/beacons/create_beacon",
                              Parameters.from_tuples("beacon", PropertyReflector.get_properties(BEACON1)))

        assert beacon1 is not None
        assert beacon1['id'] == BEACON1.id
        assert beacon1['site_id'] == BEACON1.site_id
        assert beacon1['udi'] == BEACON1.udi
        assert beacon1['type'] == BEACON1.type
        assert beacon1['label'] == BEACON1.label
        assert beacon1['center'] is not None

        # Create the second beacon
        beacon2 = self.invoke("/v1/beacons/create_beacon",
                              Parameters.from_tuples("beacon", PropertyReflector.get_properties(BEACON2)))

        assert beacon2 is not None
        assert beacon2['id'] == BEACON2.id
        assert beacon2['site_id'] == BEACON2.site_id
        assert beacon2['udi'] == BEACON2.udi
        assert beacon2['type'] == BEACON2.type
        assert beacon2['label'] == BEACON2.label
        assert beacon2['center'] is not None

        # Get all beacons
        page = self.invoke("/v1/beacons/get_beacons", Parameters.from_tuples("beacons"))
        assert page is not None
        assert len(page['data']) == 2

        beacon1 = page['data'][0]

        # Update the beacon
        beacon1['label'] = "ABC"
        beacon = self.invoke("/v1/beacons/update_beacon", Parameters.from_tuples("beacon", beacon1))
        assert beacon is not None
        assert beacon1['id'] == beacon['id']
        assert "ABC" == beacon['label']

        # Get beacon by udi
        beacon = self.invoke("/v1/beacons/get_beacon_by_udi", Parameters.from_tuples("udi", beacon1['udi']))
        assert beacon is not None
        assert beacon['id'] == beacon1['id']

        # Calculate position for one beacon
        position = self.invoke("/v1/beacons/calculate_position",
                               Parameters.from_tuples("site_id", '1', "udis", ['00001']))
        assert position is not None
        assert "Point" == position["type"]
        assert 2 == len(position["coordinates"])
        assert 0 == position["coordinates"][0]
        assert 0 == position["coordinates"][1]

        # Delete beacon
        self.invoke("/v1/beacons/delete_beacon_by_id", Parameters.from_tuples("id", beacon1['id']))

        # Try to get deleted beacon
        beacon = self.invoke("/v1/beacons/get_beacon_by_id", Parameters.from_tuples("id", beacon1['id']))
        assert beacon is False

    def invoke(self, route, entity) -> Union[bool, dict]:
        params = {}
        route = "http://localhost:3002" + route
        response = None
        timeout = 10000
        # Call the service
        data = json.dumps(entity)
        try:
            response = requests.request('POST', route, params=params, json=data, timeout=timeout)
            return response.json()
        except JSONDecodeError:
            if response.status_code == 404:
                return False

```
