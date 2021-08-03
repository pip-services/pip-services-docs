---
type: docs
title: "Count"
linkTitle: "Count"
no_list: true
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
   This package contains a set of interfaces and classes used to create performance counters.
    
---
---
**Important points**

- Performance counters show non-functional characteristics about how the code works, such as times called, response time, objects saved/processed. Using these numbers, it is possible to show how the code works in the system – how stable, fast, expandable it is. 
<div class="module-body"> 

<br>

### Constants

#### [CounterType](counter_type)
Types of counters that measure different types of metrics.

<br>

### Interfaces

#### [ICounters](icounters)
Interface for performance counters that measure execution metrics.

The performance counters measure how code is performing:
how fast or slow, how many transactions performed, how many objects
are stored, what was the latest transaction time and so on.

#### [ICounterTimingCallback](icounter_timing_callback)
Interface for a callback to end measurement of execution elapsed time.

<br>

### Classes

#### [CachedCounters](cached_counters)
Abstract implementation of performance counters that measures and stores counters in memory.
Child classes implement saving of the counters into various destinations.


#### [CompositeCounters](composite_counters)
Aggregates all counters from component references under a single component.

It allows to capture metrics and conveniently send them to multiple destinations. 


#### [Counter](counter)
Data object to store measurement for a performance counter.
This object is used by [CachedCounters](../cached_counters) to store counters.


#### [CounterTiming](counter_timing)
Callback object returned by [ICounters.BeginTiming](icounters/#begintiming) to end timing
of execution block and update the associated counter.

#### [DefaultCountersFactory](default_counters_factory)
Creates [ICounters](icounters) components by their descriptors.


#### [LogCounters](log_counters)
Performance counters that periodically dumps counters measurements to logger.


#### [NullCounters](null_counters)
Dummy implementation of performance counters that doesn't do anything.

It can be used in testing or in situations when a counter is required
but shall be disabled.


</div>
