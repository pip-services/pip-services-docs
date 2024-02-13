
```dart
// Type converter

import 'package:pip_services3_commons/pip_services3_commons.dart';

var value1 = TypeConverter.toType(TypeCode.String, 123);                  // Returns '123'
var value2 = TypeConverter.toNullableType(TypeCode.String, 123);          // Returns '123'
var value3 = TypeConverter.toTypeWithDefault(TypeCode.Integer, 'ABC', 1); // 1
var value4 = TypeConverter.toTypeCode('Hello world');                     // Returns TypeCode.String
var value5 = TypeConverter.asString(TypeCode.String);                     // Returns 'String'

```
