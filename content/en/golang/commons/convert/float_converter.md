---
type: docs
title: "FloatConverter"
linkTitle: "FloatConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    The FloatConverter class allows you to convert arbitrary values into float using extended conversion rules.

---

### Description
The FloatConverter class allows you to convert arbitrary values into float using the following extended conversion rules:

- Strings are converted to float values
- DateTime: total number of milliseconds since unix epoсh  
- Boolean: 1 for true and 0 for false

### Methods

#### ToFloat
Converts value into float or returns 0 when conversion is not possible.

> ToFloat(value interface{}) float32

- **value**: interface{} - the value to convert.
- **returns**: float32 - float value or 0 when conversion is not supported.

#### ToFloatWithDefault
Converts value into float or returns default when conversion is not possible.  
See [DoubleConverter.ToDoubleWithDefault](../double_converter/#todoublewithdefault),  
[DoubleConverter.ToNullableDouble](../double_converter/#tonullabledouble)

> ToFloatWithDefault(value interface{}, defaultValue float32) float32

- **value**: interface{} - the value to convert.
- **defaultValue**: float32 - the default value.
- **returns**: float32 - float value or default value when conversion is not supported.

#### ToNullableFloat
Converts value into float or returns null when conversion is not possible.  
See [DoubleConverter.ToNullableDouble](../double_converter/#tonullabledouble)

> ToNullableFloat(value interface{}) *float32

- **value**: interface{} - the value to convert.
- **returns**: *float32 - float value or null when conversion is not supported.


### Examples

```go
value1 := convert.FloatConverter.ToNullableFloat("ABC")
value2 := convert.FloatConverter.ToNullableFloat("123.456")
value3 := convert.FloatConverter.ToNullableFloat(true)
value4 := convert.FloatConverter.ToNullableFloat(time.Now())

fmt.Println(value1)  // <nil>
fmt.Println(*value2) // 123.456
fmt.Println(*value3) // 1
fmt.Println(*value4) // current milliseconds (e.g. 1.566333114e+09)

```
