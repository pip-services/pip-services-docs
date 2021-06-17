---
type: docs
title: "BooleanConverter"
linkTitle: "BooleanConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    The BooleanConverter class allows you to convert different values to boolean values using extended conversion rules.
    
---

### Description    

The BooleanConverter class allows you to convert different values to boolean values using the following rules:

- Numbers: <>0 are true, =0 are false
    
- Strings: "true", "yes", "T", "Y", "1" are true; "false", "no", "F", "N" are false

- DateTime: <>0 total milliseconds are true, =0 are false


### Methods

#### ToBoolean
Converts value into boolean or returns false when conversion is not possible.

> ToBoolean(value interface{}) bool

- **value**: interface{} - the value to convert.
- **returns**: bool - boolean value or false when conversion is not supported.

#### ToBooleanWithDefault
Converts value into boolean or returns default value when conversion is not possible

> ToBooleanWithDefault(value interface{}, defaultValue bool) bool

- **value**: interface{} - value to convert.
- **defaultValue**: bool - default value
- **returns**: bool - boolean value or default when conversion is not supported.


#### ToNullableBoolean
Converts value into boolean or returns nil when conversion is not possible.

> ToNullableBoolean(value interface{}) *bool

- **value**: interface{} - value to convert.
- **returns**: *bool - boolean value or nil when convertion is not supported.

### Examples

```go
value1 := convert.BooleanConverter.ToNullableBoolean(true)
value2 := convert.BooleanConverter.ToNullableBoolean("yes")
value3 := convert.BooleanConverter.ToNullableBoolean(1)
value4 := convert.BooleanConverter.ToNullableBoolean(struct{}{})

fmt.Println(*value1) // true
fmt.Println(*value2) // true
fmt.Println(*value3) // true
fmt.Println(value4)  // <nil>

```
