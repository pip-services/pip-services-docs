---
type: docs
title: "NullLogger"
linkTitle: "NullLogger"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Dummy implementation of logger with no real effect.

---

**Inherits**: [ILogger](../ilogger)

### Description

The NullLogger class provides a dummy logger with no real effect.

Important points

- It can be used in testing or in situations when a logger is required but must be disabled.

### Instance methods

#### ComposeError
Composes an human-readable error description

> `protected` string ComposeError(Exception error)

- **error**: Exception - an error to format.
- **returns**: string - a human-redable error description.


#### Configure
Configures component by passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Debug
Logs high-level debug information for troubleshooting.

> `public` void Debug(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Debug
Logs high-level debug information for troubleshooting.

> `public` void Debug(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Error
Logs recoverable application error.

> `public` void Error(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.

#### Error
Logs recoverable application error.

> `public` void Error(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> `public` void Fatal(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> `public` void Fatal(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### FormatAndWrite
Formats the log message and writes it to the logger destination.

> `protected` void FormatAndWrite([LogLevel](../log_level) level, string correlationId, Exception error, string message, object[] args)

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[]- arguments to parameterize the message.


#### Info
Logs an important information message

> `public` void Info(string correlationId, string message, params object[] args): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message

> `public` void Info(string correlationId, Exception error, string message = null, params object[] args): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Log
Logs a message at a specified log level.

> `public` void Log([LogLevel](../log_level) level, string correlationId, Exception error, string message, params object[] args)

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### Trace
Logs low-level debug information for troubleshooting.

> `public` void Trace(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Trace
Logs low-level debug information for troubleshooting.

> `public` void Trace(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> `public` void Warn(string correlationId, string message, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> `public` void Warn(string correlationId, Exception error, string message = null, params object[] args)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message
- **message**: string - a human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


### See also
- #### [ILogger](../ilogger)
