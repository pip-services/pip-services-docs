---
type: docs
title: "ConsoleLogger"
linkTitle: "ConsoleLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-observability-node"
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
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source


### Instance methods

#### write
Writes a log message to the logger destination.

> `public` write(level: [LogLevel](../log_level), context: [IContext](../../../components/context/icontext), error: Error, message: string): void

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.

### Examples

```typescript
let logger = new ConsoleLogger();
logger.setLevel(LogLevel.debug);

logger.error(new Context(), ex, "Error occured: %s", ex.message);
logger.debug(new Context(), "Everything is OK.");
```

### See also
- #### [Logger](../logger)
