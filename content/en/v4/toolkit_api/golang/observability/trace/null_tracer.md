---
type: docs
title: "NullTracer"
linkTitle: "NullTracer"
MethodsgitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: >
    Dummy implementation of tracer that doesn't do anything.

---

**Implements:** [ITracer](../itracer)

### Description

The NullTracer class allows you to create a dummy tracer with no real effect.

Important points

- It can be used in testing or in situations when tracing is required but must be disabled.

### Constructors

#### NewNullTracer
Creates a new instance of the tracer.

> NewNullTracer() [*NullTracer]()

### Methods

#### BeginTrace
Begings recording an operation's trace

> (c [*NullTracer]()) BeginTrace(ctx context.Context, context [IContext](../../../components/context/icontext), component string, operation string) [*TraceTiming](../trace_timing)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [*TraceTiming](../trace_timing) - trace timing object.


#### Failure
Records an operation's failure with its name, duration and error

> (c [*NullTracer]()) Failure(ctx context.Context, context [IContext](../../../components/context/icontext), component string, operation string, err error, duration int64)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **err**: error - error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.


#### Trace
Records an operation's trace with its name and duration.

> (c [*NullTracer]()) Trace(ctx context.Context, context [IContext](../../../components/context/icontext), component string, operation string, duration int64)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: int64 - execution duration in milliseconds.

### See also
- #### [ITracer](../itracer)

