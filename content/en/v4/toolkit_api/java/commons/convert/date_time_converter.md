---
type: docs
title: "DateTimeConverter"
linkTitle: "DateTimeConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: > 
    The DateTimeConverter class allows you to convert arbitrary values into Date values using extended conversion rules.

    
---

### Description    

The DateTimeConverter class allows you to convert arbitrary values into Date values using the following extended conversion rules:
- Strings: converted using ISO time format.
- Numbers: converted using milliseconds since unix epoch.

### Static methods

#### toDateTime
Converts a value into Date or returns the current date when the conversion is not possible.  
See [toDateTimeWithDefault](#todatetimewithdefault)

> `public static` ZonedDateTime toDateTime(Object value)

- **value**: Object - value to convert.
- **returns**: ZonedDateTime - Date value or current date when the conversion is not supported.

#### toDateTimeWithDefault
Converts a value into Date or returns a given default when the conversion is not possible.

> `public static` ZonedDateTime toDateTimeWithDefault(Object value, ZonedDateTime defaultValue)

- **value**: Object - value to convert.
- **defaultValue**: ZonedDateTime - default value.
- **returns**: ZonedDateTime - Date value or given default when the conversion is not supported.

#### toNullableDateTime
Converts a value into Date or returns null when the conversion is not possible.

> `public static` ZonedDateTime toNullableDateTime(Object value)

- **value**: Object - value to convert.
- **returns**: ZonedDateTime - Date value or null when the conversion is not supported.

### Examples

```java
{
  ZonedDateTime value1 = DateTimeConverter.toNullableDateTime("ABC"); // Result: null
  ZonedDateTime value2 = DateTimeConverter.toNullableDateTime("2018-01-01T11:30:00.0"); // Result: ZonedDateTime(2018,0,1,11,30)
  ZonedDateTime value3 = DateTimeConverter.toNullableDateTime(123); // Result: ZonedDateTime(123)
  }

```
