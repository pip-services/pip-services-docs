---
type: docs
title: "CompositeLogger"
linkTitle: "CompositeLogger"
MethodsgitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
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

> NewCompositeLoggerFromReferences(ctx context.Context, references [refer.IReferences](../../../components/refer/ireferences)) [*CompositeLogger]()

- **ctx**: context.Context - operation context.
- **references**: [refer.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### NewCompositeLogger
Creates a new instance of the logger.

> NewCompositeLogger() [*CompositeLogger]()


### Methods

#### SetReferences
Sets references to dependent components.

> (c [*CompositeLogger]()) SetReferences(ctx context.Context, references [refer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [refer.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### Write
Writes a log message to the logger destination.

> (c [*CompositeLogger]()) Write(ctx context.Context, level [LevelType](../log_level), context [IContext](../../../components/context/icontext), err error, message string)

- **ctx**: context.Context - operation context.
- **level**: [LevelType](../log_level) - log level.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.


### Examples
```go
type MyComponent {
	_logger CompositeLogger
}
func (mc* MyComponent) Configure(ctx context.Context, config ConfigParams) {
	mc._logger.Configure(ctx, config)
	...
}

func (mc* MyComponent) SetReferences(ctx context.Context, references IReferences) {
	mc._logger.SetReferences(ctx, references)
	...
}

func (mc* MyComponent) myMethod(ctx context.Context, IContext context) {
	mc._logger.Debug(ctx context.Context, context, "Called method mycomponent.mymethod");
	...
}
var mc MyComponent = MyComponent{}
mc._logger = NewCompositeLogger()
```


### See also
- #### [ILogger](../ilogger)

