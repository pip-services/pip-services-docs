---
type: docs
title: "RecursiveMapConverter"
linkTitle: "RecursiveMapConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Converts arbitrary values into map objects using extended conversion rules.
    This class is similar to [MapConverter](../map_converter), but is recursively converts all values
    stored in objects and arrays.
---


**Example:**

```typescript
let value1 = RecursiveMapConverted.toNullableMap("ABC"); // Result: null
let value2 = RecursiveMapConverted.toNullableMap({ key: 123 }); // Result: { key: 123 }
let value3 = RecursiveMapConverted.toNullableMap([1,[2,3]); // Result: { "0": 1, { "0": 2, "1": 3 } }
```

### Methods

#### toMap
Converts value into map object or returns empty map when conversion is not possible

> `public static` toMap(value: any): any

- **value**: any - the value to convert.
- **returns**: any - map object or empty map when conversion is not supported.

#### toMapWithDefault
Converts value into map object or returns default when conversion is not possible

> `public static` toMapWithDefault(value: any, defaultValue: any): any

- **value**: any - the value to convert.
- **defaultValue**: any - the default value.
- **returns**: any - map object or empty map when conversion is not supported.

#### toNullableMap
Converts value into map object or returns null when conversion is not possible.

> `public static` toNullableMap(value: any): any

- **value**: any - the value to convert.
- **returns**: any - map object or null when conversion is not supported.