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

#### to_long
Converts value into long or returns 0 when conversion is not possible.

> `static` to_long(value: Any): float

- **value**: Any - the value to convert.
- **returns**: float - long value or 0 when conversion is not supported.

#### to_long_with_default
Converts value into integer or returns default when conversion is not possible.

> `static` to_long_with_default(value: Any, defaultValue: float): float

- **value**: Any - the value to convert.
- **default_value**: float - the default value.
- **returns**: float - long value or default when conversion is not supported

#### to_nullable_long
Converts value into long or returns None when conversion is not possible.

> `static` to_nullable_long(value: Any): Optional[float]

- **value**: Any - the value to convert.
- **returns**: float - long value or None when conversion is not supported.

### Examples

```typescript
let value1 = LongConverter.toNullableLong("ABC"); // Result: null
let value2 = LongConverter.toNullableLong("123.456"); // Result: 123
let value3 = LongConverter.toNullableLong(true); // Result: 1
let value4 = LongConverter.toNullableLong(new Date()); // Result: current milliseconds (E.g. 1619869474907)

```
