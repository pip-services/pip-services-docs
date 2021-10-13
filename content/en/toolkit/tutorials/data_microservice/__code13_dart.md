
**/lib/logic/BeaconsController.dart**

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
