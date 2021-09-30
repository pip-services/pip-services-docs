
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
