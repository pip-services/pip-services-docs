---
type: docs
title: "Counter"
linkTitle: "Counter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Data object used to store the measurements of a performance counter.
   
---

### Description

The Counter class allows you to create data objects used to store the measurements of performance counters.

Important points

- This object is used by [CachedCounters](../cached_counters) to store counters.

### Constructors
Creates a instance of the data object.

> `public` constructor(name: string = None, type: [CounterType](../counter_type) = None)

- **name**: string - a counter name.
- **type**: [CounterType](../counter_type) - a counter type.


### Fields

<span class="hide-title-link">

#### last
The last recorded value
> `public` **last**: number

#### count
The total count
> `public` **count**: number

#### min
The minimum value
> `public` **min**: number

#### max
The maximum value
> `public` **max**: number

#### average
The average value
> `public` **average**: number

#### time
The recorded timestamp
> `public` **time**: Date

#### name
The counter's unique name
> `public` **name**: string

#### type
The counter type that defines the measurement algorithm
> `public` **type**: [CounterType](../counter_type)

</span>
