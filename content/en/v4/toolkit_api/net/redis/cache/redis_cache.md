---
type: docs
title: "RedisCache"
linkTitle: "RedisCache"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-redis-dotnet"
description: >
    Distributed cache that stores values in  Redis in-memory database.

---

**Inherits:** [AbstractCache](../../../logic/cache/abstract_cache)

### Description

The RedisCache class allows you to create distributed caches that store values in a Redis in-memory database.

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

> `public` RedisCache()

### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> `private` **_connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### _credentialResolver
Credential resolver
> `private` **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> `public` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### RemoveAsync
Removes a value from the cache by its key.

> `public override` Task RemoveAsync(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.

#### Retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or has expired, it returns null.

> `public override` Task\<T\> RetrieveAsync\<T\>(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **returns**: Task\<T\> - retrieved cached value or *null* if nothing was found.

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### Store
Stores a value in the cache with an expiration time.

> `public override` Task\<T\> StoreAsync\<T\>(IContext context, string key, T value, long timeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - unique value key.
- **value**: T - value to store.
- **timeout**: long - expiration timeout in milliseconds.
- **returns**: Task\<T\> - stored value.


### Examples
```cs
var cache = new RedisCache();
cache.configure(ConfigParams.FromTuples(
    "host", "localhost",
    "port", 6379));
cache.open("123");

cache.StoreAsync("123", "key1", "ABC");

```
