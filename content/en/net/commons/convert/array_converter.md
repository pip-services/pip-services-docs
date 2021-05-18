---
type: docs
title: "ArrayConverter"
linkTitle: "ArrayConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The ArrayConverter class provides methods to create an array from a set of values.
---

### Description
The ArrayConverter class provides methods to create an array from a set of values. These values can be in the form of a list,  a single value or a string of comma-delimited values.    

### Static methods

#### listToArray
Converts a list into array object with empty array as default.
Strings with comma-delimited values are split into array of strings.
See [toArray](#toArray)

> `public static` listToArray(value: any): any[]

- **value**: any - the list to convert.
- **returns**: any[] - array object or empty array when value is null


#### toArray
Converts value into array object with empty array as default.
Single values are converted into arrays with single element.

> `public static` toArray(value: any): any[]

- **value**: any - the value to convert.
- **returns**: any[] - array object or empty array when value is null.

#### toArrayWithDefault
Converts value into array object with specified default.
Single values are converted into arrays with single element.

> `public static` toArrayWithDefault(value: any, defaultValue: any[]): any[]

- **value**: any - the value to convert.
- **defaultValue**: any[] - default array object.
- **returns**: any[] - array object or default array when value is null.

#### toNullableArray
Converts value into array object.
Single values are converted into arrays with a single element.

> `public static` toNullableArray(value: any): any[]

- **value**: any - the value to convert.
- **returns**: any[] - array object or null when value is null.

### Examples

```typescript
// Array
let value1 = ArrayConverter.toArray([1, 2]) ;      // Result: [1, 2]

// Single value
let value2 = ArrayConverter.toArray(1);            // Result: [1]

// String with comma-delimited values
let value3 = ArrayConverter.listToArray("1,2,3"); // Result: ["1", "2", "3"]

```
