---
type: docs
title: "CompositeLogger"
linkTitle: "CompositeLogger"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Aggregates all loggers from component references under a single component.

---

**Inherits**: [IReferenceable](../../../commons/refer/ireferenceable), [Logger](../logger)

### Description

The CompositeLogger class allows you to aggregate loggers from component references into a single component.

Important points

- It allows to log messages and conveniently send them to multiple destinations. 

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../ilogger) components to pass log messages


### Constructors
Creates a new instance of the logger.

> `public` CompositeLogger([IReferences](../../../commons/refer/ireferences) references = null)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Fields

<span class="hide-title-link">

#### _loggers

> `protected` **_loggers**: List<[ILogger](../ilogger)> = new List<[ILogger](../ilogger)>()

</span>

### Instance methods

#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### Write
Writes a log message to the logger destination.

> `protected override` void Write([LogLevel](../log_level) level, string correlationId, Exception error, string message)

- **level**: [LogLevel](../log_level) - a log level.
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **error**: Exception - an error object associated with this message.
- **message**: string - a human-readable message to log.


### Examples
```cs
class MyComponent: IConfigurable, IReferenceable 
{
    CompositeLogger _logger = new CompositeLogger();
    public void Configure(ConfigParams config)
    {
        this._logger.Configure(config);
        ...
    }
    public void SetReferences(IReferences references)
    {
        this._logger.SetReferences(references);
        ...
    }
    public void MyMethod(String correlationId)
    {
        this._logger.Debug(correlationId, "Called method mycomponent.mymethod");
        ...
    }
}
```


### See also
- #### [ILogger](../ilogger)
