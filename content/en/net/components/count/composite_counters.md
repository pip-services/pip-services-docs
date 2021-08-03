---
type: docs
title: "CompositeCounters"
linkTitle: "CompositeCounters"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Aggregates all counters from component references into a single one.

   
---

**Inherits**: [ICounters](../icounters), [IReconfigurable](../../../commons/config/ireconfigurable), 
[ICounterTimingCallback](../icounter_timing_callback)


### Description

The CompositeCounters allows you to aggregate all counters from different component references into a single one.

**Important points**

-  It allows to capture metrics and conveniently send them to multiple destinations. 

#### References
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../icounters) components to pass collected measurements


### Constructors
Creates a new instance of the counters.

> `public` CompositeCounters([IReferences](../../../commons/refer/ireferences) references = null)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Fields

<span class="hide-title-link">

#### _counters
A list containig the aggregated counters.
> `protected` **_counters**: List<[ICounters](../icounters)>

</span>


### Instance methods

#### BeginTiming
Begins measurement of execution time interval.
It returns a [CounterTiming](../counter_timing) object which has to be called at
[CounterTiming.EndTiming](../counter_timing/#endtiming) to end the measurement and update the counter.

> `public` [CounterTiming](../counter_timing) BeginTiming(string name)

- **name**: string - counter name of Interval type.
- **returns**: [CounterTiming](../counter_timing) - callback object to end timing.


#### EndTiming
Ends measurement of execution elapsed time and updates the specified counter.

> `public` void EndTiming(string name, double elapsed)

- **name**: string - counter's name
- **elapsed**: double - execution elapsed time in milliseconds to update the counter.


#### increment
Increments a counter by given value.

> `public` int Increment(string name, int value)

- **name**: string - counter's name of Increment type.
- **value**: int - value to add to the counter.


#### IncrementOne
Increments counter by 1.

> `public` void IncrementOne(string name)

- **name**: string - counter's name of Increment type.


#### Last
Records the last calculated measurement value.
Usually this method is used by metrics calculated externally.

> `public` void Last(string name, float value)

- **name**: string - counter's name of Last type.
- **value**: float - last value to record.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### Stats
Calculates min/average/max statistics based on the current and previous values.

> `public` void Stats(string name, float value)

- **name**: string - counter's name of Statistics type
- **value**: float - value to update statistics


#### timestamp
Records the given timestamp.

> `public` void Timestamp(string name, DateTime value)

- **name**: string - counter's name of Timestamp type.
- **value**: DateTime - timestamp to record.


#### TimestampNow
Records the current time as a timestamp.

> `public` TimestampNow(string name)

- **name**: string - counter's name of Timestamp type.


### Examples
```cs
class MyComponent: IReferenceable 
{
    CompositeCounters _counters = new CompositeCounters();
    public void SetReferences(IReferences references)
    {
        this._counters.SetReferences(references);
        ...
    }
    public void MyMethod()
    {
        this._counters.Increment("mycomponent.mymethod.calls");
        var timing = this._counters.BeginTiming("mycomponent.mymethod.exec_time");
        try
        {
            ...
        }
        finally
        {
            timing.EndTiming();
        }
    }
}
```


### See also
- #### [ICounters](../icounters)
