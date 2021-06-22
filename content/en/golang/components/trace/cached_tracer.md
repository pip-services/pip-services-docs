---
type: docs
title: "CachedTracer"
linkTitle: "CachedTracer"
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Abstract tracer that caches recorded traces in memory and periodically dumps them.
    
---

**Implements:** [ITracer](../itracer), [IReconfigurable](../../../commons/config/ireconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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

- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source

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

>(c *CachedTracer) BeginTrace(correlationId string, component string, operation string) [*TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of a called component
- **operation**: string - name of the executed operation.
- **return**: [*TraceTiming](../trace_timing) - a trace timing object.


#### Clear
Clears (removes) all cached log messages.

> (c *CachedTracer) Clear()


#### Configure
Configures component by passing configuration parameters.

> (c *CachedTracer) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Dump
Dumps (writes) the currently cached log messages.

> (c *CachedTracer) Dump()


#### Failure
Records an operation failure with its name, duration and error.

> (c *CachedTracer) Failure(correlationId string, component string, operation string, err error, duration int64)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **err**: error - an error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.



#### SetReferences
Sets references to dependent components.

> (c *CachedTracer) SetReferences(references [cref.IReferences](../../../commons/refer/ireferences))

- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### Trace
Records an operation trace with its name and duration.

> (c *CachedTracer) Trace(correlationId string, component string, operation string, duration int64)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: int64 - execution duration in milliseconds.


#### Update
Sets trace cache as updated
and dumps it when timeout expires.

> (c *CachedTracer) Update()


#### Write
Writes a log message to the logger destination.

> (c *CachedTracer) Write(correlationId string, component string, operation string, err error, duration int64)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **err**: error - an error object associated with this trace.
- **duration**: int64 - execution duration in milliseconds.


#### Save
Saves log messages from the cache.
Throws error if not done.

> Save(operations [][*OperationTrace](../operation_trace)) error

- **messages**: [][*OperationTrace](../operation_trace) - a list with log messages


### See also
- #### [ITracer](../itracer)
- #### [OperationTrace](../operation_trace)
