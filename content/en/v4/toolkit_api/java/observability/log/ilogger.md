---
type: docs
title: "ILogger"
linkTitle: "ILogger"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-javae"
description: >
    Interface for logger components that capture execution log messages.
---

### Description

The ILogger interface provides a set of methods for logger components that capture log messages.


### Instance methods

#### debug
Logs high-level debug information for troubleshooting.

> void debug([IContext](../../../components/context/icontext) context, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.



#### error
Logs recoverable application error.

> void error([IContext](../../../components/context/icontext) context, Exception error, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> void fatal([IContext](../../../components/context/icontext) context, Exception error, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.



#### getLevel
Gets the maximum log level. Messages with higher log level are filtered out.

> [LogLevel](../log_level) getLevel()

- **returns**: [LogLevel](../log_level) -  the maximum log level.

#### log
Logs a message at a specified log level.

> void log( [LogLevel](../log_level) level, [IContext](../../../components/context/icontext) context, Exception error, String message, Object... args)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **error**: Exceptionr - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### info
Logs an important information message

> void info([IContext](../../../components/context/icontext)t context, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### setLevel
Set the maximum log level.

> void setLevel([LogLevel](../log_level) value)

- **level**: [LogLevel](../log_level) - a new maximum log level.


#### trace
Logs low-level debug information for troubleshooting.

> void trace([IContext](../../../components/context/icontext) context, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### warn
Logs a warning that may or may not have a negative impact.

> void warn([IContext](../../../components/context/icontext) context, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.

