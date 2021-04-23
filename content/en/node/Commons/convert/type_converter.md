---
type: docs
title: "TypeConverter"
linkTitle: "TypeConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Converts arbitrary values into objects specific by TypeCodes.
    For each TypeCode this class calls corresponding converter which applies
    extended conversion rules to convert the values.
---
See also [TypeCode](../../convert/type_code)


**Example:**

```typescript
let value1 = TypeConverter.toType(TypeCode.Integer, "123.456"); // Result: 123
let value2 = TypeConverter.toType(TypeCode.DateTime, 123); // Result: Date(123)
let value3 = TypeConverter.toType(TypeCode.Boolean, "F"); // Result: false
```

### Methods

#### toNullableType
Converts value into an object type specified by Type Code or returns null when conversion is not possible.

> `public static` toNullableType\<T\>(type: [TypeCode](../../convert/type_code), value: any): T

- **type**: any - the [TypeCode](../../convert/type_code) for the data type into which 'value' is to be converted.
- **value**: any - the value to convert.
- **returns**: T - object value of type corresponding to TypeCode, or null when conversion is not supported.

#### toString
Converts a [TypeCode](../../convert/type_code) into its string name.

> `public static` toString(type: [TypeCode](../../convert/type_code)): string

- **type**: [TypeCode](../../convert/type_code) - the TypeCode to convert into a string.
- **returns**: string - the name of the [TypeCode](../../convert/type_code) passed as a string value.

#### toType
Converts value into an object type specified by Type Code or returns type default when conversion is not possible.

> `public static` toType\<T\>(type: [TypeCode](../../convert/type_code), value: any): T

- **type**: [TypeCode](../../convert/type_code) - the value to convert.
- **value**: any - the value to convert.
- **returns**: T - object value of type corresponding to [TypeCode](../../convert/type_code), or type default when conversion is not supported.


#### toTypeCode
Gets TypeCode for specific value.

> `public static` toTypeCode(value: any): [TypeCode](../../convert/type_code)

- **value**: any - value whose TypeCode is to be resolved.
- **returns**: [TypeCode](../../convert/type_code) - the TypeCode that corresponds to the passed object's type.

#### toTypeWithDefault
Converts value into an object type specified by Type Code or returns default value when conversion is not possible.

> `public static` toTypeWithDefault\<T\>(type: [TypeCode](../../convert/type_code), value: any, defaultValue: T): T

- **type**: [TypeCode](../../convert/type_code) - the TypeCode for the data type into which 'value' is to be converted.
- **value**: any - the value to convert.
- **defaultValue**: T - the default value to return if conversion is not possible (returns null).
- **returns**: T - object value of type corresponding to TypeCode, or default value when conversion is not supported.


### See also
- #### [TypeCode](../../convert/type_code)