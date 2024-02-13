---
type: docs
title: "Counter"
linkTitle: "Counter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
description: >
    Data object used to store the measurements of a performance counter.
   
---

### Description

The Counter class allows you to create data objects used to store the measurements of performance counters.

Important points

- This object is used by [CachedCounters](../cached_counters) to store counters.

### Constructors
Creates a instance of the data object.

> `public` public Counter(String name, int type)

- **name**: string - a counter name.
- **type**: int - a counter type.


### Fields

<span class="hide-title-link">

#### last
The last recorded value
> `private` Float **_last**

#### count
The total count
> `private` Integer **_count**

#### min
The minimum value
> `private` Float **_min**

#### max
The maximum value
> `private` **max**: number

#### average
The average value
> `private` **average**: number

#### time
The recorded timestamp
> `private` **time**: Date

#### name
The counter's unique name
> `private` **name**: string

#### type
The counter type that defines the measurement algorithm
> `public` **type**: [CounterType](../counter_type)

</span>

### Instance methods

#### getName

> `public` String getName() 

#### getType

> `public` void setName(String name) 
#### getName

> `public` int getType() 

#### setType

> `public` void setType(int type)

#### getLast

> `public` Float getLast() 

#### setLast

> `public` void setLast(Float last)

#### getCount

> `public` Integer getCount() 

#### setCount

> `public` void setCount(Integer count)

#### getMin

> `public`  Float getMin()

#### setMin

> `public` void setMin(Float min)

#### getMax

> `public`  Float getMax()

#### setMax

> `public` setMax(Float max)

#### getAverage

> `public`  Float getAverage()

#### setAverage

> `public` setAverage(Float average)

#### getTime

> `public`  ZonedDateTime getTime() 

#### setTime

> `public` setTime(ZonedDateTime time)
