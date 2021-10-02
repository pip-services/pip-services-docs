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

