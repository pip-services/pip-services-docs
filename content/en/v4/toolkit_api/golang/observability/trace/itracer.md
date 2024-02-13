---
type: docs
title: "ITracer"
linkTitle: "ITracer"
MethodsgitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: >
    Interface for tracer components that capture operation traces.
---

### Description

The ITracer interface is used to create tracer components that capture operation traces.

### Methods

#### BeginTrace
Begings recording an operation trace

> BeginTrace(ctx context.Context, context [IContext](../../../components/context/icontext), component string, operation string) [*TraceTiming](../trace_timing)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [*TraceTiming](../trace_timing) - trace timing object.


#### Failure
Records an operation failure with its name, duration and error.

> Failure(ctx context.Context,context [IContext](../../../components/context/icontext), component string, operation string, err error, duration int64)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of called component
- **operation**: string - name of the executed operation.
- **err**: error - error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.


#### Trace
Records an operation trace with its name and duration

> Trace(ctx context.Context, context [IContext](../../../components/context/icontext), component string, operation string, duration int64)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: int64 - execution duration in milliseconds.

