---
type: docs
title: "ICounters"
linkTitle: "ICounters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for performance counters that measure execution metrics.


---

### Description

The ICounters interface defines the methods for performance counters that measure execution metrics.

Important points

- The performance counters measure how code is performing; that is, how fast or slow is, how many transactions were performed, how many objects were stored, what was the latest transaction time and so on.
- They are critical to monitor and improve performance, scalability and reliability of code in production. 

### Instance methods

#### BeginTiming
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.EndTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> [CounterTiming](../counter_timing) BeginTiming(string name)

- **name**: string - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### Increment
Increments counter by a given value.

> void Increment(string name, int value) 

- **name**: string - a counter name of Increment type.
- **value**: int - a value to add to the counter.

#### IncrementOne
Increments counter by 1.

> void IncrementOne(string name)

- **name**: string - a counter name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> void last(string name, float value)

- **name**: string - a counter name of Last type.
- **value**: float - a last value to record.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> void Stats(string name, float value)

- **name**: string - a counter name of Statistics type
- **value**: float - a value to update statistics


#### Timestamp
Records the given timestamp.

> void Timestamp(string name, DateTime value)

- **name**: string - a counter name of Timestamp type.
- **value**: DateTime - a timestamp to record.


#### TimestampNow
Records the current time as a timestamp.

> void TimestampNow(string name)

- **name**: string - a counter name of Timestamp type.
