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

### Funcs

#### FromJson
Converts value from JSON string

> FromJson(value string) (interface{}, error)

- **value**: string - the JSON string to convert.
- **returns**: (interface{}, error) - converted object value or null when value is null.

#### FromJsonAs
Converts JSON string into a value of type specified by a TypeCode.

> FromJsonAs(result interface{}, value string) (interface{}, error) 

- **result**: interface{} - the TypeCode for the data type into which 'value' is to be converted.
- **value**: string - the JSON string to convert.
- **returns**: (interface{}, error) - converted object value or null when value is null.

#### ToJson
Converts value into JSON string.

> ToJson(value interface{}) (string, error)

- **value**: any - the value to convert.
- **returns**: (string, error) - JSON string or null when value is null.

#### toMap
Converts JSON string into map object or returns empty map when conversion is not possible.
See [LongConverter.ToNullableLong](../long_converter/#tonullablelong)

> (c *TJsonConverter) ToMap(value string) map[string]interface{}

- **value**: string - the JSON string to convert.
- **returns**: map[string]interface{} - Map object value or empty object when conversion is not supported.

#### ToMapWithDefault
Converts JSON string into map object or returns default value when conversion is not possible.

> (c *TJsonConverter) ToMapWithDefault(value string, defaultValue map[string]interface{}) map[string]interface{}

- **value**: string - the JSON string to convert.
- **defaultValue**: map[string]interface{} - the default value.
- **returns**: map[string]interface{} - Map object value or default when conversion is not supported.


#### ToNullableMap
Converts JSON string into map object or returns null when conversion is not possible.  
See [MapConverter.ToNullableMap](../map_converter/#tonullablemap)

> (c *TJsonConverter) ToNullableMap(value string) *map[string]interface{}

- **value**: string - the JSON string to convert.
- **returns**: *map[string]interface{} - Map object value or null when conversion is not supported.


### Examples

```go
value1, _ := convert.FromJson("{\"key\":123}")
value2 := convert.JsonConverter.ToMap("{\"key\":123}")
value3, _ := convert.ToJson(map[string]int{"key": 123})

fmt.Println(value1) // map[key:123]
fmt.Println(value2) // map[key:123]
fmt.Println(value3) // {"key":123}

```
