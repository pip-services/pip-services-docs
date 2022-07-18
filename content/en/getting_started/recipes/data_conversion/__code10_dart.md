
```dart
// Map converter

import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = MapConverter.toNullableMap('ABC');                     // Returns null
var value2 = MapConverter.toNullableMap({'key': 123});              // Returns { key: 123 }
var value3 = MapConverter.toNullableMap([1, 2, 3]);                 // Returns { "0": 1, "1": 2, "2": 3 }
var value4 = MapConverter.toMap('ABC');                             // Returns {}
var value5 = MapConverter.toMapWithDefault('ABC', value2!);         // Returns {'key': 123}
var value6 = MapConverter.toMapWithDefault({'key': 12345}, value2); // Returns {'key': 12345}


```
