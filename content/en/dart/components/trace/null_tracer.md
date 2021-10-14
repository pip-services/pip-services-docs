---
type: docs
title: "NullTracer"
linkTitle: "NullTracer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Dummy implementation of tracer that doesn't do anything.

---

**Implements:** [ITracer](../itracer)

### Description

The NullTracer class allows you to create a dummy tracer with no real effect.

Important points

- It can be used in testing or in situations when tracing is required but must be disabled.

### Instance methods

#### beginTrace
Begings recording an operation trace

`@override`
> [TraceTiming](../trace_timing) beginTrace(String? correlationId, String component, String operation)

- **correlationId**: String? - (optional) transaction id to trace execution through call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error

`@override`
> void failure(String? correlationId, String component, String operation, Exception error, int duration)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: number - execution duration in milliseconds.


#### trace
Records an operation trace with its name and duration.

`@override`
> void trace(String? correlationId, String component, String operation, int duration)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **duration**: number - execution duration in milliseconds.

### See also
- #### [ITracer](../itracer)
