---
type: docs
title: "TraceTiming"
linkTitle: "TraceTiming"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Timing object returned by [ITracer.begin_trace](../itracer/#begin_trace) to end the timing
    of an execution block and record the associated trace.
---

### Description

The TraceTiming class is used to create the timing object returned by [ITracer.begin_trace](../itracer/#begin_trace) to end the timing of an execution block and record the associated trace.

### Constructors

#### NewTraceTiming
Creates a new instance of the timing callback object. 

> NewTraceTiming(correlationId string, component string, operation string, tracer [ITracer](../itracer)) [*TraceTiming]()

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - associated component name
- **operation**: string - associated operation name
- **tracer**: [ITracer](../itracer) - callback that shall be called when endTiming is called.


### Methods

#### EndFailure
Ends timing of a failed block, calculates elapsed time
and records the associated trace.

> (c [*TraceTiming]()) EndFailure(err error)

- **err**: error - error object associated with this trace.


#### EndTrace
Ends timing of an execution block, calculates the elapsed time
and records the associated trace.

> (c [*TraceTiming]()) EndTrace()
 
### Examples

```go
var timing = tracer.BeginTrace("mymethod.exec_time");
    ...
timing.EndTrace();
if err != nil {
    timing.EndFailure(err);
}
```
