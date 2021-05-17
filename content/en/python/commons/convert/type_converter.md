---
type: docs
title: "TypeConverter"
linkTitle: "TypeConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object.
---

### Description
The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object. The code types are defined in the [TypeCode](../../convert/type_code) class.


### Static methods

#### to_nullable_type
Converts value into an object type specified by Type Code or returns None when conversion is not possible.

> `static` to_nullable_type(type: [TypeCode](../../convert/type_code), value: Any): Any

- **type**: Any - the [TypeCode](../../convert/type_code) for the data type into which 'value' is to be converted.
- **value**: Any - the value to convert.
- **returns**: Any - object value of type corresponding to TypeCode, or None when conversion is not supported.

#### to_string
Converts a [TypeCode](../../convert/type_code) into its string name.

> `static` to_string(type: [TypeCode](../../convert/type_code)): str

- **type**: [TypeCode](../../convert/type_code) - the TypeCode to convert into a string.
- **returns**: str - the name of the [TypeCode](../../convert/type_code) passed as a string value.

#### to_type
Converts value into an object type specified by Type Code or returns type default when conversion is not possible.

> `static` to_type(type: [TypeCode](../../convert/type_code), value: Any): Any

- **type**: [TypeCode](../../convert/type_code) - the value to convert.
- **value**: Any - the value to convert.
- **returns**: Any - object value of type corresponding to [TypeCode](../../convert/type_code), or type default when conversion is not supported.


#### to_type_code
Gets TypeCode for specific value.

> `static` to_type_code(value: Any): [TypeCode](../../convert/type_code)

- **value**: Any - value whose TypeCode is to be resolved.
- **returns**: [TypeCode](../../convert/type_code) - the TypeCode that corresponds to the passed object's type.

#### to_type_with_default
Converts value into an object type specified by Type Code or returns default value when conversion is not possible.

> `static` to_type_with_default(type: [TypeCode](../../convert/type_code), value: Any, default_value: Any): Any

- **type**: [TypeCode](../../convert/type_code) - the TypeCode for the data type into which 'value' is to be converted.
- **value**: Any - the value to convert.
- **default_value**: Any - the default value to return if conversion is not possible (returns None).
- **returns**: Any - object value of type corresponding to TypeCode, or default value when conversion is not supported.

### Examples

```python
value1 = TypeConverter.to_type_code("Hello world") # Returns 1
```
### See also
- #### [TypeCode](../../convert/type_code)
