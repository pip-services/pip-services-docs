---
type: docs
title: "BooleanConverter"
linkTitle: "BooleanConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
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

> ToBoolean(value any) bool

- **value**: any - the value to convert.
- **returns**: bool - boolean value or false when conversion is not supported.

#### ToBooleanWithDefault
Converts value into boolean or returns default value when conversion is not possible

> ToBooleanWithDefault(value any, defaultValue bool) bool

- **value**: any - value to convert.
- **defaultValue**: bool - default value
- **returns**: bool - boolean value or default when conversion is not supported.


#### ToNullableBoolean
Converts value into boolean or returns nil when conversion is not possible.

> ToNullableBoolean(value any) (bool, bool)

- **value**: any - value to convert.
- **returns**: (bool, bool) -  boolean value and true or false and false when conversion is not supported.

### Examples

```go
value1, ok1 := convert.BooleanConverter.ToNullableBoolean(true)
value2, ok2 := convert.BooleanConverter.ToNullableBoolean("yes")
value3, ok3 := convert.BooleanConverter.ToNullableBoolean(1)
value4, ok4 := convert.BooleanConverter.ToNullableBoolean(struct{}{})
fmt.Println(value1, ok1) // true, true
fmt.Println(value2, ok2) // true, true
fmt.Println(value3, ok3) // true, true
fmt.Println(value4, ok4)  // false, false

```

