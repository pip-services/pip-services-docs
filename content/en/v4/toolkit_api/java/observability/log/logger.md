---
type: docs
title: "Logger"
linkTitle: "Logger"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Logger that captures and formats log messages.
    
---

**Implements:** [ILogger](../ilogger), [IReconfigurable](../../../components/config/ireconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The Logger class allows you to create a logger that captures and formats logs messages.

Important points

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
> [LogLevel](../log_level) **_level** = LogLevel.Info


#### _source
source (context) name
> String **_source** = null

</span>


### Instance methods

#### compose_error
Composes an human-readable error description

> String composeError(Exception error)

- **error**: Exception - an error to format.
- **returns**: String - a human-redable error description.


#### configure
Configures component by passing configuration parameters.

> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### debug
Logs high-level debug information for troubleshooting.

> void debug([IContext](../../../components/context/icontext) context, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### error
Logs recoverable application error.

> void error([IContext](../../../components/context/icontext) context, Exception error, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### fatal
Logs fatal (unrecoverable) messages that caused the process to crash.

> void fatal([IContext](../../../components/context/icontext) context, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: str - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### formatAndWrite
Formats the log message and writes it to the logger destination.

> formatAndWrite([LogLevel](../log_level) level, [IContext](../../../components/context/icontext) context, Exception error, String message, Object[] args)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Optional[Exception] - an error object associated with this message.
- **message**: Optional[String] - a human-readable message to log.
- **args**: Object[] - arguments to parameterize the message.


#### get_level
Gets the maximum log level. Messages with higher log level are filtered out.

> [LogLevel](../log_level) getLevel()

- **returns**: [LogLevel](../log_level) -  the maximum log level.


#### getSource
Gets the source (context) name.

> String getSource()

- **returns**: String -  the source (context) name.


#### info
Logs an important information message

> void info([IContext](../../../components/context/icontext) context, String message, Object... args)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### log
Logs a message at a specified log level.

> void log([LogLevel](../log_level) level, [IContext](../../../components/context/icontext) context, Exception error, String message, Object... args)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.


#### setLevel
Sets the maximum log level.

> void setLevel([LogLevel](../log_level) value)

- **level**: [LogLevel](../log_level) - a new maximum log level.


#### trace
Logs a low-level debug information for troubleshooting.

> void trace([IContext](../../../components/context/icontext) context, String message, Object... args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.

#### warn
Logs a warning that may or may not have a negative impact.

> void warn([IContext](../../../components/context/icontext) context, String message, Object... args)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: String - a human-readable message to log.
- **args**: Object - arguments to parameterize the message.

### Abstract methods

#### _write
Writes a log message to the logger destination.

> `abstract method` void write([LogLevel](../log_level) level, [IContext](../../../components/context/icontext) context, Exception error, String message)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.


### See also
- #### [ILogger](../ilogger)
