---
type: docs
title: "MapConverter"
linkTitle: "MapConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The MapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.
---

### Description
The MapConverter class allows you to convert arbitrary values into map objects using the following extended conversion rules:

- Objects: property names as keys, property values as values   
- Arrays: element indexes as keys, elements as values

### Static methods

#### toMap
Converts a value into a map object or returns an empty map when the conversion is not possible.

> `public static` toMap(value: any): any

- **value**: any - value to convert.
- **returns**: any - map object or empty map when the conversion is not supported.

#### toMapWithDefault
Converts a value into a map object or returns a given default when the conversion is not possible.

> `public static` toMapWithDefault(value: any, defaultValue: any): any

- **value**: any - value to convert.
- **defaultValue**: any - default value.
- **returns**: any - map object or empty map when the conversion is not supported.

#### toNullableMap
Converts a value into a map object or returns null when the conversion is not possible.

> `public static` toNullableMap(value: any): any

- **value**: any - value to convert.
- **returns**: any - map object or null when the conversion is not supported.


### Examples

```typescript
let value1 = MapConverted.toNullableMap("ABC"); // Result: null
let value2 = MapConverted.toNullableMap({ key: 123 }); // Result: { key: 123 }
let value3 = MapConverted.toNullableMap([1,2,3]); // Result: { "0": 1, "1": 2, "2": 3 }

```
