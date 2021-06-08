---
type: docs
title: "LongConverter"
linkTitle: "LongConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    The LongConverter class allows you to convert arbitrary values into longs using extended conversion rules.
---

### Description

The LongConverter class allows you to convert arbitrary values into longs using the following extended conversion rules:

- Strings are converted to floats, then to longs
- DateTime: total number of milliseconds since unix epoсh   
- Boolean: 1 for true and 0 for false

### Funcs

#### ToLong
Converts value into long or returns 0 when conversion is not possible.

> (c *TLongConverter) ToLong(value interface{}) int64

- **value**: interface{} - the value to convert.
- **returns**: int64 - long value or 0 when conversion is not supported.

#### ToLongWithDefault
Converts value into integer or returns default when conversion is not possible.

> (c *TLongConverter) ToLongWithDefault(value interface{}, defaultValue int64) int64

- **value**: interface{} - the value to convert.
- **defaultValue**: int64 - the default value.
- **returns**: int64 - long value or default when conversion is not supported

#### ToNullableLong
Converts value into long or returns null when conversion is not possible.

> ToNullableLong(value interface{}) *int64

- **value**: interface{} - the value to convert.
- **returns**: *int64 - long value or null when conversion is not supported.


#### ToULong
Converts value into unsigned long or returns 0 when conversion is not possible.

> (c *TLongConverter) ToULong(value interface{}) uint64

- **value**: interface{} - the value to convert.
- **returns**: uint64 - long value or 0 when conversion is not supported.

#### ToULongWithDefault
Converts value into unsigned long or returns default when conversion is not possible.

> (c *TLongConverter) ToULongWithDefault(value interface{}, defaultValue uint64) uint64

- **value**: interface{} - the value to convert.
- **defaultValue**: uint64 - the default value.
- **returns**: uint64 - long value or default when conversion is not supported.

#### ToNullableULong
Converts value into unsigned long or returns null when conversion is not possible.

> (c *TLongConverter) ToNullableULong(value interface{}) *uint64

- **value**: interface{} - the value to convert.
- **returns**: *uint64 - long value or null when conversion is not supported.

### Examples

```go
value1 := convert.LongConverter.ToNullableLong("ABC")
value2 := convert.LongConverter.ToNullableLong("123.456")
value3 := convert.LongConverter.ToNullableLong(true)
value4 := convert.LongConverter.ToNullableLong(time.Now())

fmt.Println(value1)  // <nil>
fmt.Println(*value2) // 123
fmt.Println(*value3) // 1
fmt.Println(*value4) // current milliseconds (e.g. 1566333527)

```
