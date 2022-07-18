---
type: docs
title: "ICounterTimingCallback"
linkTitle: "ICounterTimingCallback"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for a callback to end the measurement of the execution elapsed time.
---

### Description

The ICounterTimingCallback interface defines a method used for a callback to end the measurement of the execution elapsed time. 

### Instance methods

#### EndTiming
Ends measurement of execution elapsed time and updates the specified counter.
See also [CounterTiming.EndTiming](../counter_timing/#endtiming).

> void EndTiming(string name, double elapsed)

- **name**: string - counter's name
- **elapsed**: double - execution elapsed time in milliseconds to update the counter.
