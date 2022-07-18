---
type: docs
title: "CachedTracer"
linkTitle: "CachedTracer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Abstract tracer that caches recorded traces in memory and periodically dumps them.
    
---

**Inherits**: [ITracer](../itracer), [IReconfigurable](../../../commons/config/ireconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CachedTracer class allows you to create a tracer that caches the recorded traces in memory and periodically dumps them.

**Important points**

- Child classes implement saving cached traces to their specified destinations.

#### Configuration parameters

- **source**: source's (context) name
- **options**:
    - **interval**: interval in milliseconds to save log messages (default: 10 seconds)
    - **max_cache_size**: maximum number of messages stored in this cache (default: 100)        

#### References

- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../info/context_info) to detect the context id and specify counters source

### Fields

<span class="hide-title-link">

#### _source
Source's (context) name
> `protected` **_source**: string

#### _cache
List of traces
> `protected` **_cache**: IList<[OperationTrace](../operation_trace)>

#### _updated
Boolean variable that indicates whether there has been an update or not.
> `protected` **_updated**: bool

#### _lastDumpTime
Time of the last dump
> `protected` **_lastDumpTime**: long = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()

#### _maxCacheSize
Maximum number of messages stored in this cache (default: 100)
> `protected` **_maxCacheSize**: int = 100

#### _interval
Interval in milliseconds to save log messages (default: 10 seconds)
> `protected` **_interval**: long = 10000

</span>


### Instance methods

#### BeginTrace
Begins recording an operation trace.

> `public` [TraceTiming](../trace_timing) BeginTrace(string correlationId, string component, string operation)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of a called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - trace timing object.


#### Clear
Clears (removes) all cached log messages.

> `public` void Clear()


#### Configure
Configures a component by passing its configuration parameters.

> `public void` Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Dump
Dumps (writes) the currently cached log messages.

> `public` void Dump()


#### Failure
Records an operation failure with its name, duration and error.

> `public` void Failure(string correlationId, string component, string operation, Exception error,
long duration)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Exception - error object associated with this trace.
- **duration**: long - execution duration in milliseconds.



#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### Trace
Records an operation trace with its name and duration.

> `public` void Trace(string correlationId, string component, string operation, long duration)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: long - execution duration in milliseconds.


#### Update
Sets trace cache as updated
and dumps it when timeout expires.

> `protected` void Update()


#### Write
Writes a log message to the logger destination.

> `protected` void Write(string correlationId, string component, string operation, Exception error, long duration)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Exception - error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


### Abstract methods

#### Save
Saves log messages from the cache.
Throws error if not done.

> `protected abstract` void Save(IList<[OperationTrace](../operation_trace)> messages)

- **messages**: IList<[OperationTrace](../operation_trace)> - list with log messages


### See also
- #### [ITracer](../itracer)
- #### [OperationTrace](../operation_trace)
