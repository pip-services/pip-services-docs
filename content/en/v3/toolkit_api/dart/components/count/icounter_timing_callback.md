---
type: docs
title: "ICounterTimingCallback"
linkTitle: "ICounterTimingCallback"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Interface for a callback to end the measurement of the execution elapsed time.
---

### Description

The ICounterTimingCallback interface defines the method used for a callback to end the measurement of the execution elapsed time. 

### Instance methods

#### endTiming
Ends measurement of execution elapsed time and updates a specified counter.
See also [CounterTiming.endTiming](../counter_timing/#endtiming)

> void endTiming(String? name, int elapsed)

- **name**: String? - counter name
- **elapsed**: int - execution elapsed time in milliseconds to update the counter.
