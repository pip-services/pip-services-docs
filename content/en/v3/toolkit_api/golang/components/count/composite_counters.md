---
type: docs
title: "CompositeCounters"
linkTitle: "CompositeCounters"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
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

> NewCompositeCountersFromReferences(ctx context.Context, references refer.IReferences) [*CompositeCounters]()

- **ctx**: context.Context - operation context.
- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### NewCompositeCounters
Creates a new instance of the counters.

> NewCompositeCounters() [*CompositeCounters]()


### Fields

<span class="hide-title-link">

#### counters
List containig the aggregated counters.
> **counters**: [][ICounters](../icounters)

</span>


### Methods

#### BeginTiming
Begins measurement of execution time interval.
It returns [*CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.EndTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> (c [*CompositeCounters]()) BeginTiming(ctx context.Context, name string) [*CounterTiming](../counter_timing)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Interval type.
- **returns**: [*CounterTiming](../counter_timing) - a callback object to end timing.


#### EndTiming
Ends measurement of execution elapsed time and updates specified counter.

> (c [*CompositeCounters]()) EndTiming(ctx context.Context, name string, elapsed float32)

- **ctx**: context.Context - operation context.
- **name**: string - counter name
- **elapsed**: float32 - execution elapsed time in milliseconds to update the counter.


#### Increment
Increments counter by given value.

> (c [*CompositeCounters]()) Increment(ctx context.Context, name string, value int)

- **ctx**: context.Context - operation context.
- **name**: string - a counter name of Increment type.
- **value**: int - a value to add to the counter.


#### IncrementOne
Increments counter by 1.

> (c [*CompositeCounters]()) IncrementOne(ctx context.Context, name string)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> (c [*CompositeCounters]()) Last(ctx context.Context, name string, value float32)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Last type.
- **value**: float32 - last value to record.


#### SetReferences
Sets references to dependent components.

> (c [*CompositeCounters]()) SetReferences(ctx context.Context, references [refer.IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> (c [*CompositeCounters]()) Stats(ctx context.Context, name string, value float32)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Statistics type
- **value**: float32 - value to update statistics


#### Timestamp
Records a given timestamp.

> (c [*CompositeCounters]()) Timestamp(ctx context.Context, name string, value time.Time)

- **name**: string - counter name of Timestamp type.
- **value**: time.Time - timestamp to record.


#### TimestampNow
Records the current time as a timestamp.

> (c [*CompositeCounters]()) TimestampNow(ctx context.Context, name string)

- **ctx**: context.Context - operation context.
- **name**: string - counter name of Timestamp type.


### Examples
```go
type MyComponent {
	_counters CompositeCounters = new CompositeCounters()
}

func (mc *MyConponent) SetReferences(ctx context.Context, references refer.IReferences) {
	mc._counters.SetReferences(ctx, references)
}

func (mc * MyConponent) myMethod() {
	mc._counters.Increment(context.Background(), "mycomponent.mymethod.calls")
	timing := mc._counters.BeginTiming(context.Background(), "mycomponent.mymethod.exec_time")
	defer timing.EndTiming(context.Background())
	// do something
}

var mc MyComponent{}
mc._counters = NewCompositeCounters()
```


### See also
- #### [ICounters](../icounters)
