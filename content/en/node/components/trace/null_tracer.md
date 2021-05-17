---
type: docs
title: "NullTracer"
linkTitle: "NullTracer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Dummy implementation of tracer that doesn't do anything.

---

**Implemenst:** [ITracer](../itracer)

### Description

The NullTracer class allows you to create a dummy tracer with no real effect.

Important points

- It can be used in testing or in situations when tracing is required but must be disabled.

### Instance methods

#### beginTrace
Begings recording an operation trace

> `public` beginTrace(correlationId: string, component: string, operation: string): [TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error

> `public` failure(correlationId: string, component: string, operation: string, error: Error,
duration: number): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Error - an error object associated with this trace.
- **duration**: number - execution duration in milliseconds.


#### trace
Records an operation trace with its name and duration.

> `public` trace(correlationId: string, component: string, operation: string, duration: number): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: number - execution duration in milliseconds.

### See also
- #### [ITracer](../itracer)
