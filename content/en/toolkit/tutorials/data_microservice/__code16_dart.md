
**/src/service/version1/BeaconsCommandableHttpServiceV1.dart**

```dart
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';

class BeaconsCommandableHttpServiceV1 extends CommandableHttpService {
  BeaconsCommandableHttpServiceV1() : super('v1/beacons') {
    dependencyResolver.put(
        'controller', Descriptor('beacons', 'controller', '*', '*', '1.0'));
  }
}


```
