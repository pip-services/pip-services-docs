---
type: docs
title: "RedisCache"
linkTitle: "RedisCache"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-redis-nodex"
description: >
    Distributed cache that stores values in Redis in-memory database.

---

**Implements:** [ICache](../../../components/cache/icache), [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)

### Description

TODO: add description

#### Configuration parameters

- **connection(s)**:           
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: key to retrieve parameters from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: user name (currently is not used)
    - **password**: user password
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
The connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credentialResolver
The credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>

### Constructors
Creates a new instance of this cache.

> `public` constructor()

### Instance methods

#### close
Configures components by passing configuration parameters.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### configure
Configures components by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### remove
Removes a value from the cache by its key.

> `public` remove(correlationId: string, key: string): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: Promise\<any\> - the removed value.

#### retrieve
Retrieves cached value from the cache using its key.
If value is missing in the cache or expired it returns null.

> `public` retrieve(correlationId: string, key: string): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **returns**: Promise\<any\> - a retrieve cached value or *null* if nothing was found.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### store
Stores value in the cache with expiration time.

> `public` store(correlationId: string, key: string, value: any, timeout: number): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a unique value key.
- **value**: any - a value to store.
- **timeout**: number - expiration timeout in milliseconds.
- **returns**: Promise\<any\> - the stored value.


### Examples
```typescript
let cache = new RedisCache();
cache.configure(ConfigParams.fromTuples(
  "host", "localhost",
  "port", 6379
));

await cache.open("123");
await cache.store("123", "key1", "ABC");
let value = await cache.store("123", "key1"); // Result: "ABC"

```