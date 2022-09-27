
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var persistence = MyMySqlPersistence();
persistence.configure(ConfigParams.fromTuples([
  'connection.host', 'localhost',
  'connection.port', 3306,
  'credential.username', 'user',
  'credential.password', 'password',
  'connection.database', 'pip'
]));

```
