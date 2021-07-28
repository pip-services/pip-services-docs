---
type: docs
title: "ArrayConverter"
linkTitle: "ArrayConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The ArrayConverter class provides methods to create an array from a set of values.
---

### Description
The ArrayConverter class provides methods to create an array from a set of values. These values can be in the form of a list,  a single value or a string of comma-delimited values.    

### Static methods

#### ListToArray

Converts a list into an array object with an empty array as the default.
Strings with comma-delimited values are split into array of strings.
See [ToArray](#toarray).

> `public static` IList\<object\> ListToArray(object value)

- **value**: object - list to convert.
- **returns**: IList\<object\>- array object or empty array when value is null


#### ToArray
Converts value into an array object with an empty array as the default.
Single values are converted into arrays with a single element.

> `public static` IList\<object\> ToArray(object value)

- **value**: object  - value to convert.
- **returns**: IList\<object\> - array object or empty array when value is null.

#### ToArrayWithDefault
Converts value into an array object with a specified default.
Single values are converted into arrays with a single element.

> `public static` IList\<object\> ToArrayWithDefault(object value, IList\<object\> defaultValue)

- **value**: object - value to convert.
- **defaultValue**: IList\<object\> - default array object.
- **returns**: IList\<object\> - array object or default array when value is null.

#### ToNullableArray
Converts value into an array object.
Single values are converted into arrays with a single element.

> `public static` IList\<object\> ToNullableArray(object value)

- **value**: object - value to convert.
- **returns**: IList\<object\> - array object or null when value is null.

### Examples

```cs
// Array
var value1 = ArrayConverter.ToArray(new int[]{1, 2}) ;      // Result: [1, 2]

// Single value
var value2 = ArrayConverter.ToArray(1);            // Result: [1]

```
