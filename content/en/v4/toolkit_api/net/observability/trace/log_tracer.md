---
type: docs
title: "LogTracer"
linkTitle: "LogTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Tracer that dumps recorded traces to a logger.
---

**Inherits**: [IReconfigurable](../../../components/config/ireconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [ITracer](../itracer)

### Description

The LogTracer class allows you to create a tracer that dumps recorded traces to a logger.

#### Configuration parameters

**options**:
- **log_level**: log level to record traces (default: debug)    

#### References

- **\*:logger:\*:\*:1.0** - [ILogger](../../log/ilogger) components to dump the captured counters
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source


### Instance methods

#### BeginTrace 
Begings recording an operation trace.

> `public` [TraceTiming](../trace_timing) BeginTrace(IContext context, string component, string operation)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - trace timing object.


#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Failure
Records an operation failure with its name, duration and error

> `public` void Failure(IContext context, string component, string operation, Exception error,
long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Exception - error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

#### Trace
Records an operation trace with its name and duration.

> `public` void Trace(IContext context, string component, string operation, long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
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
- #### [ITracer](../itracer/)
- #### [CachedCounters](../../count/cached_counters)
- #### [CompositeLogger](../../log/composite_logger)

