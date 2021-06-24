---
type: docs
title: "CachedCounters"
linkTitle: "CachedCounters"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Class used to create performace counters that measure and store those values in memory.

    
---

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
Inherit cache counters from saver.

> InheritCacheCounters(saver [ICachedCountersOverrides](../icached_counters_overrides)) [*CachedCounters]()

- **saver**: [ICachedCountersOverrides](../icached_counters_overrides) - save ICachedCountersOverrides


### Fields

<span class="hide-title-link">

#### interval
Default time interval.
> **interval**: int64 = 300000

#### cache
A dictionary containing the cached values.
> **cache**: map[string][*Counter](../counter){},

#### updated
A boolean value that indicates whether the counter has been updated or not.
> **updated**: bool

#### lastDumpTime
Time of the last dump.
> **lastDumpTime**: time.Time

#### lastResetTime
Last time when was reset timer
> **lastResetTime**: time.Time

#### resetTimeout
Timeout to reset timer
> **resetTimeout**: int64 = 0

</span>


### Methods

#### BeginTiming
Begins measurement of execution time interval.
It returns [*CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.EndTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> (c [*CachedCounters]()) BeginTiming(name string) [*CounterTiming](../counter_timing)

- **name**: string - a counter name of Interval type.
- **returns**: [*CounterTiming](../counter_timing) - a callback object to end timing.


#### Clear
Clears (resets) a counter specified by its name.

> (c [*CachedCounters]()) Clear(name string)

- **name**: string - a counter name to clear.


#### ClearAll
Clears (resets) all counters.

> (c [*CachedCounters]()) ClearAll()


#### Configure
Configures component by passing configuration parameters.

> (c [*CachedCounters]()) Configure(config [*config.ConfigParams](../../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Dump
Dumps (saves) the current values of counters.

> (c [*CachedCounters]()) Dump() error

- **returns**: error - return error if not dumped


#### EndTiming
Ends measurement of execution elapsed time and updates specified counter.

> (c [*CachedCounters]()) EndTiming(name string, elapsed float32)

- **name**: string - a counter name
- **elapsed**: float32 - execution elapsed time in milliseconds to update the counter.


#### Get
Gets a counter specified by its name.
It counter does not exist or its type doesn't match the specified type
it creates a new one.

> (c [*CachedCounters]()) Get(name string, typ int) [*Counter](../counter)

- **name**: string - a counter name to retrieve.
- **typ**: int - a counter type.
- **returns**: [Counter](../counter) - an existing or newly created counter of the specified type.


#### GetAll
Gets all captured counters.

> (c [*CachedCounters]()) GetAll() [][*Counter](../counter)

- **returns**: [][*Counter](../counter) - a list with counters.


#### Increment
Increments counter by given value.

> (c [*CachedCounters]()) Increment(name string, value int)

- **name**: string - a counter name of Increment type.
- **value**: int - a value to add to the counter.


#### IncrementOne
Increments counter by 1.

> (c [*CachedCounters]()) IncrementOne(name string)

- **name**: string - a counter name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> (c [*CachedCounters]()) Last(name string, value float32)

- **name**: string - a counter name of Last type.
- **value**: float32 - a last value to record.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> (c [*CachedCounters]()) Stats(name string, value float32)

- **name**: string - a counter name of Statistics type
- **value**: float32 - a value to update statistics


#### Timestamp
Records the given timestamp.

> (c [*CachedCounters]()) Timestamp(name string, value time.Time)

- **name**: string - a counter name of Timestamp type.
- **value**: time.Time - a timestamp to record.


#### TimestampNow
Records the current time as a timestamp.

> (c [*CachedCounters]()) TimestampNow(name string)

- **name**: string - a counter name of Timestamp type.


#### update
Makes counter measurements as updated and dumps them when timeout expires.

> (c [*CachedCounters]()) update() error