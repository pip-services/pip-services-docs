---
type: docs
title: "ConsoleLogger"
linkTitle: "ConsoleLogger"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Logger that writes log messages to console.

    Errors are written to standard err stream
    and all other messages to standard out stream.
---

**Implemenst:** [Logger](../logger)

See also [Logger](../logger)


#### Configuration parameters
- **level**: maximum log level to capture
- **source**: source (context) name

#### References
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source

**Example:**
```python
logger = ConsoleLogger()
logger.set_level(LogLevel.debug)

logger.error("123", ex, "Error occured: %s", ex.message)
logger.debug("123", "Everything is OK.")
```


### Methods

#### _write
Writes a log message to the logger destination.

> _write(level: [LogLevel](../log_level), correlation_id: Optional[str], error: Optional[Exception], message: Optional[str])

- **level**: [LogLevel](../log_level) - a log level.
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **error**: Optional[Exception] - an error object associated with this message.
- **message**: Optional[str] - a human-readable message to log.


### See also
- #### [Logger](../logger)
