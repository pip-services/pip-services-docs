---
type: docs
title: "LogLevelConverter"
linkTitle: "LogLevelConverter"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Helper class used to convert log level values.
---

### Description

The LogLevelConverter class is used to convert log level values.

### Methods

#### LogLevelFromString
Converts log level to a LogLevel.

> LogLevelFromString(value interface{}) int

- **value**: interface{} - a log level string to convert.
- **returns**: int - log level value.

#### LogLevelToString
Converts log level to a string.

> LogLevelToString(level int) string

- **level**: int - log level to convert.
- **returns**: string - log level name string.


#### ToLogLevel
Converts numbers and strings to standard log level values.

> (c *TLogLevelConverter) ToLogLevel(value interface{}) int

- **value**: interface{} - value to be converted
- **returns**: int - converted log level


#### ToString
Converts a log level to a string.

> (c *TLogLevelConverter) ToString(level int) string

- **level**: int - log level to convert
- **returns**: string - log level name string.



### See also
- #### [LogLevel](../log_level)
