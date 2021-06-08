---
type: docs
title: "DateTimeConverter"
linkTitle: "DateTimeConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    The DateTimeConverter class allows you to convert arbitrary values into Date values using extended conversion rules.

    
---

### Description    

The DateTimeConverter class allows you to convert arbitrary values into Date values using following extended conversion rules:
- Strings: converted using ISO time format
- Numbers: converted using milliseconds since unix epoch

### Funcs

#### ToDateTime
Converts value into Date or returns current date when conversion is not possible.  
See [ToDateTimeWithDefault](#todatetimewithdefault)

> (c *TDateTimeConverter) ToDateTime(value interface{}) time.Time

- **value**: interface{} - the value to convert.
- **returns**: time.Time - Date value or current date when conversion is not supported.

#### ToDateTimeWithDefault
Converts value into Date or returns default when conversion is not possible.

> (c *TDateTimeConverter) ToDateTimeWithDefault(value interface{}, defaultValue time.Time) time.Time

- **value**: interface{} - the value to convert.
- **defaultValue**: time.Time - the default value.
- **returns**: time.Time - Date value or default when conversion is not supported.

#### ToNullableDateTime
Converts value into Date or returns null when conversion is not possible.

> ToNullableDateTime(value interface{}) *time.Time

- **value**: interface{} - the value to convert.
- **returns**: *time.Time - Date value or null when conversion is not supported.

### Examples

```go
value1 := convert.DateTimeConverter.ToNullableDateTime("ABC")
value2 := convert.DateTimeConverter.ToNullableDateTime("2019-01-01T11:30:00.0Z")
value3 := convert.DateTimeConverter.ToNullableDateTime(123)

fmt.Println(value1) // <nil>
fmt.Println(value2) // 2019-01-01 11:30:00 +0000 UTC
fmt.Println(value3) // 1970-01-01 02:02:03 +0200 EET

```
