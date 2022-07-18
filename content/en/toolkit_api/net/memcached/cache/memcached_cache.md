---
type: docs
title: "MemcachedCache"
linkTitle: "MemcachedCache"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-memcached-dotnet"
description: >
    Distributed cache that stores values in Memcached's caching service.
---

**Inherits:** [AbstractCache](../../../components/cache/abstract_cache)

### Description
The MemcachedCache class allows you to create distributed cache that stores values in Memcached's caching service. 

**Important points**

- The current implementation does not support authentication.

#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **options**:
    - **max_size**: maximum number of values stored in this cache (default: 1000)        
    - **max_key_size**: maximum key length (default: 250)
    - **max_expiration**: maximum expiration duration in milliseconds (default: 2592000)
    - **max_value**: maximum value length (default: 1048576)
    - **pool_size**: pool size (default: 5)
    - **reconnect**: reconnection timeout in milliseconds (default: 10 sec)
    - **retries**: number of retries (default: 3)
    - **timeout**: default caching timeout in milliseconds (default: 1 minute)
    - **failures**: number of failures before stop retrying (default: 5)
    - **retry**: retry timeout in milliseconds (default: 30 sec)
    - **idle**: idle timeout (milliseconds) before disconnecting (default: 5 sec)


#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection


### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public override` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### IsOpen
Checks if the component is open.

> `public override` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.
> `public override` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### RemoveAsync
Removes a value from the cache by its key.

> `public override` Task RemoveAsync(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.

#### Retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or has expired, it returns null.

> `public override` Task\<T\> RetrieveAsync\<T\>(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **return**: Task\<T\> - cached value or *null* if nothing was found.

#### SetReferences
Sets references to dependent components.

> `public override` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### Store
Stores a value in the cache with an expiration time.

> `public override` async Task\<T\> StoreAsync\<T\>(string correlationId, string key, T value, long timeout)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **value**: T - value to store.
- **timeout**: long - expiration timeout in milliseconds.
- **returns**: Task\<T\> - stored value


### Examples

```cs
var cache = new MemcachedCache();
cache.configure(ConfigParams.FromTuples(
"host", "localhost",
"port", 11211 ));
cache.Open("123");

cache.Store("123", "key1", "ABC");

```
