---
type: docs
title: "MapConverter"
linkTitle: "MapConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The MapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.
---

### Description
The MapConverter class allows you to convert arbitrary values into map objects using the following extended conversion rules:

- Objects: property names as keys, property values as values   
- Arrays: element indexes as keys, elements as values

### Static methods

#### ToMap
Converts value into a map object or returns an empty map when the conversion is not possible

> `public static` IDictionary\<string, object\> ToMap(object value)

- **value**: object - value to convert.
- **returns**: IDictionary\<string, object\> - map object or empty map when the conversion is not supported.

#### ToMapWithDefault
Converts value into a map object or returns a gvien default value when the conversion is not possible

> `public static` IDictionary\<string, object\> ToMapWithDefault(object value, IDictionary\<string, object\> defaultValue)

- **value**: object - value to convert.
- **defaultValue**: IDictionary\<string, object\> - default value.
- **returns**: IDictionary\<string, object\> - map object or empty map when the conversion is not supported.

#### ToNullableMap
Converts value into a map object or returns null when the conversion is not possible.

> `public static` IDictionary\<string, object\> ToNullableMap(object value)

- **value**: object - value to convert.
- **returns**: IDictionary\<string, object\> - map object or null when the conversion is not supported.


### Examples

```cs
var value1 = MapConverted.ToNullableMap("ABC");                 // Result: null
var value2 = MapConverted.ToNullableMap({ key: 123 });          // Result: { key: 123 }
var value3 = MapConverted.ToNullableMap(new int[] { 1, 2, 3 }); // Result: { "0": 1, "1": 2, "2": 3 }

```
