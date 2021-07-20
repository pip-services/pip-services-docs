---
type: docs
no_list: true
title: "Step 4. Implementing Mock Client"
linkTitle: "Step 4. Mock Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-dart"
---

Complex systems usually experience difficulties when it comes to writing unit tests for a logic that calls external services. These tests are supposed to run quickly and without any additional infrastructure. The standard approach to solving this problem is to replace the calls to external services with a local approximation (a.k.a. a mock). However, writing mocks takes time and doesn’t always guarantee functionality that matches the real service.

In our projects, we’ve come to the conclusion that it pays off to develop mocks alongside the real clients and test them using common tests, to guarantee that their behavior is identical. This way, all users of the microservice will receive both the client and mock from the library and will be able to start coding logic and unit tests for it without delay.

In this step we will be demonstrating how Mock clients are developed and how they can be tested using the tests we created earlier.

The test client has to implement the same interface that the other clients did. However, the client’s methods are going to contain code that only imitates the microservice’s behavior.

The code for this client is showed below:

**/src/version1/BeaconsMockClientV1.dart**

```dart
import 'dart:async';
import 'dart:convert';

import 'package:pip_services3_commons/pip_services3_commons.dart';

import '../../clients/version1/clients.dart';
import '../../data/version1/BeaconV1.dart';

class BeaconsMockClientV1 implements IBeaconsClientV1 {
  final int _maxPageSize = 100;
  List<BeaconV1> _items = <BeaconV1>[];

  BeaconsMockClientV1([List<BeaconV1> items]) {
    if (items != null) _items = json.decode(json.encode(items));
  }

  Function compose_filter(FilterParams filter) {
    filter = filter ?? FilterParams();

    var id = filter.getAsNullableString('id');
    var siteId = filter.getAsNullableString('site_id');
    var label = filter.getAsNullableString('label');
    var udi = filter.getAsNullableString('udi');
    var udis = filter.getAsObject('udis');

    if (udis is String) udis = udis.split(',');
    if (udis is! List) udis = null;

    return (item) {
      if (id != null && item.id != id) return false;
      if (siteId != null && item.site_id != siteId) return false;
      if (label != null && item.label != label) return false;
      if (udi != null && item.udi != udi) return false;
      if (udis != null && udis.indexOf(item.udi) < 0) return false;
      return true;
    };
  }

  @override
  Future<DataPage<BeaconV1>> getBeacons(
      String correlationId, FilterParams filter, PagingParams paging) {
    var filterBeacos = compose_filter(filter);
    var beacons = _items.where((el) => filterBeacos(el)).toList();

    // Extract a page
    paging = paging ?? PagingParams();
    var skip = paging.getSkip(-1);
    var take = paging.getTake(_maxPageSize);
    var total;

    if (paging.total) total = beacons.length;
    if (skip > 0) beacons = beacons.sublist(skip);

    beacons = beacons.take(take).toList();
    var page = DataPage<BeaconV1>(beacons, total);

    return Future<DataPage<BeaconV1>>.value(page);
  }

  @override
  Future<BeaconV1> getBeaconById(String correlationId, String beaconId) {
    var beacons = _items.where((x) => x.id == beaconId).toList();
    var beacon = beacons.isNotEmpty ? beacons[0] : null;
    return Future<BeaconV1>.value(beacon);
  }

  @override
  Future<BeaconV1> getBeaconByUdi(String correlationId, String udi) {
    var beacons = _items.where((x) => x.udi == udi).toList();
    var beacon = beacons.isNotEmpty ? beacons[0] : null;
    return Future<BeaconV1>.value(beacon);
  }

  @override
  Future<Map<String, dynamic>> calculatePosition(
      String correlationId, String siteId, List<String> udis) async {
    List<BeaconV1> beacons;
    Map<String, dynamic> position;

    if (udis == null || udis.isEmpty) return null;

    var page = await getBeacons(correlationId,
        FilterParams.fromTuples(['site_id', siteId, 'udis', udis]), null);
    beacons = page != null ? page.data : [];

    var lat = 0.0;
    var lng = 0.0;
    var count = 0;

    for (var beacon in beacons) {
      if (beacon.center != null &&
          beacon.center['type'] == 'Point' &&
          beacon.center['coordinates'] is List) {
        lng += beacon.center['coordinates'][0];
        lat += beacon.center['coordinates'][1];
        count += 1;
      }
      if (count > 0) {
        position = {
          'type': 'Point',
          'coordinates': [lng / count, lat / count],
        };
      }
    }

    return Future<Map<String, dynamic>>.value(position);
  }

  @override
  Future<BeaconV1> createBeacon(String correlationId, BeaconV1 beacon) {
    if (beacon == null) return null;
    beacon = beacon.clone();

    beacon.id = beacon.id ?? IdGenerator.nextLong();

    _items.add(beacon);
    return Future<BeaconV1>.value(beacon);
  }

  @override
  Future<BeaconV1> updateBeacon(String correlationId, BeaconV1 beacon) {
    var index = _items.map((x) => x.id).toList().indexOf(beacon.id);
    if (index < 0) return null;

    beacon = beacon.clone();
    _items[index] = beacon;
    return Future<BeaconV1>.value(beacon);
  }

  @override
  Future<BeaconV1> deleteBeaconById(String correlationId, String beaconId) {
    var index = _items.map((x) => x.id).toList().indexOf(beaconId);
    var item = _items[index];
    if (index < 0) return null;
    _items.removeAt(index);
    return Future<BeaconV1>.value(item);
  }
}
```

