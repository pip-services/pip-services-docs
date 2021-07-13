---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The DoubleConverter class allows you to convert arbitrary values into doubles using extended conversion rules.

   
---

### Description

The DoubleConverter class allows you to convert arbitrary values into doubles using the following extended conversion rules:

 - Strings are converted to double values

 - DateTime: total number of milliseconds since unix epoch
    
 - Boolean: 1 for true and 0 for false  

### Static methods

#### toDouble
Converts a value into a double or returns 0 when the conversion is not possible.  
See [toDoubleWithDefault](#todoublewithdefault)

> `static` double toDouble(value)

- **value**: dynamic - value to convert.
- **returns**: double - double value or 0 when the conversion is not supported.

#### toDoubleWithDefault
Converts value into integer or returns default value when the conversion is not possible.

> `static` double toDoubleWithDefault(value, double defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: double - default value.
- **returns**: double - double value or default when the conversion is not supported.

#### toNullableDouble
Converts a value into a double or returns null when the conversion is not possible.

> `static` double toNullableDouble(value)

- **value**: dynamic - value to convert.
- **returns**: double - double value or null when the conversion is not supported.

### Examples

```dart
var value1 = DoubleConverter.toNullableDouble('ABC'); // Result: null
var value2 = DoubleConverter.toNullableDouble('123.456'); // Result: 123.456
var value3 = DoubleConverter.toNullableDouble(true); // Result: 1
var value4 = DoubleConverter.toNullableDouble( Date()); // Result: current milliseconds

```
