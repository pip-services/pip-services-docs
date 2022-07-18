---
type: docs
title: "TraceTiming"
linkTitle: "TraceTiming"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Timing object returned by [ITracer.begin_trace](../itracer/#begintrace) to end the timing
    of an execution block and record the associated trace.
---

### Description

The TraceTiming class is used to create the timing object returned by [ITracer.begin_trace](../itracer/#begintrace) to end the timing of and execution block and record the associated trace.

### Constructors
Creates a new instance of the timing callback object.

> `public` TraceTiming(string correlationId, string component, string operation, [ITracer](../itracer) tracer = null)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - associated component name
- **operation**: string - associated operation name
- **tracer**: [ITracer](../itracer) - callback that shall be called when endTiming is called.


### Instance methods

#### EndFailure
Ends timing of a failed block, calculates elapsed time
and records the associated trace.

> `public` void EndFailure(Exception error)

- **error**: Exception - error object associated with this trace.


#### EndTrace
Ends timing of an execution block, calculates the elapsed time
and records the associated trace.

> `public` void EndTrace()
 
### Examples

```cs
var timing = tracer.BeginTrace("mymethod.exec_time");
try 
{
    ...
    timing.EndTrace();
} 
catch (Exception err)
{
     timing.EndFailure(err);
}
```
