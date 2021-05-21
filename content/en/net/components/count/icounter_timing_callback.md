---
type: docs
title: "ICounterTimingCallback"
linkTitle: "ICounterTimingCallback"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for a callback to end the measurement of the execution elapsed time.
---

### Description

The ICounterTimingCallback interface defines the method used for a callback to end the measurement of the execution elapsed time. 

### Instance methods

#### endTiming
Ends measurement of execution elapsed time and updates specified counter.
See also [CounterTiming.endTiming](../counter_timing/#endtiming)

> endTiming(name: string, elapsed: number): void

- **name**: string - a counter name
- **elapsed**: number - execution elapsed time in milliseconds to update the counter.
