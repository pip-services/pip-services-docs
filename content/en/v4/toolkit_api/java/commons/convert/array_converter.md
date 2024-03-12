---
type: docs
title: "ArrayConverter"
linkTitle: "ArrayConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    The ArrayConverter class provides methods to create an array from a set of values.
---

### Description
The ArrayConverter class provides methods to create an array from a set of values. These values can be in the form of a list,  a single value or a string of comma-delimited values.    

### Static methods

#### listToArray
Converts a list into an array object with an empty array as default.
Strings with comma-delimited values are split into array of strings.
See [toArray](#toarray)

> `public static` List<Object> listToArray(Object value)

- **value**: Object - list to convert.
- **returns**: List<Object> - array object or empty array when value is null.


#### toArray
Converts a value into an array object with an empty array as default.
Single values are converted into arrays with a single element.

> `public static` List<Object> toArray(Object value)

- **value**: Object - value to convert.
- **returns**: List<Object> - List of objects.

#### toArrayWithDefault
Converts a value into an array object with a specified default.
Single values are converted into arrays with a single element.

> `public static` List<Object> toArrayWithDefault(Object value, List<Object> defaultValue)

- **value**: Object - value to convert.
- **defaultValue**: List<Object> - default array object.
- **returns**: List<Object> - list of objects.

#### toNullableArray
Converts a value into an array object.
Single values are converted into arrays with a single element.

> `public static` List<Object> toNullableArray(Object value)

- **value**: Object - value to convert.
- **returns**: List<Object> - array object or null when value is null.

### Examples

```java
{
  List<Object> value1 = ArrayConverter.toArray(1);        // Result: [1]
  List<Object> value2 = ArrayConverter.listToArray("1,2,3"); // Result: ["1", "2", "3"]
  }

```
