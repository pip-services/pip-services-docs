---
type: docs
title: "Timing"
linkTitle: "Timing"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Callback object returned by [ICounters.beginTiming](../icounters/#begintiming) to end the timing
    of an execution block and update the associated counter.
---

### Description

The Timing class allows you to create callback objects that are returned by [ICounters.BeginTiming](../icounters/#begintiming) to end the timing of execution blocks and update the associated counters.

### Constructors

#### NewTiming
Creates a new instance of the timing callback object.

> NewTiming(counter string, callback [ITimingCallback](../itiming_callback)) [*Timing]()

- **counter**: string - an associated counter name
- **callback**: [ITimingCallback](../itiming_callback) - a callback that shall be called when end_timing is called.

#### NewEmptyTiming
Creates a new instance of the timing callback object.

> NewEmptyTiming() [*Timing]() 


### Methods

#### EndTiming
Ends timing of an execution block, calculates elapsed time and updates the associated counter.

> (c [*Timing]()) EndTiming()

### Examples

```go
timing := counters.BeginTiming("mymethod.exec_time");
defer  timing.EndTiming();
```
