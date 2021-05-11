---
type: docs
title: "CompositeLogger"
linkTitle: "CompositeLogger"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Aggregates all loggers from component references under a single component.

---

**Implemenst:** [Logger](../logger), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CompositeLogger class allows you to aggregate loggers from component references into a single component.

Important points

- It allows to log messages and conveniently send them to multiple destinations. 

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../ilogger) components to pass log messages


### Constructors
Creates a new instance of the logger.

> CompositeLogger(references: [IReferences](../../../commons/refer/ireferences) = None)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Instance methods

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### _write
Writes a log message to the logger destination.

> _write(level: [LogLevel](../log_level), correlation_id: Optional[str], error: Optional[Exception], message: Optional[str])

- **level**: [LogLevel](../log_level) - a log level.
- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **error**: Optional[Exception] - an error object associated with this message.
- **message**: Optional[str] - a human-readable message to log.


### See also
- #### [ILogger](../ilogger)
