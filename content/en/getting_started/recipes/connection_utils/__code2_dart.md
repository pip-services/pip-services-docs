
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

var options = ConfigParams.fromTuples([
  'host', 'broker1,broker2',
  'port', ',8082',
  'username', 'user',
  'password', 'pass123',
  'param1', 'ABC',
  'param2', 'XYZ',
  'param3', null
]);
var uri = ConnectionUtils.composeUri(options, 'tcp', 9092);

```
