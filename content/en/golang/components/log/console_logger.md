---
type: docs
title: "ConsoleLogger"
linkTitle: "ConsoleLogger"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Logger that writes log messages to console.

---

**Implements:** [Logger](../logger)

### Description

The  ConsoleLogger class provides a logger that writes log messages to console.

Important points

- Errors are written to standard err stream and all other messages to standard out stream.

#### Configuration parameters
- **level**: maximum log level to capture
- **source**: source (context) name

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source


### Methods

#### Write
Writes a log message to the logger destination.

> (c *ConsoleLogger) Write(level int, correlationId string, err error, message string)

- **level**: int - a log level.
- **correlation_id**: string - (optional) transaction id to trace execution through call chain.
- **err**: error - an error object associated with this message.
- **message**: string - a human-readable message to log.

### Examples

```go
logger = NewConsoleLogger();
logger.SetLevel(LogLevel.Debug);

logger.Error("123", ex, "Error occured: %s", ex.message);
logger.Debug("123", "Everything is OK.");
```

### See also
- #### [Logger](../logger)
