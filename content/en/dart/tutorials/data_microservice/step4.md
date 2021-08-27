---
type: docs
no_list: true
title: "Step 5. Implementing a controller"
linkTitle: "Step 5. Controller"
gitUrl: "https://github.com/pip-services-samples/service-beacons-dart"
---

Now that we know a bit about how we are going to be storing data and how microservice configuration works, it’s time to add some logic to our service. Our microservice needs to be able to calculate a device’s position based on the beacons it “sees”, as well as initiate CRUD operations for the data it handles. Let’s create a **logic** folder under the **src** directory and start by defining an interface:

**/src/logic/IBeaconsController.dart**

```dart
import 'dart:async';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import '../../src/data/version1/BeaconV1.dart';

abstract class IBeaconsController {
  Future<DataPage<BeaconV1>> getBeacons(
      String correlationId, FilterParams filter, PagingParams paging);

  Future<BeaconV1> getBeaconById(String correlationId, String beaconId);

  Future<BeaconV1> getBeaconByUdi(String correlationId, String beaconId);

  Future<Map<String, dynamic>> calculatePosition(
      String correlationId, String siteId, List<String> udis);

  Future<BeaconV1> createBeacon(String correlationId, BeaconV1 beacon);

  Future<BeaconV1> updateBeacon(String correlationId, BeaconV1 beacon);

  Future<BeaconV1> deleteBeaconById(String correlationId, String beaconId);
}
```

Once our interface is ready, we can move on to implementing the actual controller. Its code is also going to be quite simple, as all we need to write is one method for calculating a device’s position, and the other methods will just be wrappers for the methods we wrote in our persistence components.

**/src/logic/BeaconsController.dart**

```dart
import 'dart:async';

import 'package:pip_services3_commons/pip_services3_commons.dart';

import '../../src/data/version1/BeaconV1.dart';
import '../../src/persistence/IBeaconsPersistence.dart';
import './IBeaconsController.dart';
import '../../src/data/version1/BeaconTypeV1.dart';
import './BeaconsCommandSet.dart';

class BeaconsController
    implements IBeaconsController, IConfigurable, IReferenceable, ICommandable {
  IBeaconsPersistence persistence;
  BeaconsCommandSet commandSet;

  BeaconsController();

  @override
  void configure(ConfigParams config) {}

  @override
  void setReferences(IReferences references) {
    persistence = references.getOneRequired<IBeaconsPersistence>(
        Descriptor('beacons', 'persistence', '*', '*', '1.0'));
  }

  @override
  CommandSet getCommandSet() {
    commandSet ??= BeaconsCommandSet(this);
    return commandSet;
  }

  @override
  Future<DataPage<BeaconV1>> getBeacons(
      String correlationId, FilterParams filter, PagingParams paging) {
    return persistence.getPageByFilter(correlationId, filter, paging);
  }

  @override
  Future<BeaconV1> getBeaconById(String correlationId, String beaconId) {
    return persistence.getOneById(correlationId, beaconId);
  }

  @override
  Future<BeaconV1> getBeaconByUdi(String correlationId, String beaconId) {
    return persistence.getOneByUdi(correlationId, beaconId);
  }

  @override
  Future<Map<String, dynamic>> calculatePosition(
      String correlationId, String siteId, List<String> udis) async {
    var beacons = <BeaconV1>[];
    var position = <String, dynamic>{};
    if (udis == null || udis.isEmpty) {
      return null;
    }

    var page = await persistence.getPageByFilter(correlationId,
        FilterParams.fromTuples(['site_id', siteId, 'udis', udis]), null);
    beacons = page != null ? page.data : [];

    var lat = 0.0;
    var lng = 0.0;
    var count = 0;

    for (var beacon in beacons) {
      if (beacon.center != null &&
          beacon.center['type'] == 'Point' &&
          beacon.center['coordinates'] is List) {
        lng += (beacon.center['coordinates'] as List)[0];
        lat += (beacon.center['coordinates'] as List)[1];
        count += 1;
      }
    }

    if (count > 0) {
      position = {
        'type': 'Point',
        'coordinates': [lng / count, lat / count]
      };
      return position;
    }

    return null;
  }

  @override
  Future<BeaconV1> createBeacon(String correlationId, BeaconV1 beacon) {
    beacon.id = beacon.id ?? IdGenerator.nextLong();
    beacon.type = beacon.type ?? BeaconTypeV1.unknown;
    return persistence.create(correlationId, beacon);
  }

  @override
  Future<BeaconV1> updateBeacon(String correlationId, BeaconV1 beacon) {
    beacon.type = beacon.type ?? BeaconTypeV1.unknown;

    return persistence.update(correlationId, beacon);
  }

  @override
  Future<BeaconV1> deleteBeaconById(String correlationId, String beaconId) {
    return persistence.deleteById(correlationId, beaconId);
  }
}


```

Pay special attention to the following two methods in the code above: 
- `setReferences`
- `getCommandSet`

