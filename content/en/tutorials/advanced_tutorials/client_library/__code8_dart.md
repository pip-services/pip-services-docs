
**/test/version1/BeaconsCommandableHttpClientV1_test.dart**

```dart
import 'dart:async';

import 'package:test/test.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';
import 'package:pip_clients_beacons_dart/pip_clients_beacons_dart.dart';

import './BeaconsClientV1Fixture.dart';

var httpConfig = ConfigParams.fromTuples([
  'connection.protocol',
  'http',
  'connection.host',
  'localhost',
  'connection.port',
  3001
]);

void main() {
  group('BeaconsCommandableHttpClientV1', () {
    BeaconsMemoryPersistence persistence;
    BeaconsController controller;
    BeaconsCommandableHttpServiceV1 service;
    BeaconsCommandableHttpClientV1 client;
    BeaconsClientV1Fixture fixture;

    setUp(() async {
      persistence = BeaconsMemoryPersistence();
      persistence.configure(ConfigParams());

      controller = BeaconsController();
      controller.configure(ConfigParams());

      service = BeaconsCommandableHttpServiceV1();
      service.configure(httpConfig);

      client = BeaconsCommandableHttpClientV1();
      client.configure(httpConfig);
      var references = References.fromTuples([
        Descriptor('beacons', 'persistence', 'memory', 'default', '1.0'),
        persistence,
        Descriptor('beacons', 'controller', 'default', 'default', '1.0'),
        controller,
        Descriptor('beacons', 'service', 'http', 'default', '1.0'),
        service,
        Descriptor('beacons', 'client', 'http', 'default', '1.0'),
        client
      ]);
      controller.setReferences(references);
      service.setReferences(references);
      client.setReferences(references);
      fixture = BeaconsClientV1Fixture(client);
      await persistence.open(null);
      await service.open(null);
      await client.open(null);
    });

    tearDown(() async {
      await client.close(null);
      await service.close(null);
      await persistence.close(null);
      await Future.delayed(Duration(milliseconds: 2000));
    });

    test('CRUD Operations', () async {
      await fixture.testCrudOperations();
    });

    test('Calculate Position', () async {
      await fixture.testCalculatePosition();
    });
  });
}


```

