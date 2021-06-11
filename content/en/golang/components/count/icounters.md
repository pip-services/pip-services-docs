---
type: docs
title: "ICounters"
linkTitle: "ICounters"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Interface for performance counters that measure execution metrics.


---

### Description

The ICounters interface defines the methods for performance counters that measure execution metrics.

Important points

- The performance counters measure how code is performing; that is, how fast or slow is, how many transactions were performed, how many objects were stored, what was the latest transaction time and so on.
- They are critical to monitor and improve performance, scalability and reliability of code in production. 

### Methods

#### BeginTiming
Begins measurement of execution time interval.
It returns [Timing](../timing) object which has to be called at
[Timing.EndTiming](../timing/#endtiming) to end the measurement and update the counter.

> BeginTiming(name string) [*Timing](../timing)

- **name**: string - a counter name of Interval type.
- **returns**: [*Timing](../timing) - a callback object to end timing.


#### Increment
Increments counter by a given value.

> Increment(name string, value int)

- **name**: string - a counter name of Increment type.
- **value**: int - a value to add to the counter.

#### IncrementOne
Increments counter by 1.

> IncrementOne(name string)

- **name**: string - a counter name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> Last(name string, value float32)

- **name**: string - a counter name of Last type.
- **value**: float32 - a last value to record.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> Stats(name string, value float32)

- **name**: string - a counter name of Statistics type
- **value**: float32 - a value to update statistics


#### Timestamp
Records the given timestamp.

> Timestamp(name string, value time.Time)

- **name**: string - a counter name of Timestamp type.
- **value**: time.Time - a timestamp to record.


#### TimestampNow
Records the current time as a timestamp.

> TimestampNow(name string)

- **name**: string - a counter name of Timestamp type.
