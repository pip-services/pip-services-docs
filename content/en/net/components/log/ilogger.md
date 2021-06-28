---
type: docs
title: "ILogger"
linkTitle: "ILogger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
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

> void Debug(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Debug
Logs high-level debug information for troubleshooting.

> void Debug(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Error
Logs recoverable application error.

> void Error(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.

#### Error
Logs recoverable application error.

> void Error(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> void Fatal(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> void Fatal(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message

> void Info(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message

> void Info(string correlationId, Exception error, string message = null, params object[] args): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Log
Logs a message at a specified log level.

> void Log([LogLevel](../log_level) level, string correlationId, Exception error, string message, params object[] args)

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Trace
Logs low-level debug information for troubleshooting.

> void Trace(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Trace
Logs low-level debug information for troubleshooting.

> void Trace(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> void Warn(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> void Warn(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.
