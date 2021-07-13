---
type: docs
title: "StringConverter"
linkTitle: "StringConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The StringConverter class allows you to convert arbitrary values into strings.

---

### Description

 The StringConverter class allows you to convert arbitrary values into strings using the following extended conversion rules:

- Numbers: are converted with '.' as decimal point
- DateTime: using the ISO format
- Boolean: "true" for true and "false" for false
- Arrays: as comma-separated list  
- Other objects: using **toString()** method

### Static methods

#### toNullableString
Converts a value into a string or returns null when the value is null.

> `static` String toNullableString(value)

- **value**: dynamic - value to convert.
- **returns**: String - string value or null when value is null.

#### toString2
Converts a value into string or returns "" when the value is null.

> `static` String toString2(value)

- **value**: dynamic - value to convert.
- **returns**: String - string value or "" when value is null.

#### toStringWithDefault
Converts a value into a string or returns a given default when the value is null.

> `static` String toStringWithDefault(value, String defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: String - default value.
- **returns**: String - string value or given default when value is null.


### Examples

```dart
var value1 = StringConverter.ToString(123.456); // Result: '123.456'
var value2 = StringConverter.ToString(true); // Result: 'true'
var value3 = StringConverter.ToString( Date(2018,0,1)); // Result: '2018-01-01T00:00:00.00'
var value4 = StringConverter.ToString([1,2,3]); // Result: '1,2,3'
```
