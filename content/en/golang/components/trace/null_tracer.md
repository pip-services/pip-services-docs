---
type: docs
title: "NullTracer"
linkTitle: "NullTracer"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
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
Begings recording an operation trace

> (c [*NullTracer]()) BeginTrace(correlationId string, component string, operation string) [*TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [*TraceTiming](../trace_timing) - a trace timing object.


#### Failure
Records an operation failure with its name, duration and error

> (c [*NullTracer]()) Failure(correlationId string, component string, operation string, err error, duration int64)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **err**: error - an error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.


#### Trace
Records an operation trace with its name and duration.

> (c [*NullTracer]()) Trace(correlationId string, component string, operation string, duration int64)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: int64 - execution duration in milliseconds.

### See also
- #### [ITracer](../itracer)
