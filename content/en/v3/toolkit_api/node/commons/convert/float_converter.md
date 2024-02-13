---
type: docs
title: "FloatConverter"
linkTitle: "FloatConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public static` toFloat(value: any): number

- **value**: any - value to convert.
- **returns**: number - float value or 0 when the conversion is not supported.

#### toFloatWithDefault
Converts a value into a float or returns a given default when the conversion is not possible.  
See [DoubleConverter.toDoubleWithDefault](../double_converter/#todoublewithdefault),  
[DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> `public static` toFloatWithDefault(value: any, defaultValue: number): number

- **value**: any - value to convert.
- **defaultValue**: number - default value.
- **returns**: number - float value or default value when the conversion is not supported.

#### toNullableFloat
Converts a value into a float or returns null when the conversion is not possible.  
See [DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> `public static` toNullableFloat(value: any): number

- **value**: any - value to convert.
- **returns**: number - float value or null when the conversion is not supported.


### Examples

```typescript
let value1 = FloatConverter.toNullableFloat("ABC"); // Result: null
let value2 = FloatConverter.toNullableFloat("123.456"); // Result: 123.456
let value3 = FloatConverter.toNullableFloat(true); // Result: 1
let value4 = FloatConverter.toNullableFloat(new Date()); // Result: current milliseconds (E.g. 1619869474907)

```
