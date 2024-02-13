---
type: docs
title: "JsonConverter"
linkTitle: "JsonConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.
---

### Description

The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.

### Constructors

#### NewDefaultCustomTypeJsonConvertor
Creates new instance of Json converter

> NewDefaultCustomTypeJsonConvertor\[T any\]() IJSONEngine\[T\]

### Methods

#### FromJson
Converts value from JSON string

> FromJson(value string) (T, error)

- **value**: string - JSON string to convert.
- **returns**: (T, error) - converted object value or nil when value is nil.

#### ToJson
Converts a value into a JSON string.

> ToJson(value any) (string, error)

- **value**: any - value to convert.
- **returns**: (string, error) - JSON string or nil when value is nil.

#### SetUpJSONEngine
SetUpJSONEngine allows overriding JSON engine

> SetUpJSONEngine(jsonEngine IJSONEngine\[T\]) bool

- **jsonEngine**: IJSONEngine\[T\] - setup custom json converter

#### ToMap
Converts a JSON string into a map object or returns an empty map when conversion is not possible.
See [LongConverter.ToNullableLong](../long_converter/#tonullablelong)

> ToMap(value string) map[string]any

- **value**: string - JSON string to convert.
- **returns**: map[string]any - Map object value or empty object when conversion is not supported.

#### ToMapWithDefault
Converts a JSON string into a map object or returns a default value when conversion is not possible.

> ToMapWithDefault(value string, defaultValue map[string]any) map[string]any

- **value**: string - JSON string to convert.
- **defaultValue**: map[string]any - default value.
- **returns**: map[string]any - Map object value or default when conversion is not supported.


#### ToNullableMap
Converts a JSON string into a map object or returns nil when conversion is not possible.  
See [MapConverter.ToNullableMap](../map_converter/#tonullablemap)

> ToNullableMap(value string) *map[string]any

- **value**: string - JSON string to convert.
- **returns**: *map[string]any - Map object value or nil when conversion is not supported.


### Examples

```go
value1, _ := convert.FromJson("{\"key\":123}")
value2 := convert.JsonConverter.ToMap("{\"key\":123}")
value3, _ := convert.ToJson(map[string]int{"key": 123})

fmt.Println(value1) // map[key:123]
fmt.Println(value2) // map[key:123]
fmt.Println(value3) // {"key":123}
```

