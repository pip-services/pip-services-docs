---
type: docs
title: "ConsoleLogger"
linkTitle: "ConsoleLogger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Logger that writes log messages to console.

---

**Inherits**: [Logger](../logger)

### Description

The  ConsoleLogger class provides a logger that writes log messages to console.

Important points

- Errors are written to standard err stream and all other messages to standard out stream.

#### Configuration parameters
- **level**: maximum log level to capture
- **source**: source (context) name

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source


### Instance methods

#### Write
Writes a log message to the logger destination.

> `public override` void Write([LogLevel](../log_level) level, string correlation_id, Exception error, string message)

- **level**: [LogLevel](../log_level) - a log level.
- **correlation_id**: string - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.

### Examples

```cs
var logger = new ConsoleLogger();
logger.Level = LogLevel.Debug;

logger.Error("123", ex, "Error occured: %s", ex.Message);
logger.Debug("123", "Everything is OK.");
```

### See also
- #### [Logger](../logger)
