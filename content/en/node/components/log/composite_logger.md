---
type: docs
title: "CompositeLogger"
linkTitle: "CompositeLogger"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Aggregates all loggers from component references under a single component.

---

**Implemenst:** [IReferenceable](../../../commons/refer/ireferenceable)
**Extends:** [Logger](../logger)

### Description

The CompositeLogger class allows you to aggregate loggers from component references into a single component.

Important points

- It allows to log messages and conveniently send them to multiple destinations. 

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../ilogger) components to pass log messages


### Constructors
Creates a new instance of the logger.

> `public` constructor(references: [IReferences](../../../commons/refer/ireferences) = null)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Instance methods

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### write
Writes a log message to the logger destination.

> `protected` write(level: [LogLevel](../log_level), correlationId: string, error: Error, message: string): void

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **error**: Error - an error object associated with this message.
- **message**: string - a human-readable message to log.


### Examples
```typescript
class MyComponent implements IConfigurable, IReferenceable {
    private _logger: CompositeLogger = new CompositeLogger();

    public configure(config: ConfigParams): void {
        this._logger.configure(config);
        ...
    }

    public setReferences(references: IReferences): void {
        this._logger.setReferences(references);
        ...
    }

    public myMethod(string correlationId): void {
        this._logger.debug(correlationId, "Called method mycomponent.mymethod");
        ...
    }
}
```


### See also
- #### [ILogger](../ilogger)
