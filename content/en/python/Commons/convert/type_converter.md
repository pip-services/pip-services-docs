---
type: docs
title: "TypeConverter"
linkTitle: "TypeConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Converts arbitrary values into objects specific by TypeCodes.
    For each TypeCode this class calls corresponding converter which applies
    extended conversion rules to convert the values.
---
See also [TypeCode](../../convert/type_code)


**Example:**

```python
value1 = StringConverter.to_string(123.456) # Result: "123.456"
value2 = StringConverter.to_string(true)    # Result: "true"
value3 = StringConverter.to_string(datetime.datetime(2018,0,1)) # Result: "2018-01-01T00:00:00.00"
value4 = StringConverter.to_string([1,2,3]) # Result: "1,2,3"
```

### Methods

#### to_nullable_type
Converts value into an object type specified by Type Code or returns null when conversion is not possible.

> `static` to_nullable_type(type: [TypeCode](../../convert/type_code), value: Any): T

- **type**: Any - the [TypeCode](../../convert/type_code) for the data type into which 'value' is to be converted.
- **value**: Any - the value to convert.
- **returns**: T - object value of type corresponding to TypeCode, or null when conversion is not supported.

#### to_string
Converts a [TypeCode](../../convert/type_code) into its string name.

> `static` to_string(type: [TypeCode](../../convert/type_code)): str

- **type**: [TypeCode](../../convert/type_code) - the TypeCode to convert into a string.
- **returns**: str - the name of the [TypeCode](../../convert/type_code) passed as a string value.

#### to_type
Converts value into an object type specified by Type Code or returns type default when conversion is not possible.

> `static` to_type(type: [TypeCode](../../convert/type_code), value: Any): T

- **type**: [TypeCode](../../convert/type_code) - the value to convert.
- **value**: Any - the value to convert.
- **returns**: T - object value of type corresponding to [TypeCode](../../convert/type_code), or type default when conversion is not supported.


#### to_type_code
Gets TypeCode for specific value.

> `static` to_type_code(value: Any): [TypeCode](../../convert/type_code)

- **value**: Any - value whose TypeCode is to be resolved.
- **returns**: [TypeCode](../../convert/type_code) - the TypeCode that corresponds to the passed object's type.

#### to_type_with_default
Converts value into an object type specified by Type Code or returns default value when conversion is not possible.

> `static` to_type_with_default(type: [TypeCode](../../convert/type_code), value: Any, default_value: T): T

- **type**: [TypeCode](../../convert/type_code) - the TypeCode for the data type into which 'value' is to be converted.
- **value**: Any - the value to convert.
- **default_value**: T - the default value to return if conversion is not possible (returns null).
- **returns**: T - object value of type corresponding to TypeCode, or default value when conversion is not supported.


### See also
- #### [TypeCode](../../convert/type_code)