---
type: docs
title: "NullCounters"
linkTitle: "NullCounters"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Dummy implementation of performance counters.

---

**Implements:** [ICounters](../icounters)

### Description

The NullCounters class allows you to create dummy performance counters.

**Important points**

- It can be used in testing or in situations when a counter is required but must be disabled.

### Instance methods

#### beginTiming
Begins measurement of execution time interval.
It returns a [Timing](../timing) object which has to be called at
[Timing.endTiming](../timing/#endtiming) to end the measurement and update the counter.

`@override`
> [Timing](../timing) beginTiming(String name)

- **name**: String - counter name of Interval type.
- **returns**: [Timing](../timing) - callback object to end timing.


#### increment
Increments counter by a given value.

`@override`
> void increment(String name, int value)

- **name**: String - counter name of Increment type.
- **value**: int - value to add to the counter.

#### incrementOne
Increments a counter by 1.

`@override`
> void incrementOne(String name)

- **name**: String - counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

`@override`
> void last(String name, int value)

- **name**: String - counter name of Last type.
- **value**: int - last value to record.


#### stats
Calculates min/average/max statistics based on the current and previous values.

`@override`
> void stats(String name, int value)

- **name**: String - counter name of Statistics type
- **value**: int - value to update statistics


#### timestamp
Records the given timestamp.

`@override`
> void timestamp(String name, DateTime value)

- **name**: String - counter name of Timestamp type.
- **value**: DateTime - timestamp to record.


#### timestampNow
Records the current time as a timestamp.

`@override`
> void timestampNow(String name)

- **name**: String - counter name of Timestamp type.

### See also 

- [ICounters](../icounters)
