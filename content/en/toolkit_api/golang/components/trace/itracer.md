---
type: docs
title: "ITracer"
linkTitle: "ITracer"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Interface for tracer components that capture operation traces.
---

### Description

The ITracer interface is used to create tracer components that capture operation traces.

### Methods

#### BeginTrace
Begings recording an operation trace

> BeginTrace(correlationId string, component string, operation string) [*TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [*TraceTiming](../trace_timing) - trace timing object.


#### Failure
Records an operation failure with its name, duration and error.

> Failure(correlationId string, component string, operation string, err error, duration int64)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of called component
- **operation**: string - name of the executed operation.
- **err**: error - error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.


#### Trace
Records an operation trace with its name and duration

> Trace(correlationId string, component string, operation string, duration int64)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: int64 - execution duration in milliseconds.
