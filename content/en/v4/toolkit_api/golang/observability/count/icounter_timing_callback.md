---
type: docs
title: "ICounterTimingCallback"
linkTitle: "ICounterTimingCallback"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: >
    Interface for a callback to end the measurement of the execution elapsed time.
---

### Description

The ICounterTimingCallback interface defines the method used for a callback to end the measurement of the execution elapsed time. 

### Methods

#### EndTiming
Ends measurement of execution elapsed time and updates specified counter.
See also [CounterTiming.EndTiming](../counter_timing/#endtiming)

> EndTiming(ctx context.Context, name string, elapsed float32)

- **ctx**: context.Context - operation context.
- **name**: string - counter's name
- **elapsed**: float32 - execution elapsed time (in milliseconds) to update the counter.

