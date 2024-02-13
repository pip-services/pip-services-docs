---
type: docs
title: "RedisCache"
linkTitle: "RedisCache"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-redis-dart"
description: >
    Distributed cache that stores values in Redis in-memory database.

---

**Implements:** [ICache](../../../logic/cache/icache), [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable)

### Description

The RedisCache class allows you to create distributed caches that store values in Redis in-memory database.

#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: key to retrieve parameters from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: username (currently is not used)
    - **password**: user's password
- **options**:
    - **retries**: number of retries (default: 3)
    - **timeout**: default caching timeout in milliseconds (default: 1 minute)
    - **max_size**: maximum number of values stored in this cache (default: 1000)     


#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) stores to resolve credentials

### Constructors
Creates a new instance of this cache.

> RedisCache()

### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> **_connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### _credentialResolver
Credential resolver
> **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Instance methods

#### close
Closes a component and frees used resources.

`@override`
> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.

#### open
Opens the component.

`@override`
> Future open(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### remove
Removes a value from the cache by its key.

`@override`
> Future\<dynamic\> remove(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - removed value.

#### retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or expired, it returns null.

`@override`
> Future\<dynamic\> retrieve(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - unique value key.
- **returns**: Future\<dynamic\> - retrieved cached value or *null* if nothing was found.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### store
Stores a value in the cache with an expiration time.

> Future\<dynamic\> store(IContext? context, String key, value, int timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
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
