---
type: docs
title: "Trace"
linkTitle: "Trace"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Todo: add description
---
---

<div class="module-body"> 

### Interfaces

#### [ITracer](itracer)
Interface for tracer components that capture operation traces.

### Classes

#### [CachedTracer](cached_tracer)
Abstract tracer that caches recorded traces in memory and periodically dumps them.
Child classes implement saving cached traces to their specified destinations.

#### [CompositeTracer](composite_tracer)
Aggregates all tracers from component references under a single component.

It allows to record traces and conveniently send them to multiple destinations. 

#### [DefaultTracerFactory](default_tracer_factory)
Creates [ITracer](itracer) components by their descriptors.

#### [LogTracer](log_tracer)
Tracer that dumps recorded traces to logger.

#### [NullTracer](null_tracer)
Dummy implementation of tracer that doesn't do anything.

It can be used in testing or in situations when tracing is required
but shall be disabled.


#### [OperationTrace](operation_trace)
Data object to store captured operation traces.
This object is used by [CachedTracer](../cached_tracer).


#### [TraceTiming](trace_timing)
Timing object returned by [ITracer.begin_trace](itracer/#begin_trace) to end timing
of execution block and record the associated trace.


</div>
