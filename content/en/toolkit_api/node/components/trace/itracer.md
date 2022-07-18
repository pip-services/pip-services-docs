---
type: docs
title: "ITracer"
linkTitle: "ITracer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Interface for tracer components that capture operation traces.
---

### Description

The ITracer interface is used to create tracer component that capture operation traces.

### Instance methods

#### beginTrace
Begings recording an operation trace

> beginTrace(correlationId: string, component: string, operation: string): [TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error.

> failure(correlationId: string, component: string, operation: string, error: Error,
duration: number): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - a name of called component
- **operation**: string - a name of the executed operation.
- **error**: Error - an error object associated with this trace.
- **duration**: number - execution duration in milliseconds.


#### trace
Records an operation trace with its name and duration

> trace(correlationId: string, component: string, operation: string, duration: number): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: number - execution duration in milliseconds.
