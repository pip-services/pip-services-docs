---
type: docs
title: "LogTracer"
linkTitle: "LogTracer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Tracer that dumps recorded traces to a logger.
---

**Implemenst:** [IReconfigurable](../../../commons/config/ireconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The LogTracer class allows you to create a tracer that dumps recorded traces to a logger.

#### Configuration parameters

**options**:
- **log_level**: log level to record traces (default: debug)    

#### References

- **\*:logger:\*:\*:1.0** - [ILogger](../../log/ilogger) components to dump the captured counters
- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source


### Instance methods

#### begin_trace
Begings recording an operation trace

> begin_trace(correlation_id: Optional[str], component: str, operation: str): [TraceTiming](../trace_timing)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### failure
Records an operation failure with its name, duration and error

> failure(correlation_id: Optional[str], component: str, operation: str, error: Exception,
duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration

> trace(correlation_id: Optional[str], component: str, operation: str, duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **duration**: float - execution duration in milliseconds.

### Examples

```python
tracer = LogTracer()
tracer.set_references(References.from_tuples(
    Descriptor("pip-services", "logger", "console", "default", "1.0"), ConsoleLogger()
))

timing = tracer.begin_trace("123", "mycomponent", "mymethod")
try:
    ...
    timing.end_trace()
except Exception as err:
    timing.end_failure(err)
```

### See also
- #### [Tracer](../tracer)
- #### [CachedCounters](../../count/cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
