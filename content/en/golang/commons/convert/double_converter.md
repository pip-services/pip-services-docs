---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    The DoubleConverter class allows you to convert arbitrary values into double using extended conversion rules.

   
---

### Description

The DoubleConverter class allows you to convert arbitrary values into double using the following extended conversion rules:

 - Strings are converted to double values

 - DateTime: total number of milliseconds since unix epoсh
    
 - Boolean: 1 for true and 0 for false  

### Methods

#### toDouble
Converts value into doubles or returns 0 when conversion is not possible.  
See [ToDoubleWithDefault](#todoublewithdefault)

> ToDouble(value interface{}) float64

- **value**: interface{} - the value to convert.
- **returns**: float64 - double value or 0 when conversion is not supported.

#### ToDoubleWithDefault
Converts value into integer or returns default value when conversion is not possible.

> ToDoubleWithDefault(value interface{}, defaultValue float64) float64

- **value**: interface{} - the value to convert.
- **defaultValue**: float64 - the default value.
- **returns**: float64 - double value or default when conversion is not supported.

#### ToNullableDouble
Converts value into doubles or returns null when conversion is not possible.

> ToNullableDouble(value interface{}) *float64

- **value**: interface{} - the value to convert.
- **returns**: *float64 - double value or null when conversion is not supported.

### Examples

```go
value1 := convert.DoubleConverter.ToNullableDouble("ABC")
value2 := convert.DoubleConverter.ToNullableDouble("123.456")
value3 := convert.DoubleConverter.ToNullableDouble(true)
value4 := convert.DoubleConverter.ToNullableDouble(time.Now())

fmt.Println(value1)  // <nil>
fmt.Println(*value2) // 123.456
fmt.Println(*value3) // 1
fmt.Println(*value4) // current milliseconds (e.g. 1.566333114e+09)

```
