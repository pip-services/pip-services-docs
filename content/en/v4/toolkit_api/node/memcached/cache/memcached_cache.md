---
type: docs
title: "MemcachedCache"
linkTitle: "MemcachedCache"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-memcached-node"
description: >
    Distributed cache that stores values in Memcached's caching service.
---

**Implements:** [ICache](../../../logic/cache/icache), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable), [IOpenable](../../../components/run/iopenable)

### Description
The MemcachedCache class allows you to create distributed cache that stores values in Memcached's caching service. 

Important points

- The current implementation does not support authentication.

#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
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

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection


### Instance methods

#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.


#### open
Opens the component.
> `public` open(context: string[IContext](../../../components/context/icontext)): Promise\<void\>

- **correlation**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### remove
Removes a value from the cache by its key.

> `public` remove(context: [IContext](../../../components/context/icontext), key: string): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **return**: Promise\<any\> - deleted value.

#### retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns null.

> `public` retrieve(context: [IContext](../../../components/context/icontext), key: string): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **return**: Promise\<any\> - cached value or *null* if nothing was found.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

#### store
Stores a value in the cache with an expiration time.

> `public` store(context: string, key: string, value: any, timeout: number): Promise\<any\>

- **context**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **value**: any - value to store.
- **timeout**: number - expiration timeout in milliseconds.
- **returns**: Promise\<any\> - stored value


### Examples

```typescript
let cache = new MemcachedCache();
cache.configure(ConfigParams.fromTuples(
  "host", "localhost",
  "port", 11211
));

await cache.open("123");
await cache.store("123", "key1", "ABC");
let value = await cache.store("123", "key1"); // Result: "ABC"

```
