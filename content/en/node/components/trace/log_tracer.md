---
type: docs
title: "LogTracer"
linkTitle: "LogTracer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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

#### beginTrace 
Begings recording an operation trace.

> `public` beginTrace(correlationId: string, component: string, operation: string): [TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### failure
Records an operation failure with its name, duration and error

> `public` failure(correlationId: string, component: string, operation: string, error: Error,
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

> `public` trace(correlationId: string, component: string, operation: string, duration: number): void

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
- #### [Tracer](../tracer)
- #### [CachedCounters](../../count/cached_counters)
- #### [CompositeLogger](../../log/composite_logger)
