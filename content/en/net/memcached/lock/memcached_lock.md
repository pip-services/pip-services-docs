---
type: docs
title: "MemcachedLock"
linkTitle: "MemcachedLock"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-memcached-dotnet"
description: >
    Distributed lock that is implemented based on Memcached's caching service.
 
---

**Extends:** [Lock](../../../components/lock/lock) 

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description
The MemcachedLock class allows you to create a lock that is implemented based on the Memcached's caching service.

Important points
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
    - **idle**: idle timeout before disconnect in milliseconds (default: 5 sec)

#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection



### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Configure
Configures a component by passing its configuration parameters.

> `public new` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id usd to trace execution through the call chain.

#### ReleaseLock
Releases a prevously acquired lock by its key.

> `public override` void ReleaseLock(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns a positive or negative result immediately.

> `public override` bool TryAcquireLock(string correlationId, string key, long ttl)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: long - lock timeout (time to live) in milliseconds.
- **returns**: bool - **true** if lock was successfull and **false** otherwise.


### Examples
```CS
var lock = new MemcachedLock();
lock.Configure(ConfigParams.FromTuples(
  "host", "localhost",
  "port", 11211));
lock.Open("123");
lock.TryAcquireLock("123", "key1", 0);
lock.ReleaseLock("123", "key1");
```
