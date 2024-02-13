---
type: docs
title: "CompositeLogger"
linkTitle: "CompositeLogger"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Aggregates all loggers from component references under a single component.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable)

**Extends:** [Logger](../logger)

### Description

The CompositeLogger class allows you to aggregate loggers from component references into a single component.

Important points

- It allows to log messages and conveniently send them to multiple destinations. 

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../ilogger) components to pass log messages


### Constructors
Creates a new instance of the logger.

> `public` CompositeLogger([IReferences](../../../commons/refer/ireferences) references) throws ReferenceException

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Instance methods

#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### write
Writes a log message to the logger destination.

> `protected` void write([LogLevel](../log_level) level, [IContext](../../../components/context/icontext) context, Exception error, String message)

- **level**: [LogLevel](../log_level) - a log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: String - a human-readable message to log.


### Examples
```java
{@code
  class MyComponent implements IConfigurable, IReferenceable {
      CompositeLogger _logger = new CompositeLogger();
 
      public void configure(ConfigParams config) {
         this._logger.configure(config);
         ...
      }
 
      public void setReferences(IReferences references) {
          this._logger.setReferences(references);
          ...
      }
 
      public void myMethod(IContext context) {
          this._logger.debug(context, "Called method mycomponent.mymethod");
          ...
      }
  }
  }
```


### See also
- #### [ILogger](../ilogger)
