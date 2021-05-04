---
type: docs
title: "JsonConverter"
linkTitle: "JsonConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.
---

### Description

The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.
### Static methods

#### from_json
Converts JSON string into a value of type specified by a TypeCode.

> `static` from_json(type: [TypeCode](../type_code), value: str): T

- **type**: [TypeCode](../type_code) - the TypeCode for the data type into which 'value' is to be converted.
- **value**: str - the JSON string to convert.
- **returns**: T - converted object value or null when value is null.

#### to_json
Converts value into JSON string.

> `static` to_json(value: Any): Optional[str]

- **value**: Any - the value to convert.
- **returns**: str - JSON string or null when value is null.

#### to_map
Converts JSON string into map object or returns empty map when conversion is not possible.
See [LongConverter.to_nullable_long](../long_converter/#to_nullable_long)

> `static` to_map(value: str): Any

- **value**: str - the JSON string to convert.
- **returns**: Any - Map object value or empty object when conversion is not supported.

#### to_map_with_default
Converts JSON string into map object or returns default value when conversion is not possible.

> `static` to_map_with_default(value: str, default_value: Any): Any

- **value**: str - the JSON string to convert.
- **default_value**: Any - the default value.
- **returns**: Any - Map object value or default when conversion is not supported.


#### to_nullable_map
Converts JSON string into map object or returns null when conversion is not possible.  
See [MapConverter.to_nullable_map](../map_converter/#to_nullable_map)

> `static` to_nullable_map(value: str): Any 

- **value**: str - the JSON string to convert.
- **returns**: Any - Map object value or null when conversion is not supported.


### Examples

```python
value1 = JsonConverter.to_json({'key':123}) # Returns '{"key": 123}'

```
