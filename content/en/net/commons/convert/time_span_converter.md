---
type: docs
title: "TimeSpanConverter"
linkTitle: "TimeSpanConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Converts objects to TimeSpans.

---

### Description

The TimeSpanConverter class allows you to convert objects to TimeSpans. 

### Static methods

#### ToNullableTimeSpan
Converts value into TimeSpan or returns null when value is null.

> `public static` TimeSpan? ToNullableTimeSpan(object value)

- **value**: object - value to converted
- **returns**: TimeSpan - TimeSpan value or null when value is null.

#### ToTimeSpan
Converts value into TimeSpan.

> `public static` TimeSpan ToTimeSpan(object value)

- **value**: object - value to converted
- **returns**: TimeSpan - TimeSpan value or null when value is null.

#### ToTimeSpanWithDefault
Converts value into TimeSpan or returns a given default when value is null.

> `public static` TimeSpan ToTimeSpanWithDefault(object value, TimeSpan? defaultValue)

- **value**: object - value to converted
- **defaultValue**: TimeSpan - default value
- **returns**: TimeSpan - TimeSpan value or null when value is null.
