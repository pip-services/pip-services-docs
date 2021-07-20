---
type: docs
no_list: true
title: "Step 3. Implementing persistence components"
linkTitle: "Step 3. Persistence"
gitUrl: "https://github.com/pip-services-samples/service-beacons-dart"
---

In this step, we’ll be creating components for persisting the data model we defined in the previous step. In our projects, we always create at least two persistences: one for storing data in-memory (used for testing), and another for storing data in an external database (used in production). With the Beacons example, we’ll be doing the same.

Let’s start by navigating to the **src** directory and creating a **persistence** directory inside it. This directory is going to contain all of the files that relate to this step of the tutorial.

The first thing we are going to do is define what functionality our persistent storage should have. We can define these in a form of an interface and name it `IBeaconsPersistence`

**/src/persistence/IBeaconsPersistence.dart**

```dart
import 'dart:async';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import '../data/version1/BeaconV1.dart';

abstract class IBeaconsPersistence {
  Future<DataPage<BeaconV1>> getPageByFilter(
      String correlationId, FilterParams filter, PagingParams paging);

  Future<BeaconV1> getOneById(String correlationId, String id);

  Future<BeaconV1> getOneByUdi(String correlationId, String udi);

  Future<BeaconV1> create(String correlationId, BeaconV1 item);

  Future<BeaconV1> update(String correlationId, BeaconV1 item);

  Future<BeaconV1> deleteById(String correlationId, String id);
}


```

The first persistence to implement this interface will be the memory persistence, which we will name **BeaconsMemoryPersistence**. This class will need to extend the `IdentifiableMemoryPersistence` class from the **pip-services3-data** module, and have a few additional functions added to it. One of these functions will be used to create filters for the `getPageByFilter` method that we’re going to override from the parent class. This function will be called `composeFilter`, as it’s going to allow us to filter data in accordance with the received filtering parameters. The overriding `getPageByFilter` method then simply calls the parent’s method, passing the `composeFilter` function as a filter parameter. The second function that we will need to implement is the `getOneByUdi` method, whose purpose will be to retrieve a beacon by its `udi`.

The resulting code for this class is listed below:

**/src/persistence/BeaconsMemoryPersistence.dart**

```dart
import 'dart:async';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_data/pip_services3_data.dart';
import '../data/version1/BeaconV1.dart';
import './IBeaconsPersistence.dart';

class BeaconsMemoryPersistence
    extends IdentifiableMemoryPersistence<BeaconV1, String>
    implements IBeaconsPersistence {
  BeaconsMemoryPersistence() : super() {
    maxPageSize = 1000;
  }

  Function composeFilter(FilterParams filter) {
    filter = filter ?? FilterParams();

    var id = filter.getAsNullableString('id');
    var siteId = filter.getAsNullableString('site_id');
    var label = filter.getAsNullableString('label');
    var udi = filter.getAsNullableString('udi');
    var labelLike = filter.getAsNullableString('label_like');
    var udis = filter.getAsObject('udis');
    if (udis != null && udis is String) {
      udis = (udis as String).split(',');
    }
    if (udis != null && !(udis is List)) {
      udis = null;
    }

    return (item) {
      if (id != null && item.id != id) {
        return false;
      }
      if (siteId != null && item.site_id != siteId) {
        return false;
      }
      if (label != null && item.label != label) {
        return false;
      }

      if (labelLike != null) {
        var regexp = RegExp(r'^' + labelLike, caseSensitive: false);
        if (regexp.allMatches(item.label).isEmpty) {
          return false;
        }
      }

      if (udi != null && item.udi != udi) {
        return false;
      }
      if (udis != null && (udis as List).indexOf(item.udi) < 0) {
        return false;
      }
      return true;
    };
  }

  @override
  Future<DataPage<BeaconV1>> getPageByFilter(
      String correlationId, FilterParams filter, PagingParams paging) {
    return super
        .getPageByFilterEx(correlationId, composeFilter(filter), paging, null);
  }

  @override
  Future<BeaconV1> getOneByUdi(String correlationId, String udi) async {
    var item = items.firstWhere((item) => item.udi == udi);

    if (item != null) {
      logger.trace(correlationId, 'Found beacon by %s', [udi]);
    } else {
      logger.trace(correlationId, 'Cannot find beacon by %s', [udi]);
    }

    return item;
  }
}

```

And that’s pretty much it for the memory persistence.

