---
type: docs
title: "FloatConverter"
linkTitle: "FloatConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Converts arbitrary values into float using extended conversion rules:
    - Strings are converted to float values
    - DateTime: total number of milliseconds since unix epoсh
    - Boolean: 1 for true and 0 for false
---


**Example:**

```typescript
let value1 = FloatConverter.toNullableFloat("ABC"); // Result: null
let value2 = FloatConverter.toNullableFloat("123.456"); // Result: 123.456
let value3 = FloatConverter.toNullableFloat(true); // Result: 1
let value4 = FloatConverter.toNullableFloat(new Date()); // Result: current milliseconds

```

### Methods

#### toFloat
Converts value into float or returns 0 when conversion is not possible.  
See [DoubleConverter.toDouble](../double_converter/#todouble)

> `public static` toFloat(value: any): number

- **value**: any - the value to convert.
- **returns**: number - float value or 0 when conversion is not supported.

#### toFloatWithDefault
Converts value into float or returns default when conversion is not possible.  
See [DoubleConverter.toDoubleWithDefault](../double_converter/#todoublewithdefault),  
[DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> `public static` toFloatWithDefault(value: any, defaultValue: number): number

- **value**: any - the value to convert.
- **defaultValue**: number = null - the default value.
- **returns**: number - float value or default value when conversion is not supported.

#### toNullableFloat
Converts value into float or returns null when conversion is not possible.  
See [DoubleConverter.toNullableDouble](../double_converter/#tonullabledouble)

> `public static` toNullableFloat(value: any): number

- **value**: any - the value to convert.
- **returns**: number - float value or null when conversion is not supported.