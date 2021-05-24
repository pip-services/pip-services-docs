---
type: docs
title: "LogLevelConverter"
linkTitle: "LogLevelConverter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Helper class used to convert log level values.
---

### Description

The LogLevelConverter class is used to convert log level values.

### Static methods

#### ToInteger
Converts log level to a number.

> `public static` int ToInteger([LogLevel](../log_level level))

- **level**: [LogLevel](../log_level) - a log level to convert.
- **returns**: int - log level number value.


#### ToLogLevel
Converts numbers and strings to standard log level values.

> `public static` [LogLevel](../log_level) ToLogLevel(object value, [LogLevel](../log_level) defaultValue = LogLevel.Info)

- **value**: object - a value to be converted
- **defaultValue**: [LogLevel](../log_level) - a default value if conversion is not possible
- **returns**: [LogLevel](../log_level) - converted log level


#### ToString
Converts log level to a string.

> `public static` string ToString([LogLevel](../log_level) level)

- **level**: [LogLevel](../log_level) - a log level to convert
- **returns**: string - log level name string.



### See also
- #### [LogLevel](../log_level)
