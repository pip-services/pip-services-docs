---
type: docs
title: "RedisCache"
linkTitle: "RedisCache"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-redis-dotnet"
description: >
    Distributed cache that stores values in  Redis in-memory database.

---

**Inherits:** [AbstractCache](../../../components/cache/abstract_cache)

### Description

The RedisCache class allows you to create distributed caches that store values in a Redis in-memory database.

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


### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> `private` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credentialResolver
Credential resolver
> `private` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>

### Constructors
Creates a new instance of this cache.

> `public` RedisCache()

### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.


#### Open
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### RemoveAsync
Removes a value from the cache by its key.

> `public override` Task RemoveAsync(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.

#### Retrieve
Retrieves a cached value from the cache using its key.
If the value is missing in the cache or has expired, it returns null.

> `public override` Task\<T\> RetrieveAsync\<T\>(string correlationId, string key)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - unique value key.
- **returns**: Task\<T\> - retrieved cached value or *null* if nothing was found.

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### Store
Stores a value in the cache with an expiration time.

> `public override` Task\<T\> StoreAsync\<T\>(string correlationId, string key, T value, long timeout)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
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
