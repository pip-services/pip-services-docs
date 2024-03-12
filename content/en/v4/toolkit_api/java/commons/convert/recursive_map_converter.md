---
type: docs
title: "RecursiveMapConverter"
linkTitle: "RecursiveMapConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    The RecursiveMapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.

---

### Description
 The RecursiveMapConverter class allows you to convert arbitrary values into map objects using extended conversion rules.
 
 Important points:
 
 - This class is similar to [MapConverter](../map_converter). The difference is that it recursively converts all values stored in objects and arrays.

### Instance methods

#### toMap
Converts a  value into a map object or returns an empty map when the conversion is not possible.

> `public static` Map<String, Object> toMap(Object value)

- **value**: Object - value to convert.
- **returns**: Map<String, Object> - map object or empty map when the conversion is not supported.  

#### toMapWithDefault
Converts a value into a map object or returns default when the conversion is not possible.

> `public static` Map<String, Object> toMapWithDefault(Object value, Map<String, Object> defaultValue)

- **value**: Object - value to convert.
- **defaultValue**: Map<String, Object> - default value.
- **returns**: Map<String, Object> - map object or empty map when the conversion is not supported.

#### toNullableMap
Converts a value into a map object or returns null when the conversion is not possible.

> `public static` Map<String, Object> toNullableMap(Object value)

- **value**: Object - value to convert.
- **returns**: Map<String, Object> - map object or null when the conversion is not supported.


### Examples

```typescript
{
  Map<String, Object> value1 = RecursiveMapConverted.toNullableMap("ABC"); // Result: null
  Map<String, Object> value2 = RecursiveMapConverted.toNullableMap({ key: 123 }); // Result: { key: 123 }
  List<Object> result = new ArrayList<Object>();
  result.add(1);
  result.add(new int[]{2, 3});
  Map<String, Object> value3 = RecursiveMapConverted.toNullableMap(result); // Result: { "0": 1, { "0": 2, "1": 3 } }
  }
```
