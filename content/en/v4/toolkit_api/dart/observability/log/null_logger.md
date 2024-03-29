---
type: docs
title: "NullLogger"
linkTitle: "NullLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-observability-dart"
description: >
    Dummy implementation of logger with no real effect.

---

**Implements:** [ILogger](../ilogger)

### Description

The NullLogger class provides a dummy logger with no real effect.

**Important points**

- It can be used in testing or in situations when a logger is required but must be disabled.

### Instance methods

#### debug
Logs high-level debug information for troubleshooting.

`@override`
> void debug(IContext? context, String message, [List? args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - human-readable message to log.
- **args**: List? - arguments to parameterize the message.



#### error
Logs recoverable application error.

`@override`
> void error(IContext? context, Exception? error, String message, [List? args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception? - error object associated with this message.
- **message**: String - human-readable message to log.
- **args**: List? - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) message that caused the process to crash.

`@override`
> void fatal(IContext? context, Exception? error, String message, [List? args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception? - error object associated with this message.
- **message**: String - human-readable message to log.
- **args**: List? - arguments to parameterize the message.



#### getLevel
Gets the maximum log level. Messages with higher log level are filtered out.

`@override`
> [LogLevel](../log_level) getLevel()

- **returns**: [LogLevel](../log_level) -  maximum log level.


#### info
Logs an important information message.

`@override`
> void info(IContext? context, String message, [List? args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - human-readable message to log.
- **args**: List? - arguments to parameterize the message.



#### log
Logs a message at a specified log level.

`@override`
> void log([LogLevel](../log_level) level, IContext? context, Exception? error, String message, [List? args])

- **level**: [LogLevel](../log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception? - error object associated with this message.
- **message**: String - human-readable message to log.
- **args**: List? - arguments to parameterize the message.



#### setLevel
Set the maximum log level.

`@override`
> void setLevel([LogLevel](../log_level) value)

- **level**: [LogLevel](../log_level) - new maximum log level.


#### trace
Logs low-level debug information for troubleshooting.

`@override`
> void trace(IContext? context, String message, [List? args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - human-readable message to log.
- **args**: List? - arguments to parameterize the message.


#### warn
Logs a warning that may or may not have a negative impact.

`@override`
> void warn(IContext? context, String message, [List? args])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - human-readable message to log.
- **args**: List? - arguments to parameterize the message.



### See also
- #### [ILogger](../ilogger)
