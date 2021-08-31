---
type: docs
title: "RecursiveMapConverter"
linkTitle: "RecursiveMapConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The RecursiveMapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.

---

### Description
 The RecursiveMapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.
 
**Important points:**
 
 - This class is similar to [MapConverter](../map_converter). The difference is that it recursively converts all values stored in objects and arrays.

### Instance methods

#### toMap
Converts a  value into a map object or returns an empty map when the conversion is not possible.

> `static` dynamic toMap(value)

- **value**: dynamic - value to convert.
- **returns**: dynamic - map object or empty map when the conversion is not supported.  

#### toMapWithDefault
Converts a value into a map object or returns a default value when the conversion is not possible.

> `static` dynamic toMapWithDefault(value, Map\<String, dynamic\> defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: Map\<String, dynamic\> - default value.
- **returns**: dynamic - map object or empty map when the conversion is not supported.

#### toNullableMap
Converts a value into a map object or returns null when the conversion is not possible.

> `static` dynamic toNullableMap(value)

- **value**: dynamic - value to convert.
- **returns**: dynamic - map object or null when the conversion is not supported.


### Examples

```dart
var value1 = RecursiveMapConverted.toNullableMap('ABC'); // Result: null
var value2 = RecursiveMapConverted.toNullableMap({ 'key': 123 }); // Result: { 'key': 123 }
var value3 = RecursiveMapConverted.toNullableMap([1,[2,3]); // Result: { '0': 1, { '0': 2, '1': 3 } }
```
