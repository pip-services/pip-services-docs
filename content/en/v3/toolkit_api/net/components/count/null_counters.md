---
type: docs
title: "NullCounters"
linkTitle: "NullCounters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Dummy implementation of performance counters.

---

**Inherits**: [ICounters](../icounters)

### Description

The NullCounters class allows you to create dummy performance counters.

**Important points**

- It can be used in testing or in situations when a counter is required but must be disabled.

### Instance methods

#### BeginTiming
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.EndTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> `public` [CounterTiming](../counter_timing) BeginTiming(string name)

- **name**: string - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### Increment
Increments counter by given value.

> `public` void Increment(string name, int value)

- **name**: string - counter's name of Increment type.
- **value**: int - value to add to the counter.

#### IncrementOne
Increments a counter by 1.

> `public` void IncrementOne(string name)

- **name**: string - counter's name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> `public` void Last(string name, float value)

- **name**: string - counter's name of Last type.
- **value**: float - last value to record.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> `public` void Stats(string name, float value)

- **name**: string - counter's name of Statistics type
- **value**: float - value to update statistics


#### Timestamp
Records the given timestamp.

> `public` void Timestamp(string name, DateTime value)

- **name**: string - counter's name of Timestamp type.
- **value**: Date - timestamp to record.


#### timestampNow
Records the current time as a timestamp.

> `public` void timestampNow(string name)

- **name**: string - counter's name of Timestamp type.

### See also 

- [ICounters](../icounters)
