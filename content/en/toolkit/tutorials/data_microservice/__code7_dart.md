
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

