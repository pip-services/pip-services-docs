---
type: docs
title: "ConsoleLogger"
linkTitle: "ConsoleLogger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Logger that writes log messages to console.

---

**Extends:** [Logger](../logger)

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

#### _write
Writes a log message to the logger destination.

> `public` write(level: [LogLevel](../log_level), correlation_id: string, error: Error, message: string): void

- **level**: [LogLevel](../log_level) - a log level.
- **correlation_id**: string - (optional) transaction id to trace execution through call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.

### Examples

```typescript
let logger = new ConsoleLogger();
logger.setLevel(LogLevel.debug);

logger.error("123", ex, "Error occured: %s", ex.message);
logger.debug("123", "Everything is OK.");
```

### See also
- #### [Logger](../logger)
