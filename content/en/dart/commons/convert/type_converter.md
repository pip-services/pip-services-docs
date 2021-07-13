---
type: docs
title: "TypeConverter"
linkTitle: "TypeConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object.
---

### Description
The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object. The code types are defined in the [TypeCode](../../convert/type_code) class.


### Static methods

#### asString
Converts a [TypeCode](../../convert/type_code) into its string name.

> `static` String asString([TypeCode](../../convert/type_code) type)

- **type**: [TypeCode](../../convert/type_code) - TypeCode to convert into a string.
- **returns**: String - name of the [TypeCode](../../convert/type_code) passed as a string value.

#### toNullableType
Converts a value into an object of the type specified by a TypeCode or returns null when the conversion is not possible.

> `static` T toNullableType\<T\>([TypeCode](../../convert/type_code) type, value) 

- **type**: [TypeCode](../../convert/type_code) - type code for the data type into which 'value' is to be converted.
- **value**: dynamic - value to convert.
- **returns**: T - object value of type corresponding to TypeCode, or null when the conversion is not supported.

#### toType
Converts a value into an object of the type specified by Type Code or returns an object of default type when the conversion is not possible.

> `static` T toType\<T\>([TypeCode](../../convert/type_code) type, value)

- **type**: [TypeCode](../../convert/type_code) - type to which the value is to be converted into.
- **value**: dynamic - value to convert.
- **returns**: T - object value of type corresponding to [TypeCode](../../convert/type_code), or object of default type when the conversion is not supported.


#### toTypeCode
Gets a TypeCode for a specific value.

> `static` [TypeCode](../../convert/type_code) toTypeCode(value) 

- **value**: dynamic - value whose TypeCode is to be resolved.
- **returns**: [TypeCode](../../convert/type_code) - TypeCode that corresponds to the passed object's type.

#### toTypeWithDefault
Converts a value into an object of the type specified by Type Code or returns a default value when the conversion is not possible.

> `static` T toTypeWithDefault\<T\>([TypeCode](../../convert/type_code) type, value, T defaultValue) 

- **type**: [TypeCode](../../convert/type_code) - TypeCode for the data type into which 'value' is to be converted.
- **value**: dynamic - value to convert.
- **defaultValue**: T - default value to return if conversion is not possible (returns null).
- **returns**: T - object value of type corresponding to TypeCode, or default value when the conversion is not supported.

### Examples


```dart
var value1 = TypeConverter.toType(TypeCode.Integer, '123.456'); // Result: 123
var value2 = TypeConverter.toType(TypeCode.DateTime, 123); // Result: DateTime(123)
var value3 = TypeConverter.toType(TypeCode.Boolean, 'F'); // Result: false
```

### See also
- #### [TypeCode](../../convert/type_code)
