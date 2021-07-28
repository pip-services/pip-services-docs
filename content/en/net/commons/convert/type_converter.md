---
type: docs
title: "TypeConverter"
linkTitle: "TypeConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the type code of an object.
---
See also [TypeCode](../../convert/type_code).

### Description
The TypeConverter class allows you to convert arbitrary values into objects specified by a type code and to get the type code of an object. The type codes are defined in the [TypeCode](../../convert/type_code) class.


### Static methods

#### ToNullableType
Converts value into an object type specified by a type code or returns null when the conversion is not possible.
**T** - Class type for the data type.

> `public static` T ToNullableType\<T\>(object value)

- **value**: object - value to convert.
- **returns**: T - object value of type corresponding to TypeCode, or null when the conversion is not supported.

#### ToString
Converts a [TypeCode](../../convert/type_code) into its string name.

> `public static` string ToString([TypeCode](../../convert/type_code) type)

- **type**: [TypeCode](../../convert/type_code) - TypeCode to convert into a string.
- **returns**: string - the name of the [TypeCode](../../convert/type_code) passed as a string value.

#### ToType
Converts value into an object type specified by a type code or returns the default type when the conversion is not possible.
**T** - Class type for the data type into which 'value' is to be converted.

> `public static` T ToType\<T\>(object value)

- **value**: object - value to convert.
- **returns**: T - object value of type corresponding to [TypeCode](../../convert/type_code), or the default type when the onversion is not supported.


#### ToTypeCode
Gets the type code for a specific value.

> `public static` [TypeCode](../../convert/type_code) ToTypeCode(Type type)

- **type**: Type - 	Class type for the data type.
- **returns**: [TypeCode](../../convert/type_code) - TypeCode that corresponds to the passed object's type.


#### ToTypeCode
Gets the TypeCode for specific value.

> `public static` [TypeCode](../../convert/type_code) ToTypeCode(object value)

- **value**: object - value whose TypeCode is to be resolved.
- **returns**: [TypeCode](../../convert/type_code) - TypeCode that corresponds to the passed object's type.


#### ToTypeWithDefault
Converts a value into an object of type specified by TypeCode or returns a given default value when the conversion is not possible.
**T** - Class type for the data type into which 'value' is to be converted.

> `public static` T ToTypeWithDefault\<T\>(object value, T defaultValue)

- **value**: object - value to convert.
- **defaultValue**: T - default value to return if the conversion is not possible (returns null).
- **returns**: T - object value of type corresponding to TypeCode, or the given default value when the conversion is not supported.

### Examples


```cs
var value1 = TypeConverter.ToType(TypeCode.Integer, "123.456"); // Result: 123
var value2 = TypeConverter.ToType(TypeCode.DateTime, 123); // Result: DateTime(123)
var value3 = TypeConverter.ToType(TypeCode.Boolean, "F"); // Result: false
```

### See also
- #### [TypeCode](../../convert/type_code)
