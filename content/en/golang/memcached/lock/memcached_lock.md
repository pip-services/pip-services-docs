---
type: docs
title: "MemcachedLock"
linkTitle: "MemcachedLock"
gitUrl: "https://github.com/pip-services3-go/pip-services3-memcached-go"
description: >
    Distributed lock that is implemented based on Memcached's caching service.
 
---

**Implements:** [Lock](../../../components/lock/lock) 

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



### Methods

#### Close
Closes a component and frees used resources.

> (c [*MemcachedLock]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil no errors occured

#### Configure
Configures a component by passing its configuration parameters.

> (c [*MemcachedLock]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### IsOpen
Checks if the component is open.

> (c [*MemcachedLock]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### open
Opens the component.

> (c [*MemcachedLock]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id usd to trace execution through the call chain.
- **returns**: error - error or nil no errors occured

#### ReleaseLock
Releases a prevously acquired lock by its key.

> (c [*MemcachedLock]()) ReleaseLock(correlationId string, key string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.
- **returns**: error - error or nil no errors occured


#### SetReferences
Sets references to dependent components.

> (c [*MemcachedLock]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### TryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> (c [*MemcachedLock]()) TryAcquireLock(correlationId string, key string, ttl int64) (result bool, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: int64 - lock timeout (time to live) in milliseconds.
- **returns**: (result bool, err error) - **true** if lock was successfull and **false** otherwise.


### Examples
```go
lock := NewMemcachedLock();
lock.Configure(cconf.NewConfigParamsFromTuples(
  "host", "localhost",
  "port", 11211,
));

err := lock.Open("123")
if err != nil {
  ...
}

result, err := lock.TryAcquireLock("123", "key1", 3000)
if result {
	// Processing...
}

err = lock.ReleaseLock("123", "key1")
// Continue...
```
