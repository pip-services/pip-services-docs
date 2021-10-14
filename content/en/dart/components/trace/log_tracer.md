---
type: docs
title: "LogTracer"
linkTitle: "LogTracer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Tracer that dumps recorded traces to a logger.
---

**Implements:** [IReconfigurable](../../../commons/config/ireconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [ITracer](../itracer)

### Description

The LogTracer class allows you to create a tracer that dumps recorded traces to a logger.

#### Configuration parameters

**options**:
- **log_level**: log level to record traces (default: debug)    

#### References

- **\*:logger:\*:\*:1.0** - [ILogger](../../log/ilogger) components to dump the captured counters
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source


### Instance methods

#### beginTrace 
Begings recording an operation trace.

`@override`
> [TraceTiming](../trace_timing) beginTrace(String? correlationId, String component, String operation)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### failure
Records an operation failure with its name, duration and error

`@override`
> void failure(String? correlationId, String component, String operation, Exception error, int duration)

- **correlationId**: String? - (optional) transaction id to trace execution through call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: int - execution duration in milliseconds.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration.

`@override`
> void trace(String? correlationId, String component, String operation, int duration)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
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
- #### [Tracer](../tracer)
- #### [CachedCounters](../../count/cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
