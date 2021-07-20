---
type: docs
no_list: true
title: "Step 2. Designing a Direct Client"
linkTitle: "Step 2. Direct Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-dart"
---

Oftentimes systems that are created using a microservices architecture end up being assembled and installed as monoliths. Sometimes this is required as a transitional step, when the operations department isn’t quite yet ready to install and support such a fragmented system. It’s also common for startups, who usually have to deal with limited financial resources, to use this approach. Packing a large amount of microservices into a monolith allows teams to significantly reduce the amount of containers needed to get the system up and running. Such a system can easily be broken up into microservices in the future, when the startup is ready to support an increasing number of clients.

Direct clients are key to creating microservice-based monoliths. A direct client uses direct calls to the microservice’s controller from the shared address space, bypassing external interfaces in the process. On this step, we are going to create such a client. We’ll be placing our code in the **src/version1** folder.

First off, let's define an interface for our clients to implement. This interface should contain a list of all the methods that are provided by our microservice’s API. As a result, we get the following code:

**/src/version1/IBeaconClientV1.dart**

```dart
import 'dart:async';
import 'package:pip_services3_commons/pip_services3_commons.dart';

import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';

abstract class IBeaconsClientV1 {
  Future<DataPage<BeaconV1>> getBeacons(
      String correlationId, FilterParams filter, PagingParams paging);

  Future<BeaconV1> getBeaconById(String correlationId, String beaconId);

  Future<BeaconV1> getBeaconByUdi(String correlationId, String udi);

  Future<Map<String, dynamic>> calculatePosition(
      String correlationId, String siteId, List<String> udis);

  Future<BeaconV1> createBeacon(String correlationId, BeaconV1 beacon);

  Future<BeaconV1> updateBeacon(
    String correlationId,
    BeaconV1 beacon,
  );

  Future<BeaconV1> deleteBeaconById(String correlationId, String beaconId);
}
```

Let’s start writing our direct client. This will be a class that implements the interface we defined above, that has our controller set as a dependency in the controller, and that will call the controller’s methods when asked to. To learn more about the referencing and linking mechanisms, be sure to read [The Referenceable Recipes](../../recipes/component_references/). Ultimately, this will just be a wrapper class for the container. 
The direct client’s code is listed below:

**src/version1/BeaconsDirectClientV1.dart**

```dart
import 'dart:async';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';
import './IBeaconsClientV1.dart';


class BeaconsDirectClientV1 extends DirectClient<IBeaconsController>
    implements IBeaconsClientV1 {
  BeaconsDirectClientV1() : super() {
    dependencyResolver.put(
        'controller', Descriptor('beacons', 'controller', '*', '*', '1.0'));
  }

  @override
  Future<DataPage<BeaconV1>> getBeacons(
      String correlationId, FilterParams filter, PagingParams paging) async {
    var timing = instrument(correlationId, 'beacons.get_beacons');
    var page = await controller.getBeacons(correlationId, filter, paging);
    timing.endTiming();
    return page;
  }

  @override
  Future<BeaconV1> getBeaconById(String correlationId, String beaconId) async {
    var timing = instrument(correlationId, 'beacons.get_beacon_by_id');
    var beacon = await controller.getBeaconById(correlationId, beaconId);
    timing.endTiming();
    return beacon;
  }

  @override
  Future<BeaconV1> getBeaconByUdi(String correlationId, String udi) async {
    var timing = instrument(correlationId, 'beacons.get_beacon_by_udi');
    var beacon = await controller.getBeaconByUdi(correlationId, udi);
    timing.endTiming();
    return beacon;
  }

  @override
  Future<Map<String, dynamic>> calculatePosition(
      String correlationId, String siteId, List<String> udis) async {
    var timing = instrument(correlationId, 'beacons.calculate_position');
    var position =
        await controller.calculatePosition(correlationId, siteId, udis);
    timing.endTiming();
    return position;
  }

  @override
  Future<BeaconV1> createBeacon(String correlationId, BeaconV1 beacon) async {
    var timing = instrument(correlationId, 'beacons.create_beacon');
    var result = await controller.createBeacon(correlationId, beacon);
    timing.endTiming();
    return result;
  }

  @override
  Future<BeaconV1> updateBeacon(String correlationId, BeaconV1 beacon) async {
    var timing = instrument(correlationId, 'beacons.update_beacon');
    var result = await controller.updateBeacon(correlationId, beacon);
    timing.endTiming();
    return result;
  }

  @override
  Future<BeaconV1> deleteBeaconById(
      String correlationId, String beaconId) async {
    var timing = instrument(correlationId, 'beacons.delete_beacon_by_id');
    var beacon = await controller.deleteBeaconById(correlationId, beaconId);
    timing.endTiming();
    return beacon;
  }
}

```

Now that we’re done writing the client, we should test it. 
To be sure that our code works as intended, we need to perform some functional testing. Let’s start with creating, in a separate class, a set of tests that will be common to all our clients. This will help us simplify the process of testing multiple clients, as well as make sure that they all work the same. We’ll place the code for our tests in the **test/version1** folder. The code for this class can be found in the [repository](https://github.com/pip-services-samples/client-beacons-node/blob/master/test/version1/BeaconsClientV1Fixture.ts).


Now, let’s test the direct client. To do this, create an instance of the direct client and pass it as a parameter to our set of tests. 
An example implementation of the tests can be found in the example’s [repository](https://github.com/pip-services-samples/client-beacons-node/blob/master/test/version1/test_BeaconsDirectClientV1.tsthon)


Run the tests using the testing methods that are standard for the programming language you are using. All tests should pass successfully.This finishes the development of the Direct client.
Move on to [Step 3 to create the HTTP client](../step3).


<span class="hide-title-link">

### [Step 3 to create the HTTP client](../step3)

</span>
