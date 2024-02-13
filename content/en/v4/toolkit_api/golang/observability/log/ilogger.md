---
type: docs
title: "ILogger"
linkTitle: "ILogger"
MethodsgitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: >
    Interface for logger components that capture execution log messages.
---

### Description

The ILogger interface provides a set of methods for logger components that capture log messages.


### Methods

#### Debug
Logs high-level debug information for troubleshooting.

> Debug(ctx context.Context, context [IContext](../../../components/context/icontext), message string, args ...any)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.



#### Error
Logs' recoverable application error.

> Error(ctx context.Context, context [IContext](../../../components/context/icontext), err error, message string, args ...any)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.


#### Fatal
Logs fatal (unrecoverable) message that caused the process to crash.

> Fatal(ctx context.Context, context [IContext](../../../components/context/icontext), err error, message string, args ...any)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.


#### Info
Logs an important information message.

> Info(ctx context.Context, context [IContext](../../../components/context/icontext), message string, args ...any)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.



#### Log
Logs a message at a specified log level.

> Log(ctx context.Context, level [LevelType](../log_level), context [IContext](../../../components/context/icontext), err error, message string, args ...any)

- **ctx**: context.Context - operation context.
- **level**: [LevelType](../log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.



#### SetLevel
Sets the maximum log level.

> SetLevel(value int)

- **level**: int - new maximum log level.


#### Trace
Logs low-level debug information for troubleshooting.

> Trace(ctx context.Context, context [IContext](../../../components/context/icontext), message string, args ...any)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.


#### Warn
Logs a warning that may or may not have a negative impact.

> Warn(ctx context.Context, context [IContext](../../../components/context/icontext), message string, args ...any)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: string - human-readable message to log.
- **args**: ...any - arguments to parameterize the message.


