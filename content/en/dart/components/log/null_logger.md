---
type: docs
title: "NullLogger"
linkTitle: "NullLogger"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

`@override`
> void debug(String correlationId, String message, [List args])

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: List - arguments to parameterize the message.



#### error
Logs recoverable application error.

`@override`
> void error(String correlationId, Exception error, String message, [List args])

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: List - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) message that caused the process to crash.

`@override`
> void fatal(String correlationId, Exception error, String message, [List args])

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: List - arguments to parameterize the message.



#### getLevel
Gets the maximum log level. Messages with higher log level are filtered out.

`@override`
> [LogLevel](../log_level) getLevel()

- **returns**: [LogLevel](../log_level) -  the maximum log level.


#### info
Logs an important information message

`@override`
> void info(String correlationId, String message, [List args])

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: List - arguments to parameterize the message.



#### log
Logs a message at a specified log level.

`@override`
> void log([LogLevel](../log_level) level, String correlationId, Exception error, String message, [List args])

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: List - arguments to parameterize the message.



#### setLevel
Set the maximum log level.

`@override`
> void setLevel([LogLevel](../log_level) value)

- **level**: [LogLevel](../log_level) - a new maximum log level.


#### trace
Logs low-level debug information for troubleshooting.

`@override`
> void trace(String correlationId, String message, [List args])

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **message**: String - a human-readable message to log.
- **args**: List - arguments to parameterize the message.


#### warn
Logs a warning that may or may not have a negative impact.

`@override`
> void warn(String correlationId, String message, [List args])

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **message**: String - a human-readable message to log.
- **args**: List - arguments to parameterize the message.



### See also
- #### [ILogger](../ilogger)
