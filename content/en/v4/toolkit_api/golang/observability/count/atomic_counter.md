---
type: docs
title: "AtomicCounter"
linkTitle: "AtomicCounter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-observability-go"
description: >
    AtomicCounter data object to store measurement for a performance counter.
---

### Description

This object is used by CachedCounters to store counters.
This is analog of other atomic types in golang. It's using for sinchronization counters. 

### Constructors

> NewAtomicCounter(name string, typ CounterType) [*AtomicCounter]()

- **name**: string - a counter name.
- **typ**: [CounterType](../counter_type) - a counter type.

### Methods

#### Average
Average gets counter _average.

> (c [*AtomicCounter]()) Average() float64

- **returns**: float64 - counter average value.

#### CalculateStats
CalculateStats set up _last and calculates stats.

> (c [*AtomicCounter]()) CalculateStats(value float64)

- **value**: float64 - value float64.

#### Count
Count gets counter _count

> (c [*AtomicCounter]()) Count() int64 

- **returns**: int64 - the counter count value

#### GetCounter
GetCounter converts AtomicCounter to Counter struct.

> (c [*AtomicCounter]()) GetCounter() [Counter](../counter)

- **returns**: [Counter](../counter) - returns counter.

#### Last
Last gets counter _last

> (c [*AtomicCounter]()) Last() float64

- **returns**: float64 - last counter value.

#### Max
Max gets counter _max.

> (c *AtomicCounter) Max() float64

- **returns**: float64 - counter max value.

#### Min
Min gets counter _min.

> (c [*AtomicCounter]()) Min() float64

- **returns**: float64 - counter min value.

#### Name
Name gets counter _name

> (c [*AtomicCounter]()) Name() string

- **returns**: string - counter name.

#### SetTime
SetTime is a setter for the _time.

(c [*AtomicCounter]()) SetTime(value time.Time)

- **value**: time.Time - value time.Time.


#### SetLast
SetLast is a setter for the _last

> (c [*AtomicCounter]()) SetLast(value float64)

- **value**: float64 - float64 value.

#### Type
Type gets counter _type

> (c [*AtomicCounter]()) Type() [CounterType](../counter_type)

- **returns**: [CounterType](../counter_type) - counter type.

#### Time
Time gets counter _time.

> (c [*AtomicCounter]()) Time() time.Time

- **returns**: time.Time - counter time.

#### Inc
Inc increments _count for the provided value.

> (c [*AtomicCounter]()) Inc(value int64)

- **value**: float64 - float64 value.
