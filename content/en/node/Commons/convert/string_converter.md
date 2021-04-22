---
type: docs
title: "StringConverter"
linkTitle: "StringConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Converts arbitrary values into strings using extended conversion rules:
    - Numbers: are converted with '.' as decimal point
    - DateTime: using ISO format
    - Boolean: "true" for true and "false" for false
    - Arrays: as comma-separated list
    - Other objects: using *toString()* method
---


**Example:**

```typescript
let value1 = StringConverter.ToString(123.456); // Result: "123.456"
let value2 = StringConverter.ToString(true); // Result: "true"
let value3 = StringConverter.ToString(new Date(2018,0,1)); // Result: "2018-01-01T00:00:00.00"
let value4 = StringConverter.ToString([1,2,3]); // Result: "1,2,3"
```

### Methods

#### toNullableString
Converts value into string or returns null when value is null.

> `public static` toNullableString(value: any): string

- **value**: any - the value to convert.
- **returns**: string - string value or null when value is null.

#### toString
Converts value into string or returns "" when value is null.

> `public static` toString(value: any): string

- **value**: any - the value to convert.
- **returns**: string - string value or "" when value is null.

#### toStringWithDefault
Converts value into string or returns default when value is null.

> `public static` toStringWithDefault(value: any, defaultValue: string): string

- **value**: any - the value to convert.
- **defaultValue**: string - the default value.
- **returns**: string - string value or default when value is null.