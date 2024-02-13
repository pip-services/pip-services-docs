---
type: docs
title: "ConsoleLogger"
linkTitle: "ConsoleLogger"
MethodsgitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: >
    Logger that writes log messages to a console.

---

**Implements:** [Logger](../logger)

### Description

The ConsoleLogger class provides a logger that writes log messages to a console.

Important points

- Errors are written to a standard err stream and all other messages to a standard out stream.

#### Configuration parameters
- **level**: maximum log level to capture
- **source**: source (context) name

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source


### Methods

#### Write
Writes a log message to the logger destination.

> (c *ConsoleLogger) ctx context.Context, level [LevelType](../log_level), correlationId string, err error, message string)

- **ctx**: context.Context - operation context.
- **level**: [LevelType](../log_level) - log level.
- **correlation_id**: string - (optional) transaction id used to trace execution through the call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.

### Examples

```go
logger = NewConsoleLogger()
logger.SetLevel(LogType.Debug)
logger.Error(context.Background(), "123", ex, "Error occured: %s", ex.message)
logger.Debug(context.Background(), "123", "Everything is OK.")
```

### See also
- #### [Logger](../logger)

