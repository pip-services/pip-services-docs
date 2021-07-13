---
type: docs
title: "ArrayConverter"
linkTitle: "ArrayConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

> `static` List listToArray(value)

- **value**: dynamic - list to convert.
- **returns**: List - array object or empty array when value is null.


#### toArray
Converts a value into an array object with an empty array as default.
Single values are converted into arrays with a single element.

> `static` List toArray(value)

- **value**: dynamic - value to convert.
- **returns**: List - array object or empty array when value is null.

#### toArrayWithDefault
Converts a value into an array object with a specified default.
Single values are converted into arrays with a single element.

> `static` List toArrayWithDefault(value, List defaultValue)

- **value**: dynamic - value to convert.
- **defaultValue**: List - default array object.
- **returns**: List - array object or default array when value is null.

#### toNullableArray
Converts a value into an array object.
Single values are converted into arrays with a single element.

> `static` List toNullableArray(value)

- **value**: dynamic - value to convert.
- **returns**: List - array object or null when value is null.

### Examples

```dart
var value1 = ArrayConverter.toArray([1, 2]);		// Result: [1, 2]
var value2 = ArrayConverter.toArray(1);			    // Result: [1]
var value2 = ArrayConverter.listToArray('1,2,3');	// Result: ['1', '2', '3']

```
