---
type: docs
title: "EventLogger "
linkTitle: "EventLogger "
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Creates an event logger.

---

**Inherits**: [Logger](../logger)

### Description

The EventLogger allows you to create an event logger.


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
