---
type: docs
title: "ITracer"
linkTitle: "ITracer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Interface for tracer components that capture operation traces.
---

### Description

The ITracer interface is used to create tracer component that capture operation traces.

### Instance methods

#### beginTrace
Begings recording an operation trace

> [TraceTiming](../trace_timing) beginTrace(String? correlationId, String component, String operation)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### failure
Records an operation failure with its name, duration and error.

> void failure(String? correlationId, String component, String operation, Exception error, int duration)

- **correlationId**: String? - (optional) transaction id to trace execution through call chain.
- **component**: String - a name of called component
- **operation**: String - a name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: int - execution duration in milliseconds.


#### trace
Records an operation trace with its name and duration

> void trace(String? correlationId, String component, String operation, int duration)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **duration**: int - execution duration in milliseconds.
