---
type: docs
title: "TraceTiming"
linkTitle: "TraceTiming"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Timing object returned by [ITracer.beginTrace](../itracer/#begintrace) to end the timing
    of an execution block and record the associated trace.
---

### Description

The TraceTiming class is used to create the timing object returned by [ITracer.beginTrace](../itracer/#begintrace) to end the timing of and execution block and record the associated trace.

### Constructors
Creates a new instance of the timing callback object.

> TraceTiming(String? correlationId, String component, String operation, [ITracer?](../itracer) tracer)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **component**: String - an associated component name
- **operation**: String - an associated operation name
- **tracer**: [ITracer?](../itracer) - a callback that shall be called when endTiming is called.


### Instance methods

#### endFailure
Ends timing of a failed block, calculates elapsed time
and records the associated trace.

> void endFailure(Exception error)

- **error**: Exception - an error object associated with this trace.


#### endTrace
Ends timing of an execution block, calculates the elapsed time
and records the associated trace.

> void endTrace()
 
### Examples

```dart
var timing = tracer.beginTrace("mymethod.exec_time");
try {
    ...
    timing.endTrace();
} catch (err) {
    timing.endFailure(err);
}
```
