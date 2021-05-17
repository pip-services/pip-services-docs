---
type: docs
title: "MapConverter"
linkTitle: "MapConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    The MapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.
---

### Description
The MapConverter class allows you to convert arbitrary values into map objects using the following extended conversion rules:

- Objects: property names as keys, property values as values   
- Arrays: element indexes as keys, elements as values

### Static methods

#### to_map
Converts value into map object or returns empty map when conversion is not possible

> `static` to_map(value: Any): Any

- **value**: Any - the value to convert.
- **returns**: Any - map object or empty map when conversion is not supported.

#### to_map_with_default
Converts value into map object or returns default when conversion is not possible

> `static` toMapWithDefault(value: Any, default_value: Any): Any

- **value**: Any - the value to convert.
- **default_value**: Any - the default value.
- **returns**: Any - map object or empty map when conversion is not supported.

#### to_nullable_map
Converts value into map object or returns None when conversion is not possible.

> `static` to_nullable_map(value: Any): Any

- **value**: Any - the value to convert.
- **returns**: Any - map object or None when conversion is not supported.


### Examples

```python
value1 = MapConverter.to_nullable_map("ABC")        # Returns None
value2 = MapConverter.to_nullable_map({ key: 123 }) # Returns { key: 123 }
value3 = MapConverter.to_nullable_map([1,2,3])      # Returns { "0": 1, "1": 2, "2": 3 }

```
