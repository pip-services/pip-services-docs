---
type: docs
title: "CounterTiming"
linkTitle: "CounterTiming"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Callback object returned by [ICounters.begin_timing](../icounters/#begin_timing) to end timing
    of execution block and update the associated counter.
---


**Example:**
```python
timing = counters.begin_timing("mymethod.exec_time")
# do something
timing.end_timing()
```


### Constructors
Creates a new instance of the timing callback object.

> CounterTiming(counter: str = None, callback: [ICounterTimingCallback](../icounter_timing_callback) = None)

- **counter**: str - an associated counter name
- **callback**: [ICounterTimingCallback](../icounter_timing_callback) - a callback that shall be called when end_timing is called.


### Fields

<span class="hide-title-link">

#### _counters
TODO add description
> **_counters**: List[[ICounters](../icounters)] = []

</span>


### Methods

#### end_timing
Ends timing of an execution block, calculates elapsed time and updates the associated counter.

> end_timing()