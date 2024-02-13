---
type: docs
title: "CompositeCounters"
linkTitle: "CompositeCounters"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Aggregates all counters from component references into a single one.

   
---

**Implements:** [ICounters](../icounters), [IReconfigurable](../../../components/config/ireconfigurable), 
[ICounterTimingCallback](../icounter_timing_callback)


### Description

The CompositeCounters allows you to aggregate all counters from different component references into a single one.

Important points

-  It allows to capture metrics and conveniently send them to multiple destinations. 

#### References
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../icounters) components to pass collected measurements


### Constructors
Creates a new instance of the counters.

> `public` CompositeCounters()

### Fields

<span class="hide-title-link">

#### _counters
A list containig the aggregated counters.
> `protected` **_counters**: [ICounters](../icounters)[] = []
List<[ICounters](../icounters)> _counters = new ArrayList<>()
</span>


### Instance methods

#### beginTiming
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.endTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> `public` [CounterTiming](../counter_timing) beginTiming(String name)

- **name**: String - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### endTiming
Ends measurement of execution elapsed time and updates specified counter.

> `public` void endTiming(String name, float elapsed)

- **name**: String - a counter name
- **elapsed**: float - execution elapsed time in milliseconds to update the counter.


#### increment
Increments counter by given value.

> `public` void increment(String name, int value)

- **name**: string - a counter name of Increment type.
- **value**: int - a value to add to the counter.


#### incrementOne
Increments counter by 1.

> `public` void incrementOne(String name)

- **name**: String - a counter name of Increment type.


#### last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> `public` void last(String name, float value)

- **name**: String - a counter name of Last type.
- **value**: float - last value to record.


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../commons/refer/ireferences) references) throws ReferenceException

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### stats
Calculates min/average/max statistics based on the current and previous values.

> `public` void stats(String name, float value)

- **name**: String - a counter name of Statistics type
- **value**: float - a value to update statistics


#### timestamp
Records the given timestamp.

> `public` void timestamp(String name, ZonedDateTime value)

- **name**: String - a counter name of Timestamp type.
- **value**: ZonedDateTime - a timestamp to record.


#### timestampNow
Records the current time as a timestamp.

> `public` void timestampNow(String name)

- **name**: String - a counter name of Timestamp type.


### Examples
```java
{@code
  class MyComponent implements IReferenceable {
      CompositeCounters _counters = new CompositeCounters();
 
      public void setReferences(IReferences references) {
          this._counters.setReferences(references);
          ...
      }
  
      public void myMethod() {
          this._counters.increment("mycomponent.mymethod.calls");
          CounterTiming timing = this._counters.beginTiming("mycomponent.mymethod.exec_time");
          try {
             ...
          } finally {
              timing.endTiming();
          }
      }
  }
  }
```


### See also
- #### [ICounters](../icounters)
