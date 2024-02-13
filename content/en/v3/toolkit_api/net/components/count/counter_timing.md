---
type: docs
title: "CounterTiming"
linkTitle: "CounterTiming"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Callback object returned by [ICounters.beginTiming](../icounters/#begintiming) to end the timing
    of an execution block and update the associated counter.
---

### Description

The CounterTiming class allows you to create callback objects that are returned by [ICounters.BeginTiming](../icounters/#begintiming) to end the timing of execution blocks and update the associated counters.

### Constructors
Creates a new instance of the timing callback object.

> `public` CounterTiming(string counter, [ICounterTimingCallback](../icounter_timing_callback) callback)

- **counter**: string - associated counter name
- **callback**: [ICounterTimingCallback](../icounter_timing_callback) - callback that shall be called when end_timing is called.


Creates a new instance of the timing callback object.

> `public` CounterTiming()


### Instance methods

#### EndTiming
Ends timing of an execution block, calculates elapsed time and updates the associated counter.

> `public` void EndTiming()

### Examples

```cs
var timing = counters.beginTiming("mymethod.exec_time");
try {
    ...
} finally {
    timing.EndTiming();
}
```
