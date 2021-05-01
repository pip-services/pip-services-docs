---
type: docs
title: "RecursiveMapConverter"
linkTitle: "RecursiveMapConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values into map objects using extended conversion rules.

---

### Description
 The RecursiveMapConverter class converts arbitrary values into map objects using extended conversion rules.
 
 Important points:
 
 - This class is similar to [MapConverter](../map_converter). The difference is that it recursively converts all values stored in objects and arrays.

### Methods

#### toMap
Converts value into map object or returns empty map when conversion is not possible

> `static` to_map(value: Any): Any

- **value**: Any - the value to convert.
- **returns**: Any - map object or empty map when conversion is not supported.

#### to_map_with_default
Converts value into map object or returns default when conversion is not possible

> `static` to_map_with_default(value: Any, default_value: Any): Any

- **value**: Any - the value to convert.
- **default_value**: Any - the default value.
- **returns**: Any - map object or empty map when conversion is not supported.

#### to_nullable_map
Converts value into map object or returns null when conversion is not possible.

> `static` to_nullable_map(value: Any): Any

- **value**: Any - the value to convert.
- **returns**: Any - map object or null when conversion is not supported.

**Example:**

```python
value1 = RecursiveMapConverter.to_nullable_map({ 'key': 123 }) # Returns {'key': 123}
value2 = RecursiveMapConverter.to_nullable_map([1,[2,3]])      # Returns {0: 1, 1: {0: 2, 1: 3}}
```
