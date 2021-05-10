---
type: docs
title: "Counter"
linkTitle: "Counter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Data object to store measurement for a performance counter.
   
---

### Description

The Counter class allows you to create data objects used to store the measurements of performance counters.

Important points

- This object is used by [CachedCounters](../cached_counters) to store counters.

### Constructors
Creates a instance of the data obejct

> Counter(name: str = None, tipe: [CounterType](../counter_type) = None)

- **name**: str - a counter name.
- **tipe**: [CounterType](../counter_type) - a counter type.


### Fields

<span class="hide-title-link">

#### last
The last recorded value
> **last**: Optional[float]

#### count
The total count
> **count**: Optional[int]

#### min
The minimum value
> **min**: Optional[float]

#### max
The maximum value
> **max**: Optional[float]

#### average
The average value
> **average**: Optional[float]

#### time
The recorded timestamp
> **time**: Optional[datetime.datetime]

#### name
The counter unique name
> **name**: str

#### type
The counter type that defines measurement algorithm
> **type**: [CounterType](../counter_type)

</span>
