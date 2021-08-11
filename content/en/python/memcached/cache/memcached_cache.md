---
type: docs
title: "MemcachedCache"
linkTitle: "MemcachedCache"
gitUrl: "https://github.com/pip-services3-python/pip-services3-memcached-python"
description: >
    Distributed cache that stores values in Memcached's caching service.
---

**Implements:** [ICache](../../../components/cache/icache), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable), [IOpenable](../../../commons/run/iopenable)

### Description
The MemcachedCache class allows you to create distributed cache that stores values in Memcached's caching service. 

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

#### close
Closes a component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### is_open
Checks if the component is open.

> is_open(): bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### open
Opens the component.
> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


#### remove
Removes a value from the cache by its key.

> remove(correlation_id: Optional[str], key: str): Any

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **key**: str - unique value key.
- **return**: Any - deleted value.

#### retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns None.

> retrieve(correlation_id: Optional[str], key: str): Any

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **key**: str - unique value key.
- **return**: Any - cached value or *None* if nothing was found.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.

#### store
Stores a value in the cache with an expiration time.

> store(correlation_id: Optional[str], key: str, value: Any, timeout: int): Any

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **key**: str - unique value key.
- **value**: Any - value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Any - stored value


### Examples

```python
cache = MemcachedCache()
cache.configure(ConfigParams.from_tuples(
    "connection.host", "localhost",
    "connection.port", 11211
))
        
cache.open("123")
        
cache.store("123", "key1", "ABC", 5000)
value = cache.retrieve("123", "key1", )  # Result: "ABC"

```
