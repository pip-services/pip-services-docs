---
type: docs
title: "NullCounters"
linkTitle: "NullCounters"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
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

> `public` [CounterTiming](../counter_timing) beginTiming(String name)

- **name**: String - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### increment
Increments counter by given value.

> `public` void increment(String name, int value)

- **name**: String - a counter name of Increment type.
- **value**: int - a value to add to the counter.

#### incrementOne
Increments counter by 1.

> `public` void last(String name, float value)

- **name**: String - a counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> `public` void last(String name, float value)

- **name**: String - a counter name of Last type.
- **value**: float - a last value to record.


#### stats
Calculates min/average/max statistics based on the current and previous values.

> `public` void stats(String name, float value)

- **name**: String - a counter name of Statistics type
- **value**: float - a value to update statistics


#### timestamp
Records the given timestamp.

> `public` tvoid timestamp(String name, ZonedDateTime value)

- **name**: String - a counter name of Timestamp type.
- **value**: ZonedDateTime - a timestamp to record.


#### timestampNow
Records the current time as a timestamp.

> `public`  void timestampNow(String name)

- **name**: String - a counter name of Timestamp type.

### See also 

- [ICounters](../icounters)
