---
type: docs
title: "Counter"
linkTitle: "Counter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Data object used to store the measurements of a performance counter.
   
---

### Description

The Counter class allows you to create data objects used to store the measurements of performance counters.

Important points

- This object is used by [CachedCounters](../cached_counters) to store counters.

### Constructors
Creates a instance of the data object.

> Counter(String name, [CounterType](../counter_type) type)

- **name**: string - a counter name.
- **type**: [CounterType](../counter_type) - a counter type.


### Fields

<span class="hide-title-link">

#### last
The last recorded value
> **last**: int

#### count
The total count
> **count**: int

#### min
The minimum value
> **min**: int

#### max
The maximum value
> **max**: int

#### average
The average value
> **average**: int

#### time
The recorded timestamp
> **time**: DateTime

#### name
The counter's unique name
> **name**: String

#### type
The counter type that defines the measurement algorithm
> **type**: [CounterType](../counter_type)

</span>
