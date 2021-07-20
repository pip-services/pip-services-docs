---
type: docs
no_list: true
title: "MongoDB Persistence"
linkTitle: "MongoDB Persistence"
weight: 50
---

by Aleksey Dvoykin

### Introduction

In our previous tutorials, we took a look at in-memory and file persistence component implementations. Another frequent choice of persistence is Pip.Service’s MongoDb persistence. This persistence stores data in MongoDB - a popular document-oriented database.
The most basic implementation of this component is the MongoDbPersistence class defined in the [MongoDb module](../../mongodb). It is capable of storing a collection of documents, opening and closing connections, and performing a few simple CRUD operations. 

### MongoDBPersistence

This is a basic component that stores data items of any type. Some basic operations for creating, getting, and deleting are already included. More advanced CRUD operations over the data items can be implemented in child classes by accessing the **this._collection** or **this._model** properties. This component also contains methods for opening and closing connections using the credentials provided.

The example below demonstrates a class that implements the MongoDB persistence component for the [Beacon data model](../../tutorials/data_microservice/step2/). 

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

And this is how we could use such a class:

```dart
var persistence = BeaconsMongoDbPersistence();
await persistence.open("test");

var beacon = BeaconV1(
    id: '1', 
    site_id: "0001",
    udi: "0002"
);

await persistence.set("test", beacon);
let item = persistence.getOneByUdi("test", "0002");
await persistence.close("test");
print(item.udi); // Result: 0002

```

### Configuring database connections

As mentioned earlier, the [MongoDbPersistence](../../mongodb/persistence/) contains methods for opening and closing connections. To connect to the appropriate database and collection, we need to first configure the connection with all necessary parameters. **MongoDbPersistence** uses the MongoDbConnection class for establishing connections. 

The [MongoDbConnection](../../mongodb/connect/mongodb_connection/) class provides MongoDB connectivity using a plain driver. To reduce the number of database connections needed, a connection can be defined and then shared through multiple persistence components.

By default, **MongoDbPersistence** tries to establish a local connection on MongoDb’s default port - 27017. If the desired MongoDb server is located elsewhere, the persistence should be configured with the corresponding host and port information. Persistence configuration can be performed in a number of ways.

The example below demonstrates how the [ConfigParams](../../commons/config/config_params/) class can be used for persistence configuration. To learn more about this class, and about microservice configuration in general, be sure to read [this](../configuration).

```dart
var persistence = BeaconsMongoDbPersistence();
// Let's say we need to connect to a local MongoDb, but on a non-standard port - 30000

persistence.configure(ConfigParams.fromTuples(
	"connection.host", "localhost",
	"connection.port", "30000"
));
await persistence.open(null); // While opening, it will try to establish a connection with the locally hosted MongoDb on port 30000
```

Likewise, a connection can be configured using a configuration file. In this case, there exist two approaches:
1. configuring multiple persistences using a common **MongoDbConnection**.
2. configuring a single persistence with its own, private **MongoDbConnection**.

To perform configuration using a single **MongoDbConnection**, one of the following descriptors should be used:

```pip-services:connection:mongodb:*:1.0 or pip-services3:connection:mongodb:*:1.0.```

To learn more about references, descriptors, and component references, follow [this link](../component_references).  
First, add an element with the “pip-services” descriptor to the configuration file.

```yml
...
# MongoDb Connection
- descriptor: "pip-services:connection:mongodb:default:1.0"
  connection:
    host: localhost
    port: 30000
...
```

Next, register the persistence as a component in the microservice’s **Factory**:

```dart
class BeaconsServiceFactory extends Factory {
  static final MemoryPersistenceDescriptor =
      Descriptor('beacons', 'persistence', 'memory', '*', '1.0');
  static final FilePersistenceDescriptor =
      Descriptor('beacons', 'persistence', 'file', '*', '1.0');
  static final MongoDbPersistenceDescriptor =
      Descriptor('beacons', 'persistence', 'mongodb', '*', '1.0');
  static final ControllerDescriptor =
      Descriptor('beacons', 'controller', 'default', '*', '1.0');
  static final CommandableHttpServiceV1Descriptor =
      Descriptor('beacons', 'service', 'commandable-http', '*', '1.0');
  
  BeaconsServiceFactory() : super() {
    registerAsType(BeaconsServiceFactory.MemoryPersistenceDescriptor,
        BeaconsMemoryPersistence);
    registerAsType(BeaconsServiceFactory.FilePersistenceDescriptor,
        BeaconsFilePersistence);
    registerAsType(BeaconsServiceFactory.MongoDbPersistenceDescriptor,
        BeaconsMongoDbPersistence);
    registerAsType(
        BeaconsServiceFactory.ControllerDescriptor, BeaconsController);
    registerAsType(BeaconsServiceFactory.CommandableHttpServiceV1Descriptor,
        BeaconsCommandableHttpServiceV1);
    
  }
}

```

