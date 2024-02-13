
**/test/logic/BeaconsController_test.dart**

```dart
import 'package:test/test.dart';
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

void main() {
  group('BeaconsController', () {
    BeaconsMemoryPersistence persistence;
    BeaconsController controller;

    setUp(() async {
      persistence = BeaconsMemoryPersistence();
      persistence.configure(ConfigParams());

      controller = BeaconsController();
      controller.configure(ConfigParams());

      var references = References.fromTuples([
        Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'),
        persistence,
        Descriptor('beacons', 'controller', 'default', 'default', '1.0'),
        controller
      ]);

      controller.setReferences(references);

      await persistence.open(null);
    });

    tearDown(() async {
      await persistence.close(null);
    });

    test('CRUD Operations', () async {
      BeaconV1 beacon1;

      // Create the first beacon
      var beacon = await controller.createBeacon(null, BEACON1);
      expect(beacon, isNotNull);
      expect(BEACON1.udi, beacon.udi);
      expect(BEACON1.site_id, beacon.site_id);
      expect(BEACON1.type, beacon.type);
      expect(BEACON1.label, beacon.label);
      expect(beacon.center, isNotNull);

      // Create the second beacon
      beacon = await controller.createBeacon(null, BEACON2);
      expect(beacon, isNotNull);
      expect(BEACON2.udi, beacon.udi);
      expect(BEACON2.site_id, beacon.site_id);
      expect(BEACON2.type, beacon.type);
      expect(BEACON2.label, beacon.label);
      expect(beacon.center, isNotNull);

      // Get all beacons
      var page =
          await controller.getBeacons(null, FilterParams(), PagingParams());
      expect(page, isNotNull);
      expect(page.data.length, 2);
      beacon1 = page.data[0];

      // Update the beacon
      beacon1.label = 'ABC';

      beacon = await controller.updateBeacon(null, beacon1);
      expect(beacon, isNotNull);
      expect(beacon1.id, beacon.id);
      expect('ABC', beacon.label);

      // Get beacon by udi
      beacon = await controller.getBeaconByUdi(null, beacon1.udi);
      expect(beacon, isNotNull);
      expect(beacon1.id, beacon.id);

      // Delete the beacon
      beacon = await controller.deleteBeaconById(null, beacon1.id);
      expect(beacon, isNotNull);
      expect(beacon1.id, beacon.id);

      // Try to get deleted beacon
      beacon = await controller.getBeaconById(null, beacon1.id);
      expect(beacon, isNull);
    });

    test('Calculate Positions', () async {
      // Create the first beacon
      var beacon = await controller.createBeacon(null, BEACON1);
      expect(beacon, isNotNull);
      expect(BEACON1.udi, beacon.udi);
      expect(BEACON1.site_id, beacon.site_id);
      expect(BEACON1.type, beacon.type);
      expect(BEACON1.label, beacon.label);
      expect(beacon.center, isNotNull);

      // Create the second beacon
      beacon = await controller.createBeacon(null, BEACON2);
      expect(beacon, isNotNull);
      expect(BEACON2.udi, beacon.udi);
      expect(BEACON2.site_id, beacon.site_id);
      expect(BEACON2.type, beacon.type);
      expect(BEACON2.label, beacon.label);
      expect(beacon.center, isNotNull);

      // Calculate position for one beacon
      var position = await controller.calculatePosition(null, '1', ['00001']);
      expect(position, isNotNull);
      expect('Point', position['type']);
      expect((position['coordinates'] as List).length, 2);
      expect(0, (position['coordinates'] as List)[0]);
      expect(0, (position['coordinates'] as List)[1]);

      // Calculate position for two beacons
      position =
          await controller.calculatePosition(null, '1', ['00001', '00002']);
      expect(position, isNotNull);
      expect('Point', position['type']);
      expect((position['coordinates'] as List).length, 2);
      expect(1, (position['coordinates'] as List)[0]);
      expect(1, (position['coordinates'] as List)[1]);
    });
  });
}

```
