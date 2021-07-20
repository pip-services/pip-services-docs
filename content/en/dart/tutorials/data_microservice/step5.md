---
type: docs
no_list: true
title: "Step 5. Implementing an HTTP service"
linkTitle: "Step 5. HTTP service" 
gitUrl: "https://github.com/pip-services-samples/service-beacons-dart"
---

The Pip.Services Toolkit has a dedicated component in the RPC module for processing external requests. To make use of this service, create a new class `BeaconsCommandableHttpServiceV1`, extending the `CommandableHttpService` class:

**/src/service/version1/BeaconsCommandableHttpServiceV1.dart**

```dart
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';

class BeaconsCommandableHttpServiceV1 extends CommandableHttpService {
  BeaconsCommandableHttpServiceV1() : super('v1/beacons') {
    dependencyResolver.put(
        'controller', Descriptor('beacons', 'controller', '*', '*', '1.0'));
  }
}


```

The `CommandableHttpService` class from the pip-services3-rpc module implements all of the basic functionality needed by the service, right out of the box. All that we need to do on our side is configure it in the child class. This is done by defining a base route to the API (e.g. 'v1/beacons') and by setting references to the controller. The rest is taken care of by the parent class and the process container: a controller will be searched for and referenced, after which the service will receive a set of commands, register it, and make those commands available through the API interface. This allows us to run commands by simply posting requests to a URL of the following format:

```
http://{ip}:{port}/v1/beacons/{command_name}
```

Even though the `BeaconsCommandableHttpServiceV1` class barely has any lines of code, there’s a large amount of code being executed in the service itself. To make sure that everything is working as it should, we should add tests for the service itself, as well as for the commands we wrote in the CommandSet. Create a file for the service’s test and paste the following code:

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

Run the npm test command and make sure that all of the tests pass successfully.

Congratulations! This step finishes off the development of our microservice! However, before we can start our service up as a fully fledged microservice, we’ll first need to compose all of its components using a process container. And that’s exactly what we’ll be doing in [Step 6. Wrapping microservice into container.](../step6)


<span class="hide-title-link">

### [Step 6. Wrapping microservice into container.](../step6)

</span>