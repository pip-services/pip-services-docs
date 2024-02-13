---
type: docs
title: "Logger"
linkTitle: "Logger"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Logger that captures and formats log messages.
    
---

**Inherits**: [ILogger](../ilogger), [IReconfigurable](../../../components/config/ireconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The Logger class allows you to create a logger that captures and formats logs messages.

**Important points**

- Child classes take the captured messages and write them to their specific destinations.

#### Configuration parameters
Parameters to pass to the [configure](#configure) method for component configuration:
 
- **level**: maximum log level to capture
- **source**: source (context) name

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source

### Fields

<span class="hide-title-link">

#### _level
Maximum log level to capture
> `protected` **_level**: [LogLevel](../log_level) = [LogLevel.Info](../log_level/#info)


#### _source
source (context) name
> `protected` **_source**: string = null

</span>



### Instance methods

#### ComposeError
Composes a human-readable error description

> `protected` string ComposeError(Exception error)

- **error**: Exception - error to format.
- **returns**: string - human-redable error description.


#### Configure
Configures a component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Debug
Logs high-level debug information for troubleshooting.

> `public` void Debug(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chainin.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.



#### Debug
Logs high-level debug information for troubleshooting.

> `public` void Debug(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chainn.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Error
Logs recoverable application error.

> `public` void Error(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chainn.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.

#### Error
Logs recoverable application error.

> `public` void Error(IContext context, Exception error, string message = null, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> `public` void Fatal(IContext context, string message, params object[] args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

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
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message

> `public` void Info(IContext context, string message, params object[] args): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.


#### Info
Logs an important information message

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

> `public override` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


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
- **error**: Exception - error object associated with this message
- **message**: string - human-readable message to log.
- **args**: object[] - arguments to parameterize the message.

### Abstract methods

#### Write
Writes a log message to the logger destination.

> `protected abstract` void Write([LogLevel](../log_level) level, IContext context, Exception error, string message)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.



### See also
- #### [ILogger](../ilogger)

