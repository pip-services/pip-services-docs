---
type: docs
title: "NullLogger"
linkTitle: "NullLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Dummy implementation of logger with no real effect.

---

**Implements:** [ILogger](../ilogger)

### Description

The NullLogger class provides a dummy logger with no real effect.

Important points

- It can be used in testing or in situations when a logger is required but must be disabled.

### Instance methods

#### debug
Logs high-level debug information for troubleshooting.

> void debug([IContext](../../../components/context/icontext) context, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### error
Logs recoverable application error.

> void error([IContext](../../../components/context/icontext) context, Exception error, String message, Object... args)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> void fatal([IContext](../../../components/context/icontext) context, Exception error, String message, Object... args)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### getLevel
Gets the maximum log level. Messages with higher log level are filtered out.

> [LogLevel](../log_level) getLevel()

- **returns**: [LogLevel](../log_level) -  the maximum log level.


#### info
Logs an important information message

> void info([IContext](../../../components/context/icontext) context, String message, Object... args)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### log
Logs a message at specified log level.

> void log([LogLevel](../log_level) level, [IContext](../../../components/context/icontext) context, Exception error, String message, Object... args)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### trace
Logs low-level debug information for troubleshooting.

> void trace([IContext](../../../components/context/icontext) context, String message, Object... args)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### warn
Logs a warning that may or may not have a negative impact.

> void warn([IContext](../../../components/context/icontext) context, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


### See also
- #### [ILogger](../ilogger)
