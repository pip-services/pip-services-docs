
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

var config = ConfigParams.fromTuples([
  'key1.user',
  'jdoe',
  'key1.pass',
  'pass123',
  'key2.user',
  'bsmith',
  'key2.pass',
  'mypass'
]);
var credentialStore = MemoryCredentialStore(config);

```
