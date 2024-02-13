---
type: docs
title: "DoubleConverter"
linkTitle: "DoubleConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    The DoubleConverter class allows you to convert arbitrary values into double using extended conversion rules.

   
---

### Description

The DoubleConverter class allows you to convert arbitrary values into double using the following extended conversion rules:

 - Strings are converted to double values

 - DateTime: total number of milliseconds since unix epoch
    
 - Boolean: 1 for true and 0 for false  

### Methods

#### toDouble
Converts value into doubles or returns 0 when conversion is not possible.  
See [ToDoubleWithDefault](#todoublewithdefault)

> ToDouble(value any) float64

- **value**: any - value to convert.
- **returns**: float64 - double value or 0 when conversion is not supported.

#### ToDoubleWithDefault
Converts value into integer or returns default value when conversion is not possible.

> ToDoubleWithDefault(value any, defaultValue float64) float64

- **value**: any - value to convert.
- **defaultValue**: float64 - default value.
- **returns**: float64 - double value or default when conversion is not supported.

#### ToNullableDouble
Converts value into doubles or returns nil when conversion is not possible.

> ToNullableDouble(value any) (float64, bool)

- **value**: any - value to convert.
- **returns**: (float64, bool) - double value and true or 0 and false when conversion is not supported.

### Examples

```go
value1, ok1 := convert.DoubleConverter.ToNullableDouble("ABC")
value2, ok2 := convert.DoubleConverter.ToNullableDouble("123.456")
value3, ok3 := convert.DoubleConverter.ToNullableDouble(true)
value4, ok4 := convert.DoubleConverter.ToNullableDouble(time.Now())
fmt.Println(value1, ok1) // 0, false
fmt.Println(value2, ok2) // 123.456, true
fmt.Println(value3, ok3) // 1, true
fmt.Println(value4, ok4) // current milliseconds (e.g. 1.566333114e+09), true

```

