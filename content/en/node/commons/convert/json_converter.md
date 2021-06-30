---
type: docs
title: "JsonConverter"
linkTitle: "JsonConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.
---

### Description

The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.

### Static methods

#### fromJson
Converts a JSON string into a value of the type specified by a TypeCode.

> `public static` fromJson\<T\>(type: [TypeCode](../type_code), value: string): T

- **type**: [TypeCode](../type_code) - TypeCode for the data type into which 'value' is to be converted.
- **value**: string - JSON string to convert.
- **returns**: T - converted object value or null when value is null.

#### toJson
Converts value into a JSON string.

> `public static` toJson(value: any): string

- **value**: any - value to convert.
- **returns**: string - JSON string or null when value is null.

#### toMap
Converts JSON string into a map object or returns an empty map when the conversion is not possible.
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

> `public static` toMap(value: string): any

- **value**: string - JSON string to convert.
- **returns**: any - Map object value or empty object when the conversion is not supported.

#### toMapWithDefault
Converts a JSON string into a map object or returns a default value when the conversion is not possible.

> `public static` toMapWithDefault(value: string, defaultValue: any): any

- **value**: string - JSON string to convert.
- **defaultValue**: any - default value.
- **returns**: any - Map object or given default when the conversion is not supported.


#### toNullableMap
Converts a JSON string into a map object or returns null when the conversion is not possible.  
See [MapConverter.toNullableMap](../map_converter/#tonullablemap)

> `public static` toNullableMap(value: string): any 

- **value**: string - JSON string to convert.
- **returns**: any - Map object or null when the conversion is not supported.


### Examples

```typescript
let value1 = JsonConverter.fromJson("{\"key\":123}"); // Result: { key: 123 }
let value2 = JsonConverter.toMap({ key: 123}); // Result: "{\"key\":123}"

```
