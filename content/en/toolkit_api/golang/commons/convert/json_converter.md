---
type: docs
title: "JsonConverter"
linkTitle: "JsonConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.
---

### Description

The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.

### Methods

#### FromJson
Converts value from JSON string

> FromJson(value string) (interface{}, error)

- **value**: string - JSON string to convert.
- **returns**: (interface{}, error) - converted object value or nil when value is nil.

#### FromJsonAs
Converts a JSON string into a value of type specified by a TypeCode.

> FromJsonAs(result interface{}, value string) (interface{}, error) 

- **result**: interface{} - TypeCode for the data type into which 'value' is to be converted.
- **value**: string - JSON string to convert.
- **returns**: (interface{}, error) - converted object value or nil when value is nil.

#### ToJson
Converts a value into a JSON string.

> ToJson(value interface{}) (string, error)

- **value**: interface{} - value to convert.
- **returns**: (string, error) - JSON string or nil when value is nil.

#### ToMap
Converts a JSON string into a map object or returns an empty map when conversion is not possible.
See [LongConverter.ToNullableLong](../long_converter/#tonullablelong)

> ToMap(value string) map[string]interface{}

- **value**: string - JSON string to convert.
- **returns**: map[string]interface{} - Map object value or empty object when conversion is not supported.

#### ToMapWithDefault
Converts a JSON string into a map object or returns a default value when conversion is not possible.

> ToMapWithDefault(value string, defaultValue map[string]interface{}) map[string]interface{}

- **value**: string - JSON string to convert.
- **defaultValue**: map[string]interface{} - default value.
- **returns**: map[string]interface{} - Map object value or default when conversion is not supported.


#### ToNullableMap
Converts a JSON string into a map object or returns nil when conversion is not possible.  
See [MapConverter.ToNullableMap](../map_converter/#tonullablemap)

> ToNullableMap(value string) *map[string]interface{}

- **value**: string - JSON string to convert.
- **returns**: *map[string]interface{} - Map object value or nil when conversion is not supported.


### Examples

```go
value1, _ := convert.FromJson("{\"key\":123}")
value2 := convert.JsonConverter.ToMap("{\"key\":123}")
value3, _ := convert.ToJson(map[string]int{"key": 123})

fmt.Println(value1) // map[key:123]
fmt.Println(value2) // map[key:123]
fmt.Println(value3) // {"key":123}

```
