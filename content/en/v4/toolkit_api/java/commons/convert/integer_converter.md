---
type: docs
title: "IntegerConverter"
linkTitle: "IntegerConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    The IntegerConverter class allows you to convert arbitrary values into integers using extended conversion rules.

---

### Description
    
The IntegerConverter class allows you to convert arbitrary values into integers using the following extended conversion rules:

- Strings are converted to floats, then to integers
- DateTime: total number of milliseconds since unix epoch  
- Boolean: 1 for True and 0 for False

### Static methods

#### toInteger
Converts a value into an integer or returns 0 when the conversion is not possible.  
See [LongConverter.toLong](../long_converter/#tolong),  
[LongConverter.toLongWithDefault](../long_converter/#tolongwithdefault)

> `public static` int toInteger(Object value)

- **value**: Object - value to convert.
- **returns**: int - integer value or 0 when the conversion is not supported.

#### toIntegerWithDefault
Converts a value into an integer or returns a given default value when the conversion is not possible.
See [LongConverter.toLongWithDefault](../long_converter/#tolongwithdefault),  
[LongConverter.toNullableLong](../long_converter/#tonullablelong)

> `public static` int toIntegerWithDefault(Object value, int defaultValue)

- **value**: Object - value to convert.
- **defaultValue**: int - default value.
- **returns**: int - integer value or given default when the conversion is not supported. 

#### toNullableInteger
Converts a value into an integer or returns null when the conversion is not possible.
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

> `public static` Integer toNullableInteger(Object value)

- **value**: Object - value to convert.
- **returns**: Integer - integer value or null when the conversion is not supported.

### Examples

```java
{
  int value1 = IntegerConverter.toNullableInteger("ABC"); // Result: null
  int value2 = IntegerConverter.toNullableInteger("123.456"); // Result: 123.456
  int value3 = IntegerConverter.toNullableInteger(true); // Result: 1
  int value4 = IntegerConverter.toNullableInteger(new Date()); // Result: current milliseconds
  }

```
