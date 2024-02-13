
```dart
// Date time converter

import 'package:pip_services3_commons/pip_services3_commons.dart';

var value0 = DateTimeConverter.toDateTime('2021-11-09T17:24:50.750Z');          // Returns 2021-11-09 17:24:50.75
var value1 = DateTimeConverter.toNullableDateTime('ABC');                       // Returns null
var value2 = DateTimeConverter.toNullableDateTime('2021-11-09T17:24:50.750Z');  // Returns 2021-11-09 17:24:50.75
var value3 = DateTimeConverter.toNullableDateTime(12345657755000);              // Returns 2361-03-21 16:22:35
var value4 = DateTimeConverter.toDateTimeWithDefault('ABC', DateTime.now());    // Returns current datetime
var value5 = DateTimeConverter.toDateTimeWithDefault('2021-11-09T17:24:50.750Z', DateTime.now()); // Returns 2021-11-09 17:24:50.75

```
