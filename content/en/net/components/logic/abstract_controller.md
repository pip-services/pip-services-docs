---
type: docs
title: "AbstractController"
linkTitle: "AbstractController"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    TODO: add description
   
---

**Inherits**: [IConfigurable](../../../commons/config/iconfigurable), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

TODO: add description


### Fields

<span class="hide-title-link">

#### _dependencyResolver
TODO: add description

> `protected` _dependencyResolver: [DependencyResolver](../../../commons/refer/dependency_resolver) = new DependencyResolver()


#### _logger
TODO: add description

> `protected` _logger: [CompositeLogger](../../log/composite_logger) = new CompositeLogger()


#### _counters
TODO: add description

> `protected` _counters: [CompositeCounters](../../count/composite_counters) = new CompositeCounters()


#### _counters
TODO: add description

> `protected` _cache: [ICache](../../cache/icache) = new [NullCache](../../cache/null_cache)()

</span>


### Properties

#### Component
TODO: add description

> `public abstract` string Component { get; }



### Instance methods

#### Configure
Configures component by passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.



#### Instrument
TODO: add description

> `public virtual` [CounterTiming](../../count/counter_timing) Instrument(string correlationId, string methodName, string message="")

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **methodName**: string - TODO: add description
- **message**: string - TODO: add description


#### HandleError
TODO: add description

> `public virtual` void HandleError(string correlationId, string methodName, Exception ex)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **methodName**: string - TODO: add description
- **ex**: Exception - TODO: add description


#### SafeInvokeAsync
TODO: add description

> `public virtual` Task\<T\> SafeInvokeAsync\<T\>(string correlationId, string methodName, Func\<Task\<T\>\> invokeFunc, bool throwException=false)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **methodName**: string - TODO: add description
- **invokeFunc**: Func\<Task\<T\>\> - TODO: add description
- **throwException**: bool - TODO: add description


#### SafeInvokeAsync
TODO: add description

> `public virtual` Task\<T\> SafeInvokeAsync\<T\>(string correlationId, string methodName, Func\<Task\<T\>\> invokeFunc, Func\<Task\<T\>\> errorHandlerFunc, bool throwException=false)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **methodName**: string - TODO: add description
- **invokeFunc**: Func\<Task\<T\>\> - TODO: add description
- **errorHandlerFunc**: Func\<Task\<T\>\> - TODO: add description
- **throwException**: bool - TODO: add description


#### RetrieveFromCacheAsync
TODO: add description

> `public virtual` Task\<T\> RetrieveFromCacheAsync\<T\>(string correlationId, string cacheKey)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **cacheKey**: string - TODO: add description


#### StoreInCacheAsync
TODO: add description

> `public virtual` Task\<T\> StoreInCacheAsync\<T\>(string correlationId, string cacheKey, T result)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **cacheKey**: string - TODO: add description
- **result**: T - TODO: add description


#### RemoveFromCacheAsync
TODO: add description

> `public virtual` Task RemoveFromCacheAsync(string correlationId, string id)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **id**: string - TODO: add description


#### GetProjectionCacheKey
TODO: add description

> `public virtual` string GetProjectionCacheKey(string id)

- **id**: string - TODO: add description


#### GetCacheKey
TODO: add description

> `public virtual` string GetCacheKey(string id)

- **id**: string - TODO: add description


#### AuditCreateAsync
TODO: add description

> `public virtual` Task AuditCreateAsync\<T\>(string correlationId, string collectionName, object createdObject, Func\<Task\<T\>\> auditFunc)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **collectionName**: string - TODO: add description
- **createdObject**: object - TODO: add description
- **auditFunc**: Func\<Task\<T\>\> - TODO: add description


#### AuditUpdateAsync
TODO: add description

> `public virtual` Task AuditUpdateAsync\<T\>(string correlationId, string collectionName, object oldObject, object updatedObject, Func\<Task\<T\>\> auditFunc)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **collectionName**: string - TODO: add description
- **oldObject**: object - TODO: add description
- **updatedObject**: object - TODO: add description
- **auditFunc**: Func\<Task\<T\>\> - TODO: add description


#### AuditUpdateAsync
TODO: add description

> `public virtual` Task AuditDeleteAsync\<T\>(string correlationId, string collectionName, object deletedObject, Func\<Task\<T\>\> auditFunc)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **collectionName**: string - TODO: add description
- **deletedObject**: object - TODO: add description
- **auditFunc**: Func\<Task\<T\>\> - TODO: add description





### See also
- #### [Logger](../logger)
- #### [ILogger](../ilogger)
- #### [LogMessage](../log_message)
