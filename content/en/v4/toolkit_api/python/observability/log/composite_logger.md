---
type: docs
title: "CompositeLogger"
linkTitle: "CompositeLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-observability-pythonn"
description: >
    Aggregates all loggers from component references under a single component.

---

**Implements:** [Logger](../logger), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The CompositeLogger class allows you to aggregate loggers from component references into a single component.

Important points

- It allows to log messages and conveniently send them to multiple destinations. 

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../ilogger) components to pass log messages


### Constructors
Creates a new instance of the logger.

> CompositeLogger(references: [IReferences](../../../components/refer/ireferences) = None)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Instance methods

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### _write
Writes a log message to the logger destination.

> _write(level: [LogLevel](../log_level), context: Optional[IContext], error: Optional[Exception], message: Optional[str])

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Optional[Exception] - an error object associated with this message.
- **message**: Optional[str] - a human-readable message to log.

### Examples
```python
class MyComponent(IConfigurable, IReferenceable):
    __logger = CompositeLogger()
    def configure(self, config):
        self.__logger.configure(config)
    def set_references(self, references):
        self.__logger.set_references(references)
    def my_method(self, context):
        self.__logger.debug(context, "Called method mycomponent.mymethod")
```

### See also
- #### [ILogger](../ilogger)
