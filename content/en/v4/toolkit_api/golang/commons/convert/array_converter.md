---
type: docs
title: "ArrayConverter"
linkTitle: "ArrayConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    The ArrayConverter class provides methods to create an array from a set of values.
---

### Description
The ArrayConverter class provides methods to create an array from a set of values. These values can be in the form of a list,  a single value or a string of comma-delimited values.    

### Methods

#### ListToArray
Converts a list into an array object with empty array as default.
Strings with comma-delimited values are split into an array of strings.
See [ToArray](#toarray)

> ListToArray(value any) []any

- **value**: any - list to convert.
- **returns**: []any - array object or empty array when value is nil


#### ToArray
Converts value into an array object with empty array as default.
Single values are converted into arrays with single element.

> ToArray(value any) []any

- **value**: any - value to convert.
- **returns**: []any - array object or empty array when value is nil.

#### ToArrayWithDefault
Converts value into array object with specified default.
Single values are converted into arrays with single element.

> ToArrayWithDefault(value any, defaultValue []any) []any

- **value**: any - value to convert.
- **defaultValue**: []any - default array object.
- **returns**: []any - array object or default array when value is nil.

#### ToNullableArray
Converts value into array object.
Single values are converted into arrays with a single element.

> ToNullableArray(value any) ([]any, bool)

- **value**: any - value to convert.
- **returns**: []any - array object and true or null and false when value is null.

### Examples

```go
value1 := convert.ArrayConverter.ToArray([...]int{1, 2})
value2 := convert.ArrayConverter.ToArray(1)
value3 := convert.ArrayConverter.ListToArray("1,2,3")

fmt.Println(value1) // [1 2]
fmt.Println(value2) // [1]
fmt.Println(value3) // [1 2 3]
```

