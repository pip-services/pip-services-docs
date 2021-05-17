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
Converts JSON string into a value of type specified by a TypeCode.

> `public static` fromJson\<T\>(type: [TypeCode](../type_code), value: string): T

- **type**: [TypeCode](../type_code) - the TypeCode for the data type into which 'value' is to be converted.
- **value**: string - the JSON string to convert.
- **returns**: T - converted object value or null when value is null.

#### toJson
Converts value into JSON string.

> `public static` toJson(value: any): string

- **value**: any - the value to convert.
- **returns**: string - JSON string or null when value is null.

#### toMap
Converts JSON string into map object or returns empty map when conversion is not possible.
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

> `public static` toMap(value: string): any

- **value**: string - the JSON string to convert.
- **returns**: any - Map object value or empty object when conversion is not supported.

#### toMapWithDefault
Converts JSON string into map object or returns default value when conversion is not possible.

> `public static` toMapWithDefault(value: string, defaultValue: any): any

- **value**: string - the JSON string to convert.
- **defaultValue**: any - the default value.
- **returns**: any - Map object value or default when conversion is not supported.


#### toNullableMap
Converts JSON string into map object or returns null when conversion is not possible.  
See [MapConverter.toNullableMap](../map_converter/#tonullablemap)

> `public static` toNullableMap(value: string): any 

- **value**: string - the JSON string to convert.
- **returns**: any - Map object value or null when conversion is not supported.


### Examples

```typescript
let value1 = JsonConverter.fromJson("{\"key\":123}"); // Result: { key: 123 }
let value2 = JsonConverter.toMap({ key: 123}); // Result: "{\"key\":123}"

```
