---
type: docs
title: "FloatConverter"
linkTitle: "FloatConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The FloatConverter class allows you to convert arbitrary values into a float using extended conversion rules.

---

### Description
The FloatConverter class allows you to convert arbitrary values into a float using the following extended conversion rules:

- Strings are converted to float values
- DateTime: total number of milliseconds since unix epoсh  
- Boolean: 1 for true and 0 for false

### Static methods

#### ToFloat
Converts value into float or returns 0 when conversion is not possible.  
See [DoubleConverter.toDouble](../double_converter/#todouble)

> `public static` float ToFloat(object value)

- **value**: object - value to convert.
- **returns**: float - float value or 0 when conversion is not supported.

#### ToFloatWithDefault
Converts value into float or returns a given default value when conversion is not possible.  
See [DoubleConverter.ToDoubleWithDefault](../double_converter/#todoublewithdefault),  
[DoubleConverter.ToNullableDouble](../double_converter/#tonullabledouble)

> `public static` float ToFloatWithDefault(object value, float defaultValue)

- **value**: object - value to convert.
- **defaultValue**: float - default value.
- **returns**: float - float value or default value when conversion is not supported.

#### ToNullableFloat
Converts value into float or returns null when conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../double_converter/#tonullabledouble)

> `public static` float toNullableFloat(object value)

- **value**: object - the value to convert.
- **returns**: float - float value or null when conversion is not supported.


### Examples

```cs
var value1 = FloatConverter.ToNullableFloat("ABC");         // Result: null
var value2 = FloatConverter.ToNullableFloat("123.456");     // Result: 123.456
var value3 = FloatConverter.ToNullableFloat(true);          // Result: 1
var value4 = FloatConverter.ToNullableFloat(new Date());    // Result: current milliseconds

```
