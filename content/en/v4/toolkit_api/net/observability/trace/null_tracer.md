---
type: docs
title: "NullTracer"
linkTitle: "NullTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Dummy implementation of tracer that doesn't do anything.

---

**Inherits**: [ITracer](../itracer)

### Description

The NullTracer class allows you to create a dummy tracer with no real effect.

**Important points**

- It can be used in testing or in situations when tracing is required but must be disabled.

### Instance methods

#### BeginTrace 
Begings recording an operation trace.

> `public` [TraceTiming](../trace_timing) BeginTrace(IContext context, string component, string operation)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - trace timing object.


#### Failure
Records an operation failure with its name, duration and error

> `public` void Failure(IContext context, string component, string operation, Exception error,
long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Exception - error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


#### Trace
Records an operation trace with its name and duration.

> `public` void Trace(IContext context, string component, string operation, long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: long - execution duration in milliseconds.

### See also
- #### [ITracer](../itracer)

