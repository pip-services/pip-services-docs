---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Converts arbitrary values into double using extended conversion rules:
    - Strings are converted to double values
    - DateTime: total number of milliseconds since unix epoсh
    - Boolean: 1 for true and 0 for false  
---


**Example:**

```typescript
let value1 = DoubleConverter.toNullableDouble("ABC"); // Result: null
let value2 = DoubleConverter.toNullableDouble("123.456"); // Result: 123.456
let value3 = DoubleConverter.toNullableDouble(true); // Result: 1
let value4 = DoubleConverter.toNullableDouble(new Date()); // Result: current milliseconds

```

### Methods

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
- **defaultValue**: number = null - the default value.
- **returns**: number - double value or default when conversion is not supported.

#### toNullableDouble
Converts value into doubles or returns null when conversion is not possible.

> `public static` toNullableDouble(value: any): number

- **value**: any - the value to convert.
- **returns**: number - double value or null when conversion is not supported.