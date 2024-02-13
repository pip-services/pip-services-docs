---
type: docs
title: "CounterTiming"
linkTitle: "CounterTiming"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Callback object returned by [ICounters.beginTiming](../icounters/#begintiming) to end the timing
    of an execution block and update the associated counter.
---

### Description

The CounterTiming class allows you to create callback objects that are returned by [ICounters.beginTiming](../icounters/#begintiming) to end the timing of execution blocks and update the associated counters.

### Constructors
Creates a new instance of the timing callback object.

> `public` CounterTiming(String counter, [ICounterTimingCallback](../icounter_timing_callback) callback)

- **counter**: string - an associated counter name
- **callback**: [ICounterTimingCallback](../icounter_timing_callback) - a callback that shall be called when end_timing is called.


</span>


### Instance methods

#### endTiming
Ends timing of an execution block, calculates elapsed time and updates the associated counter.

> `public` void endTiming()

### Examples

```java
{@code
  CounterTiming timing = counters.beginTiming("mymethod.exec_time");
  try {
      ...
  } finally {
    timing.endTiming();
  }
  }
```
