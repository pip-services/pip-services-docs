---
type: docs
title: "ICounterTimingCallback"
linkTitle: "ICounterTimingCallback"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Interface for a callback to end the measurement of the execution elapsed time.
---

### Description

The ICounterTimingCallback interface defines the method used for a callback to end the measurement of the execution elapsed time. 

### Instance methods

#### endTiming
Ends measurement of execution elapsed time and updates specified counter.
See also [CounterTiming.endTiming](../counter_timing/#endtiming)

> void endTiming(String name, float elapsed)

- **name**: string - a counter name
- **elapsed**: number - execution elapsed time in milliseconds to update the counter.
