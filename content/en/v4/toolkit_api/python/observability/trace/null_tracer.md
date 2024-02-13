---
type: docs
title: "NullTracer"
linkTitle: "NullTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-observability-python"
description: >
    Dummy implementation of tracer that doesn't do anything.

---

**Implements:** [ITracer](../itracer)

### Description

The NullTracer class allows you to create a dummy tracer with no real effect.

Important points

- It can be used in testing or in situations when tracing is required but must be disabled.

### Instance methods

#### begin_trace
Begings recording an operation trace

> begin_trace(context: Optional[IContext], component: str, operation: str): [TraceTiming](../trace_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error

> failure(context: Optional[IContext], component: str, operation: str, error: Exception,
duration: float)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


#### trace
Records an operation trace with its name and duration.

> trace(context: Optional[IContext], component: str, operation: str, duration: float)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **duration**: float - execution duration in milliseconds.

### See also
- #### [ITracer](../itracer)
