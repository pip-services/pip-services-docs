---
type: docs
title: "CachedCounters"
linkTitle: "CachedCounters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Class used to create performace counters that measure and store those values in memory.

    
---

**Implements:** [ICounters](../icounters), [IReconfigurable](../../../commons/config/ireconfigurable), 
[ICounterTimingCallback](../icounter_timing_callback)

### Description

The CachedCounters class allows you to create performace counters that measure and store those values in memory.

Important points

- Child classes can implement saving of the counters into various different destinations.

#### Configuration parameters

**options**:
- **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
- **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)



### Constructors
Creates a new CachedCounters object.

> CachedCounters()


### Fields

<span class="hide-title-link">

#### _default_interval
Default time interval.
> **_default_interval** = 300000

#### _cache
A dictionary containing the cached values.
> **_cache**: dict

#### _updated
A boolean value that indicates whether the counter has been updated or not.
> **_updated**: bool

#### _last_dump_time

> **_last_dump_time**: float

#### _interval
Time different between two updates.
> **_interval**: float

</span>


### Methods

#### begin_timing
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.end_timing](../counter_timing/#end_timing) to end the measurement and update the counter.

> begin_timing(name: str): [CounterTiming](../counter_timing)

- **name**: str - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### clear
Clears (resets) a counter specified by its name.

> clear(name: str)

- **name**: str - a counter name to clear.


#### clear_all
Clears (resets) all counters.

> clear_all()


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### dump
Dumps (saves) the current values of counters.

> dump()


#### end_timing
Ends measurement of execution elapsed time and updates specified counter.

> end_timing(name: str, elapsed: float)

- **name**: str - a counter name
- **elapsed**: float - execution elapsed time in milliseconds to update the counter.


#### get_all
Gets all captured counters.

> get_all(): List[[Counter](../counter)]

- **returns**: List[[Counter](../counter)] - a list with counters.


#### get_interval
Gets the counters dump/save interval.

>  get_interval(): float

- **returns**: float - the interval in milliseconds.


#### increment
Increments counter by given value.

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


#### _save
Saves the current counters measurements.

> `abstractmethod` _save(counters: List[[Counter](../counter)])

- **counters**: List[[Counter](../counter)] - current counters measurements to be saves.


#### set_interval
Sets the counters dump/save interval.

> set_interval(value: float)

- **value**: float - a new interval in milliseconds. 


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


#### _update
Makes counter measurements as updated and dumps them when timeout expires.

> _update(name: str)
