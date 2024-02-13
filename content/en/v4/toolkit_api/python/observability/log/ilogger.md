---
type: docs
title: "ILogger"
linkTitle: "ILogger"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-observability-python"
description: >
    Interface for logger components that capture execution log messages.
---

### Description

The ILogger interface provides a set of methods for logger components that capture log messages.


### Instance methods

#### debug
Logs high-level debug information for troubleshooting.

> debug(context: Optional[IContext], message: str, *args: Any, **kwargs: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### error
Logs recoverable application error.

> error(context: Optional[IContext], error: Exception, message: str, *args: Any, **kwargs: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> fatal(context: Optional[str], error: Exception, message: str, *args: Any, **kwargs: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### get_level
Gets the maximum log level. Messages with higher log level are filtered out.

> get_level(): [LogLevel](../log_level)

- **returns**: [LogLevel](../log_level) -  the maximum log level.


#### info
Logs an important information message

> info(context: Optional[IContext], message: str, *args: Any, **kwargs: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### log
Logs a message at a specified log level.

> log(level: [LogLevel](../log_level), context: Optional[IContext], error: Optional[Exception], message: Optional[str], *args: Any, **kwargs: Any)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Optional[Exception] - an error object associated with this message.
- **message**: Optional[str] - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### set_level
Set the maximum log level.

> set_level(level: [LogLevel](../log_level))

- **level**: [LogLevel](../log_level) - a new maximum log level.


#### trace
Logs low-level debug information for troubleshooting.

> trace(context: Optional[IContext], message: str, *args: Any, **kwargs: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.

#### warn
Logs a warning that may or may not have a negative impact.

> warn(context: Optional[IContext], message: str, *args: Any, **kwargs: Any)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.
