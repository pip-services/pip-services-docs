---
type: docs
title: "DurationConverter"
linkTitle: "DurationConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
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

> `public static` Duration toNullableDuration(Object value)

- **value**: Object - value to convert.
- **returns**: Duration - Date value or current date when conversion is not supported.

#### toDurationWithDefault
Converts value into Date or returns default when conversion is not possible.

> `public static` Duration toDurationWithDefault(Object value, Duration defaultValue)

- **value**: Objec - value to convert.
- **defaultValue**: Duration - default value.
- **returns**: Duration - Date value or default when conversion is not supported.

#### toNullableDuration
Converts value into Date or returns null when conversion is not possible.

> `public static` Duration toNullableDuration(Object value)

- **value**: Object - value to convert.
- **returns**: Duration - Date value or null when conversion is not supported.

