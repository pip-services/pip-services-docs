---
type: docs
title: "MapConverter"
linkTitle: "MapConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
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

> ToMap(value interface{}) map[string]interface{}

- **value**: interface{} - value to convert.
- **returns**: map[string]interface{} - map object or empty map when conversion is not supported.

#### ToMapWithDefault
Converts a value into a map object or returns a default map when conversion is not possible

> ToMapWithDefault(value interface{}, defaultValue map[string]interface{}) map[string]interface{}

- **value**: interface{} - value to convert.
- **defaultValue**: map[string]interface{} - default value.
- **returns**: map[string]interface{} - map object or empty map when conversion is not supported.

#### ToNullableMap
Converts a value into a map object or returns nil when conversion is not possible.

> ToNullableMap(value interface{}) *map[string]interface{}

- **value**: interface{} - value to convert.
- **returns**: *map[string]interface{} - map object or nil when conversion is not supported.


### Examples

```go
value1 := convert.MapConverter.ToNullableMap("ABC")
value2 := convert.MapConverter.ToNullableMap(map[string]int{"key": 123})
value3 := convert.MapConverter.ToNullableMap([...]int{1, 2, 3})

fmt.Println(value1)  // <nil>
fmt.Println(*value2) // map[key:123]
fmt.Println(*value3) // map[0:1 1:2 2:3]

```
