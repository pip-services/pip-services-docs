---
type: docs
title: "Logger"
linkTitle: "Logger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
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

### Fields

<span class="hide-title-link">

#### _level
Maximum log level to capture
> `protected` **_level**: [LogLevel](../log_level) = LogLevel.Info


#### _source
source (context) name
> `protected` **_source**: string

</span>


### Instance methods

#### composeError
Composes an human-readable error description

> `protected` composeError(error: Error): string

- **error**: Error - an error to format.
- **returns**: string - a human-redable error description.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### debug
Logs high-level debug information for troubleshooting.

> `public` debug(correlationId: string, message: string, ...args: any[]): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: any[]- arguments to parameterize the message.



#### error
Logs recoverable application error.

> `public` error(correlationId: string, error: Error, message: string, ...args: any[]): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[]- arguments to parameterize the message.



#### fatal
Logs fatal (unrecoverable) messages that caused the process to crash.

> `public` fatal(correlationId: string, error: Error, message: string, ...args: any[]): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[]- arguments to parameterize the message.



#### formatAndWrite
Formats the log message and writes it to the logger destination.

> `protected` formatAndWrite(level: [LogLevel](../log_level), correlationId: string, error: Errro, message: string, ...args: any[]): void

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **error**: Errro - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[]- arguments to parameterize the message.



#### getLevel
Gets the maximum log level. Messages with higher log level are filtered out.

> `public` getLevel(): [LogLevel](../log_level)

- **returns**: [LogLevel](../log_level) -  the maximum log level.


#### getSource
Gets the source (context) name.

> `public` getSource(): string

- **returns**: string -  the source (context) name.


#### info
Logs an important information message

> `public` info(correlationId: string, message: string, ...args: any[]): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: any[]- arguments to parameterize the message.



#### log
Logs a message at a specified log level.

> `public` log(level: [LogLevel](../log_level), correlationId: string, error: Errro, message: string, ...args: any[]): void

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **error**: Errro - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: any[]- arguments to parameterize the message.



#### setLevel
Set the maximum log level.

> `public` setLevel(level: [LogLevel](../log_level)): void

- **level**: [LogLevel](../log_level) - a new maximum log level.


#### trace
Logs a low-level debug information for troubleshooting.

> `public` trace(correlationId: string, message: string, ...args: any[]): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: any[]- arguments to parameterize the message.


#### warn
Logs a warning that may or may not have a negative impact.

> `public` warn(correlationId: string, message: Error, ...args: any[]): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: any[]- arguments to parameterize the message.



### See also
- #### [ILogger](../ilogger)
