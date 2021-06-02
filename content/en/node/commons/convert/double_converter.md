---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The DoubleConverter class allows you to convert arbitrary values into double using extended conversion rules.

   
---

### Description

The DoubleConverter class allows you to convert arbitrary values into double using the following extended conversion rules:

 - Strings are converted to double values

 - DateTime: total number of milliseconds since unix epoсh
    
 - Boolean: 1 for true and 0 for false  

### Static methods

#### toDouble
Converts value into doubles or returns 0 when conversion is not possible.  
See [toDoubleWithDefault](#todoublewithdefault)

> `public static` toDouble(value: any): number

- **value**: any - the value to convert.
- **returns**: number - double value or 0 when conversion is not supported.

#### toDoubleWithDefault
Converts value into integer or returns default value when conversion is not possible.

> `public static` toDoubleWithDefault(value: any, defaultValue: number = 0): number

- **value**: any - the value to convert.
- **defaultValue**: number - the default value.
- **returns**: number - double value or default when conversion is not supported.

#### toNullableDouble
Converts value into doubles or returns null when conversion is not possible.

> `public static` toNullableDouble(value: any): number

- **value**: any - the value to convert.
- **returns**: number - double value or null when conversion is not supported.

### Examples

```typescript
let value1 = DoubleConverter.toNullableDouble("ABC")     // Returns null
let value2 = DoubleConverter.toNullableDouble("123.456") // Returns 123.456
let value3 = DoubleConverter.toNullableDouble(True)      // Returns 1
let value4 = DoubleConverter.toNullableDouble(new Date()) // Returns current milliseconds (E.g. 1619812281454)

```
