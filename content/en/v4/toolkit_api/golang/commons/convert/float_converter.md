---
type: docs
title: "FloatConverter"
linkTitle: "FloatConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    The FloatConverter class allows you to convert arbitrary values into float using extended conversion rules.

---

### Description
The FloatConverter class allows you to convert arbitrary values into float using the following extended conversion rules:

- Strings are converted to float values
- DateTime: total number of milliseconds since unix epoch  
- Boolean: 1 for true and 0 for false

### Methods

#### ToFloat
Converts value into float or returns 0 when conversion is not possible.

> ToFloat(value any) float32

- **value**: any - value to convert.
- **returns**: float32 - float value or 0 when conversion is not supported.

#### ToFloatWithDefault
Converts value into float or returns default when conversion is not possible.  
See [DoubleConverter.ToDoubleWithDefault](../double_converter/#todoublewithdefault),  
[DoubleConverter.ToNullableDouble](../double_converter/#tonullabledouble)

> ToFloatWithDefault(value any, defaultValue float32) float32

- **value**: any - value to convert.
- **defaultValue**: float32 - default value.
- **returns**: float32 - float value or default value when conversion is not supported.

#### ToNullableFloat
Converts value into float or returns nil when conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../double_converter/#tonullabledouble)

> ToNullableFloat(value any) (float32, bool)

- **value**: any - value to convert.
- **returns**: (float32, bool) - float value and true or 0 and false when conversion is not supported.


### Examples

```go
value1, ok1 := convert.FloatConverter.ToNullableFloat("ABC")
value2, ok2 := convert.FloatConverter.ToNullableFloat("123.456")
value3, ok3 := convert.FloatConverter.ToNullableFloat(true)
value4, ok4 := convert.FloatConverter.ToNullableFloat(time.Now())
fmt.Println(value1, ok1) // 0, false
fmt.Println(value2, ok2) // 123.456, true
fmt.Println(value3, ok3) // 1, true
fmt.Println(value4, ok4) // current milliseconds (e.g. 1.566333114e+09), true

```

