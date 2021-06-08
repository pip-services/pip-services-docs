---
type: docs
title: "IntegerConverter"
linkTitle: "IntegerConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    The IntegerConverter class allows you to convert arbitrary values into integers using extended conversion rules.

---

### Description
    
The IntegerConverter class allows you to convert arbitrary values into integers using the following extended conversion rules:

- Strings are converted to floats, then to integers
- DateTime: total number of milliseconds since unix epoсh  
- Boolean: 1 for True and 0 for False

### Methods

#### toInteger
Converts value into integer or returns 0 when conversion is not possible.  
See [LongConverter.ToLong](../long_converter/#tolong),  
[LongConverter.ToLongWithDefault](../long_converter/#tolongwithdefault)

> (c *TIntegerConverter) ToInteger(value interface{}) int

- **value**: interface{} - the value to convert.
- **returns**: int - integer value or 0 when conversion is not supported.

#### ToIntegerWithDefault
Converts value into integer or returns default value when conversion is not possible.
See [LongConverter.ToLongWithDefault](../long_converter/#tolongwithdefault),  
[LongConverter.ToNullableLong](../long_converter/#tonullablelong)

> (c *TIntegerConverter) ToIntegerWithDefault(value interface{}, defaultValue int) int

- **value**: interface{} - the value to convert.
- **defaultValue**: int - the default value.
- **returns**: int - integer value or default when conversion is not supported. 

#### ToNullableInteger
Converts value into integer or returns null when conversion is not possible.
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

> ToNullableInteger(value interface{}) *int

- **value**: interface{} - the value to convert.
- **returns**: *int - integer value or null when conversion is not supported.



#### ToUInteger
Converts value into unsigned integer or returns 0 when conversion is not possible.

> (c *TIntegerConverter) ToUInteger(value interface{}) uint

- **value**: interface{} - the value to convert.
- **returns**: uint - integer value or 0 when conversion is not supported.

#### ToUIntegerWithDefault
Converts value into unsigned integer or returns default when conversion is not possible.

> (c *TIntegerConverter) ToUIntegerWithDefault(value interface{}, defaultValue uint) uint

- **value**: interface{} - the value to convert.
- **defaultValue**: uint - the default value.
- **returns**: uint - integer value or default when conversion is not supported.

#### ToNullableUInteger
Converts value into integer or returns null when conversion is not possible.
See [LongConverter.toNullableLong](../long_converter/#tonullablelong)

> (c *TIntegerConverter) ToNullableUInteger(value interface{}) *uint

- **value**: interface{} - the value to convert.
- **returns**: *uint - integer value or null when conversion is not supported.


### Examples

```go
value1 := convert.IntegerConverter.ToNullableInteger("ABC")
value2 := convert.IntegerConverter.ToNullableInteger("123.456")
value3 := convert.IntegerConverter.ToNullableInteger(true)
value4 := convert.IntegerConverter.ToNullableInteger(time.Now())

fmt.Println(value1)  // <nil>
fmt.Println(*value2) // 123
fmt.Println(*value3) // 1
fmt.Println(*value4) // current milliseconds (e.g. 1566333428)

```
