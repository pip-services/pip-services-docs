---
type: docs
title: "BooleanConverter"
linkTitle: "BooleanConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The BooleanConverter class allows you to convert different values to boolean values using extended conversion rules.
    
---

### Description    

The BooleanConverter class allows you to convert different values to boolean values using the following rules:

- Numbers: <>0 are true, =0 are false
    
- Strings: "true", "yes", "T", "Y", "1" are true; "false", "no", "F", "N" are false

- DateTime: <>0 total milliseconds are true, =0 are false


### Static methods

#### toBoolean
Converts a value into a boolean or returns false when conversion is not possible.

> `public static` toBoolean(value: any): boolean

- **value**: any - value to convert.
- **returns**: boolean - boolean value or false when the conversion is not supported.

#### toBooleanWithDefault
Converts a value into a boolean or returns a given default value when the conversion is not possible

> `public static` toBooleanWithDefault(value: any, defaultValue: boolean = false): boolean

- **value**: any - value to convert.
- **defaultValue**: boolean - default value
- **returns**: boolean - boolean value or given default when the conversion is not supported.


#### toNullableBoolean
Converts a value into boolean or returns null when the conversion is not possible.

> `public static` toNullableBoolean(value: any): boolean

- **value**: any - value to convert.
- **returns**: boolean - boolean value or null when the convertion is not supported.

### Examples

```typescript
let value1 = BooleanConverter.toNullableBoolean(True)     // Returns True
let value2 = BooleanConverter.toNullableBoolean("yes")    // Returns True
let value3 = BooleanConverter.toNullableBoolean(123)      // Returns null
let value4 = BooleanConverter.toNullableBoolean({})       // Returns null

let value5 = BooleanConverter.toBooleanWithDefault(True,"verdadero")     // Returns True
let value6 = BooleanConverter.toBooleanWithDefault(123,"verdadero")      // Returns verdadero

let value7 = BooleanConverter.toBoolean("yes")     // Returns True

```
