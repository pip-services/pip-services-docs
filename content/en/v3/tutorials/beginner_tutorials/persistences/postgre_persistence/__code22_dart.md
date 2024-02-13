
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var persistence = MyPostgresPersistence();
persistence.configure(ConfigParams.fromTuples([
  'connection.host', 'localhost',
  'connection.port', 5432,
  'connection.database', 'pip1',
  'credential.username', 'postgres',
  'credential.password', 'admin'
]));
```