And add the [DefaultMongoDbFactory](../../mongodb/build/default_mongodb_factory/) to the microservice’s ProcessContainer:

```dart
class BeaconsProcess extends ProcessContainer {
  BeaconsProcess() : super('beacons', 'Beacons microservice') {
    factories.add(BeaconsServiceFactory());
    factories.add(DefaultRpcFactory());
  }
}


```

If we’re configuring just a single connection to the Beacons MongoDB persistence, the connection configuration should use the “beacons” descriptor:

```yml
...
# MongoDb persistence
- descriptor: "beacons:persistence:mongodb:default:1.0"
  connection:
    host: localhost
    port: 30000
...

```

### Identifiable data objects and IdentifiableMongoDBPersistence

The implementation we will be working with going forward is called the [IdentifiableMongoDbPersistence](../../mongodb/persistence/identifiable_mongodb_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../ommons/data/iidentifiable/) interface defined in [the Commons module](../commons).

```dart
abstract class IIdentifiable<K> {

  K id;
}

```

**IdentifiableMongoDbPersistence** implements a number of CRUD operations that are based on working with the model's id in a predefined manner. In addition, it provides methods for getting paginated results and listing data using detailed filter, sort, and even projection parameters. 

```dart
class IdentifiableMongoDbPersistence<T extends IIdentifiable<K>, K>
    extends MongoDbPersistence<T>
    implements IWriter<T, K>, IGetter<T, K>, ISetter<T> {

    IdentifiableMongoDbPersistence(String collection);

    Future<List<T>> getListByIds(String correlationId, List<K> ids) async

    @override
    Future<T> create(String correlationId, T item) async

    @override
    Future<T> set(String correlationId, T item) async

    @override
    Future<T> update(String correlationId, T item) async

    Future<T> updatePartially(String correlationId, K id, AnyValueMap data) async

    @override
    Future<T> deleteById(String correlationId, K id) async

    Future deleteByIds(String correlationId, List<K> ids) async
}

```

We can build upon the **IdentifiableMongoDbPersistence** by overriding its **ComposeFilter** method:

```dart
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

}

```


In most scenarios, child classes only need to override the **getPageByFilter()**, **getListByFilter()**, or **deleteByFilter()** operations using a custom filter function (like the **composeFilter** function in the example above). All of the other operations can be used straight out of the box. Developers can implement custom methods by directly accessing the data objects, which are stored in the _collection property. See [the MongoDb module’s API](../../mongodb) documentation for more details.

### Filtering

Persistence components in the Pip.Services Toolkit use a number of data patterns. **IdentifiableMongoDbPersistence**, for example, supports Filtering. This pattern allows clients to use a [FilterParams](../../commons/data/filter_params/) object to describe a subset of data using key-value pairs. These **FilterParams** can then be used for retrieving data in accordance with the specified search criteria [(see the Commons module)](../../commons).

```dart
var filter = FilterParams.fromTuples(
    "name", 'ABC'
);

var page = await persistence.getPageByFilter(null, null, null);

```

In the persistence component, the developer is responsible for parsing **FilterParams** and passing a filter function to the persistence’s methods of the base class.

```dart
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

```

### Paging

Another common data pattern is Paging. It is used to retrieve large datasets in chunks, through multiple calls to the storage. A client can ask for the results to be paged by specifying a set of [PagingParams](../../commons/data/paging_params/), which include the starting position and the number of objects to return. Clients can also request the total number of items in the dataset using **PagingParams**, but this parameter is optional. A DataPage object with a subset of the data will be returned as the result.


```dart
//skip = 25, take = 50, total = False
var paging = PagingParams(25, 50, false);
var result = await persistence.getPageByFilter(null, null, paging)
```


### Custom Persistence Methods

As mentioned above, developers can also implement custom persistence methods. The **_collection** property can be used to access data objects from within such methods. Below is an example of a custom **getOneByUdi** persistence method.

```dart
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

```

When we put everything together, we end up with the following component:

```dart
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

The following example demonstrates how we can use our newly created persistence for writing and reading Beacon objects to a MongoDB:

```dart
var persistence = BeaconsMongoDbPersistence();
await persistence.open(null);
var beacon = BeaconV1(
    id: '1';
    site_id: "0001";
    udi: "0002";
);



await persistence.set("test", beacon);
var item = await persistence.getOneByUdi("test", "0002");
print(item.udi); // Result: 0002
var page = await persistence.getPageByFilter("test", FilterParams.fromTuples("udi", "0002"), null);

parint(page.data.length);  // Result: 1
parint(page.data[0].udi);  // Result: 0002
await persistence.close("test");
```
