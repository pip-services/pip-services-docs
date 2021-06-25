---
type: docs
title: "CounterTiming"
linkTitle: "CounterTiming"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Callback object returned by [ICounters.beginTiming](../icounters/#begintiming) to end the timing
    of an execution block and update the associated counter.
---

### Description

The CounterTiming class allows you to create callback objects that are returned by [ICounters.BeginTiming](../icounters/#begintiming) to end the timing of execution blocks and update the associated counters.

### Constructors

#### NewCounterTiming
Creates a new instance of the timing callback object.

> NewCounterTiming(counter string, callback [ICounterTimingCallback](../icounter_timing_callback)) [*CounterTiming]()

- **counter**: string - associated counter name
- **callback**: [ICounterTimingCallback](../icounter_timing_callback) - callback that shall be called when end_timing is called.

#### NewEmptyCounterTiming
Creates a new instance of the timing callback object.

> NewEmptyCounterTiming() [*CounterTiming]() 


### Methods

#### EndTiming
Ends timing of an execution block, calculates elapsed time and updates the associated counter.

> (c [*CounterTiming]()) EndTiming()

### Examples

```go
timing := counters.BeginTiming("mymethod.exec_time");
defer  timing.EndTiming();
```
