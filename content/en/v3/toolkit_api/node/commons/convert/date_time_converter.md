---
type: docs
title: "DateTimeConverter"
linkTitle: "DateTimeConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public static` toDateTime(value: any): Date

- **value**: any - value to convert.
- **returns**: Date - Date value or current date when the conversion is not supported.

#### toDateTimeWithDefault
Converts a value into Date or returns a given default when the conversion is not possible.

> `public static` toDateTimeWithDefault(value: any, defaultValue: Date = null): Date

- **value**: any - value to convert.
- **defaultValue**: Date - default value.
- **returns**: Date - Date value or given default when the conversion is not supported.

#### toNullableDateTime
Converts a value into Date or returns null when the conversion is not possible.

> `public static` toNullableDateTime(value: any): Date

- **value**: any - value to convert.
- **returns**: Date - Date value or null when the conversion is not supported.

### Examples

```typescript
let value1 = DateTimeConverter.toNullableDateTime("ABC"); // Result: null
let value2 = DateTimeConverter.toNullableDateTime("2018-01-01T11:30:00.0"); // Result: Date(2018,0,1,11,30)
let value3 = DateTimeConverter.toNullableDateTime(123); // Result: Date(123)

```
