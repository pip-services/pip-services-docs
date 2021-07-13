---
type: docs
title: "MapConverter"
linkTitle: "MapConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

> `static` Map\<String, dynamic\> toMap(value)

- **value**: dynamic - value to convert.
- **returns**: Map\<String, dynamic\> - map object or empty map when the conversion is not supported.

#### toMapWithDefault
Converts a value into a map object or returns a given default when the conversion is not possible.

> `static` Map\<String, dynamic\> toMapWithDefault(value, Map\<String, dynamic\> defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: Map\<String, dynamic\> - default value.
- **returns**: Map\<String, dynamic\> - map object or empty map when the conversion is not supported.

#### toNullableMap
Converts a value into a map object or returns null when the conversion is not possible.

> `static` Map\<String, dynamic\> toNullableMap(value)

- **value**: dynamic - value to convert.
- **returns**: Map\<String, dynamic\> - map object or null when the conversion is not supported.


### Examples

```dart
var value1 = MapConverted.toNullableMap('ABC'); // Result: null
var value2 = MapConverted.toNullableMap({ 'key': 123 }); // Result: { 'key': 123 }
var value3 = MapConverted.toNullableMap([1,2,3]); // Result: { '0': 1, '1': 2, '2': 3 }

```
