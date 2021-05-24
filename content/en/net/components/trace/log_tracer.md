---
type: docs
title: "LogTracer"
linkTitle: "LogTracer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Tracer that dumps recorded traces to a logger.
---

**Inherits**: [IReconfigurable](../../../commons/config/ireconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The LogTracer class allows you to create a tracer that dumps recorded traces to a logger.

#### Configuration parameters

**options**:
- **log_level**: log level to record traces (default: debug)    

#### References

- **\*:logger:\*:\*:1.0** - [ILogger](../../log/ilogger) components to dump the captured counters
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source


### Instance methods

#### BeginTrace 
Begings recording an operation trace.

> `public` [TraceTiming](../trace_timing) BeginTrace(string correlationId, string component, string operation)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### Configure
Configures component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Failure
Records an operation failure with its name, duration and error

> `public` void Failure(string correlationId, string component, string operation, Exception error,
long duration)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### Trace
Records an operation trace with its name and duration.

> `public` void Trace(string correlationId, string component, string operation, long duration)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: long - execution duration in milliseconds.

### Examples

```cs
var tracer = new LogTracer();
tracer.SetReferences(References.FromTuples(
    new Descriptor("pip-services", "logger", "console", "default", "1.0"), new ConsoleLogger()
));
var timing = trcer.BeginTrace("123", "mycomponent", "mymethod");
try {
    ...
    timing.EndTrace();
} catch
{
    timing.EndFailure(err);
}
```

### See also
- #### [Tracer](../tracer)
- #### [CachedCounters](../../count/cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
