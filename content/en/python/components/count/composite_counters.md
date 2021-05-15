---
type: docs
title: "CompositeCounters"
linkTitle: "CompositeCounters"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Aggregates all counters from component references into a single one.

   
---

**Implements:** [ICounters](../icounters), [IReconfigurable](../../../commons/config/ireconfigurable), 
[ICounterTimingCallback](../icounter_timing_callback)


### Description

The CompositeCounters allows you to aggregate all counters from different component references into a single one.

Important points

-  It allows to capture metrics and conveniently send them to multiple destinations. 

#### References
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../icounters) components to pass collected measurements


### Constructors
Creates a new instance of the counters.

> CompositeCounters(references: [IReferences](../../../commons/refer/ireferences) = None)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Fields

<span class="hide-title-link">

#### _counters
A list containig the aggregated counters.
> **_counters**: List[[ICounters](../icounters)] = []

</span>


### Instance methods

#### begin_timing
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.end_timing](../counter_timing/#end_timing) to end the measurement and update the counter.

> begin_timing(name: str): [CounterTiming](../counter_timing)

- **name**: str - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### end_timing
Ends measurement of execution elapsed time and updates specified counter.

> end_timing(name: str, elapsed: float)

- **name**: str - a counter name
- **elapsed**: float - execution elapsed time in milliseconds to update the counter.


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
- **value**: float - last value to record.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


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


### See also
- #### [ICounters](../icounters)
