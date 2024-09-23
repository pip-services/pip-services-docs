---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    The DoubleConverter class allows you to convert arbitrary values into doubles using extended conversion rules.

   
---

### Description

The DoubleConverter class allows you to convert arbitrary values into doubles using the following extended conversion rules:

 - Strings are converted to double values

 - DateTime: total number of milliseconds since unix epoch
    
 - Boolean: 1 for true and 0 for false  

### Static methods

#### toDouble
Converts a value into a double or returns 0 when the conversion is not possible.  
See [toDoubleWithDefault](#todoublewithdefault)

> `public static` double toDouble(Object value)

- **value**: Object - value to convert.
- **returns**: number - double value or 0 when the conversion is not supported.

#### toDoubleWithDefault
Converts value into integer or returns default value when the conversion is not possible.

> `public static` double toDoubleWithDefault(Object value, double defaultValue)

- **value**: Object - value to convert.
- **defaultValue**: double - default value.
- **returns**: double - double value or default when the conversion is not supported.

#### toNullableDouble
Converts a value into a double or returns null when the conversion is not possible.

> `public static` Double toNullableDouble(Object value)

- **value**: Object - value to convert.
- **returns**: Double - double value or null when the conversion is not supported.

### Examples

```java
{
  double value1 = DoubleConverter.toNullableDouble("ABC"); // Result: null
  double value2 = DoubleConverter.toNullableDouble("123.456"); // Result: 123.456
  double value3 = DoubleConverter.toNullableDouble(true); // Result: 1
  double value4 = DoubleConverter.toNullableDouble(new Date()); // Result: current milliseconds
  }

```
