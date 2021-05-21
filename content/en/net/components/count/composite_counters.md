---
type: docs
title: "CompositeCounters"
linkTitle: "CompositeCounters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
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

> `public` constructor(references: [IReferences](../../../commons/refer/ireferences) = null)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Fields

<span class="hide-title-link">

#### _counters
A list containig the aggregated counters.
> `protected` **_counters**: [ICounters](../icounters)[] = []

</span>


### Instance methods

#### beginTiming
Begins measurement of execution time interval.
It returns [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.endTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> `public` beginTiming(name: string): [CounterTiming](../counter_timing)

- **name**: string - a counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - a callback object to end timing.


#### endTiming
Ends measurement of execution elapsed time and updates specified counter.

> `public` endTiming(name: string, elapsed: number): void

- **name**: string - a counter name
- **elapsed**: number - execution elapsed time in milliseconds to update the counter.


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
- **value**: number - last value to record.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### stats
Calculates min/average/max statistics based on the current and previous values.

> `public` stats(name: string, value: number): void

- **name**: string - a counter name of Statistics type
- **value**: number - a value to update statistics


#### timestamp
Records the given timestamp.

> `public` timestamp(name: string, value: Date)

- **name**: string - a counter name of Timestamp type.
- **value**: Date - a timestamp to record.


#### timestamp_now
Records the current time as a timestamp.

> `public` timestamp_now(name: string)

- **name**: string - a counter name of Timestamp type.


### Examples
```typescript
class MyComponent implements IReferenceable {
    private _counters: CompositeCounters = new CompositeCounters();

    public setReferences(references: IReferences): void {
        this._counters.setReferences(references);
        ...
    }

    public myMethod(): void {
        this._counters.increment("mycomponent.mymethod.calls");
        var timing = this._counters.beginTiming("mycomponent.mymethod.exec_time");
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
