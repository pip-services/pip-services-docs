
**/test/persistence/BeaconsPersistenceFixture.dart**

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
final BEACON3 = BeaconV1(
    id: '3',
    udi: '00003',
    type: BeaconTypeV1.altBeacon,
    site_id: '2',
    label: 'TestBeacon3',
    center: {
      'type': 'Point',
      'coordinates': [10.0, 10.0]
    },
    radius: 50.0);

class BeaconsPersistenceFixture {
  IBeaconsPersistence _persistence;

  BeaconsPersistenceFixture(IBeaconsPersistence persistence) {
    expect(persistence, isNotNull);
    _persistence = persistence;
  }

  void _testCreateBeacons() async {
    // Create the first beacon
    var beacon = await _persistence.create(null, BEACON1);

    expect(beacon, isNotNull);
    expect(BEACON1.udi, beacon.udi);
    expect(BEACON1.site_id, beacon.site_id);
    expect(BEACON1.type, beacon.type);
    expect(BEACON1.label, beacon.label);
    expect(beacon.center, isNotNull);

    // Create the second beacon
    beacon = await _persistence.create(null, BEACON2);
    expect(beacon, isNotNull);
    expect(BEACON2.udi, beacon.udi);
    expect(BEACON2.site_id, beacon.site_id);
    expect(BEACON2.type, beacon.type);
    expect(BEACON2.label, beacon.label);
    expect(beacon.center, isNotNull);

    // Create the third beacon
    beacon = await _persistence.create(null, BEACON3);
    expect(beacon, isNotNull);
    expect(BEACON3.udi, beacon.udi);
    expect(BEACON3.site_id, beacon.site_id);
    expect(BEACON3.type, beacon.type);
    expect(BEACON3.label, beacon.label);
    expect(beacon.center, isNotNull);
  }

  void testCrudOperations() async {
    BeaconV1 beacon1;

    // Create items
    await _testCreateBeacons();

    // Get all beacons
    var page = await _persistence.getPageByFilter(
        null, FilterParams(), PagingParams());
    expect(page, isNotNull);
    expect(page.data.length, 3);

    beacon1 = page.data[0];

    // Update the beacon
    beacon1.label = 'ABC';

    var beacon = await _persistence.update(null, beacon1);
    expect(beacon, isNotNull);
    expect(beacon1.id, beacon.id);
    expect('ABC', beacon.label);

    // Get beacon by udi
    beacon = await _persistence.getOneByUdi(null, beacon1.udi);
    expect(beacon, isNotNull);
    expect(beacon1.id, beacon.id);

    // Delete the beacon
    beacon = await _persistence.deleteById(null, beacon1.id);
    expect(beacon, isNotNull);
    expect(beacon1.id, beacon.id);

    // Try to get deleted beacon
    beacon = await _persistence.getOneById(null, beacon1.id);
    expect(beacon, isNull);
  }

  void testGetWithFilters() async {
    // Create items

    await _testCreateBeacons();

    // Filter by id
    var page = await _persistence.getPageByFilter(
        null, FilterParams.fromTuples(['id', '1']), PagingParams());
    expect(page.data.length, 1);

    // Filter by udi
    page = await _persistence.getPageByFilter(
        null, FilterParams.fromTuples(['udi', '00002']), PagingParams());
    expect(page.data.length, 1);

    // Filter by udis
    page = await _persistence.getPageByFilter(
        null, FilterParams.fromTuples(['udis', '00001,00003']), PagingParams());
    expect(page.data.length, 2);

    // Filter by site_id
    page = await _persistence.getPageByFilter(
        null, FilterParams.fromTuples(['site_id', '1']), PagingParams());
    expect(page.data.length, 2);
  }
}

```
