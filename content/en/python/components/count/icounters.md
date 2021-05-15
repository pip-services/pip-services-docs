---
type: docs
title: "ICounters"
linkTitle: "ICounters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Interface for performance counters that measure execution metrics.


---

### Description

The ICounters interface defines the methods for performance counters that measure execution metrics.

Important points

- The performance counters measure how code is performing; that is, how fast or slow is, how many transactions were performed, how many objects were stored, what was the latest transaction time and so on.
- They are critical to monitor and improve performance, scalability and reliability of code in production. 

### Instance methods

#### begin_timing
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.end_timing](../counter_timing/#end_timing) to end the measurement and update the counter.

> begin_timing(name: str): [CounterTiming](../counter_timing)

- **name**: str - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### increment
Increments counter by a given value.

>  increment(name: str, value: float)

- **name**: str - a counter name of Increment type.
- **value**: float - a value to add to the counter.

#### increment_one
Increments counter by 1.

> increment_one(name: str)

- **name**: str - a counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> last(name: str, value: float)

- **name**: str - a counter name of Last type.
- **value**: float - a last value to record.


#### stats
Calculates min/average/max statistics based on the current and previous values.

> stats(name: str, value: float)

- **name**: str - a counter name of Statistics type
- **value**: float - a value to update statistics


#### timestamp
Records the given timestamp.

> timestamp(name: str, value: float)

- **name**: str - a counter name of Timestamp type.
- **value**: float - a timestamp to record.


#### timestamp_now
Records the current time as a timestamp.

> timestamp_now(name: str)

- **name**: str - a counter name of Timestamp type.
