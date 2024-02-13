---
type: docs
title: "ILogger"
linkTitle: "ILogger"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Interface for logger components that capture execution log messages.
---

### Description

The ILogger interface provides a set of methods for logger components that capture log messages.


### Methods

#### Debug
Logs high-level debug information for troubleshooting.

> Debug(ctx context.Context, correlationId string, message string, args ...any)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.



#### Error
Logs' recoverable application error.

> Error(ctx context.Context, correlationId string, err error, message string, args ...any)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> Fatal(ctx context.Context, correlationId string, err error, message string, args ...any)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.


#### Info
Logs an important information message.

> Info(ctx context.Context, correlationId string, message string, args ...any)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.



#### Log
Logs a message at a specified log level.

> Log(ctx context.Context, level [LevelType](../log_level), correlationId string, err error, message string, args ...any)

- **ctx**: context.Context - operation context.
- **level**: [LevelType](../log_level) - log level.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.



#### SetLevel
Sets the maximum log level.

> SetLevel(value int)

- **level**: int - new maximum log level.


#### Trace
Logs low-level debug information for troubleshooting.

> Trace(ctx context.Context, correlationId string, message string, args ...any)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> Warn(ctx context.Context, correlationId string, message string, args ...any)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.

