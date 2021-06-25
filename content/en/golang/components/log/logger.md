---
type: docs
title: "Logger"
linkTitle: "Logger"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
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

#### InheritLogger
Creates a new instance of the logger and inherites from ILogerWriter.

> InheritLogger(overrides ILoggerOverrides) [*Logger]()

- **overrides**: ILoggerOverrides - inherited logger 

### Fields

<span class="hide-title-link">

#### level
Maximum log level to capture.
> **level**: int


#### source
source (context) name
> **source**: string

</span>


### Methods

#### ComposeError
Composes an human-readable error description.

> (c [*Logger]()) ComposeError(err error) string

- **err**: error - error to format.
- **returns**: string - human-redable error description.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*Logger]()) Configure(cfg [*config.ConfigParams](../../../commons/config/config_params))

- **cfg**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Debug
Logs high-level debug information for troubleshooting.

> (c [*Logger]()) Debug(correlationId string, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**:...interface{}- arguments to parameterize the message.



#### Error
Logs recoverable application errors.

> (c [*Logger]()) Error(correlationId string, err error, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: ...interface{}- arguments to parameterize the message.



#### Fatal
Logs fatal (unrecoverable) messages that caused the process to crash.

> (c [*Logger]()) Fatal(correlationId string, err error, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.



#### FormatAndWrite
Formats the log message and writes it to the logger destination.

> (c [*Logger]()) FormatAndWrite(level int, correlationId string, err error, message string, args []interface{})

- **level**: int - log level.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: []interface{}- arguments to parameterize the message.



#### Level
Gets the maximum log level. Messages with a higher log level are filtered out.

> (c [*Logger]()) Level() int

- **returns**: int -  maximum log level.


#### Source
Gets the source (context) name.

> (c [*Logger]()) Source() string

- **returns**: string -  source (context) name.


#### Info
Logs an important information message.

> (c [*Logger]()) Info(correlationId string, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.



#### Log
Logs a message at a specified log level.

> (c [*Logger]()) Log(level int, correlationId string, err error, message string, args ...interface{})

- **level**: int - log level.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.



#### SetLevel
Sets the maximum log level.

> (c [*Logger]()) SetLevel(value int)

- **value**: int - new maximum log level.


#### Trace
Logs a low-level debug information for troubleshooting.

> (c [*Logger]()) Trace(correlationId string, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: ...interface{}- arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> (c [*Logger]()) Warn(correlationId string, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.



### See also
- #### [ILogger](../ilogger)
