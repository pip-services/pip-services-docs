---
type: docs
title: "NullCounters"
linkTitle: "NullCounters"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Dummy implementation of performance counters.

---

**Implements:** [ICounters](../icounters)

### Description

The NullCounters class allows you to create dummy performance counters.

Important points

- It can be used in testing or in situations when a counter is required but must be disabled.

### Instance methods

#### beginTiming
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.endTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> `public` beginTiming(name: string): [CounterTiming](../counter_timing): void

- **name**: string - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### increment
Increments counter by given value.

> `public` increment(name: string, value: number): void

- **name**: string - a counter name of Increment type.
- **value**: number - a value to add to the counter.

#### incrementOne
Increments counter by 1.

> `public` increment_one(name: string): void

- **name**: string - a counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> `public` last(name: string, value: number): void

- **name**: string - a counter name of Last type.
- **value**: number - a last value to record.


#### stats
Calculates min/average/max statistics based on the current and previous values.

> `public` stats(name: string, value: number): void

- **name**: string - a counter name of Statistics type
- **value**: number - a value to update statistics


#### timestamp
Records the given timestamp.

> `public` timestamp(name: string, value: Date): void

- **name**: string - a counter name of Timestamp type.
- **value**: Date - a timestamp to record.


#### timestampNow
Records the current time as a timestamp.

> `public`  timestamp_now(name: string): void

- **name**: string - a counter name of Timestamp type.

### See also 

- [ICounters](../icounters)
