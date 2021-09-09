---
type: docs
title: "CachedCounters"
linkTitle: "CachedCounters"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Class used to create performace counters that measure and store those values in memory.

    
---

**Implements:** [ICounters](../icounters), [IReconfigurable](../../../commons/config/ireconfigurable), 
[ITimingCallback](../itiming_callback)

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

> CachedCounters()


### Fields

<span class="hide-title-link">

#### _interval
Default time interval.
> **_interval**: int = 300000

#### _cache
A dictionary containing the cached values.
> `final` **_cache** = \<String, [Counter](../counter)\>{}

#### _updated
A boolean value that indicates whether the counter has been updated or not.
> **_updated**: bool

#### _lastDumpTime
Time of the last dump.
> **_lastDumpTime**: DateTime

#### _lastResetTime
Last time when was reset timer
> **_lastResetTime**: DateTime

#### _resetTimeout
Timeout to reset timer
> **_resetTimeout**: int = 0

</span>


### Instance methods

#### beginTiming
Begins measurement of execution time interval.
It returns [Timing](../timing) object which has to be called at
[[Timing.endTiming](../timing/#endtiming) to end the measurement and update the counter.

> [Timing](../timing) beginTiming(String name)

- **name**: String - counter name of Interval type.
- **returns**: [Timing](../timing) - callback object to end timing.


#### clear
Clears (resets) a counter specified by its name.

> void clear(String name)

- **name**: String - name of counter to clear.


#### clearAll
Clears (resets) all counters.

> void clearAll() 


#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### dump
Dumps (saves) the current values of counters.

> void dump()


#### endTiming
Ends measurement of execution elapsed time and updates a specified counter.

`@override`
> void endTiming(String name, int elapsed)

- **name**: String - counter's name
- **elapsed**: int - execution elapsed time in milliseconds to update the counter.


#### get
Gets a counter specified by its name.
It counter does not exist or its type doesn't match the specified type
it creates a new one.

> [Counter](../counter) get(String name, [CounterType](../counter_type) type)

- **name**: String - name of counter to retrieve.
- **type**: [CounterType](../counter_type) - counter type.
- **returns**: [Counter](../counter) - existing or newly created counter of the specified type.


#### getAll
Gets all captured counters.

> List<[Counter](../counter)> getAll()

- **returns**: List<[Counter](../counter)> - list with counters.


#### getInterval
Gets the counters dump/save interval.

> int getInterval()

- **returns**: int - interval in milliseconds.


#### increment
Increments a counter by given value.

`@override`
> void increment(String name, int value)

- **name**: String - counter name of Increment type.
- **value**: int - value to add to the counter.


#### incrementOne
Increments counter by 1.

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

#### save
Saves the current counters measurements.

> void save(List<[Counter](../counter)> counters)

- **counters**: List<[Counter](../counter)> - current counters measurements to be saved.

#### setInterval
Sets the counters dump/save interval.

`@override`
> void setInterval(int value)

- **value**: int - new interval in milliseconds. 


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


#### update
Makes counter measurements as updated and dumps them when timeout expires.

> void _update()
