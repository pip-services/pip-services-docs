---
type: docs
title: "CounterTiming"
linkTitle: "CounterTiming"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Callback object returned by [ICounters.beginTiming](../icounters/#begintiming) to end the counter_timing
    of an execution block and update the associated counter.
---

### Description

The CounterTiming class allows you to create callback objects that are returned by [ICounters.beginTiming](../icounters/#begintiming) to end the counter_timing of execution blocks and update the associated counters.

### Constructors
Creates a new instance of the counter_timing callback object.

> CounterTiming([String? counter, [ICounterTimingCallback?](../icounter_timing_callback) callback])

- **counter**: string - associated counter name
- **callback**: [ICounterTimingCallback?](../icounter_timing_callback) - callback that shall be called when end_timing is called.


### Instance methods

#### endTiming
Ends the counter_timing of an execution block, calculates the elapsed time and updates the associated counter.

> void endTiming()

### Examples

```dart
var counter_timing = counters.beginTiming("mymethod.exec_time");
try {
    ...
} finally {
    counter_timing.endTiming();
}
```
