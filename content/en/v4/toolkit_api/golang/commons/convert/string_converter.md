---
type: docs
title: "StringConverter"
linkTitle: "StringConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
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

### Methods

#### ToNullableString
Converts a value into a string or returns nil when the value is nil.

> ToNullableString(value any) (string, bool)

- **value**: any - value to convert.
- **returns**: (string, bool) - string value and true or "" and false when value is null.

#### ToString
Converts a value into a string or returns "" when the value is nil.

> ToString(value any) string

- **value**: any - value to convert.
- **returns**: string - string value or "" when value is nil.

#### ToStringWithDefault
Converts a value into a string or returns a default value when the value is nil.

> ToStringWithDefault(value any, defaultValue string) string

- **value**: any - value to convert.
- **defaultValue**: string - default value.
- **returns**: string - string value or default value when value is nil.


### Examples

```go
value1, ok1 = convert.StringConverter.ToString(123.456)
value2, ok2 = convert.StringConverter.ToString(true)
value3, ok3 = convert.StringConverter.ToString(time.Now())
value4, ok4 = convert.StringConverter.ToString([...]int{1, 2, 3})
fmt.Println(value1, ok1) // 123.456, true
fmt.Println(value2, ok2) // true, true
fmt.Println(value3, ok3) // 2019-08-20T23:54:47+03:00, true
fmt.Println(value4, ok4) // 1,2,3, true
```

