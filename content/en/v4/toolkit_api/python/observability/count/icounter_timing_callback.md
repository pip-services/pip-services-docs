---
type: docs
title: "ICounterTimingCallback"
linkTitle: "ICounterTimingCallback"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-observability-python"
description: >
    Interface for a callback to end the measurement of the execution elapsed time.
---

### Description

The ICounterTimingCallback interface defines the method used for a callback to end the measurement of the execution elapsed time. 

### Instance methods

#### end_timing
Ends measurement of execution elapsed time and updates specified counter.
See also [CounterTiming.end_timing](../counter_timing/#end_timing)

> end_timing(name: str, elapsed: float)

- **name**: str - a counter name
- **elapsed**: float - execution elapsed time in milliseconds to update the counter.
