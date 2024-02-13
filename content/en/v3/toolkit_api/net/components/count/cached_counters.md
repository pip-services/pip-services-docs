---
type: docs
title: "CachedCounters"
linkTitle: "CachedCounters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Class used to create performace counters that measure and store those values in memory.

    
---

**Inherits**: [ICounters](../icounters), [IReconfigurable](../../../commons/config/ireconfigurable), 
[ICounterTimingCallback](../icounter_timing_callback)

### Description

The CachedCounters class allows you to create performace counters that measure and store those values in memory.

**Important points**

- Child classes can implement saving of the counters into various different destinations.

#### Configuration parameters

**options**:
- **interval**: interval in milliseconds to save current counters measurements (default: 5 mins)
- **reset_timeout**: timeout in milliseconds to reset the counters. 0 disables the reset (default: 0)



### Constructors
Creates a new CachedCounters object.

> `public` CachedCounters()


### Fields

<span class="hide-title-link">

#### _cache
Dictionary containing the cached values.
> `protected` **_cache**: IDictionary\<string, [Counter](../counter)\>

#### _updated
Boolean value that indicates whether the counter has been updated or not.
> `protected` **_updated**: bool


#### _lastDumpTime
Time of the last dump.
> `protected` **_lastDumpTime**: long = DateTime.UtcNow.Ticks

#### _lastResetTime
Last time when was reset timer
> `protected` **_lastResetTime**: long = DateTime.UtcNow.Ticks

#### _lock
Lock
> `protected` **_lock**: object

#### _interval
Default time interval.
> `protected` **_interval**: long = 300000


#### _resetTimeout
Timeout to reset timer
> `protected` **_resetTimeout**: long = 0

</span>


### Instance methods

#### BeginTiming
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.EndTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> `public` [CounterTiming](../counter_timing) BeginTiming(string name)

- **name**: string - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### Clear
Clears (resets) a counter specified by its name.

> `public` void Clear(string name)

- **name**: string - a counter name to clear.


#### ClearAll
Clears (resets) all counters.

> `public` void ClearAll()


#### Configure
Configures component by passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Dump
Dumps (saves) the current values of counters.

> `public` void Dump()


#### EndTiming
Ends measurement of execution elapsed time and updates specified counter.

> `public` void EndTiming(string name, double elapsed)

- **name**: string - counter name
- **elapsed**: double - execution elapsed time in milliseconds to update the counter.


#### Get
Gets a counter specified by its name.
It counter does not exist or its type doesn't match the specified type
it creates a new one.

> `public` [Counter](../counter) Get(string name, [CounterType](../counter_type) type)

- **name**: string - a counter name to retrieve.
- **typ**: [CounterType](../counter_type) - counter type.
- **returns**: [Counter](../counter) - existing or newly created counter of the specified type.


#### GetAll
Gets all captured counters.

> `public` IEnumerable\<[Counter](../counter)\> GetAll()

- **returns**: IEnumerable\<[Counter](../counter)\> - list with counters.


#### Increment
Increments counter by a given value.

> `public` void Increment(string name, int value)

- **name**: string - counter name of Increment type.
- **value**: int - value to add to the counter.


#### IncrementOne
Increments counter by 1.

> `public` void IncrementOne(string name)

- **name**: string - counter name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> `public` Last(string name, float value)

- **name**: string - counter name of Last type.
- **value**: float - last value to record.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> `public` void Stats(string name, float value)

- **name**: string - counter name of Statistics type
- **value**: float - value to update statistics


#### Timestamp
Records the given timestamp.

> `public` void Timestamp(string name, DateTime value)

- **name**: string - counter's name of Timestamp type.
- **value**: DateTime - timestamp to record.


#### TimestampNow
Records the current time as a timestamp.

> `public` void TimestampNow(string name)

- **name**: string - counter's name of Timestamp type.


#### Update
Makes counter measurements as updated and dumps them when timeout expires.

> `protected` void Update()


### Abstract methods

#### Save
Saves the current counters' measurements.

> `protected abstarct` void Save(IEnumerable<[Counter](../counter)> counters)

- **counters**: IEnumerable<[Counter](../counter)> - current counters' measurements to be saved.
