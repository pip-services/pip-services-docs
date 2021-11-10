
```dart
// Array converter

import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = ArrayConverter.toArray([1, 2]);                // Returns [1, 2]
var value2 = ArrayConverter.toArray(1);                     // Returns [1]
var value3 = ArrayConverter.toArrayWithDefault(null, [1]);  // Returns [1]
var value4 = ArrayConverter.listToArray('1,2,3');           // Returns ['1', '2', '3']
var value5 = ArrayConverter.toNullableArray('1,2');         // Returns ['1,2']

```
