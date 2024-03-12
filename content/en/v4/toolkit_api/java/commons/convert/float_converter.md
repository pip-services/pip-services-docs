---
type: docs
title: "FloatConverter"
linkTitle: "FloatConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
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

> `public static` float toFloat(Object value)

- **value**: Object - value to convert.
- **returns**: float - float value or 0 when the conversion is not supported.

#### toFloatWithDefault
Converts a value into a float or returns a given default when the conversion is not possible.  
See [DoubleConverter.toDoubleWithDefault](../double_converter/#todoublewithdefault),  
[DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> `public static` float toFloatWithDefault(Object value, float defaultValue)

- **value**: Object - value to convert.
- **defaultValue**: float - default value.
- **returns**: float - float value or default value when the conversion is not supported.

#### toNullableFloat
Converts a value into a float or returns null when the conversion is not possible.  
See [DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> `public static` Float toNullableFloat(Object value)

- **value**: Object - value to convert.
- **returns**: Float - float value or null when the conversion is not supported.


### Examples

```java
{
  float value1 = FloatConverter.toNullableFloat("ABC"); // Result: null
  float value2 = FloatConverter.toNullableFloat("123.456"); // Result: 123.456
  float value3 = FloatConverter.toNullableFloat(true); // Result: 1
  float value4 = FloatConverter.toNullableFloat(new Date()); // Result: current milliseconds
  }

```
