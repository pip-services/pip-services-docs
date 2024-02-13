---
type: docs
title: "TypeConverter"
linkTitle: "TypeConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object.
---
See also [TypeCode](../../convert/type_code)

### Description
The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object. The code types are defined in the [TypeCode](../../convert/type_code) class.


### Methods

#### ToNullableType
Converts a value into an object type specified by TypeCode or returns nil when the conversion is not possible.

> ToNullableType(typ [TypeCode](../../convert/type_code), value any) any

- **typ**: [TypeCode](../../convert/type_code) - [TypeCode](../../convert/type_code) for the data type into which 'value' is to be converted.
- **value**: any - value to convert.
- **returns**: any - object value of type corresponding to TypeCode, or nil when the conversion is not supported.

#### ToString
Converts a [TypeCode](../../convert/type_code) into its string name.

> ToString(typ [TypeCode](../../convert/type_code)) string

- **typ**: [TypeCode](../../convert/type_code) - TypeCode to convert into a string.
- **returns**: string - name of the [TypeCode](../../convert/type_code) passed as a string value.

#### ToType
Converts a value into an object type specified by TypeCode or returns type default when the conversion is not possible.

> ToType(typ [TypeCode](../../convert/type_code), value any) any

- **typ**: [TypeCode](../../convert/type_code) - value to convert.
- **value**: any - value to convert.
- **returns**: any - object value of type corresponding to [TypeCode](../../convert/type_code), or type default when the conversion is not supported.


#### ToTypeCode
Gets the TypeCode for a specific value.

> ToTypeCode(value any) [TypeCode](../../convert/type_code)

- **value**: any - value whose TypeCode is to be resolved.
- **returns**: [TypeCode](../../convert/type_code) - TypeCode that corresponds to the passed object's type.

#### ToTypeWithDefault
Converts a value into an object type specified by TypeCode or returns default value when conversion is not possible.

> ToTypeWithDefault(typ [TypeCode](../../convert/type_code), value any, defaultValue any) any

- **type**: [TypeCode](../../convert/type_code) - TypeCode for the data type into which 'value' is to be converted.
- **value**: any - value to convert.
- **defaultValue**: any - default value to return if conversion is not possible (returns nil).
- **returns**: any - object value of type corresponding to TypeCode, or default value when conversion is not supported.

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

