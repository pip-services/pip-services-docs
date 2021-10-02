
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
