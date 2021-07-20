---
type: docs
no_list: true
title: "Step 3. Designing an HTTP Client"
linkTitle: "Step 3. HTTP Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-dart"
---

The standard way of communicating with a microservice is via the HTTP protocol. It allows calling microservices that work on a separate server, or in their own container. Our example microservice uses a simplified version of the HTTP protocol that is automatically generated using the Commandable pattern.    
Then, creates a new class for the Commandable REST client and an implementation for each of the microservice’s methods. This is done by calling the REST API’s methods using the methods of the parent Commandable REST client, passing the necessary set of parameters, and then processing the response’s result. Since the answer from the client is returned as JSON, some programming languages will require that you first convert it to an instance with a specific type. Be sure to remember this when writing your HTTP clients.

The client’s resulting code is listed below:

**/src/version1/BeaconsCommandableHttpClientV1.dart**

```dart
import 'dart:async';
import 'dart:convert';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';

import './IBeaconsClientV1.dart';

class BeaconsCommandableHttpClientV1 extends CommandableHttpClient
    implements IBeaconsClientV1 {
  BeaconsCommandableHttpClientV1([config]) : super('v1/beacons') {
    if (config != null) {
      configure(ConfigParams.fromValue(config));
    }
  }

  @override
  Future<DataPage<BeaconV1>> getBeacons(
      String correlationId, FilterParams filter, PagingParams paging) async {
    var result = await callCommand(
      'get_beacons',
      correlationId,
      {'filter': filter, 'paging': paging},
    );
    return DataPage<BeaconV1>.fromJson(json.decode(result), (item) {
      var beacon = BeaconV1();
      beacon.fromJson(item);
      return beacon;
    });
  }

  @override
  Future<BeaconV1> getBeaconById(String correlationId, String beaconId) async {
    var result = await callCommand(
        'get_beacon_by_id', correlationId, {'beacon_id': beaconId});
    if (result == null) return null;
    var item = BeaconV1();
    item.fromJson(json.decode(result));
    return item;
  }

  @override
  Future<BeaconV1> getBeaconByUdi(String correlationId, String udi) async {
    var result =
        await callCommand('get_beacon_by_udi', correlationId, {'udi': udi});
    if (result == null) return null;
    var item = BeaconV1();
    item.fromJson(json.decode(result));
    return item;
  }

  @override
  Future<Map<String, dynamic>> calculatePosition(
      String correlationId, String siteId, List<String> udis) async {
    var result = await callCommand(
        'calculate_position', correlationId, {'site_id': siteId, 'udis': udis});
    return json.decode(result);
  }

  @override
  Future<BeaconV1> createBeacon(String correlationId, BeaconV1 beacon) async {
    var result =
        await callCommand('create_beacon', correlationId, {'beacon': beacon});
    if (result == null) return null;
    var item = BeaconV1();
    item.fromJson(json.decode(result));
    return item;
  }

  @override
  Future<BeaconV1> updateBeacon(String correlationId, BeaconV1 beacon) async {
    var result =
        await callCommand('update_beacon', correlationId, {'beacon': beacon});
    if (result == null) return null;
    var item = BeaconV1();
    item.fromJson(json.decode(result));
    return item;
  }

  @override
  Future<BeaconV1> deleteBeaconById(
      String correlationId, String beaconId) async {
    var result = await callCommand(
        'delete_beacon_by_id', correlationId, {'beacon_id': beaconId});
    if (result == null) return null;
    var item = BeaconV1();
    item.fromJson(json.decode(result));
    return item;
  }
}

```

To be sure that our code works as intended, we should perform some functional testing. Test the Commandable HTTP REST client using the class with tests that we developed in the previous step. To do this, create an instance of the HTTP REST client and pass it as a parameter to our set of tests.
An example implementation of the tests can be found in the example’s [repository](https://github.com/pip-services-samples/client-beacons-dart/blob/master/test/clients/version1/BeaconsCommandableHttpClientV1_test.dart)

All tests should pass successfully.This finishes the development of our clients. As a result, we ended up with 2 clients: one for working from within a monolithic application, and another for working with the microservice from a different application, when utilizing a distributed architecture.

To simulate the service, let's create a test client in [Step 4. Implementing Test Memory Client.](../step4)


<span class="hide-title-link">

### [Step 4. Implementing Test Memory Client.](../step4)

</span>
