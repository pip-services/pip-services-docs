---
type: docs
title: "Counter"
linkTitle: "Counter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Data object used to store the measurements of a performance counter.
   
---

### Description

The Counter class allows you to create data objects used to store the measurements of performance counters.

**Important points**

- This object is used by [CachedCounters](../cached_counters) to store counters.

### Constructors
Creates a instance of this object.

> `public` Counter(string name, [CounterType](../counter_type) type)

- **name**: string - counter's name.
- **type**: [CounterType](../counter_type) - counter's type.


Creates a instance of this object.

> `public` Counter()


### Properties


#### Name
Counter's unique name
> `public` string Name { get; set; }

#### Type
Counter's type that defines the measurement algorithm
> `public` [CounterType](../counter_type) Type { get; set; }

#### Last
Last recorded value
> `public` double Last { get; set; }

#### Min
Minimum value
> `public` double Min { get; set; }

#### Max
Maximum value
> `public` double Max { get; set; }

#### Average
Average value
> `public` double Average { get; set; }

#### Time
Recorded timestamp
> `public` DateTime Time { get; set; }



