
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var value = AnyValue('123.456');

var value1 = value.getAsInteger(); // Returns 123
var value2 = value.getAsLong(); // Returns 123
var value3 = value.getAsFloat(); // Returns 123.456

var valueB = AnyValue('ABC');
var value4 = valueB.getAsIntegerWithDefault(25); // Returns 25

var value5 = value.getAsString(); // Returns '123.456'
var value6 = value.getAsStringWithDefault('ABC'); // Returns '123.456'

valueB = AnyValue('1');
var value7 = valueB.getAsBoolean(); // Returns True

var valueC = AnyValue('abc');
var value8 = valueC.getAsBooleanWithDefault(false); // Returns False

var type1 = value.getTypeCode(); // Returns 1 (TypeCode.String)
```
