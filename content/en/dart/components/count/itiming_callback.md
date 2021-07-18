---
type: docs
title: "ITimingCallback"
linkTitle: "ITimingCallback"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Interface for a callback to end the measurement of the execution elapsed time.
---

### Description

The ICounterTimingCallback interface defines the method used for a callback to end the measurement of the execution elapsed time. 

### Instance methods

#### endTiming
Ends measurement of execution elapsed time and updates specified counter.
See also [Timing.endTiming](../timing/#endtiming)

> void endTiming(String name, int elapsed)

- **name**: String - a counter name
- **elapsed**: int - execution elapsed time in milliseconds to update the counter.
