---
type: docs
title: "DateTimeConverter"
linkTitle: "DateTimeConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The DateTimeConverter class allows you to convert arbitrary values into Date values using extended conversion rules.

    
---

### Description    

The DateTimeConverter class allows you to convert arbitrary values into Date values using the following extended conversion rules:
- Strings: converted using ISO time format.
- Numbers: converted using milliseconds since unix epoch.

### Static methods

#### toDateTime
Converts a value into Date or returns the current date when the conversion is not possible.  
See [toDateTimeWithDefault](#todatetimewithdefault)

> `static` DateTime toDateTime(value)

- **value**: dynamic - value to convert.
- **returns**: DateTime - Date value or current date when the conversion is not supported.

#### toDateTimeWithDefault
Converts a value into Date or returns a given default when the conversion is not possible.

> `static` DateTime toDateTimeWithDefault(value, DateTime defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: DateTime - default value.
- **returns**: DateTime - Date value or given default when the conversion is not supported.

#### toNullableDateTime
Converts a value into Date or returns null when the conversion is not possible.

> `static` DateTime toNullableDateTime(value)

- **value**: dynamic - value to convert.
- **returns**: DateTime - Date value or null when the conversion is not supported.

### Examples

```dart
var value1 = DateTimeConverter.toNullableDateTime('ABC'); // Result: null
var value2 = DateTimeConverter.toNullableDateTime('2018-01-01T11:30:00.0'); // Result: Date(2018,0,1,11,30)
var value3 = DateTimeConverter.toNullableDateTime(123); // Result: Date(123)

```
