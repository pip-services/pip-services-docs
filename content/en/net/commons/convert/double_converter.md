---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The DoubleConverter class allows you to convert arbitrary values into double using extended conversion rules.

   
---

### Description

The DoubleConverter class allows you to convert arbitrary values into double using the following extended conversion rules:

 - Strings are converted to double values

 - DateTime: total number of milliseconds since unix epoсh
    
 - Boolean: 1 for true and 0 for false  

### Static methods

#### ToDouble
Converts value into doubles or returns 0 when conversion is not possible.  
See [toDoubleWithDefault](#todoublewithdefault)

> `public static` double ToDouble(object value)

- **value**: object - value to convert.
- **returns**: double - double value or 0 when conversion is not supported.

#### ToDoubleWithDefault
Converts value into integer or returns default value when conversion is not possible.

> `public static` double ToDoubleWithDefault(object value, double defaultValue)

- **value**: object - value to convert.
- **defaultValue**: double - default value.
- **returns**: double - double value or default when conversion is not supported.

#### ToNullableDouble
Converts value into doubles or returns null when conversion is not possible.

> `public static` double ToNullableDouble(object value)

- **value**: object - value to convert.
- **returns**: double - double value or null when conversion is not supported.

### Examples

```cs
var value1 = DoubleConverter.ToNullableDouble("ABC");       // Result: null
var value2 = DoubleConverter.ToNullableDouble("123.456");   // Result: 123.456
var value3 = DoubleConverter.ToNullableDouble(true);        // Result: 1
var value4 = DoubleConverter.ToNullableDouble(new Date());  // Result: current milliseconds

```
