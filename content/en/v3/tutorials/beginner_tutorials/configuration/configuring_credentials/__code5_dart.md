
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

var config = ConfigParams.fromTuples(['credential.user', 'user1', 'credential.password', 'password1']);
var credential = CredentialParams.fromConfig(config); // Returns {'user': 'user1', 'password': 'password1'}
```
