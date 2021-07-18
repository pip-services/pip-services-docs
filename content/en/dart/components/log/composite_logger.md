---
type: docs
title: "CompositeLogger"
linkTitle: "CompositeLogger"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Aggregates all loggers from component references under a single component.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable)

**Extends:** [Logger](../logger)

### Description

The CompositeLogger class allows you to aggregate loggers from component references into a single component.

Important points

- It allows to log messages and conveniently send them to multiple destinations. 

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../ilogger) components to pass log messages


### Constructors
Creates a new instance of the logger.

> CompositeLogger([[IReferences](../../../commons/refer/ireferences) references])

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Instance methods

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### write
Writes a log message to the logger destination.

> void write([LogLevel](../log_level) level, String correlationId, Exception error, String message)

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.


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
   myMethod(String correlationId) {
       _logger.debug(correlationId, 'Called method mycomponent.mymethod');
       ...
   }
}

```


### See also
- #### [ILogger](../ilogger)
