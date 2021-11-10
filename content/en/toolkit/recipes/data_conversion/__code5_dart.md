
```dart
// Float converter
import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = FloatConverter.toFloat('123.456'); // Returns 123.456
var value2 = FloatConverter.toFloat('ABC'); // Returns 0
var value3 = FloatConverter.toFloatWithDefault('123.456', 0); // Returns 123.456
var value4 = FloatConverter.toFloatWithDefault('ABC', 0); // Returns 0
var value5 = FloatConverter.toNullableFloat('123.456'); // Returns 123.456
var value6 = FloatConverter.toNullableFloat('ABC'); // Returns null
var value7 = FloatConverter.toNullableFloat(true); // Returns 1


```
