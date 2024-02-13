
**lib/src/operations/version1/BeaconsOperationsV1.dart**
```dart
import 'dart:async';
import 'dart:convert';

import 'package:pip_clients_beacons_dart/pip_clients_beacons_dart.dart';
import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

class BeaconsOperationsV1 extends RestOperations {
  late IBeaconsClientV1 _beaconsClient;

  BeaconsOperationsV1() : super() {
    dependencyResolver.put(
        'beacons', Descriptor('beacons', 'client', '*', '*', '1.0'));
  }

  @override
  void setReferences(IReferences references) {
    super.setReferences(references);

    _beaconsClient =
        dependencyResolver.getOneRequired<IBeaconsClientV1>('beacons');
  }

  FutureOr<Response> getBeacons(Request req) async {
    var filter = getFilterParams(req);
    var paging = getPagingParams(req);

    var page = await _beaconsClient.getBeacons(null, filter, paging);

    return await sendResult(req, null, page?.toJson());
  }

  FutureOr<Response> getBeaconById(Request req) async {
    var id = req.params['id']!;

    var result = await _beaconsClient.getBeaconById(null, id);

    return await sendResult(req, null, result);
  }

  FutureOr<Response> getBeaconByUdi(Request req) async {
    var id = req.params['udi']!;

    var result = await _beaconsClient.getBeaconByUdi(null, id);

    return await sendResult(req, null, result);
  }

  FutureOr<Response> calculatePosition(Request req) async {
    var body = jsonDecode(await req.readAsString());
    var siteId = req.params['site_id'] ?? body['site_id'];
    var udis = req.params['udis'] ?? body['udis'];

    if (udis is String) {
      udis = udis.split(',');
    }
    if (udis is! List) {
      udis = null;
    }

    var udisList = List<String>.from(udis ?? []);

    var result = await _beaconsClient.calculatePosition(null, siteId, udisList);

    return await sendResult(req, null, result);
  }

  FutureOr<Response> createBeacon(Request req) async {
    var body = await req.readAsString();
    var json = jsonDecode(body);

    var beacon = BeaconV1();
    beacon.fromJson(json);

    var result = await _beaconsClient.createBeacon(null, beacon);

    return await sendResult(req, null, result);
  }

  FutureOr<Response> updateBeacon(Request req) async {
    var json = jsonDecode(await req.readAsString());
    var beacon = BeaconV1();
    beacon.fromJson(json);

    var result = await _beaconsClient.updateBeacon(null, beacon);

    return await sendResult(req, null, result);
  }

  FutureOr<Response> deleteBeaconById(Request req) async {
    var id = req.params['id']!;

    var result = await _beaconsClient.deleteBeaconById(null, id);

    return await sendResult(req, null, result);
  }
}
```

