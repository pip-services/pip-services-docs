---
type: docs
title: "NullTracer"
linkTitle: "NullTracer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Dummy implementation of tracer that doesn't do anything.

---

**Implemenst:** [ITracer](../itracer)

### Description

The NullTracer class allows you to create a dummy tracer with no real effect.

Important points

- It can be used in testing or in situations when tracing is required but must be disabled.

### Instance methods

#### begin_trace
Begings recording an operation trace

> begin_trace(correlation_id: Optional[str], component: str, operation: str): [TraceTiming](../trace_timing)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error

> failure(correlation_id: Optional[str], component: str, operation: str, error: Exception,
duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


#### trace
Records an operation trace with its name and duration

> trace(correlation_id: Optional[str], component: str, operation: str, duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - a name of called component
- **operation**: str - a name of the executed operation.
- **duration**: float - execution duration in milliseconds.

### See also
- #### [ITracer](../itracer)