The first one sets a dependency upon a persistence using the descriptor **beacons:persistence:*:*:1.0.** This descriptor reads: we don’t necessarily care which persistence we are given, as long as it implements the IBeaconsPersistence interface via the Referenceable pattern. This way, our controller can be used with the memory persistence, the mongoDB one, or any other one that meets this requirement.

The second method is used to get a set of commands, with which we can control this controller using the Commandable pattern. In our case, it will be used by the commandable HTTP service. If you’re not yet familiar with the Commandable pattern, make sure to find some time and read about it [here](../../../commons/commands/icommandable). To complete this pattern, lets implement a class called `BeaconsCommandSet`:

**/src/logic/BeaconsCommandSet.dart**

```dart
import 'dart:async';

import 'package:pip_services3_commons/pip_services3_commons.dart';

import '../../src/data/version1/BeaconV1Schema.dart';
import '../../src/logic/IBeaconsController.dart';
import '../../src/data/version1/BeaconV1.dart';

class BeaconsCommandSet extends CommandSet {
  IBeaconsController _controller;

  BeaconsCommandSet(IBeaconsController controller) : super() {
    _controller = controller;

    addCommand(_makeGetBeaconsCommand());
    addCommand(_makeGetBeaconByIdCommand());
    addCommand(_makeGetBeaconByUdiCommand());
    addCommand(_makeCalculatePositionCommand());
    addCommand(_makeCreateBeaconCommand());
    addCommand(_makeUpdateBeaconCommand());
    addCommand(_makeDeleteBeaconByIdCommand());
  }

  ICommand _makeGetBeaconsCommand() {
    return Command(
        'get_beacons',
        ObjectSchema(true)
            .withOptionalProperty('filter', FilterParamsSchema())
            .withOptionalProperty('paging', PagingParamsSchema()),
        (String correlationId, Parameters args) {
      var filter = FilterParams.fromValue(args.get('filter'));
      var paging = PagingParams.fromValue(args.get('paging'));
      return _controller.getBeacons(correlationId, filter, paging);
    });
  }

  ICommand _makeGetBeaconByIdCommand() {
    return Command('get_beacon_by_id',
        ObjectSchema(true).withRequiredProperty('beacon_id', TypeCode.String),
        (String correlationId, Parameters args) {
      var beaconId = args.getAsString('beacon_id');
      return _controller.getBeaconById(correlationId, beaconId);
    });
  }

  ICommand _makeGetBeaconByUdiCommand() {
    return Command('get_beacon_by_udi',
        ObjectSchema(true).withRequiredProperty('udi', TypeCode.String),
        (String correlationId, Parameters args) {
      var udi = args.getAsString('udi');
      return _controller.getBeaconByUdi(correlationId, udi);
    });
  }

  ICommand _makeCalculatePositionCommand() {
    return Command(
        'calculate_position',
        ObjectSchema(true)
            .withRequiredProperty('site_id', TypeCode.String)
            .withRequiredProperty('udis', ArraySchema(TypeCode.String)),
        (String correlationId, Parameters args) async {
      var siteId = args.getAsString('site_id');
      var udis = List<String>.from(args.getAsObject('udis'));
      return _controller.calculatePosition(correlationId, siteId, udis);
    });
  }

  ICommand _makeCreateBeaconCommand() {
    return Command('create_beacon',
        ObjectSchema(true).withRequiredProperty('beacon', BeaconV1Schema()),
        (String correlationId, Parameters args) {
      var beacon = BeaconV1();
      beacon.fromJson(args.get('beacon'));
      return _controller.createBeacon(correlationId, beacon);
    });
  }

  ICommand _makeUpdateBeaconCommand() {
    return Command('update_beacon',
        ObjectSchema(true).withRequiredProperty('beacon', BeaconV1Schema()),
        (String correlationId, Parameters args) {
      var beacon = BeaconV1();
      beacon.fromJson(args.get('beacon'));
      return _controller.updateBeacon(correlationId, beacon);
    });
  }

  ICommand _makeDeleteBeaconByIdCommand() {
    return Command('delete_beacon_by_id',
        ObjectSchema(true).withRequiredProperty('beacon_id', TypeCode.String),
        (String correlationId, Parameters args) {
      var beaconId = args.getAsString('beacon_id');
      return _controller.deleteBeaconById(correlationId, beaconId);
    });
  }
}


```

To sum up this class’s code: we’re creating commands for each of the controller’s methods, and then registering them in the constructor. To create a command, we give it a name, a validation schema (if needed), and a callback function with the following three parameters:

- `correlationId`: string – used to identify the operation,
- `args`: Parameters - the set of parameters received from the command being called,
- `callback` – callback function for returning the command’s result, or an error, if one occurs.

To be sure that our new methods are working correctly, let’s add some tests for the controller. The code for testing the controller is listed below:

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

These tests can be run using the same pub test command that we used to run the persistence tests.

Our service is now just one step away from being completed! All that we have left to write is [Step 6. Implementing an HTTP service.](../step5)

<span class="hide-title-link">

### [Step 6. Implementing an HTTP service.](../step5)

</span>
