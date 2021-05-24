---
type: docs
title: "DiagnosticsLogger "
linkTitle: "DiagnosticsLogger "
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Diagnostic logger.

---

**Inherits**: [Logger](../logger)

### Description

TODO: add description


### Instance methods

#### Write
Writes a log message to the logger destination(s).

> `public override` void Write([LogLevel](../log_level) level, string correlation_id, Exception error, string message)

- **level**: [LogLevel](../log_level) - a log level.
- **correlation_id**: string - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.

### Examples

```cs
var logger = new ConsoleLogger();
logger.SetLevel(LogLevel.debug);

logger.Error("123", ex, "Error occured: %s", ex.message);
logger.Debug("123", "Everything is OK.");
```

### See also
- #### [Logger](../logger)
