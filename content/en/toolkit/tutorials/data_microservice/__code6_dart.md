
**/src/data/version1/BeaconV1Schema.dart**

```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

class BeaconV1Schema extends ObjectSchema {
  BeaconV1Schema() : super() {
    withOptionalProperty('id', TypeCode.String);
    withRequiredProperty('site_id', TypeCode.String);
    withOptionalProperty('type', TypeCode.String);
    withRequiredProperty('udi', TypeCode.String);
    withOptionalProperty('label', TypeCode.String);
    withOptionalProperty('center', null);
    withOptionalProperty('radius', TypeCode.Float);
  }
}


```
