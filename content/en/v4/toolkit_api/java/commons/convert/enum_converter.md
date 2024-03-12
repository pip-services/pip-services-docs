---
type: docs
title: "EnumConverter"
linkTitle: "EnumConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    Converts objects to Enums.

   
---

### Description

The EnumConverter allows you to convert objects to Enums

### Static methods

#### ToEnum
Converts an object to an Enum.

> `public static` <T extends Enum<T>> T toEnum(Class<T> type, Object value)

- **type**: Class<T> - type
- **value**: Object - object to be converted
- **returns**: <T extends Enum<T>> T - returned Enum

#### ToEnumWithDefault
Converts an object to an Enum or returns a given default value when the conversion is not possible.  .

> `public static` <T extends Enum<T>> T toEnumWithDefault(Class<T> type, Object value, T defaultValue)

- **type**: Class<T> - type
- **value**: Object - object to be converted
- **defaultValue**: T - default value
- **returns**: <T extends Enum<T>> T - returned Enum or given default whe the conversion is not possible.

#### ToNullableEnum
Converts an object to an Enum or returns null when the conversion is not possible..

> `public static` <T extends Enum<T>> T toNullableEnum(Class<T> type, Object value)

- **type**: <T extends Enum<T>> T - value to be converted
- **value**: Object - value to be converted
- **returns**: <T extends Enum<T>> T - returned Enum or null when the conversion is not possible

