
```dart
// IntegerConverter
import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = IntegerConverter.toInteger('123.456');                 // Returns 123
var value2 = IntegerConverter.toInteger('ABC');                     // Returns 0
var value3 = IntegerConverter.toNullableInteger('123.456');         // Returns 123
var value4 = IntegerConverter.toNullableInteger('ABC');             // Returns null
var value5 = IntegerConverter.toNullableInteger(true);              // Returns 1
var value6 = IntegerConverter.toIntegerWithDefault('ABC', 123);     // Returns 123
var value7 = IntegerConverter.toIntegerWithDefault('123.456', 123); // Returns 123


```
