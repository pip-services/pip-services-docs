---
type: docs
title: "LogTracer"
linkTitle: "LogTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-observability-node"
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

> `public` beginTrace(context: [IContext](../../../components/context/icontext), component: string, operation: string): [TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### failure
Records an operation failure with its name, duration and error

> `public` failure(context: [IContext](../../../components/context/icontext), component: string, operation: string, error: Error,
duration: number): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Error - an error object associated with this trace.
- **duration**: number - execution duration in milliseconds.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration.

> `public` trace(context: [IContext](../../../components/context/icontext), component: string, operation: string, duration: number): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: number - execution duration in milliseconds.

### Examples

```typescript
let tracer = new LogTracer();
tracer.setReferences(References.fromTuples(
    new Descriptor("pip-services", "logger", "console", "default", "1.0"), new ConsoleLogger()
));

let timing = trcer.beginTrace("123", "mycomponent", "mymethod");
try {
    ...
    timing.endTrace();
} catch(err) {
    timing.endFailure(err);
}
```

### See also
- #### [ITracer](../itracer)
- #### [CachedCounters](../../count/cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
