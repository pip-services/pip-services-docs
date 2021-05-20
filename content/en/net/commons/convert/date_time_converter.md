---
type: docs
title: "DateTimeConverter"
linkTitle: "DateTimeConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    The DateTimeConverter class allows you to convert arbitrary values into Date values using extended conversion rules.

    
---

### Description    

The DateTimeConverter class allows you to convert arbitrary values into Date values using following extended conversion rules:
- Strings: converted using ISO time format
- Numbers: converted using milliseconds since unix epoch

### Static methods

#### ToDateTime
Converts value into Date or returns current date when conversion is not possible.  
See [ToDateTimeWithDefault](#todatetimewithdefault)

> `public static` DateTime ToDateTime(object value)

- **value**: object - the value to convert.
- **returns**: DateTime - Date value or current date when conversion is not supported.

#### ToDateTimeWithDefault
Converts value into Date or returns default when conversion is not possible.

> `public static` DateTime toDateTimeWithDefault(object value, DateTime? defaultValue)

- **value**: object - the value to convert.
- **defaultValue**: DateTime - the default value.
- **returns**: DateTime - Date value or default when conversion is not supported.

#### ToNullableDateTime
Converts value into Date or returns null when conversion is not possible.

> `public static` DateTime ToNullableDateTime(object value)

- **value**: object - the value to convert.
- **returns**: DateTime - Date value or null when conversion is not supported.

### Examples

```cs
DateTime value1 = DateTimeConverter.ToNullableDateTime("ABC"); // Result: null
DateTime value2 = DateTimeConverter.ToNullableDateTime("2018-01-01T11:30:00.0"); // Result: ZonedDateTime(2018,0,1,11,30)
DateTime value3 = DateTimeConverter.ToNullableDateTime(123); // Result: ZonedDateTime(123)

```
