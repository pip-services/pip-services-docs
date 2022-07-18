---
type: docs
title: "Trace"
linkTitle: "Trace"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    This package provides interfaces and classes used to create different types of tracers. The main tools available from this package are a tracer factory and a tracer composite class. The first allows to create a factory for tracers, and the second to combine different tracers into one. Additionally, it provides tracers that allow to store their contents in memory and logs. 
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

#### [DefaultTracerFactory](default_tracer_factory)
Creates [ITracer](itracer) components by their descriptors.

#### [LogTracer](log_tracer)
Tracer that dumps recorded traces to logger.

#### [NullTracer](null_tracer)
Dummy implementation of tracer that doesn't do anything.

#### [OperationTrace](operation_trace)
Data object to store captured operation traces.

#### [TraceTiming](trace_timing)
Timing object returned by [ITracer.begin_trace](itracer/#begin_trace) to end timing
of execution block and record the associated trace.


</div>
