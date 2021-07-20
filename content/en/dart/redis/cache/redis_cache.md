---
type: docs
title: "RedisCache"
linkTitle: "RedisCache"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-redis-dart"
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

### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credentialResolver
Credential resolver
> **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Instance methods

#### close
Closes a component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

`@override`
> Future open(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### remove
Removes a value from the cache by its key.

`@override`
> Future\<dynamic\> remove(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - removed value.

#### retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns null.

`@override`
> Future\<dynamic\> retrieve(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - retrieved cached value or *null* if nothing was found.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### store
Stores a value in the cache with an expiration time.

> Future\<dynamic\> store(String correlationId, String key, value, int timeout)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - unique value key.
- **value**: dynamic - value to store.
- **timeout**: int - expiration timeout in milliseconds.
- **returns**: Future\<dynamic\> - stored value.


### Examples
```dart
var cache = RedisCache();
cache.configure(ConfigParams.fromTuples([
   "host", "localhost",
   "port", 6379
]));

await cache.open("123");
   ...
await cache.store("123", "key1", "ABC");
var value = await cache.retrieve("123", "key1");
// Result: "ABC"

```
