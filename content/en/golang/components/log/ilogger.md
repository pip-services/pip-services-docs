---
type: docs
title: "ILogger"
linkTitle: "ILogger"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Interface for logger components that capture execution log messages.
---

### Description

The ILogger interface provides a set of methods for logger components that capture log messages.


### Methods

#### Debug
Logs high-level debug information for troubleshooting.

> Debug(correlationId string, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.



#### Error
Logs recoverable application error.

> Error(correlationId string, err error, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **err**: error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> Fatal(correlationId string, err error, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **err**: error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.


#### Info
Logs an important information message

> Info(correlationId string, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **message**: string - a human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.



#### Log
Logs a message at a specified log level.

> Log(level int, correlationId string, err error, message string, args ...interface{})

- **level**: int - a log level.
- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **err**: error - an error object associated with this message.
- **message**: string - a human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.



#### SetLevel
Set the maximum log level.

> SetLevel(value int)

- **level**: int - a new maximum log level.


#### Trace
Logs low-level debug information for troubleshooting.

> Trace(correlationId string, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> Warn(correlationId string, message string, args ...interface{})

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: string - a human-readable message to log.
- **args**: ...interface{} - arguments to parameterize the message.

