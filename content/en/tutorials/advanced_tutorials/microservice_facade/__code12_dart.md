
**/test/operations/version1/BeaconsRoutesV1_test.dart**

```dart
import 'dart:convert';

import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:test/test.dart';
import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';

import '../../fixtures/TestUsers.dart';
import '../../fixtures/TestReferences.dart';
import '../../fixtures/TestRestClient.dart';

BeaconV1 BEACON1 = BeaconV1(
    id: '1',
    udi: '00001',
    site_id: '1',
    type: BeaconTypeV1.altBeacon,
    label: 'TestBeacon1',
    center: {
      'type': 'Point',
      'coordinates': [0, 0]
    },
    radius: 50);

BeaconV1 BEACON2 = BeaconV1(
    id: '2',
    udi: '00002',
    site_id: '1',
    type: BeaconTypeV1.iBeacon,
    label: 'TestBeacon2',
    center: {
      'type': 'Point',
      'coordinates': [2, 2]
    },
    radius: 70);

void main() {
  group('BeaconsRoutesV1', () {
    late TestReferences references;
    late TestRestClient rest;

    setUpAll(() async {
      rest = TestRestClient();
      references = TestReferences();
      await references.open(null);
    });

    tearDownAll(() async {
      await references.close(null);
    });

    test('CRUD Operations', () async {
      BeaconV1 beacon1;

      // Create the first beacon
      var response = await rest.postAsUser(
          TestUsers.AdminUserSessionId, '/api/v1/beacons', BEACON1.toJson());

      var beacon = BeaconV1();
      beacon.fromJson(jsonDecode(response.body));

      expect(beacon, isNotNull);
      expect(BEACON1.site_id, beacon.site_id);
      expect(BEACON1.udi, beacon.udi);
      expect(BEACON1.type, beacon.type);
      expect(BEACON1.label, beacon.label);
      expect(beacon.center, isNotNull);

      // Create the second beacon
      response = await rest.postAsUser(
          TestUsers.AdminUserSessionId, '/api/v1/beacons', BEACON2.toJson());

      beacon = BeaconV1();
      beacon.fromJson(jsonDecode(response.body));

      expect(beacon, isNotNull);
      expect(BEACON2.site_id, beacon.site_id);
      expect(BEACON2.udi, beacon.udi);
      expect(BEACON2.type, beacon.type);
      expect(BEACON2.label, beacon.label);
      expect(beacon.center, isNotNull);

      // Get all beacons
      response =
          await rest.getAsUser(TestUsers.AdminUserSessionId, '/api/v1/beacons');
      var json = jsonDecode(response.body)['data'];
      var data = <BeaconV1>[];
      json.forEach((element) {
        beacon = BeaconV1();
        beacon.fromJson(element);
        data.add(beacon);
      });

      var page = DataPage<BeaconV1>(data, data.length);

      expect(page.data.length, 2);

      // Update the beacon
      beacon1 = page.data[0];
      beacon1.label = 'ABC';

      response = await rest.putAsUser(
          TestUsers.AdminUserSessionId, '/api/v1/beacons', beacon1.toJson());

      beacon = BeaconV1();
      beacon.fromJson(jsonDecode(response.body));

      expect(beacon1.id, beacon.id);
      expect('ABC', beacon.label);

      // Get beacon by udi
      response = await rest.getAsUser(
          TestUsers.User1SessionId,
          '/api/v1/beacons/udi/' +
              beacon1.udi! +
              '?user_id=' +
              TestUsers.User1Id);

      beacon = BeaconV1();
      beacon.fromJson(jsonDecode(response.body));

      expect(beacon1.id, beacon.id);
      expect(beacon1.udi, beacon.udi);

      // Calculate position for one beacon
      response = await rest
          .postAsUser(TestUsers.User1SessionId, '/api/v1/beacons/position', {
        'site_id': '1',
        'udis': ['00001']
      });

      var position = jsonDecode(response.body);

      expect('Point', position['type']);
      expect(position['coordinates'].length, 2);
      expect(0, position['coordinates'][0]);
      expect(0, position['coordinates'][1]);

      // Delete the beacon
      response = await rest.delAsUser(
          TestUsers.AdminUserSessionId, '/api/v1/beacons/' + beacon1.id!);

      beacon = BeaconV1();
      beacon.fromJson(jsonDecode(response.body));

      expect(beacon1.id, beacon.id);

      // Try to get deleted beacon
      response = await rest.getAsUser(TestUsers.User1SessionId,
          '/api/v1/beacons/' + beacon1.id! + '?user_id=' + TestUsers.User1Id);

      expect(response.body, isEmpty);
    });
  });
}

```

