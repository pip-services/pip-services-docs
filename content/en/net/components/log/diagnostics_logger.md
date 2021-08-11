---
type: docs
title: "DiagnosticsLogger "
linkTitle: "DiagnosticsLogger "
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Logger that provides some extra diagnosis information.
---

**Inherits**: [Logger](../logger)

### Description

The DiagnosticsLogger class allow you to define a logger that provides some extra diagnosis information.


### Instance methods

#### Write
Writes a log message to the logger destination(s).

> `public override` void Write([LogLevel](../log_level) level, string correlation_id, Exception error, string message)

- **level**: [LogLevel](../log_level) - log level.
- **correlation_id**: string - (optional) transaction id used to trace execution through the call chain.
- **error**: Exception - error object associated with this message.
- **message**: string - human-readable message to log.

### Examples

```cs
var logger = new DiagnosticsLogger();
logger.Level = LogLevel.Debug;

logger.Error("123", ex, "Error occured: %s", ex.Message);
logger.Debug("123", "Everything is OK.");
```

### See also
- #### [Logger](../logger)
