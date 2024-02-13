---
type: docs
title: "CounterTiming"
linkTitle: "CounterTiming"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
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

> (c [*CounterTiming]()) EndTiming(ctx context.Context)

- **ctx**: context.Context - operation context.

### Examples

```go
timing := counters.BeginTiming(contex.Background(), "mymethod.exec_time")
defer  timing.EndTiming()
```

