
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
