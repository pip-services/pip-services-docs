---
type: docs
title: "CompositeCounters"
linkTitle: "CompositeCounters"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Aggregates all counters from component references into a single one.

   
---


### Description

The CompositeCounters allows you to aggregate all counters from different component references into a single one.

Important points

-  It allows to capture metrics and conveniently send them to multiple destinations. 

#### References
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../icounters) components to pass collected measurements


### Constructors

#### NewCompositeCountersFromReferences
Creates a new instance of the counters.

> NewCompositeCountersFromReferences(references refer.IReferences) [*CompositeCounters]()

- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### NewCompositeCounters
Creates a new instance of the counters.

> NewCompositeCounters() [*CompositeCounters]()


### Fields

<span class="hide-title-link">

#### counters
A list containig the aggregated counters.
> **counters**: [][ICounters](../icounters)

</span>


### Methods

#### BeginTiming
Begins measurement of execution time interval.
It returns [*Timing](../timing) object which has to be called at
[Timing.EndTiming](../timing/#endtiming) to end the measurement and update the counter.

> (c [*CompositeCounters]()) BeginTiming(name string) [*Timing](../timing)

- **name**: string - a counter name of Interval type.
- **returns**: [*Timing](../timing) - a callback object to end timing.


#### EndTiming
Ends measurement of execution elapsed time and updates specified counter.

> (c [*CompositeCounters]()) EndTiming(name string, elapsed float32)

- **name**: string - a counter name
- **elapsed**: float32 - execution elapsed time in milliseconds to update the counter.


#### Increment
Increments counter by given value.

> (c [*CompositeCounters]()) Increment(name string, value int)

- **name**: string - a counter name of Increment type.
- **value**: int - a value to add to the counter.


#### IncrementOne
Increments counter by 1.

> (c [*CompositeCounters]()) IncrementOne(name string)

- **name**: string - a counter name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> (c [*CompositeCounters]()) Last(name string, value float32)

- **name**: string - a counter name of Last type.
- **value**: float32 - last value to record.


#### SetReferences
Sets references to dependent components.

> (c [*CompositeCounters]()) SetReferences(references [refer.IReferences](../../../commons/refer/ireferences))

- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> (c [*CompositeCounters]()) Stats(name string, value float32)

- **name**: string - a counter name of Statistics type
- **value**: float32 - a value to update statistics


#### Timestamp
Records the given timestamp.

> (c [*CompositeCounters]()) Timestamp(name string, value time.Time)

- **name**: string - a counter name of Timestamp type.
- **value**: time.Time - a timestamp to record.


#### TimestampNow
Records the current time as a timestamp.

> (c [*CompositeCounters]()) TimestampNow(name string)

- **name**: string - a counter name of Timestamp type.


### Examples
```go
type MyComponent {
    _counters CompositeCounters = make(CompositeCounters)
}
func (mc * MyConponent)setReferences(references: IReferences) {
    mc._counters.SetReferences(references);
}
  
func (mc * MyConponent) myMethod() {
    mc._counters.Increment("mycomponent.mymethod.calls")
    timing := mc._counters.BeginTiming("mycomponent.mymethod.exec_time")
	 defer timing.EndTiming();
	// do something
}

var mc MyComponent{}
mc._counters = NewCompositeCounters()
```


### See also
- #### [ICounters](../icounters)
