---
type: docs
title: "CachedCounters"
linkTitle: "CachedCounters"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
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

> `public` constructor()


### Fields

<span class="hide-title-link">

#### _interval
Default time interval.
> `protected` **_interval** = 300000

#### _cache
A dictionary containing the cached values.
> `protected` **_cache**: { [id: string]: [Counter](../counter) }

#### _updated
A boolean value that indicates whether the counter has been updated or not.
> `protected` **_updated**: boolean

#### _lastDumpTime
Time of the last dump.
> `protected` **_lastDumpTime**: Date

#### _lastResetTime
Last time when was reset timer
> `protected` **_lastResetTime**: Date

#### _resetTimeout
Timeout to reset timer
> `protected` **_resetTimeout**: number

</span>


### Instance methods

#### beginTiming
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.endTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> `public` beginTiming(name: string): [CounterTiming](../counter_timing)

- **name**: string - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### clear
Clears (resets) a counter specified by its name.

> `public` clear(name: string): void

- **name**: string - a counter name to clear.


#### clearAll
Clears (resets) all counters.

> `public` clearAll(): void


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### dump
Dumps (saves) the current values of counters.

> `public` dump(): void


#### endTiming
Ends measurement of execution elapsed time and updates specified counter.

> `public` endTiming(name: string, elapsed: number): void

- **name**: string - a counter name
- **elapsed**: number - execution elapsed time in milliseconds to update the counter.


#### get
Gets a counter specified by its name.
It counter does not exist or its type doesn't match the specified type
it creates a new one.

> `public` get(name: string, typ: [CounterType](../counter_type)): [Counter](../counter)

- **name**: string - a counter name to retrieve.
- **typ**: [CounterType](../counter_type) - a counter type.
- **returns**: [Counter](../counter) - an existing or newly created counter of the specified type.


#### getAll
Gets all captured counters.

> `public` getAll(): [Counter](../counter)[]

- **returns**: [Counter](../counter)[] - a list with counters.


#### getInterval
Gets the counters dump/save interval.

> `public` getInterval(): number

- **returns**: number - the interval in milliseconds.


#### increment
Increments counter by given value.

> `public` increment(name: string, value: number): void

- **name**: string - a counter name of Increment type.
- **value**: number - a value to add to the counter.


#### incrementOne
Increments counter by 1.

> `public` incrementOne(name: string): void

- **name**: string - a counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> `public` last(name: string, value: number): void

- **name**: string - a counter name of Last type.
- **value**: number - a last value to record.


#### setInterval
Sets the counters dump/save interval.

> `public` setInterval(value: number): void

- **value**: number - a new interval in milliseconds. 


#### stats
Calculates min/average/max statistics based on the current and previous values.

> `public` stats(name: string, value: number): void

- **name**: string - a counter name of Statistics type
- **value**: number - a value to update statistics


#### timestamp
Records the given timestamp.

> `public` timestamp(name: string, value: Date): void

- **name**: string - a counter name of Timestamp type.
- **value**: Date - a timestamp to record.


#### timestampNow
Records the current time as a timestamp.

> `public` timestampNow(name: string): void

- **name**: string - a counter name of Timestamp type.


#### update
Makes counter measurements as updated and dumps them when timeout expires.

> `protected` update()


### Abstract methods

#### save
Saves the current counters measurements.

> `protected abstract` save(counters: [Counter](../counter)[]): void

- **counters**: [Counter](../counter)[] - current counters measurements to be saved.
