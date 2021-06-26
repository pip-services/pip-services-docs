---
type: docs
title: "DecimalConverter"
linkTitle: "DecimalConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Converts objects to decimals.

   
---

### Description

The DecimalConverter class can be used to convert objects to decimals.

### Static methods

#### ToDecimal 
Converts an object to a decimal value

> `public static` decimal ToDecimal (object value)

- **value**: object - object to be converted
- **returns**: decimal - returned decimal value

#### ToDecimalWithDefault 
Converts an object to decimal. If the conversion is not possible, it returns the given default.

> `public static` decimal ToDecimalWithDefault (object value, decimal defaultValue)

- **value**: object - object to convert
- **defaultValue**: decimal - default value
- **returns**: decimal - returned decimal value

#### ToNullableDecimal
Converts value into doubles or returns null when conversion is not possible.

> `public static` decimal ToNullableDecimal(object value)

- **value**: object  - object to be converted
- **returns**: decimal - returned decimal value
