---
type: docs
title: "CachedTracer"
linkTitle: "CachedTracer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-observability-java"
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

- **\*:context-info:\*:\*:1.0** - (optional) [ContextInfo](../../../components/context/context_info) to detect the context id and specify counters source

### Fields

<span class="hide-title-link">

#### _source
Source (context) name
> String **_source** = null

#### _cache
List of traces
> List<OperationTrace> **_cache** = new ArrayList<>()

#### _updated
Boolean variable that indicates whether there has been an update or not.
> boolean **_updated** = false

#### _last_dump_time
Time of the last dump
> long **_lastDumpTime** = System.currentTimeMillis()

#### _max_cache_size
Maximum number of messages stored in this cache (default: 100)
> int **_maxCacheSize** = 100

#### _interval
Interval in milliseconds to save log messages (default: 10 seconds)
> long **_interval** = 10000

</span>


### Instance methods

#### begin_trace
Begins recording an operation trace.

> [TraceTiming](../trace_timing) beginTrace([IContext](../../../components/context/icontext) context, String component, String operation)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of a called component
- **operation**: String - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### clear
Clears (removes) all cached log messages.

> void clear() 


#### configure
Configures component by passing configuration parameters.

> void configure([ConfigParams](../../../components/config/config_params) config) throws ConfigException

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### dump
Dumps (writes) the currently cached log messages.

> void dump()


#### failure
Records an operation failure with its name, duration and error.

> void failure([IContext](../../../components/context/icontext) context, String component, String operation, Exception error, long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


#### save
Saves log messages from the cache.
Throws error if not done.

> `abstract` void save(List<[OperationTrace](../operation_trace)> messages)

- **messages**: List[[OperationTrace](../operation_trace)] - a list with log messages

#### setReferences
Sets references to dependent components.

> void setReferences([IReferences](../../../components/refer/ireferences)s references) throws ReferenceException, ConfigException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration.

> void trace([IContext](../../../components/context/icontext) context, String component, String operation, Long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **duration**: Long - execution duration in milliseconds.


#### update
Sets trace cache as updated
and dumps it when timeout expires.

> void update()


#### _write
Writes a log message to the logger destination.

> void write([IContext](../../../components/context/icontext) context, String component, String operation, Exception error, long duration)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: String - name of the called component
- **operation**: String - name of the executed operation.
- **error**: Exception - an error object associated with this trace.
- **duration**: long - execution duration in milliseconds.


### See also
- #### [ITracer](../itracer)
- #### [OperationTrace](../operation_trace)
