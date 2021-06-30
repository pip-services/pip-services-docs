---
type: docs
title: "IntegerConverter"
linkTitle: "IntegerConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The IntegerConverter class allows you to convert arbitrary values into integers using extended conversion rules.

---

### Description
    
The IntegerConverter class allows you to convert arbitrary values into integers using the following extended conversion rules:

- Strings are converted to floats, then to integers
- DateTime: total number of milliseconds since unix epoсh  
- Boolean: 1 for True and 0 for False

### Static methods

#### toInteger
Converts a value into an integer or returns 0 when the conversion is not possible.  
See [LongConverter.toLong](../long_converter/#tolong),  
[LongConverter.toLongWithDefault](../long_converter/#tolongwithdefault)

> `public static` toInteger(value: any): number

- **value**: any - value to convert.
- **returns**: number - integer value or 0 when the conversion is not supported.

#### toIntegerWithDefault
Converts a value into an integer or returns a given default value when the conversion is not possible.
See [LongConverter.toLongWithDefault](../long_converter/#tolongwithdefault),  
[LongConverter.toNullableLong](../long_converter/#tonullablelong)

> `public static` toIntegerWithDefault(value: any, defaultValue: number): number

- **value**: any - value to convert.
- **defaultValue**: number - default value.
- **returns**: number - integer value or given default when the conversion is not supported. 

#### toNullableInteger
Converts a value into an integer or returns null when the conversion is not possible.
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

> `public static` toNullableInteger(value: any): number

- **value**: any - value to convert.
- **returns**: number - integer value or null when the conversion is not supported.

### Examples

```typescript
let value1 = IntegerConverter.toNullableInteger("ABC"); // Result: null
let value2 = IntegerConverter.toNullableInteger("123.456"); // Result: 123
let value3 = IntegerConverter.toNullableInteger(true); // Result: 1
let value4 = IntegerConverter.toNullableInteger(new Date()); // Result: current milliseconds (E.g. 1619869474907)

```
