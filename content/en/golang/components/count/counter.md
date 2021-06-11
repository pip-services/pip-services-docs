---
type: docs
title: "Counter"
linkTitle: "Counter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Data object used to store the measurements of a performance counter.
   
---

### Description

The Counter class allows you to create data objects used to store the measurements of performance counters.

Important points

- This object is used by [CachedCounters](../cached_counters) to store counters.

### Constructors

#### NewCounter
Creates a instance of the data object.

> NewCounter(name string, typ int) [*Counter]()

- **name**: string - a counter name.
- **type**: int - a counter type.


### Fields

<span class="hide-title-link">

#### Last
The last recorded value
> **Last**: float32

#### Count
The total count
> **Count**: int

#### Min
The minimum value
> **Min**: float32

#### max
The maximum value
> **Max**: float32

#### Average
The average value
> **Average**: float32

#### Time
The recorded timestamp
> **Time**: time.Time

#### Name
The counter's unique name
> **Name**: string

#### Type
The counter type that defines the measurement algorithm
> **Type**: [CounterType](../counter_type)

</span>
