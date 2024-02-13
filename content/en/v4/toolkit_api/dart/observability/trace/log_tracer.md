---
type: docs
title: "LogTracer"
linkTitle: "LogTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-observability-dart"
description: >
    Tracer that dumps recorded traces to a logger.
---

**Implements:** [IReconfigurable](../../../components/config/ireconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [ITracer](../itracer)

### Description

The LogTracer class allows you to create a tracer that dumps recorded traces to a logger.

#### Configuration parameters

**options**:
- **log_level**: log level to record traces (default: debug)    

#### References

- **\*:logger:\*:\*:1.0** - [ILogger](../../log/ilogger) components to dump the captured counters
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source


### Instance methods

#### beginTrace 
Begings recording an operation trace.

`@override`
> [TraceTiming](../trace_timing) beginTrace(IContext? context, String component, String operation)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### failure
Records an operation failure with its name, duration and error

`@override`
> void failure(IContext? context, String component, String operation, Exception error, int duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: int - execution duration in milliseconds.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration.

`@override`
> void trace(IContext? context, String component, String operation, int duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **duration**: int - execution duration in milliseconds.

### Examples

```dart
var tracer = LogTracer();
tracer.setReferences(References.fromTuples([
    Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), ConsoleLogger()
]));
  
var timing = tracer.beginTrace('123', 'mycomponent', 'mymethod');
try {
    timing.endTrace();
} catch(err) {
    timing.endFailure(err);
}
```

### See also
- #### [ITracer](../itracer)
- #### [CachedCounters](../../count/cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
