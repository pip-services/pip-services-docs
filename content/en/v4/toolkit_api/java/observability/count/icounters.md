---
type: docs
title: "ICounters"
linkTitle: "ICounters"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
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

> [CounterTiming](../counter_timing) beginTiming(String name)

- **name**: string - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### increment
Increments counter by a given value.

> void increment(String name, int value)

- **name**: string - a counter name of Increment type.
- **value**: int - a value to add to the counter.

#### incrementOne
Increments counter by 1.

> void incrementOne(String name)

- **name**: String - a counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> void last(String name, float value)

- **name**: String - a counter name of Last type.
- **value**: float - a last value to record.


#### stats
Calculates min/average/max statistics based on the current and previous values.

> void stats(String name, float value)

- **name**: String - a counter name of Statistics type
- **value**: float - a value to update statistics


#### timestamp
Records the given timestamp.

> void timestamp(String name, ZonedDateTime value)

- **name**: String - a counter name of Timestamp type.
- **value**: ZonedDateTime - a timestamp to record.


#### timestampNow
Records the current time as a timestamp.

> void timestampNow(String name)

- **name**: String - a counter name of Timestamp type.
