---
type: docs
title: "LogLevelConverter"
linkTitle: "LogLevelConverter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Helper class used to convert log level values.
---

### Description

The LogLevelConverter class is used to convert log level values.

### Static methods

#### toInteger
Converts log level to a number.

> `static` int toInteger([LogLevel](../log_level) level)

- **level**: [LogLevel](../log_level) - a log level to convert.
- **returns**: int - log level number value.


#### toLogLevel
Converts numbers and strings to standard log level values.

> `static` LogLevel toLogLevel(dynamic value, [[LogLevel](../log_level) defaultValue = [LogLevel.Info](../log_level)])

- **value**: dynamic - value to be converted
- **defaultValue**: [LogLevel](../log_level) - default value if conversion is not possible
- **returns**: [LogLevel](../log_level) - converted log level


#### toString2
Converts log level to a string.

> `static` String toString2([LogLevel](../log_level) level)

- **level**: [LogLevel](../log_level) - log level to convert
- **returns**: String - log level name string.



### See also
- #### [LogLevel](../log_level)
