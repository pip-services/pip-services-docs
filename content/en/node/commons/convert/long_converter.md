---
type: docs
title: "LongConverter"
linkTitle: "LongConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The LongConverter class allows you to convert arbitrary values into longs using extended conversion rules.
---

### Description

The LongConverter class allows you to convert arbitrary values into longs using the following extended conversion rules:

- Strings are converted to floats, then to longs
- DateTime: total number of milliseconds since unix epoсh   
- Boolean: 1 for true and 0 for false

### Static methods

#### toLong
Converts value into long or returns 0 when conversion is not possible.

> `public static` toLong(value: any): number

- **value**: any - the value to convert.
- **returns**: number - long value or 0 when conversion is not supported.

#### toLongWithDefault
Converts value into integer or returns default when conversion is not possible.

> `public static` toLongWithDefault(value: any, defaultValue: number): number

- **value**: any - the value to convert.
- **defaultValue**: number - the default value.
- **returns**: number - long value or default when conversion is not supported

#### toNullableLong
Converts value into long or returns null when conversion is not possible.

> `public static` toNullableLong(value: any): number

- **value**: any - the value to convert.
- **returns**: number - long value or null when conversion is not supported.

### Examples

```typescript
let value1 = LongConverter.toNullableLong("ABC"); // Result: null
let value2 = LongConverter.toNullableLong("123.456"); // Result: 123
let value3 = LongConverter.toNullableLong(true); // Result: 1
let value4 = LongConverter.toNullableLong(new Date()); // Result: current milliseconds (E.g. 1619869474907)

```
