---
type: docs
title: "Timing"
linkTitle: "Timing"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Callback object returned by [ICounters.beginTiming](../icounters/#begintiming) to end the timing
    of an execution block and update the associated counter.
---

### Description

The Timing class allows you to create callback objects that are returned by [ICounters.beginTiming](../icounters/#begintiming) to end the timing of execution blocks and update the associated counters.

### Constructors
Creates a new instance of the timing callback object.

> Timing([String counter, ITimingCallback callback])

- **counter**: string - associated counter name
- **callback**: [ITimingCallback](../itiming_callback) - callback that shall be called when end_timing is called.


### Instance methods

#### endTiming
Ends the timing of an execution block, calculates the elapsed time and updates the associated counter.

> void endTiming()

### Examples

```dart
var timing = counters.beginTiming("mymethod.exec_time");
try {
    ...
} finally {
    timing.endTiming();
}
```
