---
type: docs
title: "CompositeCounters"
linkTitle: "CompositeCounters"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Aggregates all counters from component references into a single one.

   
---

**Implements:** [ICounters](../icounters), [IReconfigurable](../../../commons/config/ireconfigurable), 
[ITimingCallback](../itiming_callback)


### Description

The CompositeCounters allows you to aggregate all counters from different component references into a single one.

**Important points**

-  It allows to capture metrics and conveniently send them to multiple destinations. 

#### References
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../icounters) components to pass collected measurements


### Constructors
Creates a new instance of the counters.

> CompositeCounters([[IReferences](../../../commons/refer/ireferences) references])

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Fields

<span class="hide-title-link">

#### _counters
A list containing the aggregated counters.
> `final` **_counters** = <[ICounters](../icounters)>[]

</span>


### Instance methods

#### beginTiming
Begins measurement of execution time interval.
It returns [Timing](../timing) object which has to be called at
[[Timing.endTiming](../timing/#endtiming) to end the measurement and update the counter.

`@override`
> [Timing](../timing) beginTiming(String name)

- **name**: String - counter name of Interval type.
- **returns**: [Timing](../timing) - callback object to end timing.


#### endTiming
Ends measurement of execution elapsed time and updates specified counter.

`@override`
> void endTiming(String name, int elapsed)

- **name**: String - counter name
- **elapsed**: int - execution elapsed time in milliseconds to update the counter.


#### increment
Increments counter by given value.

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
Usually this method is used by externally calculated  metrics.

`@override`
> void last(String name, int value)

- **name**: String - counter name of Last type.
- **value**: int - last value to record.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


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


### Examples
```dart
class MyComponent implements IReferenceable {
    var _counters = new CompositeCounters();
     void setReferences(IReferences references) {
        _counters.setReferences(references);
        ...
    }

    void myMethod() {
       _counters.increment('mycomponent.mymethod.calls');
        var timing =_counters.beginTiming('mycomponent.mymethod.exec_time');
        try {
            ...
        } finally {
            timing.endTiming();
        }
    }
}
```


### See also
- #### [ICounters](../icounters)
