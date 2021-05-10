---
type: docs
title: "CounterTiming"
linkTitle: "CounterTiming"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Callback object returned by [ICounters.begin_timing](../icounters/#begin_timing) to end the timing
    of an execution block and update the associated counter.
---

### Description

The CounterTiming class allows you to create callback objects that are returned by [ICounters.begin_timing](../icounters/#begin_timing) to end the timing of an execution block and update the associated counter.

### Constructors
Creates a new instance of the timing callback object.

> CounterTiming(counter: str = None, callback: [ICounterTimingCallback](../icounter_timing_callback) = None)

- **counter**: str - an associated counter name
- **callback**: [ICounterTimingCallback](../icounter_timing_callback) - a callback that shall be called when end_timing is called.


### Fields

<span class="hide-title-link">

#### _counters
A list containing different counters
> **_counters**: List[[ICounters](../icounters)] = []

</span>


### Instance methods

#### end_timing
Ends timing of an execution block, calculates elapsed time and updates the associated counter.

> end_timing()

### Examples

```python
timing = counters.begin_timing("mymethod.exec_time")
# do something
timing.end_timing()
```
