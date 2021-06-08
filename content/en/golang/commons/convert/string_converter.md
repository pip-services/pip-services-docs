---
type: docs
title: "StringConverter"
linkTitle: "StringConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
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

### Funcs

#### ToNullableString
Converts value into string or returns null when value is null.

> (c *TStringConverter) ToNullableString(value interface{}) *string

- **value**: interface{} - the value to convert.
- **returns**: *string - string value or null when value is null.

#### ToString
Converts value into string or returns "" when value is null.

> (c *TStringConverter) ToString(value interface{}) string

- **value**: interface{} - the value to convert.
- **returns**: string - string value or "" when value is null.

#### ToStringWithDefault
Converts value into string or returns default when value is null.

> (c *TStringConverter) ToStringWithDefault(value interface{}, defaultValue string) string

- **value**: interface{} - the value to convert.
- **defaultValue**: string - the default value.
- **returns**: string - string value or default when value is null.


### Examples

```go
var value1 = convert.StringConverter.ToString(123.456)
var value2 = convert.StringConverter.ToString(true)
var value3 = convert.StringConverter.ToString(time.Now())
var value4 = convert.StringConverter.ToString([...]int{1, 2, 3})

fmt.Println(value1) // 123.456
fmt.Println(value2) // true
fmt.Println(value3) // 2019-08-20T23:54:47+03:00
fmt.Println(value4) // 1,2,3
```
