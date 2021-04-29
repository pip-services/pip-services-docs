---
type: docs
title: "RecursiveMapConverter"
linkTitle: "RecursiveMapConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values into map objects using extended conversion rules.
    This class is similar to [MapConverter](../map_converter), but is recursively converts all values
    stored in objects and arrays.
---


**Example:**

```python
value1 = RecursiveMapConverted.to_nullable_map("ABC")        # Result: None
value2 = RecursiveMapConverted.to_nullable_map({ key: 123 }) # Result: { key: 123 }
value3 = RecursiveMapConverted.to_nullable_map([1,[2,3])     # Result: { "0": 1, { "0": 2, "1": 3 } }
```

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