Now let’s test the client we’ve created. We’ll be using the set of tests that we developed in one of the previous steps, and adding just one test file that will bring it all together. The source of this file is presented below:

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

Create a file with the tests and run them. All the tests should pass, even though the server-side code wasn’t actually used anywhere.

This technique becomes very useful when developing microservices that bring together multiple microservices by means of their clients (e.g. a facade microservice). It allows us to perform functional testing without having to run the entire infrastructure.

To performing non-fuctional testing, we need to generate a large amount of realistic data. Users usually don’t know the entire data structure with all of its variations and exceptions. The next component we will be adding to our client library is a random data generator. This component can be used by the microservice’s users to create quality tests. The implementation is usually done in the form of static methods that either return an entire object, or just some part of its parameters. Let’s take a look at what an implementation of such a generator for the BeaconsV1 data object would look like. The generator’s code is listed below:


```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';

class RandomBeaconV1 {
  static String nextBeaconType() {
    return RandomArray.pick([
      BeaconTypeV1.altBeacon,
      BeaconTypeV1.eddyStoneUdi,
      BeaconTypeV1.unknown,
      BeaconTypeV1.iBeacon
    ]);
  }

  static Map<String, dynamic> nextBeaconCenter() {
    return {
      'type': 'Point',
      'center': {
        'coordinates': [
          RandomInteger.nextInteger(1, 1000),
          RandomInteger.nextInteger(1, 1000)
        ]
      }
    };
  }

  static BeaconV1 nextBeacon() {
    var beacon = BeaconV1();
    beacon.type = RandomBeaconV1.nextBeaconType();
    beacon.radius = RandomDouble.nextDouble(1, 1000);
    beacon.udi = RandomArray.pick(['00001', '00002', '00003', '00004']);
    beacon.center = RandomBeaconV1.nextBeaconCenter();
    return beacon;
  }
}

```

In this implementation, the ranges of generated values are statically set, but they can be passed as parameters to the methods and dynamically set as needed.
Using this instrument, we can easily generate large volumes of realistic data. This, in turn, can be used to test, for example, how fast the system can create elements in the persistence it’s using.

In the [Step 5. Testing the Client with a Remote Microservice](../step5), we’ll be taking a look at how to test our client using a microservice that is remotely deployed in a Docker container.


<span class="hide-title-link">

### [Step 5. Testing the Client with a Remote Microservice](../step5)

</span>
