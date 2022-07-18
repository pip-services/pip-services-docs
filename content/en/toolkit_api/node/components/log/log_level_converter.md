---
type: docs
title: "LogLevelConverter"
linkTitle: "LogLevelConverter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Helper class used to convert log level values.
---

### Description

The LogLevelConverter class is used to convert log level values.

### Static methods

#### toInteger
Converts log level to a number.

> `public static` toInteger(level: [LogLevel](../log_level)): number

- **level**: [LogLevel](../log_level) - a log level to convert.
- **returns**: number - log level number value.


#### toLogLevel
Converts numbers and strings to standard log level values.

> `public static` toLogLevel(value: any, defaultValue: [LogLevel](../log_level) = LogLevel.Info): [LogLevel](../log_level)

- **value**: any - a value to be converted
- **defaultValue**: [LogLevel](../log_level) - a default value if conversion is not possible
- **returns**: [LogLevel](../log_level) - converted log level


#### toString
Converts log level to a string.

> `public static` toString(level: [LogLevel](../log_level)): string

- **level**: [LogLevel](../log_level) - a log level to convert
- **returns**: string - log level name string.



### See also
- #### [LogLevel](../log_level)
