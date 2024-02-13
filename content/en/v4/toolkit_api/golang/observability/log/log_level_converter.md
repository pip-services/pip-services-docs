---
type: docs
title: "LogLevelConverter"
linkTitle: "LogLevelConverter"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Helper class used to convert log level values.
---

### Description

The LogLevelConverter class is used to convert log level values.

### Methods

#### logLevelFromString
Converts log level to a LogLevel.

> logLevelFromString(value any) [LevelType](../log_level)

- **value**: any - a log level string to convert.
- **returns**: [LevelType](../log_level) - log level value.

#### logLevelToString
Converts log level to a string.

> logLevelToString(level [LevelType](../log_level)) string

- **level**: [LevelType](../log_level) - log level to convert.
- **returns**: string - log level name string.


#### ToLogLevel
Converts numbers and strings to standard log level values.

> (c *TLogLevelConverter) ToLogLevel(value any) [LevelType](../log_level)

- **value**: any - value to be converted
- **returns**: [LevelType](../log_level) - converted log level


#### ToString
Converts a log level to a string.

> (c *TLogLevelConverter) ToString(level [LevelType](../log_level)) string

- **level**: [LevelType](../log_level) - log level to convert
- **returns**: string - log level name string.



### See also
- #### [LogLevel](../log_level)

