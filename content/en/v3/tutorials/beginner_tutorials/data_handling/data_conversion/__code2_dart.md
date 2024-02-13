
```dart
// Boolean converter

import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = BooleanConverter.toBoolean('yes');                 // Returns True
var value2 = BooleanConverter.toBooleanWithDefault(true, false);// Returns True
var value3 = BooleanConverter.toBooleanWithDefault(123, false); // Returns True
var value4 = BooleanConverter.toNullableBoolean(true);          // Returns True
var value5 = BooleanConverter.toNullableBoolean('yes');         // Returns True
var value6 = BooleanConverter.toNullableBoolean(123);           // Returns True
var value7 = BooleanConverter.toNullableBoolean({});            // Returns null

```
