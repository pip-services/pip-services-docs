---
type: docs
title: "RedisCache"
linkTitle: "RedisCache"
gitUrl: "https://github.com/pip-services3-python/pip-services3-redis-python"
description: >
    Distributed cache that stores values in Redis in-memory database.

---

**Implements:** [ICache](../../../components/cache/icache), [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)

### Description

The RedisCache class allows you to create distributed caches that store values in Redis in-memory database.

#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: key to retrieve parameters from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: username (currently is not used)
    - **password**: user's password
- **options**:
    - **retries**: number of retries (default: 3)
    - **timeout**: default caching timeout in milliseconds (default: 1 minute)
    - **max_size**: maximum number of values stored in this cache (default: 1000)     


#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) stores to resolve credentials

### Constructors
Creates a new instance of this cache.

> RedisCache()


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

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### remove
Removes a value from the cache by its key.

> remove(correlation_id: Optional[str], key: str): Any

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **key**: str - unique value key.
- **returns**: Any - removed value.

#### retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns null.

> retrieve(correlation_id: Optional[str], key: str): Any

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **key**: str - unique value key.
- **returns**: Any - retrieved cached value or *null* if nothing was found.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### store
Stores a value in the cache with an expiration time.

> store(correlation_id: Optional[str], key: str, value: Any, timeout: int): Promise\<any\>

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **key**: str - unique value key.
- **value**: Any - value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Any - stored value.


### Examples
```python
cache = RedisCache()
cache.configure(ConfigParams.from_tuples(
    "host", "localhost",
    "port", 6379
))

cache.open("123")
cache.store("123", "key1", "ABC", None)
value = cache.retrieve("123", "key1") # Result: "ABC"

```
