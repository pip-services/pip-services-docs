---
type: docs
title: "LongConverter"
linkTitle: "LongConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    The LongConverter class allows you to convert arbitrary values into longs using extended conversion rules.
---

### Description

The LongConverter class allows you to convert arbitrary values into longs using the following extended conversion rules:

- Strings are converted to floats, then to longs
- DateTime: total number of milliseconds since unix epoch   
- Boolean: 1 for true and 0 for false

### Methods

#### ToLong
Converts a value into long or returns 0 when conversion is not possible.

> ToLong(value any) int64

- **value**: any - value to convert.
- **returns**: int64 - long value or 0 when conversion is not supported.

#### ToLongWithDefault
Converts a value into integer or returns default when conversion is not possible.

> ToLongWithDefault(value any, defaultValue int64) int64

- **value**: any - value to convert.
- **defaultValue**: int64 - default value.
- **returns**: int64 - long value or default when conversion is not supported

#### ToNullableLong
Converts a value into long or returns nil when conversion is not possible.

> ToNullableLong(value any) (int64, bool)

- **value**: any - value to convert.
- **returns**: (int64, bool) - long value or null when conversion is not supported.


#### ToULong
Converts a value into unsigned long or returns 0 when conversion is not possible.

> ToULong(value any) uint64

- **value**: any - value to convert.
- **returns**: uint64 - long value or 0 when conversion is not supported.

#### ToULongWithDefault
Converts a value into unsigned long or returns default when conversion is not possible.

> ToULongWithDefault(value any, defaultValue uint64) uint64

- **value**: any - value to convert.
- **defaultValue**: uint64 - default value.
- **returns**: uint64 - long value or default when conversion is not supported.

#### ToNullableULong
Converts value into unsigned long or returns nil when conversion is not possible.

> ToNullableULong(value any) (uint64, bool)

- **value**: any - value to convert.
- **returns**: (uint64, bool) - long value or null when conversion is not supported.

### Examples

```go
value1, ok1 := convert.LongConverter.ToNullableLong("ABC")
value2, ok2 := convert.LongConverter.ToNullableLong("123.456")
value3, ok3 := convert.LongConverter.ToNullableLong(true)
value4, ok4 := convert.LongConverter.ToNullableLong(time.Now())

fmt.Println(value1, ok1) // 0, false
fmt.Println(value2, ok2) // 123, false
fmt.Println(value3, ok3) // 1, false
fmt.Println(value4, ok4) // current milliseconds (e.g. 1566333527), false

```

