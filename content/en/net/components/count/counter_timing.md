---
type: docs
title: "CounterTiming"
linkTitle: "CounterTiming"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Callback object returned by [ICounters.beginTiming](../icounters/#begintiming) to end the timing
    of an execution block and update the associated counter.
---

### Description

The CounterTiming class allows you to create callback objects that are returned by [ICounters.beginTiming](../icounters/#begintiming) to end the timing of execution blocks and update the associated counters.

### Constructors
Creates a new instance of the timing callback object.

> `public` constructo(counter: string = null, callback: [ICounterTimingCallback](../icounter_timing_callback) = null)

- **counter**: string - an associated counter name
- **callback**: [ICounterTimingCallback](../icounter_timing_callback) - a callback that shall be called when end_timing is called.


### Fields

<span class="hide-title-link">

#### _counters
A list containing different counters
> `protected` **_counters**: [ICounters](../icounters)[] = []

</span>


### Instance methods

#### endTiming
Ends timing of an execution block, calculates elapsed time and updates the associated counter.

> `public` endTiming(): void

### Examples

```typescript
let timing = counters.beginTiming("mymethod.exec_time");
try {
    ...
} finally {
    timing.endTiming();
}
```
