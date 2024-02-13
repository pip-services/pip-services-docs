---
type: docs
title: "DurationConverter"
linkTitle: "DurationConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: > 
    Converts arbitrary values into time.Duration values.

---

### Description
The DurationConverter class allows you to convert arbitrary values into time.Duration values.

### Methods

#### ToDuration
Converts value into time.Duration or returns current when conversion is not possible.

> ToDuration(value any) time.Duration

- **value**: any - value to convert.
- **returns**: time.Duration - value or current when conversion is not supported.

#### ToDurationWithDefault
Converts value into time.Duration or returns default when conversion is not possible.

> ToDurationWithDefault(value any, defaultValue time.Duration) time.Duration

- **value**: any - value to convert.
- **defaultValue**: time.Duration - default value.
- **returns**: time.Duration - value or default when conversion is not supported.

#### ToNullableDuration
Converts value into time.Duration or returns nil when conversion is not possible.

> ToNullableDuration(value any) (time.Duration, bool)

- **value**: any - value to convert.
- **returns**: *time.Duration - value and true or 0 and false when conversion is not supported.


### Examples

```go
value1, ok1 := convert.DurationConverter.ToNullableDuration("123")
value2, ok2 := convert.DurationConverter.ToNullableDuration(123)
value3, ok3 := convert.DurationConverter.ToNullableDuration(123 * time.Second)
fmt.Println(value1, ok1) // 123ms, true
fmt.Println(value2, ok2) // 123ms, true
fmt.Println(value3, ok3) // 2m3s, true

```

