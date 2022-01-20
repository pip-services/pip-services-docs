
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var client = MyGrpcClient();
client.configure(ConfigParams.fromTuples([
  'connection.host', 'localhost', 
  'connection.port', 50055
]));

client.setReferences(References());
```
