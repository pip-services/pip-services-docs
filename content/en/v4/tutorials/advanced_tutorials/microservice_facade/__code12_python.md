
**/test/operations/version1/test_BeaconsRoutesV1.py**

```python
# -*- coding: utf-8 -*-

from pip_services4_commons.convert import JsonConverter, TypeCode
from pip_services4_components.refer import Descriptor

from pip_facades_sample_python.clients.version1.BeaconV1 import BeaconV1
from pip_facades_sample_python.clients.version1.BeaconsMemoryClientV1 import BeaconsMemoryClientV1
from test.fixtures.ReferencesTest import ReferencesTest
from test.fixtures.RestClientTest import RestClientTest
from test.fixtures.TestUsers import TestUsers

BEACON1 = BeaconV1(id="1",
                   site_id="1",
                   udi="00001",
                   label="TestBeacon1",
                   center={"type": 'Point', "coordinates": [0, 0]},
                   radius=50)

BEACON2 = BeaconV1(id="2",
                   site_id="1",
                   udi="00002",
                   label="TestBeacon2",
                   center={"type": 'Point', "coordinates": [2, 2]},
                   radius=70)

BEACON3 = BeaconV1(id="3",
                   site_id="2",
                   udi="00003",
                   label="TestBeacon3",
                   center={"type": 'Point', "coordinates": [10, 10]},
                   radius=50)


class TestBeaconsOperationsV1:
    references: ReferencesTest = None
    rest: RestClientTest = None

    @classmethod
    def setup_class(cls):
        cls.rest = RestClientTest()
        cls.references = ReferencesTest()
        cls.references.put(Descriptor('beacons', 'client', 'memory', 'default', '1.0'),
                           BeaconsMemoryClientV1())

        cls.references.open(None)

    @classmethod
    def teardown_class(cls):
        cls.references.close(None)

    def test_beacons_operations(self):
        # Create one beacon
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + BEACON1.site_id + '/beacons',
                                          JsonConverter.to_json(BEACON1))

        created_beacon = JsonConverter.from_json(TypeCode.Map, response.content)
        beacon1 = created_beacon

        assert response.status_code < 300
        assert BEACON1.udi == created_beacon['udi']
        assert BEACON1.id == created_beacon['id']
        assert BEACON1.site_id == created_beacon['site_id']
        assert created_beacon['center'] is not None

        # Create the second beacon
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + BEACON2.site_id + '/beacons',
                                          JsonConverter.to_json(BEACON2))
        assert response.status_code < 300

        created_beacon = JsonConverter.from_json(TypeCode.Map, response.content)
        assert BEACON2.udi == created_beacon['udi']
        assert BEACON2.id == created_beacon['id']
        assert BEACON2.site_id == created_beacon['site_id']
        assert created_beacon['center'] is not None

        # Create yet another beacon
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + BEACON3.site_id + '/beacons',
                                          JsonConverter.to_json(BEACON3))
        assert response.status_code < 300

        created_beacon = JsonConverter.from_json(TypeCode.Map, response.content)
        assert BEACON3.udi == created_beacon['udi']
        assert BEACON3.id == created_beacon['id']
        assert BEACON3.site_id == created_beacon['site_id']
        assert created_beacon['center'] is not None

        # Get all beacons
        response = self.rest.get_as_user(TestUsers.AdminUserSessionId,
                                         '/api/v1/sites/' + BEACON1.site_id + '/beacons', )
        beacons = JsonConverter.from_json(TypeCode.Map, response.content)
        assert len(beacons['data']) == 2

        # Calculate position for one beacon
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + BEACON1.site_id + '/beacons/calculate_position', {
                                              'site_id': BEACON1.site_id,
                                              'udis': [BEACON1.udi]
                                          })

        calc_position = JsonConverter.from_json(TypeCode.Map, response.content)

        assert response.status_code < 300
        assert calc_position['type'] == 'Point'
        assert len(calc_position['coordinates']) == 2

        # Validate beacon udi
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + beacon1['site_id'] + '/beacons/validate_udi?udi=' +
                                          beacon1['udi'],
                                          {}, )
        assert JsonConverter.from_json(TypeCode.Map, response.content)['id'] == beacon1['id']

        # Update the beacon
        BEACON1.label = 'ABC'
        response = self.rest.put_as_user(TestUsers.AdminUserSessionId,
                                         '/api/v1/sites/' + beacon1['site_id'] + '/beacons/' + beacon1['id'],
                                         JsonConverter.to_json(BEACON1))

        updated_beacon = JsonConverter.from_json(TypeCode.Map, response.content)
        beacon1 = updated_beacon

        assert response.status_code < 300
        assert BEACON1.id == updated_beacon['id']
        assert updated_beacon['label'] == 'ABC'

        # Delete the beacon
        response = self.rest.delete_as_user(TestUsers.AdminUserSessionId,
                                            '/api/v1/sites/' + beacon1['site_id'] + '/beacons/' + beacon1['id'])
        deleted_result = JsonConverter.from_json(TypeCode.Map, response.content)
        assert deleted_result['id'] == BEACON1.id

        # Try to get deleted beacon
        response = self.rest.get_as_user(TestUsers.AdminUserSessionId,
                                         '/api/v1/sites/' + beacon1['site_id'] + '/beacons/' + beacon1['id'], )
        assert response.status_code == 204
```
