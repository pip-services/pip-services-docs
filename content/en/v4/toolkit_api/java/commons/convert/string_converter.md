---
type: docs
title: "StringConverter"
linkTitle: "StringConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    The StringConverter class allows you to convert arbitrary values into strings.

---

### Description

 The StringConverter class allows you to convert arbitrary values into strings using the following extended conversion rules:

- Numbers: are converted with '.' as decimal point
- DateTime: using the ISO format
- Boolean: "true" for true and "false" for false
- Arrays: as comma-separated list  
- Other objects: using **toString()** method

### Static methods

#### toNullableString
Converts a value into a string or returns null when the value is null.

> `public static` String toNullableString(Object value)

- **value**: Object - value to convert.
- **returns**: String - string value or null when value is null.

#### toString
Converts a value into string or returns "" when the value is null.

> `public static` String toString(Object value)

- **value**: Object - value to convert.
- **returns**: String - string value or "" when value is null.

#### toStringWithDefault
Converts a value into a string or returns a given default when the value is null.

> `public static` String toStringWithDefault(Object value, String defaultValue) 

- **value**: Object - value to convert.
- **defaultValue**: String - default value.
- **returns**: String - string value or given default when value is null.


### Examples

```typescript
{
  String value1 = StringConverter.toString(123.456); // Result: "123.456"
  String value2 = StringConverter.toString(true); // Result: "true"
  String value3 = StringConverter.toString(ZonedDateTime.now()); // Result: "2018-01-01T00:00:00.00"
  String value4 = StringConverter.toString(new int[]{1, 2, 3}); // Result: "1,2,3"
  }
```
