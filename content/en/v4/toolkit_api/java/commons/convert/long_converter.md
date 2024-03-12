---
type: docs
title: "LongConverter"
linkTitle: "LongConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
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

> `public static` long toLong(Object value)

- **value**: Object - value to convert.
- **returns**: long - long value or 0 when the conversion is not supported.

#### toLongWithDefault
Converts a value into an integer or returns a given default when the conversion is not possible.

> `public static` long toLongWithDefault(Object value, long defaultValue)

- **value**: Object - value to convert.
- **defaultValue**: long - default value.
- **returns**: long - long value or default when  the conversion is not supported

#### toNullableLong
Converts a value into a long or returns null when the conversion is not possible.

> `public static` Long toNullableLong(Object value)

- **value**: Object - value to convert.
- **returns**: Long - long value or null when the conversion is not supported.

### Examples

```java
{
  long value1 = LongConverter.toNullableLong("ABC"); // Result: null
  long value2 = LongConverter.toNullableLong("123.456"); // Result: 123
  long value3 = LongConverter.toNullableLong(true); // Result: 1
  long value4 = LongConverter.toNullableLong(new Date()); // Result: current milliseconds
  }

```
