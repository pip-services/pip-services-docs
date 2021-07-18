---
type: docs
title: "Logger"
linkTitle: "Logger"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Logger that captures and formats log messages.
    
---

**Implements:** [ILogger](../ilogger), [IReconfigurable](../../../commons/config/ireconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The Logger class allows you to create a logger that captures and formats logs messages.

Important points

- Child classes take the captured messages and write them to their specific destinations.

#### Configuration parameters
Parameters to pass to the [configure](#configure) method for component configuration:
 
- **level**: maximum log level to capture
- **source**: source (context) name

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source

### Constructors
Creates a new instance of the logger.

> Logger()

### Fields

<span class="hide-title-link">

#### _level
Maximum log level to capture
> **_level**: [LogLevel](../log_level) = LogLevel.Info


#### source
source (context) name
> **source**: String

</span>


### Instance methods

#### composeError
Composes an human-readable error description

> String composeError(Exception error)

- **error**: Exception - an error to format.
- **returns**: String - a human-redable error description.


#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### debug
Logs high-level debug information for troubleshooting.

`@override`
> void debug(String correlationId, String message, [List args])

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **message**: String - a human-readable message to log.
- **args**: List- arguments to parameterize the message.



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


#### _formatAndWrite
Formats the log message and writes it to the logger destination.

> void _formatAndWrite([LogLevel](../log_level) level, String correlationId, Exception error, String message, List args)

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.
- **args**: List - arguments to parameterize the message.


#### getLevel
Gets the maximum log level. Messages with higher log level are filtered out.

`@override`
> [LogLevel](../log_level) getLevel()

- **returns**: [LogLevel](../log_level) -  the maximum log level.


#### getSource
Gets the source (context) name.

> String getSource()

- **returns**: String -  the source (context) name.


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
