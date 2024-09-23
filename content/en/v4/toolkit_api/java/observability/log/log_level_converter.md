---
type: docs
title: "LogLevelConverter"
linkTitle: "LogLevelConverter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Helper class used to convert log level values.
---

### Description

The LogLevelConverter class is used to convert log level values.

### Static methods

#### toInteger
Converts log level to a number.

> `public static` int toInteger([LogLevel](../log_level) level)

- **level**: [LogLevel](../log_level) - a log level to convert.
- **returns**: int - log level number value.


#### toLogLevel
Converts numbers and strings to standard log level values.

> `public static` [LogLevel](../log_level) toLogLevel(Object value, [LogLevel](../log_level) defaultValue)

- **value**: Object - a value to be converted
- **defaultValue**: [LogLevel](../log_level) - a default value if conversion is not possible
- **returns**: [LogLevel](../log_level) - converted log level


#### toString
Converts log level to a string.

> `public static` String toString([LogLevel](../log_level) level)

- **level**: [LogLevel](../log_level) - a log level to convert
- **returns**: String - log level name string.



### See also
- #### [LogLevel](../log_level)
