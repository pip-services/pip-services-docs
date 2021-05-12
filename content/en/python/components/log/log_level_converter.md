---
type: docs
title: "LogLevelConverter"
linkTitle: "LogLevelConverter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Helper class used to convert log level values.
---

### Description

The LogLevelConverter class is used to convert loge level values.

### Static methods

#### to_integer
Converts log level to a number.

> `static` to_integer(level: [LogLevel](../log_level)): int

- **level**: [LogLevel](../log_level) - a log level to convert.
- **returns**: int - log level number value.


#### to_log_level
Converts numbers and strings to standard log level values.

> `static` to_log_level(value: Any, default_value: [LogLevel](../log_level) = LogLevel.Info): [LogLevel](../log_level)

- **value**: Any - a value to be converted
- **default_value**: [LogLevel](../log_level) - a default value if conversion is not possible
- **returns**: [LogLevel](../log_level) - converted log level


#### to_string
Converts log level to a string.

> `static` to_string(level: [LogLevel](../log_level)): str

- **level**: [LogLevel](../log_level) - a log level to convert
- **returns**: str - log level name string.



### See also
- #### [LogLevel](../log_level)
