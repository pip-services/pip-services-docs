
```dart
// Recursive map
import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = RecursiveMapConverter.toMap({'key': 123});                          // Returns {'key': 123}
var value2 = RecursiveMapConverter.toMapWithDefault(null, {'my key': 'my val'}); // Returns { "my key": "my val" }
var value3 = RecursiveMapConverter.toNullableMap({'key': 123});                  // Returns {'key': 123}
var value4 = RecursiveMapConverter.toNullableMap([[1,[2, 3]]]);                  // Returns {0: 1, 1: {0: 2, 1: 3}}

```
