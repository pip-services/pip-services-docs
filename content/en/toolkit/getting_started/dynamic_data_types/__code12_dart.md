
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

var value = AnyValueArray([1, '123.456', '2018-01-01']);

// Get a value for a specified index
var value1 = value.get(0); // Returns 1, type int

var value2 = value.getAsBoolean(0); // Returns True
var value3 = value.getAsBooleanWithDefault(1, false); // Returns False
var value4 = value.getAsNullableBoolean(2); // Returns null

var value5 = value.getAsInteger(1); // Returns 123
var value6 = value.getAsIntegerWithDefault(2, 0); // Returns 0
var value7 = value.getAsNullableInteger(2); // Returns null

var value8 = value.getAsLong(1); // Returns 123
var value9 = value.getAsLongWithDefault(2, 0); // Returns 0
var value10 = value.getAsNullableLong(2); // Returns null

var value11 = value.getAsFloat(1); // Returns 123.456
var value12 = value.getAsFloatWithDefault(2, 0.0); // Returns 0.0
var value13 = value.getAsNullableFloat(2); // Returns null

var value14 = value.getAsDouble(1); // Returns 123.456
var value15 = value.getAsDoubleWithDefault(2, 0.0); // Returns 0.0
var value16 = value.getAsNullableDouble(2); // Returns null

var value17 = value.getAsDateTime(2).toLocal(); // Returns 2018-01-01 00:00:00+00:00

var value18 = value.getAsDateTimeWithDefault(1, DateTime.now()); // Returns (e.g) 2021-11-04

var value19 = value.getAsString(2); // Returns '2018-01-01'
var value20 = value.getAsNullableString(2); // Returns '2018-01-01'
var value21 = value.getAsStringWithDefault(2, '0000-00-00'); // Returns '2018-01-01'

var value22 = value.getAsArray(1); // Returns ['123.456']
var value23 = value.getAsArrayWithDefault(0, AnyValueArray([0])); // Returns [1]
var value24 = value.getAsNullableArray(2); // Returns ['2018-01-01']

var valueA = AnyValueArray([
  1,
  {'number': '123.456'},
  '2018-01-01'
]);

var value25 = valueA.getAsMap(1); // Returns {'number': '123.456'}
value25 = valueA.getAsMapWithDefault(2, AnyValueMap({'key1': 1})); // Returns {'key1': 1}

var value27 = valueA.getAsNullableMap(2); // Returns null

var value28 = value.getAsType(TypeCode.DateTime, 2).toLocal(); // Returns 2018-01-01
var value29 = value.getAsTypeWithDefault(TypeCode.DateTime, 1, DateTime.now()); // Returns today date
var value30 = value.getAsNullableType(TypeCode.DateTime, 1); // Returns null

```
