---
type: docs
title: "JsonConverter"
linkTitle: "JsonConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.
---

### Description

The JsonConverter class allows you to convert arbitrary values (e.g. a JSON object) from and to JSON (JavaScript Object Notation) strings.

### Static methods

#### FromJson
Converts to value from a JSON string

> `public static` object FromJson(string value)

- **value**: string - JSON string to convert.
- **returns**: T - converted object value or null when value is null.

#### FromJson
Converts value from JSON string to T object

> `public static` T FromJson\<T\>(string value)

- **value**: string - JSON string to convert.
- **returns**: T - converted object value or null when value is null.

#### ToJson
Converts value to a JSON string.

> `public static` string  ToJson(object value)

- **value**: object - value to convert.
- **returns**: string - JSON string or null when value is null.

#### ToMap
Converts JSON string into map object or returns empty map when the conversion is not possible.
See [LongConverter.ToNullableLong](../long_converter/#tonullablelong)

> `public static` IDictionary\<string, object\> ToMap(string value)

- **value**: string - JSON string to convert.
- **returns**: IDictionary\<string, object\> - Map object value or empty object when the conversion is not supported.

#### ToMapWithDefault
Converts a JSON string into a map object or returns a given default value when the conversion is not possible.

> `public static` IDictionary\<string, object\> ToMapWithDefault(string value, IDictionary\<string, object\> defaultValue)

- **value**: string - JSON string to convert.
- **defaultValue**: IDictionary\<string, object\> - default value.
- **returns**: IDictionary\<string, object\> - Map object value or default when the conversion is not supported.


#### ToNullableMap
Converts a JSON string into a map object or returns null when the conversion is not possible.  
See [MapConverter.ToNullableMap](../map_converter/#tonullablemap)

> `public static` IDictionary\<string, object\> ToNullableMap(string value) 

- **value**: string - JSON string to convert.
- **returns**: IDictionary\<string, object\> - Map object value or null when conversion is not supported.


### Examples


```cs
var value1 = JsonConverter.FromJson("{\"key\":123}"); // Result: { key: 123 }
var value2 = JsonConverter.ToMap({ key: 123}); // Result: "{\"key\":123}"

```
