
**/test/version1/BeaconsMockClientV1_test.dart**

```dart
import 'package:test/test.dart';
import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';
import './BeaconsClientV1Fixture.dart';

void main() {
  group('BeaconsMockClientV1', () {
    BeaconsMockClientV1 client;
    BeaconsClientV1Fixture fixture;

    setUp(() async {
      client = BeaconsMockClientV1();
      fixture = BeaconsClientV1Fixture(client);
    });

    tearDown(() async {});

    test('CRUD Operations', () async {
      await fixture.testCrudOperations();
    });

    test('Calculate Positions', () async {
      await fixture.testCalculatePosition();
    });
  });
}
```

