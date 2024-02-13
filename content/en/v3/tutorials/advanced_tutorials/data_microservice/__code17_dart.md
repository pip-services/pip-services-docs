
**/test/services/version1/BeaconsCommandableHttpServiceV1_test.dart**

```dart
import 'dart:convert';
import 'package:test/test.dart';
import 'package:http/http.dart' as http;
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';

final BEACON1 = BeaconV1(
    id: '1',
    udi: '00001',
    type: BeaconTypeV1.altBeacon,
    site_id: '1',
    label: 'TestBeacon1',
    center: {
      'type': 'Point',
      'coordinates': [0.0, 0.0]
    },
    radius: 50.0);
final BEACON2 = BeaconV1(
    id: '2',
    udi: '00002',
    type: BeaconTypeV1.iBeacon,
    site_id: '1',
    label: 'TestBeacon2',
    center: {
      'type': 'Point',
      'coordinates': [2.0, 2.0]
    },
    radius: 70.0);

var httpConfig = ConfigParams.fromTuples([
  'connection.protocol',
  'http',
  'connection.host',
  'localhost',
  'connection.port',
  3000
]);

void main() {
  group('BeaconsCommandableHttpServiceV1', () {
    BeaconsMemoryPersistence persistence;
    BeaconsController controller;
    BeaconsCommandableHttpServiceV1 service;
    http.Client rest;
    String url;

    setUp(() async {
      url = 'http://localhost:3000';
      rest = http.Client();

      persistence = BeaconsMemoryPersistence();
      persistence.configure(ConfigParams());

      controller = BeaconsController();
      controller.configure(ConfigParams());

      service = BeaconsCommandableHttpServiceV1();
      service.configure(httpConfig);

      var references = References.fromTuples([
        Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'),
        persistence,
        Descriptor('beacons', 'controller', 'default', 'default', '1.0'),
        controller,
        Descriptor('beacons', 'service', 'http', 'default', '1.0'),
        service
      ]);

      controller.setReferences(references);
      service.setReferences(references);

      await persistence.open(null);
      await service.open(null);
    });

    tearDown(() async {
      await service.close(null);
      await persistence.close(null);
    });

    test('CRUD Operations', () async {
      BeaconV1 beacon1;

      // Create the first beacon
      var resp = await rest.post(url + '/v1/beacons/create_beacon',
          headers: {'Content-Type': 'application/json'},
          body: json.encode({'beacon': BEACON1}));
      var beacon = BeaconV1();
      beacon.fromJson(json.decode(resp.body));
      expect(beacon, isNotNull);
      expect(BEACON1.udi, beacon.udi);
      expect(BEACON1.site_id, beacon.site_id);
      expect(BEACON1.type, beacon.type);
      expect(BEACON1.label, beacon.label);
      expect(beacon.center, isNotNull);

      // Create the second beacon
      resp = await rest.post(url + '/v1/beacons/create_beacon',
          headers: {'Content-Type': 'application/json'},
          body: json.encode({'beacon': BEACON2}));
      beacon = BeaconV1();
      beacon.fromJson(json.decode(resp.body));
      expect(beacon, isNotNull);
      expect(BEACON2.udi, beacon.udi);
      expect(BEACON2.site_id, beacon.site_id);
      expect(BEACON2.type, beacon.type);
      expect(BEACON2.label, beacon.label);
      expect(beacon.center, isNotNull);

      // Get all beacons
      resp = await rest.post(url + '/v1/beacons/get_beacons',
          headers: {'Content-Type': 'application/json'},
          body: json
              .encode({'filter': FilterParams(), 'paging': PagingParams()}));
      var page = DataPage<BeaconV1>.fromJson(json.decode(resp.body), (item) {
        var beacon = BeaconV1();
        beacon.fromJson(item);
        return beacon;
      });
      expect(page, isNotNull);
      expect(page.data.length, 2);

      beacon1 = page.data[0];

      // Update the beacon
      beacon1.label = 'ABC';

      resp = await rest.post(url + '/v1/beacons/update_beacon',
          headers: {'Content-Type': 'application/json'},
          body: json.encode({'beacon': beacon1}));
      beacon = BeaconV1();
      beacon.fromJson(json.decode(resp.body));
      expect(beacon, isNotNull);
      expect(beacon1.id, beacon.id);
      expect('ABC', beacon.label);

      // Get beacon by udi
      resp = await rest.post(url + '/v1/beacons/get_beacon_by_udi',
          headers: {'Content-Type': 'application/json'},
          body: json.encode({'udi': beacon1.udi}));
      beacon = BeaconV1();
      beacon.fromJson(json.decode(resp.body));
      expect(beacon, isNotNull);
      expect(beacon1.id, beacon.id);

      // Calculate position for one beacon
      resp = await rest.post(url + '/v1/beacons/calculate_position',
          headers: {'Content-Type': 'application/json'},
          body: json.encode({
            'site_id': '1',
            'udis': ['00001']
          }));
      var position = json.decode(resp.body);

      expect(position, isNotNull);
      expect('Point', position['type']);
      expect(position['coordinates'].length, 2);
      expect(0, position['coordinates'][0]);
      expect(0, position['coordinates'][1]);

      // Delete the beacon
      resp = await rest.post(url + '/v1/beacons/delete_beacon_by_id',
          headers: {'Content-Type': 'application/json'},
          body: json.encode({'beacon_id': beacon1.id}));
      beacon = BeaconV1();
      beacon.fromJson(json.decode(resp.body));
      expect(beacon, isNotNull);
      expect(beacon1.id, beacon.id);

      // Try to get deleted beacon
      resp = await rest.post(url + '/v1/beacons/get_beacon_by_id',
          headers: {'Content-Type': 'application/json'},
          body: json.encode({'beacon_id': beacon1.id}));
      expect(resp.body, isEmpty);
    });
  });
}
```

Run the `pub run test` command and make sure that all of the tests pass successfully.
