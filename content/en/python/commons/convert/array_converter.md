---
type: docs
title: "ArrayConverter"
linkTitle: "ArrayConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Creates an array object from a set of values
---

### Description
The ArrayConverter class provides methods to create an array from a set of values. These values can be in the form of a list,  a single value or a string of comma-delimited values.    

### Static methods

#### list_to_array
Converts a list into an array object, with empty array as default.
Strings with comma-delimited values are split into array of strings.
See [toArray](#toArray)

> `static` list_to_array(value: Any): List[Any]

- **value**: Any - the list to convert.
- **returns**: List[Any] - array object or empty array when value is null


#### to_array
Converts value into array object with empty array as default.
Single values are converted into arrays with single element.

> `static` to_array(value: Any): List[Any]

- **value**: Any - the value to convert.
- **returns**: List[Any] - array object or empty array when value is null.

#### to_array_with_default
Converts value into array object with specified default.
Single values are converted into arrays with single element.

> `static` to_array_with_default(value: Any, default_value: List[Any]): List[Any]

- **value**: Any - the value to convert.
- **default_value**: List[Any] - default array object.
- **returns**: List[Any] - array object or default array when value is null.

#### to_nullable_array
Converts value into array object.
Single values are converted into arrays with a single element.

### Examples

```python
# List
value1 = ArrayConverter.to_array([1, 2])       # Result: [1, 2]

# A single value
value2 = ArrayConverter.to_array(1)            # Result: [1]

# String with comma-delimited values
value3 = ArrayConverter.list_to_array("1,2,3") # Result: ["1", "2", "3"]

```

> `static` to_nullable_array(value: Any): Optional[List[Any]]

- **value**: Any - the value to convert.
- **returns**: Optional[List[Any]] - array object or null when value is null.

