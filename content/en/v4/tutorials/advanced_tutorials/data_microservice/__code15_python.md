
**/test/logic/test_BeaconsService.py**

```python
from pip_services4_data.query import FilterParams, PagingParams
from pip_services4_components.refer import References, Descriptor

from src.data.version1 import BeaconV1, BeaconTypeV1
from src.logic.BeaconsController import BeaconsController
from src.persistence.BeaconsMemoryPersistence import BeaconsMemoryPersistence

BEACON1 = BeaconV1("1", "1", BeaconTypeV1.AltBeacon, "00001", "TestBeacon1", {"type": 'Point', "coordinates": [0, 0]},
                   50)
BEACON2 = BeaconV1("2", "1", BeaconTypeV1.iBeacon, "00002", "TestBeacon2", {"type": 'Point', "coordinates": [2, 2]}, 70)
BEACON3 = BeaconV1("3", "2", BeaconTypeV1.AltBeacon, "00003", "TestBeacon3", {"type": 'Point', "coordinates": [10, 10]},
                   50)


class TestBeaconsService():
    _persistence: BeaconsMemoryPersistence
    _service: BeaconsService

    @classmethod
    def setup_class(cls):
        cls._persistence = BeaconsMemoryPersistence()
        cls._service = BeaconsService()
        references = References.from_tuples(Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'),
                                            cls._persistence,
                                            Descriptor('beacons', 'service', 'default', 'default', '1.0'),
                                            cls._controller)

        cls._service.set_references(references)
        cls._persistence.open(None)

    @classmethod
    def teardown_class(cls):
        cls._persistence.close(None)

    def test_crud_operations(self):
        # Create the first beacon
        beacon1 = self._service.create_beacon(None, BEACON1)

        assert beacon1 is not None
        assert beacon1.id == BEACON1.id
        assert beacon1.site_id == BEACON1.site_id
        assert beacon1.udi == BEACON1.udi
        assert beacon1.type == BEACON1.type
        assert beacon1.label == BEACON1.label
        assert beacon1.center is not None

        # Create the second beacon
        beacon2 = self._service.create_beacon(None, BEACON2)

        assert beacon2 is not None
        assert beacon2.id == BEACON2.id
        assert beacon2.site_id == BEACON2.site_id
        assert beacon2.udi == BEACON2.udi
        assert beacon2.type == BEACON2.type
        assert beacon2.label == BEACON2.label
        assert beacon2.center is not None

        # Get all beacons
        page = self._service.get_beacons_by_filter(None, FilterParams(), PagingParams())
        assert page is not None
        assert len(page.data) == 2

        beacon1 = page.data[0]

        # Update the beacon
        beacon1.label = "ABC"
        beacon = self._service.update_beacon(None, beacon1)
        assert beacon is not None
        assert beacon1.id == beacon.id
        assert "ABC" == beacon.label

        # Get beacon by udi
        beacon = self._controller.get_beacon_by_udi(None, beacon1.udi)
        assert beacon is not None
        assert beacon.id == beacon1.id

        # Delete beacon
        self._service.delete_beacon_by_id(None, beacon1.id)

        # Try to get deleted beacon
        beacon = self._service.get_beacon_by_id(None, beacon1.id)
        assert beacon is None

    def test_calculate_position(self):
        # Create the first beacon
        beacon1 = self._service.create_beacon(None, BEACON1)

        assert beacon1 is not None
        assert beacon1.id == BEACON1.id
        assert beacon1.site_id == BEACON1.site_id
        assert beacon1.udi == BEACON1.udi
        assert beacon1.type == BEACON1.type
        assert beacon1.label == BEACON1.label
        assert beacon1.center is not None

        # Create the second beacon
        beacon2 = self._service.create_beacon(None, BEACON2)

        assert beacon2 is not None
        assert beacon2.id == BEACON2.id
        assert beacon2.site_id == BEACON2.site_id
        assert beacon2.udi == BEACON2.udi
        assert beacon2.type == BEACON2.type
        assert beacon2.label == BEACON2.label
        assert beacon2.center is not None

        # Calculate position for one beacon
        position = self._service.calculate_position(None, '1', ['00001'])
        assert position is not None
        assert "Point" == position["type"]
        assert 2 == len(position["coordinates"])
        
```
