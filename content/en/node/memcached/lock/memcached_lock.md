---
type: docs
title: "MemcachedLock"
linkTitle: "MemcachedLock"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-memcached-nodex"
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
    - **retry_timeout**: timeout in milliseconds to retry lock acquisition. (Default: 100)
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

#### close
Closes a component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id usd to trace execution through the call chain.

#### releaseLock
Releases a prevously acquired lock by its key.

> `public` releaseLock(correlationId: string, key: string): Promise\<void\> 

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to release.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### tryAcquireLock
Makes a single attempt to acquire a lock by its key.
It returns immediately a positive or negative result.

> `public` tryAcquireLock(correlationId: string, key: string, ttl: number): Promise\<boolean\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique lock key to acquire.
- **ttl**: number - lock timeout (time to live) in milliseconds.
- **returns**: Promise\<boolean\> - **true** if lock was successfull and **false** otherwise.


### Examples
```typescript
let lock = new MemcachedLock();
lock.configure(ConfigParams.fromTuples(
  "host", "localhost",
  "port", 11211
));
await lock.open("123");
await lock.acquire("123", "key1");
try {
  // Processing...
} finally {
  await lock.releaseLock("123", "key1");
}
```
