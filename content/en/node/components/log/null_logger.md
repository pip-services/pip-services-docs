---
type: docs
title: "NullLogger"
linkTitle: "NullLogger"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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

> `public` debug(correlation_id: string, message: string, ...args: any[])

- **correlation_id**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



#### error
Logs recoverable application error.

> `public` error(correlation_id: string, error: Error, message: string, ...args: any[])

- **correlation_id**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



#### fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> `public` fatal(correlation_id: string, error: Error, message: string, ...args: any[])

- **correlation_id**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



#### getLevel
Gets the maximum log level. Messages with higher log level are filtered out.

> `public` getLevel(): [LogLevel](../log_level)

- **returns**: [LogLevel](../log_level) -  the maximum log level.


#### info
Logs an important information message

> `public` info(correlation_id: string, message: string, ...args: any[])

- **correlation_id**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



#### log
Logs a message at specified log level.

> `public` log(level: [LogLevel](../log_level), correlation_id: string, error: Error, message: string, ...args: any[])

- **level**: [LogLevel](../log_level) - a log level.
- **correlation_id**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



#### trace
Logs low-level debug information for troubleshooting.

> `public` trace(correlation_id: string, message: string, ...args: any[])

- **correlation_id**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.


#### warn
Logs a warning that may or may not have a negative impact.

> `public` warn(correlation_id: string, message: Error, ...args: any[])

- **correlation_id**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



### See also
- #### [ILogger](../ilogger)
