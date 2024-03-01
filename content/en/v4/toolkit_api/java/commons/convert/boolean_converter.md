---
type: docs
title: "BooleanConverter"
linkTitle: "BooleanConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    The BooleanConverter class allows you to convert different values into boolean values using extended conversion rules.
    
---

### Description    

The BooleanConverter class allows you to convert different values into boolean values using the following rules:

- Numbers: <>0 are true, =0 are false
    
- Strings: "true", "yes", "T", "Y", "1" are true; "false", "no", "F", "N" are false

- DateTime: <>0 total milliseconds are true, =0 are false


### Static methods

#### toBoolean
Converts a value into a boolean or returns false when conversion is not possible.

> `public static` boolean toBoolean(Object value)

- **value**: Object - value to convert.
- **returns**: boolean - boolean value or false when the conversion is not supported.

#### toBooleanWithDefault
Converts a value into a boolean or returns a given default value when the conversion is not possible

> `public static` boolean toBooleanWithDefault(Object value, boolean defaultValue)

- **value**: Object - value to convert.
- **defaultValue**: boolean - default value
- **returns**: boolean - boolean value or given default when the conversion is not supported.


#### toNullableBoolean
Converts a value into boolean or returns null when the conversion is not possible.

> `public static` Boolean toNullableBoolean(Object value)

- **value**: Object - value to convert.
- **returns**: Boolean - boolean value or null when the convertion is not supported.

### Examples

```java
 {
  boolean value1 = BooleanConverter.toNullableBoolean(true); // true
  boolean value2 = BooleanConverter.toNullableBoolean("yes"); // true
  boolean value3 = BooleanConverter.toNullableBoolean(1); // true
  boolean value4 = BooleanConverter.toNullableBoolean({}); // null
  }
```
