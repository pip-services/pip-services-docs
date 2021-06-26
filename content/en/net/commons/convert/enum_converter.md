---
type: docs
title: "EnumConverter"
linkTitle: "EnumConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Converts objects to Enums.

   
---

### Description

Tje EnumConverter allows you to convert objects to Enums

### Static methods

#### ToEnum
Converts an object to an Enum.

> `public static` T ToEnum\<T\>(object value)

- **value**: object - object to be converted
- **returns**: T - returned Enum

#### ToEnumWithDefault
Converts an object to an Enum or returns a given default value when conversion is not possible.  .

> `public static` T ToEnumWithDefault\<T\>(object value, T defaultValue)

- **value**: object - object to be converted
- **defaultValue**: T - default value
- **returns**: T - returned Enum

#### ToNullableEnum
Converts an object to an Enum or returns null when conversion is not possible..

> `public static` T ToNullableEnum\<T\>(object value)

- **value**: object - value to be converted
- **returns**: T - returned Enum
