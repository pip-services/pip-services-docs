---
type: docs
title: "BooleanConverter"
linkTitle: "BooleanConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Converts arbitrary values to boolean values using extended conversion rules:
    - Numbers: <>0 are true, =0 are false
    - Strings: "true", "yes", "T", "Y", "1" are true; "false", "no", "F", "N" are false
    - DateTime: <>0 total milliseconds are true, =0 are false
---

**Example:**

```typescript
let value1 = BooleanConverter.toNullableBoolean(true); // true
let value2 = BooleanConverter.toNullableBoolean("yes"); // true
let value3 = BooleanConverter.toNullableBoolean(123); // true
let value4 = BooleanConverter.toNullableBoolean({}); // null

```

### Methods

#### toBoolean
Converts value into boolean or returns false when conversion is not possible.

> `public static` toBoolean(value: any): boolean

- **value**: any - the value to convert.
- **returns**: boolean - boolean value or false when conversion is not supported.

#### toBooleanWithDefault
Converts value into boolean or returns default value when conversion is not possible

> `public static` toBooleanWithDefault(value: any, defaultValue: boolean = false): boolean

- **value**: any - the value to convert.
- **defaultValue**: boolean = false - the default value
- **returns**: boolean - boolean value or default when conversion is not supported.


#### toNullableBoolean
Converts value into boolean or returns null when conversion is not possible.

> `public static` toNullableBoolean(value: any): boolean

- **value**: any - the value to convert.
- **returns**: boolean - boolean value or null when convertion is not supported.