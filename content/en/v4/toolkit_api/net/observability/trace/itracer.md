---
type: docs
title: "ITracer"
linkTitle: "ITracer"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-observability-dotnet"
description: >
    Interface for tracer components that capture operation traces.
---

### Description

The ITracer interface is used to create tracer component that capture operation traces.

### Instance methods

#### BeginTrace
Begings recording an operation trace

> [TraceTiming](../trace_timing) BeginTrace(IContext context, string component, string operation)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - trace timing object.


#### Failure
Records an operation failure with its name, duration and error.

> void Failure(IContext context, string component, string operation, Exception error,
long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Exception - error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


#### Trace
Records an operation trace with its name and duration

> void Trace(IContext context, string component, string operation, long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: long - execution duration in milliseconds.

