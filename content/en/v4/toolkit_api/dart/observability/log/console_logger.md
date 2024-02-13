---
type: docs
title: "ConsoleLogger"
linkTitle: "ConsoleLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-observability-dart"
description: >
    Logger that writes log messages to console.

---

**Extends:** [Logger](../logger)

### Description

The  ConsoleLogger class provides a logger that writes log messages to console.

**Important points**

- Errors are written to the standard err stream and all other messages to the standard out stream.

#### Configuration parameters
- **level**: maximum log level to capture
- **source**: source (context)'s name

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source

### Constructors
Creates a new instance of the logger.

> ConsoleLogger()

### Instance methods

#### write
Writes a log message to the logger destination.

> void write([LogLevel](../log_level) level, IContext? context, Exception? error, String message)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception? - error object associated with this message.
- **message**: String - human-readable message to log.

### Examples

```dart
var logger = new ConsoleLogger();
logger.setLevel(LogLevel.debug);

logger.error('123', ex, 'Error occured: %s', ex.message);
logger.debug('123', 'Everything is OK.');
```

### See also
- #### [Logger](../logger)
