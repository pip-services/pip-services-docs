---
type: docs
title: "ArrayConverter"
linkTitle: "ArrayConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    The ArrayConverter class provides methods to create an array from a set of values.
---

### Description
The ArrayConverter class provides methods to create an array from a set of values. These values can be in the form of a list,  a single value or a string of comma-delimited values.    

### Methods

#### ListToArray
Converts a list into array object with empty array as default.
Strings with comma-delimited values are split into array of strings.
See [ToArray](#toarray)

> ListToArray(value interface{}) []interface{}

- **value**: interface{} - the list to convert.
- **returns**: []interface{} - array object or empty array when value is null


#### ToArray
Converts value into array object with empty array as default.
Single values are converted into arrays with single element.

> ToArray(value interface{}) []interface{}

- **value**: interface{} - the value to convert.
- **returns**: []interface{} - array object or empty array when value is null.

#### ToArrayWithDefault
Converts value into array object with specified default.
Single values are converted into arrays with single element.

> ToArrayWithDefault(value interface{}, defaultValue []interface{}) []interface{}

- **value**: interface{} - the value to convert.
- **defaultValue**: []interface{} - default array object.
- **returns**: []interface{} - array object or default array when value is null.

#### ToNullableArray
Converts value into array object.
Single values are converted into arrays with a single element.

> ToNullableArray(value interface{}) *[]interface{}

- **value**: interface{} - the value to convert.
- **returns**: *[]interface{} - array object or null when value is null.

### Examples

```go
value1 := convert.ArrayConverter.ToArray([...]int{1, 2})
value2 := convert.ArrayConverter.ToArray(1)
value3 := convert.ArrayConverter.ListToArray("1,2,3")

fmt.Println(value1) // [1 2]
fmt.Println(value2) // [1]
fmt.Println(value3) // [1 2 3]
TArrayConverter struct{}
```
