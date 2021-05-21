---
type: docs
title: "TraceTiming"
linkTitle: "TraceTiming"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Timing object returned by [ITracer.begin_trace](../itracer/#begin_trace) to end the timing
    of an execution block and record the associated trace.
---

### Description

The TraceTiming class is used to create the timing object returned by [ITracer.begin_trace](../itracer/#begin_trace) to end the timing of and execution block and record the associated trace.

#### Constructors
Creates a new instance of the timing callback object.

> `public` constructor(correlationId: string, component: string, operation: string, tracer: [ITracer](../itracer) = null)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - an associated component name
- **operation**: string - an associated operation name
- **tracer**: [ITracer](../itracer) - a callback that shall be called when endTiming is called.


### Instance methods

#### endFailure
Ends timing of a failed block, calculates elapsed time
and records the associated trace.

> `public` endFailure(error: Error): void

- **error**: Error - an error object associated with this trace.


#### endTrace
Ends timing of an execution block, calculates the elapsed time
and records the associated trace.

> `public` endFailure(error: Error): void
 
### Examples

```typescript
let timing = tracer.beginTrace("mymethod.exec_time");
try {
    ...
    timing.endTrace();
} catch (err) {
    timing.endFailure(err);
}
```
