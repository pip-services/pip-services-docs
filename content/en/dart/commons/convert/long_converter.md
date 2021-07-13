---
type: docs
title: "LongConverter"
linkTitle: "LongConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The LongConverter class allows you to convert arbitrary values into longs using extended conversion rules.
---

### Description

The LongConverter class allows you to convert arbitrary values into longs using the following extended conversion rules:

- Strings are converted to floats, then to longs
- DateTime: total number of milliseconds since unix epoch   
- Boolean: 1 for true and 0 for false

### Static methods

#### toLong
Converts a value into a long or returns 0 when the conversion is not possible.

> `static` int toLong(value)

- **value**: dynamic - value to convert.
- **returns**: int - long value or 0 when the conversion is not supported.

#### toLongWithDefault
Converts a value into an integer or returns a given default when the conversion is not possible.

> `static` int toLongWithDefault(value, int defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: int - default value.
- **returns**: int - long value or default when  the conversion is not supported

#### toNullableLong
Converts a value into a long or returns null when the conversion is not possible.

> `static` int toNullableLong(value)

- **value**: dynamic - value to convert.
- **returns**: int - long value or null when the conversion is not supported.

### Examples

```dart
var value1 = LongConverter.toNullableLong('ABC'); // Result: null
var value2 = LongConverter.toNullableLong('123.456'); // Result: 123
var value3 = LongConverter.toNullableLong(true); // Result: 1
var value4 = LongConverter.toNullableLong(new Date()); // Result: current milliseconds

```
