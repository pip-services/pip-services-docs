---
type: docs
title: "CachedTracer"
linkTitle: "CachedTracer"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Abstract tracer that caches recorded traces in memory and periodically dumps them.
    
---

**Implements:** [ITracer](../itracer), [IReconfigurable](../../../components/config/ireconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The CachedTracer class allows you to create a tracer that caches the recorded traces in memory and periodically dumps them.

Important points

- Child classes implement saving cached traces to their specified destinations.

#### Configuration parameters

- **source**: source (context) name
- **options**:
    - **interval**: interval in milliseconds to save log messages (default: 10 seconds)
    - **max_cache_size**: maximum number of messages stored in this cache (default: 100)        

#### References

- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) used to detect the context id and specify a counter's source

### Interfaces
#### ICachedTraceSaver
Abstract tracer that caches recorded traces in memory and periodically dumps them
Methods
Save 
Save method for counters.

Save(ctx context.Context, operations []OperationTrace) error

### Constructors

#### InheritCachedTracer

> InheritCachedTracer(saver ICachedTraceSaver) [*CachedTracer]()

- **saver**: ICachedTraceSaver - inherited tracer

### Fields

<span class="hide-title-link">

#### Cache
List of traces
> **Cache**: [][*OperationTrace](../operation_trace)

#### source
Source (context) name
> **source**: string

#### updated
Boolean variable that indicates whether there has been an update or not.
> **updated**: bool

#### lastDumpTime
Time of the last dump
> **lastDumpTime**: time.Time

#### maxCacheSize
Maximum number of messages stored in this cache (default: 100)
> **maxCacheSize**: int

#### interval
Interval in milliseconds to save log messages (default: 10 seconds)
> **interval**: int64

</span>


### Methods

#### BeginTrace
Begins recording an operation trace.

>(c *CachedTracer) BeginTrace(context [IContext](../../../components/context/icontext), component string, operation string) [*TraceTiming](../trace_timing)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of a called component
- **operation**: string - name of the executed operation.
- **return**: [*TraceTiming](../trace_timing) - trace timing object.


#### Clear
Clears (removes) all cached log messages.

> (c *CachedTracer) Clear(ctx context.Context)

- **ctx**: context.Context - operation context.

#### Configure
Configures component by passing configuration parameters.

> (c *CachedTracer) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Dump
Dumps (writes) the currently cached log messages.

> (c *CachedTracer) Dump(ctx context.Context)

- **ctx**: context.Context - operation context.

#### Failure
Records an operation failure with its name, duration and error.

> (c *CachedTracer) Failure(ctx context.Context, context [IContext](../../../components/context/icontext), component string, operation string, err error, duration int64)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **err**: error - error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.



#### SetReferences
Sets references to dependent components.

> (c *CachedTracer) SetReferences(ctx context.Context, references [cref.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### Trace
Records an operation trace with its name and duration.

> (c *CachedTracer) Trace(ctx context.Context, context [IContext](../../../components/context/icontext), component string, operation string, duration int64)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: int64 - execution duration in milliseconds.


#### Update
Sets trace cache as updated
and dumps it when timeout expires.

> (c *CachedTracer) update(ctx context.Context)

- **ctx**: context.Context - operation context.

#### Write
Writes a log message to the logger destination.

> (c *CachedTracer) Write(ctx context.Context, context [IContext](../../../components/context/icontext), component string, operation string, err error, duration int64)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **err**: error - error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.


#### Save
Saves log messages from the cache.
Throws error if not done.

> Save(ctx context.Context,  operations [][*OperationTrace](../operation_trace)) error

- **ctx**: context.Context - operation context.
- **operations**: [][*OperationTrace](../operation_trace) - list with log messages
- **returns**: error - save error.


### See also
- #### [ITracer](../itracer)
- #### [OperationTrace](../operation_trace)

