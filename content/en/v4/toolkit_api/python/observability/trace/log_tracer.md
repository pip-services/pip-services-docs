---
type: docs
title: "LogTracer"
linkTitle: "LogTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-observability-python"
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

#### begin_trace 
Begings recording an operation trace.

> begin_trace(context: Optional[IContext], component: str, operation: str): [TraceTiming](../trace_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### failure
Records an operation failure with its name, duration and error

> failure(context: Optional[IContext], component: str, operation: str, error: Exception,
duration: float)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration.

> trace(context: Optional[IContext], component: str, operation: str, duration: float)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
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
- #### [ITracer](../itracer)
- #### [CachedCounters](../../count/cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