Now let’s move on to something a bit more sophisticated - a MongoDB persistence. Here we’re also going to use an already existing base class, `IdentifiableMongoDbPersistence`, from the **pip-services3-mongodb** module, and write a few functions, the most important of which will be `composeFilter`. This time around, its implementation is going to contain syntax for creating database requests. The resulting code for this class is listed below: 

**/src/persistence/BeaconsMongoDbPersistence.dart**

```dart
import 'dart:async';
import 'package:mongo_dart_query/mongo_dart_query.dart' as mngquery;
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_mongodb/pip_services3_mongodb.dart';

import '../data/version1/BeaconV1.dart';
import './IBeaconsPersistence.dart';

class BeaconsMongoDbPersistence
    extends IdentifiableMongoDbPersistence<BeaconV1, String>
    implements IBeaconsPersistence {
  BeaconsMongoDbPersistence() : super('beacons') {
    maxPageSize = 1000;
  }

  dynamic composeFilter(FilterParams filter) {
    filter = filter ?? FilterParams();

    var criteria = [];

    var id = filter.getAsNullableString('id');
    if (id != null) {
      criteria.add({'_id': id});
    }

    var siteId = filter.getAsNullableString('site_id');
    if (siteId != null) {
      criteria.add({'site_id': siteId});
    }

    var label = filter.getAsNullableString('label');
    if (label != null) {
      criteria.add({'label': label});
    }

    var udi = filter.getAsNullableString('udi');
    if (udi != null) {
      criteria.add({'udi': udi});
    }

    var labelLike = filter.getAsNullableString('label_like');
    if (labelLike != null) {
      var regexp = RegExp(r'^' + labelLike, caseSensitive: false);
      criteria.add({r'$regex': regexp.pattern});
    }

    var udis = filter.getAsObject('udis');
    if (udis is String) {
      udis = (udis as String).split(',');
    }
    if (udis is List) {
      criteria.add({
        'udi': {r'$in': udis}
      });
    }

    return criteria.isNotEmpty ? {r'$and': criteria} : null;
  }

  @override
  Future<DataPage<BeaconV1>> getPageByFilter(
      String correlationId, FilterParams filter, PagingParams paging) async {
    return super
        .getPageByFilterEx(correlationId, composeFilter(filter), paging, null);
  }

  @override
  Future<BeaconV1> getOneByUdi(String correlationId, String udi) async {
    var filter = {'udi': udi};
    var query = mngquery.SelectorBuilder();
    var selector = <String, dynamic>{};
    if (filter != null && filter.isNotEmpty) {
      selector[r'$query'] = filter;
    }
    query.raw(selector);

    var item = await collection.findOne(filter);

    if (item == null) {
      logger.trace(correlationId, 'Nothing found from %s with id = %s',
          [collectionName, udi]);
      return null;
    }
    logger.trace(
        correlationId, 'Retrieved from %s with id = %s', [collectionName, udi]);
    return convertToPublic(item);
  }
}

```

Let’s take a quick look at what’s in this code. A basic set of CRUD operations are already implemented in the data module. There’s minimal code that needs to be written by us as developers for this class: just a filter function, and non-standard methods for searching by a specific data field. The rest of the methods that we defined in our interface are already implemented in the parent class.

To make sure that the code does just what we expect it to do, let’s add some tests. We’ll be placing the files with our tests in the **test** directory and organizing them into subdirectories, whose names will reflect the components they are testing.

Thanks to the modular structure of microservices, each component is easily testable with the help of simple mock tests. We’ll start with creating a class that contains a set of testable commands and checks the results we receive with the help of standard testing libraries. This class will be accepting any persistence that implements our `IBeaconsPersistence` interface as a parameter. This way we can use the same set of commands to test both of our persistence implementations. This set of commands should contain standard CRUD operations, which are implemented in the parent class, as well as the methods we’ve added in the child classes.

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

Now that we have a set of tests, we can dive into the testing itself. To do this, we’ll create files for testing each of our persistences and run them.

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

To run these tests, run the command npm test from a terminal at the root of the project.

*“But where exactly is the data going to be stored when we get the service actually up and running?”* you may ask. Jumping ahead, we’ll tell you that the config.yml configuration file takes care of that. It contains configurations for all of the service’s components, such as: which logger to use, where performance counter output should be, what database to connect to and using what parameters, etc. We’ll discuss this in more detail later on in this tutorial.

Now that we can persist our data, let’s move on to [Step 4. Implementing a controller.](../step4)

<span class="hide-title-link">

### [Step 4. Implementing a controller.](../step4)

</span>