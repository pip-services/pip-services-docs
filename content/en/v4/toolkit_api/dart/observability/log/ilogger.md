---
type: docs
title: "ILogger"
linkTitle: "ILogger"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-observability-dart"
description: >
    Interface for logger components that capture execution log messages.
---

### Description

The ILogger interface provides a set of methods for logger components that capture log messages.


### Instance methods

#### debug
Logs high-level debug information for troubleshooting.

> void debug(IContext? context, String message, [List args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - human-readable message to log.
- **args**: List - arguments to parameterize the message.



#### error
Logs recoverable application errors.

> void error(IContext? context, Exception error, String message, [List args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: String - human-readable message to log.
- **args**: List - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> void fatal(IContext? context, Exception? error, String message, [List args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception? - error object associated with this message.
- **message**: String - human-readable message to log.
- **args**: List - arguments to parameterize the message.



#### getLevel
Gets the maximum log level. Messages with higher log level are filtered out.

> [LogLevel](../log_level) getLevel()

- **returns**: [LogLevel](../log_level) -  maximum log level.


#### info
Logs an important information message.

> void info(IContext? context, String message, [List? args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - human-readable message to log.
- **args**: List - arguments to parameterize the message.


#### log
Logs a message at a specified log level.

> void log([LogLevel](../log_level) level, IContext? context, Exception? error, String message, [List? args])

- **level**: [LogLevel](../log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception? - error object associated with this message.
- **message**: String - human-readable message to log.
- **args**: List? - arguments to parameterize the message.



#### setLevel
Set the maximum log level.

> void setLevel([LogLevel](../log_level) value)

- **level**: [LogLevel](../log_level) - new maximum log level.


#### trace
Logs low-level debug information for troubleshooting.

> void trace(IContext? context, String message, [List args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - human-readable message to log.
- **args**: List - arguments to parameterize the message.


#### warn
Logs a warning that may or may not have a negative impact.

> void warn(IContext? context, String message, [List? args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - human-readable message to log.
- **args**: List? - arguments to parameterize the message.

