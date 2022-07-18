---
type: docs
title: "CachedTracer"
linkTitle: "CachedTracer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

### Fields

<span class="hide-title-link">

#### _source
Source (context) name
> **_source**: String?

#### _cache
List of traces
> **_cache**: List<[OperationTrace](../operation_trace)>

#### _updated
Boolean variable that indicates whether there has been an update or not.
> **_updated**: bool

#### _lastDumpTime
Time of the last dump
> **_lastDumpTime**: int

#### _maxCacheSize
Maximum number of messages stored in this cache (default: 100)
> **_maxCacheSize** = 100

#### _interval
Interval in milliseconds to save log messages (default: 10 seconds)
> **_interval** = 10000

</span>


### Instance methods

#### beginTrace
Begins recording an operation trace.

`@override`
> [TraceTiming](../trace_timing) beginTrace(String? correlationId, String component, String operation)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **component**: String - name of a called component
- **operation**: String - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### clear
Clears (removes) all cached log messages.

> void clear()


#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### dump
Dumps (writes) the currently cached log messages.

> void dump()


#### failure
Records an operation failure with its name, duration and error.

`@override`
> void failure(String? correlationId, String component, String operation, Exception error, int duration)

- **correlationId**: String? - (optional) transaction id to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: int - execution duration in milliseconds.



#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration.

`@override`
> void trace(String? correlationId, String component, String operation, int duration)

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **duration**: int - execution duration in milliseconds.


#### update
Sets trace cache as updated
and dumps it when timeout expires.

> void update()


#### write
Writes a log message to the logger destination.

> void write(String? correlationId, String? component, String? operation, Exception? error, int duration)

- **correlationId**: String? - (optional) transaction id to trace execution through call chain.
- **component**: String? - name of the called component
- **operation**: String? - name of the executed operation.
- **error**: Exception? - an error object associated with this trace.
- **duration**: int - execution duration in milliseconds.

#### save
Saves log messages from the cache.
Throws error if not done.

> void save(List<[OperationTrace](../operation_trace)> messages, void Function(Exception? err) callback)

- **messages**: List<[OperationTrace](../operation_trace)> - a list with log messages
- **callback**: void Function(Exception? err) - callback function that receives error or null for success.


### See also
- #### [ITracer](../itracer)
- #### [OperationTrace](../operation_trace)
