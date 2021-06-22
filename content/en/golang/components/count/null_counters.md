---
type: docs
title: "NullCounters"
linkTitle: "NullCounters"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Dummy implementation of performance counters.

---

**Implements:** [ICounters](../icounters)

### Description

The NullCounters class allows you to create dummy performance counters.

Important points

- It can be used in testing or in situations when a counter is required but must be disabled.

### Constructors

#### NewNullCounters
Creates a new instance of the counter.

> NewNullCounters() [*NullCounters]()

### Methods

#### BeginTiming
Begins measurement of execution time interval.
It returns [*CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.EndTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> (c *NullCounters) BeginTiming(name string) [*CounterTiming](../counter_timing)

- **name**: string - a counter name of Interval type.
- **returns**: [*CounterTiming](../counter_timing) - a callback object to end timing.


#### Increment
Increments counter by given value.

> (c *NullCounters) Increment(name string, value float32)

- **name**: string - a counter name of Increment type.
- **value**: float32 - a value to add to the counter.

#### IncrementOne
Increments counter by 1.

> (c *NullCounters) IncrementOne(name string)

- **name**: string - a counter name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> (c *NullCounters) Last(name string, value float32)

- **name**: string - a counter name of Last type.
- **value**: float32 - a last value to record.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> (c *NullCounters) Stats(name string, value float32)

- **name**: string - a counter name of Statistics type
- **value**: float32 - a value to update statistics


#### Timestamp
Records the given timestamp.

> (c *NullCounters) Timestamp(name string, value time.Time)

- **name**: string - a counter name of Timestamp type.
- **value**: time.Time - a timestamp to record.


#### TimestampNow
Records the current time as a timestamp.

> (c *NullCounters) TimestampNow(name string)

- **name**: string - a counter name of Timestamp type.

### See also 

- [ICounters](../icounters)
