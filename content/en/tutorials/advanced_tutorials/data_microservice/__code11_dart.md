
**/test/persistence/BeaconsMemoryPersistence_test.dart**

```dart
import 'package:test/test.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';

import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';
import './BeaconsPersistenceFixture.dart';

void main() {
  group('BeaconsMemoryPersistence', () {
    BeaconsMemoryPersistence persistence;
    BeaconsPersistenceFixture fixture;

    setUp(() async {
      persistence = BeaconsMemoryPersistence();
      persistence.configure(ConfigParams());

      fixture = BeaconsPersistenceFixture(persistence);

      await persistence.open(null);
    });

    tearDown(() async {
      await persistence.close(null);
    });

    test('CRUD Operations', () async {
      await fixture.testCrudOperations();
    });

    test('Get with Filters', () async {
      await fixture.testGetWithFilters();
    });
  });
}

```
