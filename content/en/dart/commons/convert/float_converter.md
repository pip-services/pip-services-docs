---
type: docs
title: "FloatConverter"
linkTitle: "FloatConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The FloatConverter class allows you to convert arbitrary values into float using extended conversion rules.

---

### Description
The FloatConverter class allows you to convert arbitrary values into float using the following extended conversion rules:

- Strings are converted to float values
- DateTime: total number of milliseconds since unix epoch  
- Boolean: 1 for true and 0 for false

### Static methods

#### toFloat
Converts a value into a float or returns 0 when the conversion is not possible.  
See [DoubleConverter.toDouble](../double_converter/#todouble)

> `static` double toFloat(value)

- **value**: dynamic - value to convert.
- **returns**: double - float value or 0 when the conversion is not supported.

#### toFloatWithDefault
Converts a value into a float or returns a given default when the conversion is not possible.  
See [DoubleConverter.toDoubleWithDefault](../double_converter/#todoublewithdefault),  
[DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> `static` double toFloatWithDefault(value, double defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: double - default value.
- **returns**: double - float value or default value when the conversion is not supported.

#### toNullableFloat
Converts a value into a float or returns null when the conversion is not possible.  
See [DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> `static` double toNullableFloat(value)

- **value**: dynamic - value to convert.
- **returns**: double - float value or null when the conversion is not supported.


### Examples

```dart
var value1 = FloatConverter.toNullableFloat('ABC'); // Result: null
var value2 = FloatConverter.toNullableFloat('123.456'); // Result: 123.456
var value3 = FloatConverter.toNullableFloat(true); // Result: 1
var value4 = FloatConverter.toNullableFloat( Date()); // Result: current milliseconds

```
