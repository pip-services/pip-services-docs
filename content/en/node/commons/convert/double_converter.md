---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The DoubleConverter class allows you to convert arbitrary values into doubles using extended conversion rules.

   
---

### Description

The DoubleConverter class allows you to convert arbitrary values into doubles using the following extended conversion rules:

 - Strings are converted to double values

 - DateTime: total number of milliseconds since unix epoсh
    
 - Boolean: 1 for true and 0 for false  

### Static methods

#### toDouble
Converts a value into a double or returns 0 when the conversion is not possible.  
See [toDoubleWithDefault](#todoublewithdefault)

> `public static` toDouble(value: any): number

- **value**: any - value to convert.
- **returns**: number - double value or 0 when the conversion is not supported.

#### toDoubleWithDefault
Converts value into integer or returns default value when the conversion is not possible.

> `public static` toDoubleWithDefault(value: any, defaultValue: number = 0): number

- **value**: any - value to convert.
- **defaultValue**: number - default value.
- **returns**: number - double value or default when the conversion is not supported.

#### toNullableDouble
Converts a value into a double or returns null when the conversion is not possible.

> `public static` toNullableDouble(value: any): number

- **value**: any - value to convert.
- **returns**: number - double value or null when the conversion is not supported.

### Examples

```typescript
let value1 = DoubleConverter.toNullableDouble("ABC")     // Returns null
let value2 = DoubleConverter.toNullableDouble("123.456") // Returns 123.456
let value3 = DoubleConverter.toNullableDouble(True)      // Returns 1
let value4 = DoubleConverter.toNullableDouble(new Date()) // Returns current milliseconds (E.g. 1619812281454)

```
