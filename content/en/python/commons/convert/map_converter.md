---
type: docs
title: "MapConverter"
linkTitle: "MapConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values into map objects using extended conversion rules:

    - Objects: property names as keys, property values as values
    
    - Arrays: element indexes as keys, elements as values
---


**Example:**

```python
value1 = MapConverter.to_nullable_map("ABC")        # Result: None
value2 = MapConverter.to_nullable_map({ key: 123 }) # Result: { key: 123 }
value3 = MapConverter.to_nullable_map([1,2,3])      # Result: { "0": 1, "1": 2, "2": 3 }

```

### Methods

#### toMap
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
Converts value into map object or returns null when conversion is not possible.

> `static` to_nullable_map(value: Any): Any

- **value**: Any - the value to convert.
- **returns**: Any - map object or null when conversion is not supported.