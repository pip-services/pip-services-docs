
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var config = ConfigParams.fromTuples([
  'connection.protocol', 'http34343',
  'connection.host', 'host123',
  'connection.uri', 'uri321'
]);

var connection = ConnectionParams.fromConfig(
    config); // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}

```
