---
type: docs
title: "CompositeLogger"
linkTitle: "CompositeLogger"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Aggregates all loggers from component references under a single component.

---

**Implements:** [Logger](../logger)

### Description

The CompositeLogger class allows you to aggregate loggers from component references into a single component.

Important points

- It allows to log messages and conveniently send them to multiple destinations. 

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../ilogger) components to pass log messages


### Constructors

#### NewCompositeLoggerFromReferences
Creates a new instance of the logger.

> NewCompositeLoggerFromReferences(references [refer.IReferences](../../../commons/refer/ireferences)) [*CompositeLogger]()

- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### NewCompositeLogger
Creates a new instance of the logger.

> NewCompositeLogger() [*CompositeLogger]()


### Methods

#### SetReferences
Sets references to dependent components.

> (c [*CompositeLogger]()) SetReferences(references [refer.IReferences](../../../commons/refer/ireferences))

- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### Write
Writes a log message to the logger destination.

> (c [*CompositeLogger]()) Write(level int, correlationId string, err error, message string)

- **level**: int - log level.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.


### Examples
```go
type MyComponent {
    _logger CompositeLogger
}
func (mc* MyComponent) Configure(config: ConfigParams): void {
    mc._logger.Configure(config);
    ...
}
  
func (mc* MyComponent) SetReferences(references: IReferences): void {
    mc._logger.SetReferences(references);
    ...
}
  
func (mc* MyComponent)myMethod(string correlationId): void {
    mc._logger.Debug(correlationId, "Called method mycomponent.mymethod");
    ...
}
var mc MyComponent = MyComponent{}
mc._logger = NewCompositeLogger();
```


### See also
- #### [ILogger](../ilogger)
