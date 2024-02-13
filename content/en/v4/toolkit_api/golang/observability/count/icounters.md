---
type: docs
title: "ICounters"
linkTitle: "ICounters"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
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
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.EndTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> BeginTiming(ctx context.Context, name string) [*CounterTiming](../counter_timing)

- **name**: string - counter name of Interval type.
- **returns**: [*CounterTiming](../counter_timing) - callback object to end timing.


#### Increment
Increments counter by a given value.

> Increment(ctx context.Context, name string, value int)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Increment type.
- **value**: int - value to add to the counter.

#### IncrementOne
Increments counter by 1.

> IncrementOne(ctx context.Context, name string)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> Last(ctx context.Context, name string, value float32)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Last type.
- **value**: float32 - last value to record.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> Stats(ctx context.Context, name string, value float32)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Statistics type
- **value**: float32 - value to update statistics


#### Timestamp
Records the given timestamp.

> Timestamp(ctx context.Context, name string, value time.Time)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Timestamp type.
- **value**: time.Time - timestamp to record.


#### TimestampNow
Records the current time as a timestamp.

> TimestampNow(ctx context.Context, name string)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Timestamp type.

