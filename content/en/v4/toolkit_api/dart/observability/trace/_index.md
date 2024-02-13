---
type: docs
title: "Trace"
linkTitle: "Trace"
no_list: true
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    This package provides interfaces and classes used to create different types of tracers.  
---
---

<div class="module-body"> 

### Interfaces

#### [ITracer](itracer)
Interface for tracer components that capture operation traces.

<br>

### Classes

#### [CachedTracer](cached_tracer)
Abstract tracer that caches recorded traces in memory and periodically dumps them.

#### [CompositeTracer](composite_tracer)
Aggregates all tracers from component references under a single component.

#### [LogTracer](log_tracer)
Tracer that dumps recorded traces to logger.

#### [NullTracer](null_tracer)
Dummy implementation of tracer that doesn't do anything.

#### [OperationTrace](operation_trace)
Data object to store captured operation traces.

#### [TraceTiming](trace_timing)
Timing object returned by [ITracer.beginTrace](itracer/#beginTrace) to end timing
of execution block and record the associated trace.


</div>

