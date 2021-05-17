---
type: docs
title: "TraceTiming"
linkTitle: "TraceTiming"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Timing object returned by [ITracer.begin_trace](../itracer/#begin_trace) to end the timing
    of an execution block and record the associated trace.
---

### Description

The TraceTiming class is used to create the timing object returned by [ITracer.begin_trace](../itracer/#begin_trace) to end the timing of and execution block and record the associated trace.

#### Constructors
Creates a new instance of the timing callback object.

> TraceTiming(correlation_id: Optional[str], component: str, operation: str, tracer: [ITracer](../itracer) = None)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **component**: str - an associated component name
- **operation**: str - an associated operation name
- **tracer**: [ITracer](../itracer) - a callback that shall be called when endTiming is called.


### Instance methods

#### end_failure
Ends timing of a failed block, calculates elapsed time
and records the associated trace.

> end_failure(error: Exception)

- **error**: Exception - an error object associated with this trace.


#### end_trace
Ends timing of an execution block, calculates the elapsed time
and records the associated trace.

> end_trace()
 
### Examples

```python
timing = tracer.begin_trace("mymethod.exec_time");
try:
    ...
    timing.end_trace();
except Exceptions as err:
    timing.end_failure(err);
```
