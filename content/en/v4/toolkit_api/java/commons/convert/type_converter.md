---
type: docs
title: "TypeConverter"
linkTitle: "TypeConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object.
---
See also [TypeCode](../type_code)

### Description
The TypeConverter class allows you to convert arbitrary values into objects specified by a code type and to get the code type of an object. The code types are defined in the [TypeCode](../type_code) class.


### Static methods

#### toNullableType
Converts a value into an object of the type specified by a TypeCode or returns null when the conversion is not possible.

> `public static` <T> T toNullableType(Class<T> type, Object value)

- **type**: Class<T> for the data type into which 'value' is to be converted.
- **value**: Object - value to convert.
- **returns**: <T> T - object value of type corresponding to TypeCode, or null when the conversion is not supported.

#### toString
Converts a [TypeCode](../type_code) into its string name.

> `public static` String toString([TypeCode](../type_code) type)

- **type**: [TypeCode](../type_code) - TypeCode to convert into a string.
- **returns**: string - name of the [TypeCode](../type_code) passed as a string value.

#### toType
Converts a value into an object of the type specified by Type Code or returns an object of default type when the conversion is not possible.

> `public static` Class<T> toType(Class<T> type, Object value)

- **type**: Class<T> - type to which the value is to be converted into.
- **value**: Object - value to convert.
- **returns**: Class<T> - object value of type corresponding to [TypeCode](../type_code), or object of default type when the conversion is not supported.


#### toTypeCode
Gets a TypeCode for a specific value.

> `public static` [TypeCode](../type_code) toTypeCode(Object value)

- **value**: Object - value whose TypeCode is to be resolved.
- **returns**: [TypeCode](../type_code) - TypeCode that corresponds to the passed object's type.

#### toTypeWithDefault
Converts a value into an object of the type specified by Type Code or returns a default value when the conversion is not possible.

> `public static` <T> T toTypeWithDefault(Class<T> type, Object value, T defaultValue)

- **type**: Class<T> - type for the data type into which 'value' is to be converted.
- **value**: Object - value to convert.
- **defaultValue**: T - default value to return if conversion is not possible (returns null).
- **returns**: <T> T - object value of type corresponding to TypeCode, or default value when the conversion is not supported.

### Examples


```java
{
  int value1 = TypeConverter.toType(TypeCode.Integer, "123.456"); // Result: 123
  ZonedDateTime value2 = TypeConverter.toType(TypeCode.DateTime, 123); // Result: ZonedDateTime(123)
  boolean value3 = TypeConverter.toType(TypeCode.Boolean, "F"); // Result: false
  }
```

### See also
- #### [TypeCode](../type_code)
