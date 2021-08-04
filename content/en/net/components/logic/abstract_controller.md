---
type: docs
title: "AbstractController"
linkTitle: "AbstractController"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Abstract logger that caches captured log messages in memory and periodically dumps them.
   
---

**Inherits**: [IConfigurable](../../../commons/config/iconfigurable), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The AbstractController class allows you to create an abstract logger that caches captured log messages in memory and periodically dumps them. Child classes implement saving cached messages to their specified destinations.


### Fields

<span class="hide-title-link">

#### _dependencyResolver
Dependency resolver

> `protected` _dependencyResolver: [DependencyResolver](../../../commons/refer/dependency_resolver) = new DependencyResolver()


#### _logger
Logger

> `protected` _logger: [CompositeLogger](../../log/composite_logger) = new CompositeLogger()


#### _counters
TODO: add description

> `protected` _counters: [CompositeCounters](../../count/composite_counters) = new CompositeCounters()


#### _counters
Counters

> `protected` _cache: [ICache](../../cache/icache) = new [NullCache](../../cache/null_cache)()

</span>


### Properties

#### Component
Component

> `public abstract` string Component { get; }



### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



#### Instrument
Starts timing.

> `public virtual` [CounterTiming](../../count/counter_timing) Instrument(string correlationId, string methodName, string message="")

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **methodName**: string - name of the method
- **message**: string - message

#### HandleError
Logs an error.

> `public virtual` void HandleError(string correlationId, string methodName, Exception ex)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **methodName**: string - name of the method
- **ex**: Exception - exception


#### SafeInvokeAsync
Invokes a function.

> `public virtual` Task\<T\> SafeInvokeAsync\<T\>(string correlationId, string methodName, Func\<Task\<T\>\> invokeFunc, bool throwException=false)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **methodName**: string - name of the method
- **invokeFunc**: Func\<Task\<T\>\> - invoked function
- **throwException**: bool - true if can throw an exception and false otherwise


#### SafeInvokeAsync
Invokes a function and handles the error if it fails.

> `public virtual` Task\<T\> SafeInvokeAsync\<T\>(string correlationId, string methodName, Func\<Task\<T\>\> invokeFunc, Func\<Task\<T\>\> errorHandlerFunc, bool throwException=false)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **methodName**: string - name of the method
- **invokeFunc**: Func\<Task\<T\>\> - invoked function
- **errorHandlerFunc**: Func\<Task\<T\>\> - error handling function
- **throwException**: bool - true if can throw an exception and false otherwise



#### RetrieveFromCacheAsync
Retrieves from cache based on the cache key.

> `public virtual` Task\<T\> RetrieveFromCacheAsync\<T\>(string correlationId, string cacheKey)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **cacheKey**: string - cache key


#### StoreInCacheAsync
Stores in cache using the cache key.

> `public virtual` Task\<T\> StoreInCacheAsync\<T\>(string correlationId, string cacheKey, T result)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **cacheKey**: string - cache key
- **result**: T -  Cached value or null if the value is not stored.


#### RemoveFromCacheAsync
Removes from cache.

> `public virtual` Task RemoveFromCacheAsync(string correlationId, string id)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: string - id


#### GetProjectionCacheKey
Gets the projection

> `public virtual` string GetProjectionCacheKey(string id)

- **id**: string - id


#### GetCacheKey
Returns the component's id.

> `public virtual` string GetCacheKey(string id)

- **id**: string - id 

#### AuditCreateAsync
Checks if an object is created.

> `public virtual` Task AuditCreateAsync\<T\>(string correlationId, string collectionName, object createdObject, Func\<Task\<T\>\> auditFunc)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **collectionName**: string - name of the collection
- **createdObject**: object - created object
- **auditFunc**: Func\<Task\<T\>\> - audit function


#### AuditUpdateAsync
Audits the update of an object.

> `public virtual` Task AuditUpdateAsync\<T\>(string correlationId, string collectionName, object oldObject, object updatedObject, Func\<Task\<T\>\> auditFunc)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **collectionName**: name of the collection
- **oldObject**: object - old object
- **updatedObject**: object - updated object
- **auditFunc**: Func\<Task\<T\>\> - audit function


#### AuditDeleteAsync
Audits the delete of an object.

> `public virtual` Task AuditDeleteAsync\<T\>(string correlationId, string collectionName, object deletedObject, Func\<Task\<T\>\> auditFunc)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **collectionName**: string - name of the collection
- **deletedObject**: object - deleted object
- **auditFunc**: Func\<Task\<T\>\> - audit function





### See also
- #### [Logger](../logger)
- #### [ILogger](../ilogger)
- #### [LogMessage](../log_message)
