---
type: docs
title: "LongConverter"
linkTitle: "LongConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The LongConverter class allows you to convert arbitrary values into longs using extended conversion rules.
---

### Description

The LongConverter class allows you to convert arbitrary values into longs using the following extended conversion rules:

- Strings are converted to floats, then to longs
- DateTime: total number of milliseconds since unix epoch   
- Boolean: 1 for true and 0 for false

### Static methods

#### ToLong
Converts value into long or returns 0 when the conversion is not possible.

> `public static` long ToLong(object value)

- **value**: object - value to convert.
- **returns**: long - long value or 0 when conversion is not supported.

#### ToLongWithDefault
Converts value into integer or returns a given default value when the conversion is not possible.

> `public static` long ToLongWithDefault(object value, long defaultValue)

- **value**: object - value to convert.
- **defaultValue**: long - default value.
- **returns**: long - long value or given default value when the conversion is not supported 

#### ToNullableLong
Converts value into long or returns null when the conversion is not possible.

> `public static` long ToNullableLong(object value)

- **value**: object - value to convert.
- **returns**: long - long value or null when the conversion is not supported.

### Examples

```cs
var value1 = LongConverter.ToNullableLong("ABC");       // Result: null
var value2 = LongConverter.ToNullableLong("123.456");   // Result: 123
var value3 = LongConverter.ToNullableLong(true);        // Result: 1
var value4 = LongConverter.ToNullableLong(new Date());  // Result: current milliseconds

```
