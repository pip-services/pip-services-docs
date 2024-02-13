---
type: docs
title: "DateTimeConverter"
linkTitle: "DateTimeConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    The DateTimeConverter class allows you to convert arbitrary values into Date values using extended conversion rules.

    
---

### Description    

The DateTimeConverter class allows you to convert arbitrary values into Date values using following extended conversion rules:
- Strings: converted using ISO time format
- Numbers: converted using milliseconds since unix epoch

### Methods

#### ToDateTime
Converts value into Date or returns current date when conversion is not possible.  
See [ToDateTimeWithDefault](#todatetimewithdefault)

> ToDateTime(value any) time.Time

- **value**: any - value to convert.
- **returns**: time.Time - Date value or current date when conversion is not supported.

#### ToDateTimeWithDefault
Converts value into Date or returns default when conversion is not possible.

> ToDateTimeWithDefault(value any, defaultValue time.Time) time.Time

- **value**: any - value to convert.
- **defaultValue**: time.Time - default value.
- **returns**: time.Time - Date value or default when conversion is not supported.

#### ToNullableDateTime
Converts value into Date or returns nil when conversion is not possible.

> ToNullableDateTime(value any) (time.Time, bool)

- **value**: any - the value to convert.
- **returns**: (time.Time, bool) - Date value and true or zero time and false when conversion is not supported.

### Examples

```go
value1, ok1 := convert.DateTimeConverter.ToNullableDateTime("ABC")
value2, ok2 := convert.DateTimeConverter.ToNullableDateTime("2019-01-01T11:30:00.0Z")
value3, ok3 := convert.DateTimeConverter.ToNullableDateTime(123)
fmt.Println(value1, ok1) // 0001-01-01 00:00:00 +0000 UTC, false
fmt.Println(value2, ok2) // 2019-01-01 11:30:00 +0000 UTC, true
fmt.Println(value3, ok3) // 1970-01-01 02:02:03 +0200 EET, true

```
