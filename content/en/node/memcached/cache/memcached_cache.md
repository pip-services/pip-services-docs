---
type: docs
title: "MemcachedCache"
linkTitle: "MemcachedCache"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-memcached-nodex"
description: >
    Distributed cache that stores values in Memcaches caching service.
---

**Implements:** [ICache](../../../components/cache/icache), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description

The current implementation does not support authentication.

#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
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

- **\*:discovery:\*:\*:1.0**: (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection


### Instance methods

#### close
Closes component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.


#### open
Checks if the component is opened.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### remove
Removes a value from the cache by its key.

> `public` remove(correlationId: string, key: string): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **return**: Promise\<any\> - the deleted value.

#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns null.

> `public` retrieve(correlationId: string, key: string): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **return**: Promise\<any\> - a cached value or *null* if nothing was found.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### store
Stores value in the cache with expiration time.

> `public` store(correlationId: string, key: string, value: any, timeout: number): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: number - expiration timeout in milliseconds.
- **returns**: Promise\<any\> - the stored value


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