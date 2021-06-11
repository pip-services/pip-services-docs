---
type: docs
title: "ITimingCallback"
linkTitle: "ITimingCallback"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Interface for a callback to end the measurement of the execution elapsed time.
---

### Description

The ITimingCallback interface defines the method used for a callback to end the measurement of the execution elapsed time. 

### Methods

#### endTiming
Ends measurement of execution elapsed time and updates specified counter.
See also [Timing.EndTiming](../timing/#endtiming)

> EndTiming(name string, elapsed float32)

- **name**: string - a counter name
- **elapsed**: float32 - execution elapsed time in milliseconds to update the counter.
