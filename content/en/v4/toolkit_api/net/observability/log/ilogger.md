---
type: docs
title: "ILogger"
linkTitle: "ILogger"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Interface for logger components that capture execution log messages.
---

### Description

The ILogger interface provides a set of methods for logger components that capture log messages.


### Properties

#### Level
Gets or sets the maximum log level. Messages with higher log level are filtered out.

> [LogLevel](../log_level) Level { get; set; }


### Instance methods

#### Debug
Logs high-level debug information for troubleshooting.

> void Debug(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Debug
Logs high-level debug information for troubleshooting.

> void Debug(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Error
Logs recoverable application error.

> void Error(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.

#### Error
Logs recoverable application error.

> void Error(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> void Fatal(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> void Fatal(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message

> void Info(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message

> void Info(IContext context, Exception error, string message = null, params object[] args): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Log
Logs a message at a specified log level.

> void Log([LogLevel](../log_level) level, IContext context, Exception error, string message, params object[] args)

- **level**: [LogLevel](../log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Trace
Logs low-level debug information for troubleshooting.

> void Trace(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Trace
Logs low-level debug information for troubleshooting.

> void Trace(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> void Warn(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> void Warn(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.

