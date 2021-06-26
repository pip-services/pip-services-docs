---
type: docs
title: "IntegerConverter"
linkTitle: "IntegerConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The IntegerConverter class allows you to convert arbitrary values to integers using extended conversion rules.

---

### Description
    
The IntegerConverter class allows you to convert arbitrary values to integers using the following extended conversion rules:

- Strings are converted to floats, then to integers
- DateTime: total number of milliseconds since unix epoсh  
- Boolean: 1 for True and 0 for False

### Static methods

#### ToInteger
Converts value into integer or returns 0 when the conversion is not possible.  
See [LongConverter.ToLong](../long_converter/#tolong),  
[LongConverter.ToLongWithDefault](../long_converter/#tolongwithdefault)

> `public static` int ToInteger(object value)

- **value**: object - value to convert.
- **returns**: int - integer value or 0 when the conversion is not supported.

#### ToIntegerWithDefault
Converts value into integer or returns a given default value when the conversion is not possible.
See [LongConverter.ToLongWithDefault](../long_converter/#tolongwithdefault),  
[LongConverter.ToNullableLong](../long_converter/#tonullablelong)

> `public static` int ToIntegerWithDefault(object value, int defaultValue)

- **value**: object - the value to convert.
- **defaultValue**: int - the default value.
- **returns**: int - integer value or default when the conversion is not supported. 

#### ToNullableInteger
Converts value into integer or returns null when conversion is not possible.
See [LongConverter.ToNullableLong](../long_converter/#tonullablelong)

> `public static` int ToNullableInteger(object value)

- **value**: object - the value to convert.
- **returns**: int - integer value or null when the conversion is not supported.

### Examples

```cs
var value1 = IntegerConverter.ToNullableInteger("ABC"); // Result: null
var value2 = IntegerConverter.ToNullableInteger("123.456"); // Result: 123.456
var value3 = IntegerConverter.ToNullableInteger(true); // Result: 1
var value4 = IntegerConverter.ToNullableInteger(new Date()); // Result: current milliseconds

```
