
```dart
// Long converter

import 'package:pip_services3_commons/pip_services3_commons.dart';


var value1 = LongConverter.toLong('123.456');                // Returns 123
var value2 = LongConverter.toLong('ABC');                    // Returns 0
var value3 = LongConverter.toNullableLong('123.456');        // Returns 123
var value4 = LongConverter.toNullableLong('ABC');            // Returns null
var value5 = LongConverter.toNullableLong(true);             // Returns 1
var value6 = LongConverter.toLongWithDefault('123.456', 0);  // Returns 123
var value7 = LongConverter.toLongWithDefault('ABC', 0);      // Returns 0

```
