---
type: docs
title: "NullLogger"
linkTitle: "NullLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Dummy implementation of logger with no real effect.

---

**Inherits**: [ILogger](../ilogger)

### Description

The NullLogger class provides a dummy logger with no real effect.

**Important points**

- It can be used in testing or in situations when a logger is required but must be disabled.

### Instance methods

#### ComposeError
Composes an human-readable error description.

> `protected` string ComposeError(Exception error)

- **error**: Exception - error to format.
- **returns**: string - human-redable error description.


#### Configure
Configures a component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../components/config/config_params/) config)

- **config**: [ConfigParams](../../../components/config/config_params/) - configuration parameters to be set.


#### Debug
Logs high-level debug information for troubleshooting.

> `public` void Debug(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Debug
Logs high-level debug information for troubleshooting.

> `public` void Debug(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Error
Logs a recoverable application error.

> `public` void Error(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.

#### Error
Logs a recoverable application error.

> `public` void Error(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs a fatal (unrecoverable) message that caused the process to crash.

> `public` void Fatal(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs a fatal (unrecoverable) message that caused the process to crash.

> `public` void Fatal(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### FormatAndWrite
Formats the log message and writes it to the logger destination.

> `protected` void FormatAndWrite([LogLevel](../log_level) level, IContext context, Exception error, string message, object[] args)

- **level**: [LogLevel](../log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[]- arguments to parameterize the message.


#### Info
Logs an important information message

> `public` void Info(IContext context, string message, params object[] args): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message.

> `public` void Info(IContext context, Exception error, string message = null, params object[] args): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Log
Logs a message at a specified log level.

> `public` void Log([LogLevel](../log_level) level, IContext context, Exception error, string message, params object[] args)

- **level**: [LogLevel](../log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../components/config/config_params/) references)

- **references**: [IReferences](../../../components/config/config_params/) - references to locate the component's dependencies.


#### Trace
Logs low-level debug information for troubleshooting.

> `public` void Trace(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Trace
Logs low-level debug information for troubleshooting.

> `public` void Trace(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> `public` void Warn(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> `public` void Warn(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


### See also
- #### [ILogger](../ilogger)

