---
type: docs
title: "JsonConverter"
linkTitle: "JsonConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.
---

### Description

The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.

### Static methods

#### fromJson
Converts a JSON string into a value of the type specified by a TypeCode.

> `public static` <T> T fromJson(Class<T> type, String value) throws JsonMappingException, JsonParseException, IOException

- **type**: Class<T> - the Class type for the data type into which 'value' is to be converted.
- **value**: String - JSON string to convert.
- **returns**: <T> T - converted object value or null when value is null.

#### toJson
Converts value into a JSON string.

> `public static` String toJson(Object value) throws JsonProcessingException

- **value**: Object - value to convert.
- **returns**: String - JSON string or null when value is null.

#### toMap
Converts JSON string into a map object or returns an empty map when the conversion is not possible.
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

> `public static` Map<String, Object> toMap(String value)

- **value**: String - JSON string to convert.
- **returns**: Map<String, Object> - Map object value or empty object when the conversion is not supported.

#### toMapWithDefault
Converts a JSON string into a map object or returns a default value when the conversion is not possible.

> `public static` Map<String, Object> toMapWithDefault(String value, Map<String, Object> defaultValue)

- **value**: String - JSON string to convert.
- **defaultValue**: Map<String, Object> - default value.
- **returns**: Map<String, Object> - Map object or given default when the conversion is not supported.


#### toNullableMap
Converts a JSON string into a map object or returns null when the conversion is not possible.  
See [MapConverter.toNullableMap](../map_converter/#tonullablemap)

> `public static` Map<String, Object> toNullableMap(String value)

- **value**: String - JSON string to convert.
- **returns**: Map<String, Object> - Map object or null when the conversion is not supported.


### Examples

```java
{
  T value1 = JsonConverter.fromJson("{\"key\":123}"); // Result: { key: 123 }
  T value2 = JsonConverter.toMap({ key: 123}); // Result: "{\"key\":123}"
  }
```
