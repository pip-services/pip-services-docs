---
type: docs
title: "DurationConverter"
linkTitle: "DurationConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The DoubleConverter class allows you to convert arbitrary values into duration using extended conversion rules.
---

### Description

The DoubleConverter class allows you to convert arbitrary values into Date using the following extended conversion rules:

- Strings: converted using ISO time format

- Numbers: converted using milliseconds since unix epoch

### Static methods

#### toDuration
Converts value into Date or returns current date when conversion is not possible.
See [toDurationWithDefault](#todurationwithdefault)

> `static` Duration toDuration(value)

- **value**: dynamic - value to convert.
- **returns**: Duration - Date value or current date when conversion is not supported.

#### toDurationWithDefault
Converts value into Date or returns default when conversion is not possible.

> `static` Duration toDurationWithDefault(value, Duration defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: Duration - default value.
- **returns**: Duration - Date value or default when conversion is not supported.

#### toNullableDuration
Converts value into Date or returns null when conversion is not possible.

> `static` Duration toNullableDuration(value)

- **value**: dynamic - value to convert.
- **returns**: Duration - Date value or null when conversion is not supported.

### Examples

```dart
var value1 = DurationConverter.toNullableDuration('ABC'); // Result: null
var value2 = DurationConverter.toNullableDuration('123'); // Result: Duration(milliseconds: 123)
var value3 = DurationConverter.toNullableDuration(123); // Result: Duration(milliseconds: 123)

```
