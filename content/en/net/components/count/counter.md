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

Important points

- This object is used by [CachedCounters](../cached_counters) to store counters.

### Constructors
Creates a instance of the data object.

> `public` Counter(string name, [CounterType](../counter_type) type)

- **name**: string - a counter name.
- **type**: [CounterType](../counter_type) - a counter type.


Creates a instance of the data object.

> `public` Counter()


### Properties


#### Name
The counter's unique name
> `public` string Name { get; set; }

#### Type
The counter type that defines the measurement algorithm
> `public` [CounterType](../counter_type) Type { get; set; }

#### Last
The last recorded value
> `public` double Last { get; set; }

#### Min
The minimum value
> `public` double Min { get; set; }

#### Max
The maximum value
> `public` double Max { get; set; }

#### Average
The average value
> `public` double Average { get; set; }

#### Time
The recorded timestamp
> `public` DateTime Time { get; set; }



