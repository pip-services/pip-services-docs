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

### Static methods

#### ToMap
Converts value into map object or returns empty map when conversion is not possible

> (c *TMapConverter) ToMap(value interface{}) map[string]interface{}

- **value**: interface{} - the value to convert.
- **returns**: map[string]interface{} - map object or empty map when conversion is not supported.

#### ToMapWithDefault
Converts value into map object or returns default when conversion is not possible

> (c *TMapConverter) ToMapWithDefault(value interface{}, defaultValue map[string]interface{}) map[string]interface{}

- **value**: interface{} - the value to convert.
- **defaultValue**: map[string]interface{} - the default value.
- **returns**: map[string]interface{} - map object or empty map when conversion is not supported.

#### ToNullableMap
Converts value into map object or returns null when conversion is not possible.

> ToNullableMap(value interface{}) *map[string]interface{}

- **value**: interface{} - the value to convert.
- **returns**: *map[string]interface{} - map object or null when conversion is not supported.


### Examples

```go
value1 := convert.MapConverter.ToNullableMap("ABC")
value2 := convert.MapConverter.ToNullableMap(map[string]int{"key": 123})
value3 := convert.MapConverter.ToNullableMap([...]int{1, 2, 3})

fmt.Println(value1)  // <nil>
fmt.Println(*value2) // map[key:123]
fmt.Println(*value3) // map[0:1 1:2 2:3]

```
