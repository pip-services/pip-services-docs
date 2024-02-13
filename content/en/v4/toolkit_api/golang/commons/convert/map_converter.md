---
type: docs
title: "MapConverter"
linkTitle: "MapConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    The MapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.
---

### Description
The MapConverter class allows you to convert arbitrary values into map objects using the following extended conversion rules:

- Objects: property names as keys, property values as values   
- Arrays: element indexes as keys, elements as values

### Methods

#### ToMap
Converts a value into a map object or returns an empty map when conversion is not possible

> ToMap(value any) map[string]any

- **value**: any - value to convert.
- **returns**: map[string]any - map object or empty map when conversion is not supported.

#### ToMapWithDefault
Converts a value into a map object or returns a default map when conversion is not possible

> ToMapWithDefault(value any, defaultValue map[string]any) map[string]any

- **value**: any - value to convert.
- **defaultValue**: map[string]any - default value.
- **returns**: map[string]any - map object or empty map when conversion is not supported.

#### ToNullableMap
Converts a value into a map object or returns nil when conversion is not possible.

> ToNullableMap(value any) (map[string]any, bool)

- **value**: any - value to convert.
- **returns**: (map[string]any, bool) - map object and true or null and false when conversion is not supported.


### Examples

```go
value1, ok1 := convert.MapConverter.ToNullableMap("ABC")
value2, ok2 := convert.MapConverter.ToNullableMap(map[string]int{"key": 123})
value3, ok3 := convert.MapConverter.ToNullableMap([...]int{1, 2, 3})

fmt.Println(value1, ok1) // <nil>, false
fmt.Println(value2, ok2) // map[key:123], true
fmt.Println(value3, ok3) // map[0:1 1:2 2:3], true

```

