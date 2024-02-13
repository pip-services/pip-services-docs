---
type: docs
title: "EventLogger "
linkTitle: "EventLogger "
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Creates an event logger.

---

**Inherits**: [Logger](../logger)

### Description

The EventLogger allows you to create an event logger.


### Instance methods

#### Write
Writes a log message to the logger destination(s).

> `public override` void Write([LogLevel](../log_level) level, IContext context, Exception error, string message)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.

### Examples

```cs
var logger = new EventLogger();
logger.Level = LogLevel.Debug;

logger.Error("123", ex, "Error occured: %s", ex.Message);
logger.Debug("123", "Everything is OK.");
```

### See also
- #### [Logger](../logger)

