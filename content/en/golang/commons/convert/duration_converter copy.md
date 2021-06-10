---
type: docs
title: "DurationConverter"
linkTitle: "DurationConverter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Converts arbitrary values into time.Duration values.

---

### Description
TODO: add description

### Methods

#### ToDuration
Converts value into time.Duration or returns current when conversion is not possible.

> ToDuration(value interface{}) time.Duration

- **value**: interface{} - the value to convert.
- **returns**: time.Duration - value or current when conversion is not supported.

#### ToDurationWithDefault
Converts value into time.Duration or returns default when conversion is not possible.

> ToDurationWithDefault(value interface{}, defaultValue time.Duration) time.Duration

- **value**: interface{} - the value to convert.
- **defaultValue**: time.Duration - the default value.
- **returns**: time.Duration - value or default when conversion is not supported.

#### ToNullableDuration
Converts value into time.Duration or returns nil when conversion is not possible.

> ToNullableDuration(value interface{}) *time.Duration

- **value**: interface{} - the value to convert.
- **returns**: *time.Duration - value or nil when conversion is not supported.


### Examples

```go
value1 := convert.DurationConverter.ToNullableDuration("123")
value2 := convert.DurationConverter.ToNullableDuration(123)
value3 := convert.DurationConverter.ToNullableDuration(123 * time.Second)

fmt.Println(value1) // 123ms
fmt.Println(value2) // 123ms
fmt.Println(value3) // 2m3s

```
