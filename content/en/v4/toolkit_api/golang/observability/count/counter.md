---
type: docs
title: "Counter"
linkTitle: "Counter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
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

- **name**: string - counter name.
- **type**: int - counter type.


### Fields

<span class="hide-title-link">

#### Last
Last recorded value
> **Last**: float32

#### Count
Total count
> **Count**: int

#### Min
Minimum value
> **Min**: float32

#### max
Maximum value
> **Max**: float32

#### Average
Average value
> **Average**: float32

#### Time
Recorded timestamp
> **Time**: time.Time

#### Name
Counter's unique name
> **Name**: string

#### Type
Counter's type that defines the measurement algorithm
> **Type**: [CounterType](../counter_type)

</span>

