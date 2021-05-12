---
type: docs
title: "ILogger"
linkTitle: "ILogger"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Interface for logger components that capture execution log messages.
---

### Description

The ILogger interface provides a set of methods for logger components that capture log messages.


### Instance methods

#### debug
Logs a high-level debug information for troubleshooting.

> debug(correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### error
Logs recoverable application error.

> error(correlation_id: Optional[str], error: Exception, message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> fatal(correlation_id: Optional[str], error: Exception, message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
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

> info(correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### log
Logs a message at specified log level.

> log(level: [LogLevel](../log_level), correlation_id: Optional[str], error: Optional[Exception], message: Optional[str], *args: Any, **kwargs: Any)

- **level**: [LogLevel](../log_level) - a log level.
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **error**: Optional[Exception] - an error object associated with this message.
- **message**: Optional[str] - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.


#### set_level
Set the maximum log level.

> set_level(level: [LogLevel](../log_level))

- **level**: [LogLevel](../log_level) - a new maximum log level.


#### trace
Logs a low-level debug information for troubleshooting.

> trace(correlation_id: Optional[str], message: str, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.

#### warn
Logs a warning that may or may not have a negative impact.

> warn(correlation_id: Optional[str], message: Exception, *args: Any, **kwargs: Any)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **message**: str - a human-readable message to log.
- **args**: Any - arguments to parameterize the message.
- **kwargs**: Any - arguments to parameterize the message.
