---
type: docs
title: "CachedTracer"
linkTitle: "CachedTracer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Abstract tracer that caches recorded traces in memory and periodically dumps them.
    
---

**Implemenst:** [ITracer](../itracer), [IReconfigurable](../../../commons/config/ireconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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

### Fields

<span class="hide-title-link">

#### _source
Source (context) name
> **_source**: str

#### _cache
List of traces
> **_cache**: List[[OperationTrace](../operation_trace)]

#### _updated
Boolean variable that indicates whether there has been an update or not.
> **_updated**: bool

#### _last_dump_time
Time of the last dump
> **_last_dump_time**: float

#### _max_cache_size
Maximum number of messages stored in this cache (default: 100)
> **_max_cache_size** = 100

#### _interval
Interval in milliseconds to save log messages (default: 10 seconds)
> **_interval** = 10000

</span>


### Instance methods

#### begin_trace
Begins recording an operation trace.

> begin_trace(correlation_id: Optional[str], component: str, operation: str): [TraceTiming](../trace_timing)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **component**: str - name of a called component
- **operation**: str - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### clear
Clears (removes) all cached log messages.

> clear()


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### dump
Dumps (writes) the currently cached log messages.

> dump()


#### failure
Records an operation failure with its name, duration and error.

> failure(correlation_id: Optional[str], component: str, operation: str, error: Exception,
duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


#### _save
Saves log messages from the cache.
Throws error if not done.

> `abstractmethod` _save(messages: List[[OperationTrace](../operation_trace)])

- **messages**: List[[OperationTrace](../operation_trace)] - a list with log messages

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration.

> trace(correlation_id: Optional[str], component: str, operation: str, duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through a call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **duration**: float - execution duration in milliseconds.


#### _update
Sets trace cache as updated
and dumps it when timeout expires.

> _update()


#### _write
Writes a log message to the logger destination.

> _write(correlation_id: Optional[str], component: str, operation: str, error: Optional[Exception], duration: float)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **component**: str - name of the called component
- **operation**: str - name of the executed operation.
- **error**: Optional[Exception] - an error object associated with this trace.
- **duration**: float - execution duration in milliseconds.


### See also
- #### [ITracer](../itracer)
- #### [OperationTrace](../operation_trace)
