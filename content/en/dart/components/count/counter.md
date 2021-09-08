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

**Important points**

- This object is used by [CachedCounters](../cached_counters) to store counters.

### Constructors
Creates an instance of the data object.

> Counter(String name, [CounterType](../counter_type) type)

- **name**: string - counter name.
- **type**: [CounterType](../counter_type) - counter type.


### Fields

<span class="hide-title-link">

#### last
Last recorded value
> **last**: int

#### count
Total count
> **count**: int

#### min
Minimum value
> **min**: int

#### max
Maximum value
> **max**: int

#### average
Average value
> **average**: int

#### time
Recorded timestamp
> **time**: DateTime

#### name
Counter's unique name
> **name**: String

#### type
Counter type that defines the measurement algorithm
> **type**: [CounterType](../counter_type)

</span>
