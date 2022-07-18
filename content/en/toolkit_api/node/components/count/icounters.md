---
type: docs
title: "ICounters"
linkTitle: "ICounters"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Interface for performance counters that measure execution metrics.


---

### Description

The ICounters interface defines the methods for performance counters that measure execution metrics.

Important points

- The performance counters measure how code is performing; that is, how fast or slow is, how many transactions were performed, how many objects were stored, what was the latest transaction time and so on.
- They are critical to monitor and improve performance, scalability and reliability of code in production. 

### Instance methods

#### beginTiming
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.endTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> beginTiming(name: string): [CounterTiming](../counter_timing): void

- **name**: string - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### increment
Increments counter by a given value.

> increment(name: string, value: number): void

- **name**: string - a counter name of Increment type.
- **value**: number - a value to add to the counter.

#### incrementOne
Increments counter by 1.

> incrementOne(name: string): void

- **name**: string - a counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> last(name: string, value: number): void

- **name**: string - a counter name of Last type.
- **value**: number - a last value to record.


#### stats
Calculates min/average/max statistics based on the current and previous values.

> stats(name: string, value: number): void

- **name**: string - a counter name of Statistics type
- **value**: number - a value to update statistics


#### timestamp
Records the given timestamp.

> timestamp(name: string, value: Date): void

- **name**: string - a counter name of Timestamp type.
- **value**: Date - a timestamp to record.


#### timestampNow
Records the current time as a timestamp.

> timestampNow(name: string): void

- **name**: string - a counter name of Timestamp type.
