---
type: docs
title: "TypeConverter"
linkTitle: "TypeConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object.
---
See also [TypeCode](../../convert/type_code)

### Description
The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object. The code types are defined in the [TypeCode](../../convert/type_code) class.


### Methods

#### ToNullableType
Converts value into an object type specified by Type Code or returns nil when conversion is not possible.

> ToNullableType(typ [TypeCode](../../convert/type_code), value interface{}) interface{}

- **typ**: [TypeCode](../../convert/type_code) - the [TypeCode](../../convert/type_code) for the data type into which 'value' is to be converted.
- **value**: interface{} - the value to convert.
- **returns**: interface{} - object value of type corresponding to TypeCode, or nil when conversion is not supported.

#### ToString
Converts a [TypeCode](../../convert/type_code) into its string name.

> ToString(typ [TypeCode](../../convert/type_code)) string

- **typ**: [TypeCode](../../convert/type_code) - the TypeCode to convert into a string.
- **returns**: string - the name of the [TypeCode](../../convert/type_code) passed as a string value.

#### ToType
Converts value into an object type specified by Type Code or returns type default when conversion is not possible.

> ToType(typ [TypeCode](../../convert/type_code), value interface{}) interface{}

- **typ**: [TypeCode](../../convert/type_code) - the value to convert.
- **value**: interface{} - the value to convert.
- **returns**: interface{} - object value of type corresponding to [TypeCode](../../convert/type_code), or type default when conversion is not supported.


#### ToTypeCode
Gets TypeCode for specific value.

> ToTypeCode(value interface{}) [TypeCode](../../convert/type_code)

- **value**: interface{} - value whose TypeCode is to be resolved.
- **returns**: [TypeCode](../../convert/type_code) - the TypeCode that corresponds to the passed object's type.

#### ToTypeWithDefault
Converts value into an object type specified by Type Code or returns default value when conversion is not possible.

> ToTypeWithDefault(typ [TypeCode](../../convert/type_code), value interface{}, defaultValue interface{}) interface{}

- **type**: [TypeCode](../../convert/type_code) - the TypeCode for the data type into which 'value' is to be converted.
- **value**: interface{} - the value to convert.
- **defaultValue**: interface{} - the default value to return if conversion is not possible (returns nil).
- **returns**: interface{} - object value of type corresponding to TypeCode, or default value when conversion is not supported.

### Examples


```go
value1 := convert.TypeConverter.ToType(convert.Integer, "123.456")
value2 := convert.TypeConverter.ToType(convert.DateTime, 123)
value3 := convert.TypeConverter.ToType(convert.Boolean, "F")
fmt.Println(value1) // 123
fmt.Println(value2) // 1970-01-01 02:02:03 +0200 EET
fmt.Println(value3) // false
```

### See also
- #### [TypeCode](../../convert/type_code)
