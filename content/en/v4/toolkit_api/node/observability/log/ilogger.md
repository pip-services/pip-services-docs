---
type: docs
title: "ILogger"
linkTitle: "ILogger"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-observability-node"
description: >
    Interface for logger components that capture execution log messages.
---

### Description

The ILogger interface provides a set of methods for logger components that capture log messages.


### Instance methods

#### debug
Logs high-level debug information for troubleshooting.

> debug(context: [IContext](../../../components/context/icontext), message: string, ...args: any[]): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



#### error
Logs recoverable application error.

> error(context: [IContext](../../../components/context/icontext), error: Error, message: string, ...args: any[]): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> fatal(context: [IContext](../../../components/context/icontext), error: Error, message: string, ...args: any[]): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



#### getLevel
Gets the maximum log level. Messages with higher log level are filtered out.

> getLevel(): [LogLevel](../log_level)

- **returns**: [LogLevel](../log_level) -  the maximum log level.


#### info
Logs an important information message

> info(context: [IContext](../../../components/context/icontext), message: string, ...args: any[]): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



#### log
Logs a message at a specified log level.

> log(level: [LogLevel](../log_level), context: [IContext](../../../components/context/icontext), error: Error, message: string, ...args: any[]): void

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.



#### setLevel
Set the maximum log level.

> setLevel(level: [LogLevel](../log_level)): void

- **level**: [LogLevel](../log_level) - a new maximum log level.


#### trace
Logs low-level debug information for troubleshooting.

> trace(context: [IContext](../../../components/context/icontext), message: string, ...args: any[]): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.


#### warn
Logs a warning that may or may not have a negative impact.

> warn(context: [IContext](../../../components/context/icontext), message: string, ...args: any[]): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chainn.
- **message**: string - a human-readable message to log.
- **args**: any[] - arguments to parameterize the message.

