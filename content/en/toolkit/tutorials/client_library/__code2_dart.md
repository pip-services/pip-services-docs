
**/src/version1/IBeaconClientV1.dart**

```dart
import 'dart:async';
import 'package:pip_services3_commons/pip_services3_commons.dart';

import 'package:pip_services_beacons_dart/pip_services_beacons_dart.dart';

abstract class IBeaconsClientV1 {
  Future<DataPage<BeaconV1>> getBeacons(
      String correlationId, FilterParams filter, PagingParams paging);

  Future<BeaconV1> getBeaconById(String correlationId, String beaconId);

  Future<BeaconV1> getBeaconByUdi(String correlationId, String udi);

  Future<Map<String, dynamic>> calculatePosition(
      String correlationId, String siteId, List<String> udis);

  Future<BeaconV1> createBeacon(String correlationId, BeaconV1 beacon);

  Future<BeaconV1> updateBeacon(
    String correlationId,
    BeaconV1 beacon,
  );

  Future<BeaconV1> deleteBeaconById(String correlationId, String beaconId);
}
```
