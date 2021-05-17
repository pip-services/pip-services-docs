---
type: docs
title: "CachedTracer"
linkTitle: "CachedTracer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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
> `protected` **_source**: string

#### _cache
List of traces
> `protected` **_cache**: [OperationTrace](../operation_trace)[]

#### _updated
Boolean variable that indicates whether there has been an update or not.
> `protected` **_updated**: bool

#### _lastDumpTime
Time of the last dump
> `protected` **_lastDumpTime**: number

#### _maxCacheSize
Maximum number of messages stored in this cache (default: 100)
> `protected` **_maxCacheSize** = 100

#### _interval
Interval in milliseconds to save log messages (default: 10 seconds)
> `protected` **_interval** = 10000

</span>


### Instance methods

#### beginTrace
Begins recording an operation trace.

> `public` beginTrace(correlationId: string, component: string, operation: string): [TraceTiming](../trace_timing)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of a called component
- **operation**: string - name of the executed operation.
- **return**: [TraceTiming](../trace_timing) - a trace timing object.


#### clear
Clears (removes) all cached log messages.

> `public` clear(): void


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### dump
Dumps (writes) the currently cached log messages.

> `public` dump(): void


#### failure
Records an operation failure with its name, duration and error.

> `public` failure(correlationId: string, component: string, operation: string, error: Error,
duration: number): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Error - an error object associated with this trace.
- **duration**: number - execution duration in milliseconds.



#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### trace
Records an operation trace with its name and duration.

> `public` trace(correlationId: string, component: string, operation: string, duration: number): void

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **duration**: number - execution duration in milliseconds.


#### update
Sets trace cache as updated
and dumps it when timeout expires.

> `protected` update(): void


#### write
Writes a log message to the logger destination.

> `protected` write(correlationId: string, component: string, operation: string, error: Error, duration: number): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: string - name of the called component
- **operation**: string - name of the executed operation.
- **error**: Error - an error object associated with this trace.
- **duration**: number - execution duration in milliseconds.


### Abstract methods

#### save
Saves log messages from the cache.
Throws error if not done.

> `protected abstract` save(messages: [OperationTrace](../operation_trace)[])

- **messages**: [OperationTrace](../operation_trace)[] - a list with log messages


### See also
- #### [ITracer](../itracer)
- #### [OperationTrace](../operation_trace)
