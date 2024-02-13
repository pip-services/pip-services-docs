---
type: docs
title: "CachedCounters"
linkTitle: "CachedCounters"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Class used to create performace counters that measure and store those values in memory.

    
---

**Implements:** [ICounters](../icounters), [IReconfigurable](../../../components/config/ireconfigurable), 
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

> `public` CachedCounters()


### Fields

<span class="hide-title-link">

#### _interval
Default time interval.
> `protected final` long **_interval** = 300000

#### _cache
A dictionary containing the cached values.
> `protected` Map<String, [Counter](../counter)> **_cache** = new HashMap<>()

#### _updated
A boolean value that indicates whether the counter has been updated or not.
> `protected` boolean **_updated** = false

#### _lastDumpTime
Time of the last dump.
> `protected` long **_lastDumpTime** = System.currentTimeMillis()

#### _lastResetTime
Last time when was reset timer
> `protected` long **_lastResetTime** = System.currentTimeMillis()

#### _resetTimeout
Timeout to reset timer
> `protected` long **_resetTimeout** = 0

</span>


### Instance methods

#### beginTiming
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.endTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> `public` [CounterTiming](../counter_timing) beginTiming(String name)

- **name**: String - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### clear
Clears (resets) a counter specified by its name.

> `public` void clear(String name)

- **name**: string - a counter name to clear.


#### clearAll
Clears (resets) all counters.

> `public` void clearAll()

#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### dump
Dumps (saves) the current values of counters.

> `public` void dump() throws InvocationException


#### endTiming
Ends measurement of execution elapsed time and updates specified counter.

> `public` void endTiming(String name, float elapsed)

- **name**: String - a counter name
- **elapsed**: float - execution elapsed time in milliseconds to update the counter.


#### get
Gets a counter specified by its name.
It counter does not exist or its type doesn't match the specified type
it creates a new one.

> `public` [CounterType](../counter_type) get(String name, int type)

- **name**: String - a counter name to retrieve.
- **type**: int - a counter type.
- **returns**: [Counter](../counter) - an existing or newly created counter of the specified type.


#### getAll
Gets all captured counters.

> `public` List<[Counter](../counter)[]> getAll()

- **returns**: List<[Counter](../counter)[]> - a list with counters.


#### getInterval
Gets the counters dump/save interval.

> `public` long getInterval()

- **returns**: long - the interval in milliseconds.


#### increment
Increments counter by given value.

> `public` void incrementOne(String name)

- **name**: String - a counter name of Increment type.
- **value**: number - a value to add to the counter.


#### incrementOne
Increments counter by 1.

> `public` void incrementOne(String name)

- **name**: String - a counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> `public` void last(String name, float value)

- **name**: String - a counter name of Last type.
- **value**: float - a last value to record.


#### setInterval
Sets the counters dump/save interval.

> `public` void setInterval(long value)

- **value**: long - a new interval in milliseconds. 


#### stats
Calculates min/average/max statistics based on the current and previous values.

> `public` void stats(String name, float value)

- **name**: String - a counter name of Statistics type
- **value**: float - a value to update statistics


#### timestamp
Records the given timestamp.

> `public` void timestamp(String name, ZonedDateTime value

- **name**: String - a counter name of Timestamp type.
- **value**: ZonedDateTime - a timestamp to record.


#### timestampNow
Records the current time as a timestamp.

> `public` void timestampNow(String name)

- **name**: String - a counter name of Timestamp type.


#### update
Makes counter measurements as updated and dumps them when timeout expires.

> `protected` void update()


### Abstract methods

#### save
Saves the current counters measurements.

> `protected abstract` void save(List<[Counter](../counter)[]> counters) throws InvocationException

- **counters**: [Counter](../counter)[] - current counters measurements to be saved.
