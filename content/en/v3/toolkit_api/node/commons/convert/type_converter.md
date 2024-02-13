---
type: docs
title: "TypeConverter"
linkTitle: "TypeConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object.
---
See also [TypeCode](../../convert/type_code)

### Description
The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object. The code types are defined in the [TypeCode](../../convert/type_code) class.


### Static methods

#### toNullableType
Converts a value into an object of the type specified by a TypeCode or returns null when the conversion is not possible.

> `public static` toNullableType\<T\>(type: [TypeCode](../../convert/type_code), value: any): T

- **type**: any - [TypeCode](../../convert/type_code) for the data type into which 'value' is to be converted.
- **value**: any - value to convert.
- **returns**: T - object value of type corresponding to TypeCode, or null when the conversion is not supported.

#### toString
Converts a [TypeCode](../../convert/type_code) into its string name.

> `public static` toString(type: [TypeCode](../../convert/type_code)): string

- **type**: [TypeCode](../../convert/type_code) - TypeCode to convert into a string.
- **returns**: string - name of the [TypeCode](../../convert/type_code) passed as a string value.

#### toType
Converts a value into an object of the type specified by Type Code or returns an object of default type when the conversion is not possible.

> `public static` toType\<T\>(type: [TypeCode](../../convert/type_code), value: any): T

- **type**: [TypeCode](../../convert/type_code) - type to which the value is to be converted into.
- **value**: any - value to convert.
- **returns**: T - object value of type corresponding to [TypeCode](../../convert/type_code), or object of default type when the conversion is not supported.


#### toTypeCode
Gets a TypeCode for a specific value.

> `public static` toTypeCode(value: any): [TypeCode](../../convert/type_code)

- **value**: any - value whose TypeCode is to be resolved.
- **returns**: [TypeCode](../../convert/type_code) - TypeCode that corresponds to the passed object's type.

#### toTypeWithDefault
Converts a value into an object of the type specified by Type Code or returns a default value when the conversion is not possible.

> `public static` toTypeWithDefault\<T\>(type: [TypeCode](../../convert/type_code), value: any, defaultValue: T): T

- **type**: [TypeCode](../../convert/type_code) - TypeCode for the data type into which 'value' is to be converted.
- **value**: any - value to convert.
- **defaultValue**: T - default value to return if conversion is not possible (returns null).
- **returns**: T - object value of type corresponding to TypeCode, or default value when the conversion is not supported.

### Examples


```typescript
let value1 = TypeConverter.toType(TypeCode.Integer, "123.456"); // Result: 123
let value2 = TypeConverter.toType(TypeCode.DateTime, 123); // Result: Date(123)
let value3 = TypeConverter.toType(TypeCode.Boolean, "F"); // Result: false
```

### See also
- #### [TypeCode](../../convert/type_code)
