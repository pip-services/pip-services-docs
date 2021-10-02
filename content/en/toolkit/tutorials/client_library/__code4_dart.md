
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
