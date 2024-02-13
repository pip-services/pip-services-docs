---
type: docs
title: "TraceTiming"
linkTitle: "TraceTiming"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Timing object returned by [ITracer.BeginTrace](../itracer/#begintrace) to end the timing
    of an execution block and record the associated trace.
---

### Description

The TraceTiming class is used to create the timing object returned by [ITracer.BeginTrace](../itracer/#begintrace) to end the timing of an execution block and record the associated trace.

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

> (c [*TraceTiming]()) EndFailure(ctx context.Context, err error)

- **ctx**: context.Context - operation context.
- **err**: error - error object associated with this trace.


#### EndTrace
Ends timing of an execution block, calculates the elapsed time
and records the associated trace.

> (c [*TraceTiming]()) EndTrace(ctx context.Context)
 
- **ctx**: context.Context - operation context.

### Examples

```go
timing := tracer.BeginTrace(context.Background(), "123", "my_component","mymethod.exec_time");
...
timing.EndTrace(context.Background());
if err != nil {
	timing.EndFailure(context.Background(), err);
}
```
