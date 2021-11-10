
```dart
// String converter

import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = StringConverter.toString2(123.456);                      // Returns '123.456'
var value2 = StringConverter.toString2(true);                         // Returns 'True'
var value3 = StringConverter.toString2(DateTime(2018, 10, 1));        // Returns '2018-10-01T00:00:00Z'
var value4 = StringConverter.toString2(['a', 'b', 'c']);              // Returns 'a,b,c'
var value5 = StringConverter.toString2(null);                         // Returns ""
var value6 = StringConverter.toNullableString(null);                  // Returns null
var value7 = StringConverter.toStringWithDefault(null, 'my default'); // Returns 'my default'

```
