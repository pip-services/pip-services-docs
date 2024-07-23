
**/test/persistence/BeaconsPersistenceFixture.py**       

```python
from pip_services4_data.query import PagingParams, FilterParams

from src.data.version1 import BeaconV1, BeaconTypeV1
from src.persistence import IBeaconsPersistence

BEACON1 = BeaconV1("1", "1", BeaconTypeV1.AltBeacon, "00001", "TestBeacon1", {"type": 'Point', "coordinates": [0, 0]}, 50)
BEACON2 = BeaconV1("2", "1", BeaconTypeV1.iBeacon, "00002", "TestBeacon2", {"type": 'Point', "coordinates": [2, 2]}, 70)
BEACON3 = BeaconV1("3", "2", BeaconTypeV1.AltBeacon, "00003", "TestBeacon3", {"type": 'Point', "coordinates": [10, 10]}, 50)

class BeaconsPersistenceFixture():
    _persistence: IBeaconsPersistence = None

    def __init__(self, persistence: IBeaconsPersistence):
        self._persistence = persistence

    def test_create_beacons(self):
        #Create the first beacon
        beacon1 = self._persistence.create(None, BEACON1)

        assert beacon1 != None
        assert beacon1.id == BEACON1.id
        assert beacon1.site_id == BEACON1.site_id
        assert beacon1.udi == BEACON1.udi
        assert beacon1.type == BEACON1.type
        assert beacon1.label == BEACON1.label
        assert beacon1.center != None

        #Create the second beacon
        beacon2 = self._persistence.create(None, BEACON2)

        assert beacon2 != None
        assert beacon2.id == BEACON2.id
        assert beacon2.site_id == BEACON2.site_id
        assert beacon2.udi == BEACON2.udi
        assert beacon2.type == BEACON2.type
        assert beacon2.label == BEACON2.label
        assert beacon2.center != None

        #Create the third beacon
        beacon3 = self._persistence.create(None, BEACON3)

        assert beacon3 != None
        assert beacon3.id == BEACON3.id
        assert beacon3.site_id == BEACON3.site_id
        assert beacon3.udi == BEACON3.udi
        assert beacon3.type == BEACON3.type
        assert beacon3.label == BEACON3.label
        assert beacon3.center != None

    def test_crud_operations(self):
        #Create 3 beacons
        self.test_create_beacons()

        #Get all beacons
        page = self._persistence.get_page_by_filter(None, FilterParams(), PagingParams())
        assert page != None
        assert len(page.data) == 3

        beacon1 = page.data[0]

        #Update the beacon
        beacon1['label'] = "ABC"
        beacon = self._persistence.update(None, beacon1)
        assert beacon != None
        assert beacon1.id == beacon.id
        assert "ABC" == beacon.label

        #Get beacon by udi
        beacon = self._persistence.get_one_by_udi(None, beacon1.udi)
        assert beacon != None
        assert beacon.id == beacon1.id

        #Delete beacon
        self._persistence.delete_by_id(None, beacon1.id)

        #Try to get deleted beacon
        beacon = self._persistence.get_one_by_id(None, beacon1.id)
        assert beacon == None

    def test_get_with_filter(self):
        #Create 3 beacons
        self.test_create_beacons()

        #Filter by id
        page = self._persistence.get_page_by_filter(None, FilterParams.from_tuples("id", "1"), PagingParams())
        assert page != None
        assert len(page.data) == 1

        #Filter by udi
        page = self._persistence.get_page_by_filter(None, FilterParams.from_tuples("udi", "00002"), PagingParams())
        assert page != None
        assert len(page.data) == 1

        #Filter by udis
        page = self._persistence.get_page_by_filter(None, FilterParams.from_tuples("udis", '00001,00003'), PagingParams())
        assert page != None
        assert len(page.data) == 2

        #Filter by udi
        page = self._persistence.get_page_by_filter(None, FilterParams.from_tuples("site_id", "1"), PagingParams())
        assert page != None
        assert len(page.data) == 2
```
