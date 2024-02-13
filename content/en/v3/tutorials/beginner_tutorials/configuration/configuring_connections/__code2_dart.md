
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

var config = ConfigParams.fromTuples(
    ['protocol', 'http34343', 'host', 'host123', 'uri', 'uri321']);
var connection = ConnectionParams(
    config); // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}
```
