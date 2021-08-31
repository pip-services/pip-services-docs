---
type: docs
title: "JsonConverter"
linkTitle: "JsonConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.
---

### Description

The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.

### Static methods

#### fromJson
Converts a JSON string into a value of the type specified by a TypeCode.

> `public static` fromJson\<T\>(type: [TypeCode](../type_code), value: String): T

- **type**: [TypeCode](../type_code) - TypeCode for the data type into which 'value' is to be converted.
- **value**: String - JSON string to convert.
- **returns**: T - converted object value or null when value is null.

#### toJson
Converts a JSON string into a value of type specified by a TypeCode.

> `static` T fromJson\<T\>([TypeCode](../type_code) type, String value)

- **type**: [TypeCode](../type_code) - TypeCode for the data type into which 'value' is to be converted.
- **value**: String - value to convert.
- **returns**: T - JSON string or null when value is null.

#### toMap
Converts JSON string into a map object or returns an empty map when the conversion is not possible.
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

> `static` Map\<String, dynamic\> toMap(String value)

- **value**: String - JSON string to convert.
- **returns**: Map\<String, dynamic\> - Map object value or empty object when the conversion is not supported.

#### toMapWithDefault
Converts a JSON string into a map object or returns a default value when the conversion is not possible.

> `static` Map\<String, dynamic\> toMapWithDefault(String value, Map\<String, dynamic\> defaultValue)

- **value**: String - JSON string to convert.
- **defaultValue**: Map\<String, dynamic\> - default value.
- **returns**: Map\<String, dynamic\> - Map object or given default when the conversion is not supported.


#### toNullableMap
Converts a JSON string into a map object or returns null when the conversion is not possible.  
See [MapConverter.toNullableMap](../map_converter/#tonullablemap)

> `static` Map\<String, dynamic\> toNullableMap(String value)

- **value**: String - JSON string to convert.
- **returns**: Map\<String, dynamic\> - Map object or null when the conversion is not supported.


### Examples

```dart
var value1 = JsonConverter.fromJson('{\'key\':123}'); // Result: { 'key': 123 }
var value2 = JsonConverter.toMap({ 'key': 123 }); // Result: '{ 'key': 123 }'

```
