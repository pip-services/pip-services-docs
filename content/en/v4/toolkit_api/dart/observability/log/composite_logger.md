---
type: docs
title: "CompositeLogger"
linkTitle: "CompositeLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-observability-dart"
description: >
    Aggregates all loggers from component references under a single component.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable)

**Extends:** [Logger](../logger)

### Description

The CompositeLogger class allows you to aggregate loggers from component references into a single component.

**Important points**

- It allows to log messages and conveniently send them to multiple destinations. 

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../ilogger) components to pass log messages


### Constructors
Creates a new instance of the logger.

> CompositeLogger([[IReferences?](../../../components/refer/ireferences) references])

- **references**: [IReferences?](../../../components/refer/ireferences) - references to locate the component dependencies.


### Instance methods

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

#### write
Writes a log message to the logger destination.

> void write([LogLevel](../log_level) level, IContext? context, Exception? error, String message)

- **level**: [LogLevel](../log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **error**: Exception? - error object associated with this message.
- **message**: String - human-readable message to log.


### Examples
```dart
MyComponent implements IConfigurable, IReferenceable {
    var _logger = new CompositeLogger();
   void configure(ConfigParams config) {
       _logger.configure(config);
       ...
   }
   void setReferences(IReferences references) {
       _logger.setReferences(references);
       ...
   }
   myMethod(IContext? context) {
       _logger.debug(context, 'Called method mycomponent.mymethod');
       ...
   }
}

```


### See also
- #### [ILogger](../ilogger)
