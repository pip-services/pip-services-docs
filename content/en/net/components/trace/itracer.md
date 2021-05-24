---
type: docs
title: "ITracer"
linkTitle: "ITracer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for tracer components that capture operation traces.
---

### Description

The ITracer interface is used to create tracer component that capture operation traces.

### Instance methods

#### BeginTrace
Begings recording an operation trace

> [TraceTiming](../trace_timing) BeginTrace(string correlationId, string component, string operation)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### Failure
Records an operation failure with its name, duration and error.

> void Failure(string correlationId, string component, string operation, Exception error,
long duration)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - a name of called component
- **operation**: string - a name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


#### Trace
Records an operation trace with its name and duration

> void Trace(string correlationId, string component, string operation, long duration)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: long - execution duration in milliseconds.
