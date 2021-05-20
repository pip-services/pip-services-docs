---
type: docs
title: "StringConverter"
linkTitle: "StringConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The StringConverter class allows you to convert arbitrary values into strings.

---

### Description

 The StringConverter class allows you to convert arbitrary values into strings using the following extended conversion rules:

- Numbers: are converted with '.' as decimal point
- DateTime: using ISO format
- Boolean: "true" for true and "false" for false
- Arrays: as comma-separated list  
- Other objects: using **ToString()** method

### Static methods

#### ToNullableString
Converts value into string or returns null when value is null.

> `public static` string ToNullableString(object value)

- **value**: object - the value to convert.
- **returns**: string - string value or null when value is null.

#### ToString
Converts value into string or returns "" when value is null.

> `public static` string ToString(object value)

- **value**: object - the value to convert.
- **returns**: string - string value or "" when value is null.

#### ToStringWithDefault
Converts value into string or returns default when value is null.

> `public static` string ToStringWithDefault(object value, string defaultValue)

- **value**: object - the value to convert.
- **defaultValue**: string - the default value.
- **returns**: string - string value or default when value is null.


### Examples

```cs
var value1 = StringConverter.ToString(123.456); // Result: "123.456"
var value2 = StringConverter.ToString(true); // Result: "true"
var value3 = StringConverter.ToString(ZonedDateTime.now()); // Result: "2018-01-01T00:00:00.00"
var value4 = StringConverter.ToString(new int[]{1, 2, 3}); // Result: "1,2,3"
```
