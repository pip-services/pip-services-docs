
```ts
// Double converter

import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = DoubleConverter.toDouble('123.456');               // Returns 123.456
var value2 = DoubleConverter.toDouble('ABC');                   // Returns 0
var value3 = DoubleConverter.toDoubleWithDefault('123.456', 0); // Returns 123.456
var value4 = DoubleConverter.toDoubleWithDefault('ABC', 0);     // Returns 0
var value5 = DoubleConverter.toNullableDouble('123.456');       // Returns 123.456
var value6 = DoubleConverter.toNullableDouble('ABC');           // Returns null
var value7 = DoubleConverter.toNullableDouble(true);            // Returns 1

```
