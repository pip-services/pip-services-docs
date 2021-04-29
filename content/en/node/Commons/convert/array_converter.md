---
type: docs
title: "ArrayConverter"
linkTitle: "ArrayConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Converts arbitrary values into array objects.
---

**Example:**

```typescript
let value1 = ArrayConverter.toArray([1, 2]);		 // Result: [1, 2]
let value2 = ArrayConverter.toArray(1);			  // Result: [1]
let value2 = ArrayConverter.listToArray("1,2,3");	// Result: ["1", "2", "3"]

```

### Methods

#### listToArray
Converts value into array object with empty array as default.
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

