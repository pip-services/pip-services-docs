---
type: docs
title: "HttpConnectionResolver"
linkTitle: "HttpConnectionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    Helper class to retrieve connections for HTTP-based services and clients.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

The HttpConnectionResolver class is used to retrieve connections for HTTP-based services and clients.

Important points

- In addition to its regular functions, ConnectionResolver is able to parse http:// URIs and validate connection parameters before returning them.

#### Configuration parameters

- **connection**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **...** : other connection parameters
- **connections**: alternative to connection
    - **[connection params 1]**: first connection parameters
    -  **...**
    - **[connection params N]**: Nth connection parameters
    -  **...**


#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve a connection



### Fields

<span class="hide-title-link">

#### _connectionResolver
Creates a connection resolver.
> `protected` **_credentialResolver**: [ConnectionResolver](../connection_resolver) = ConnectionResolver()

#### _credentialResolver
The base credential resolver.
> `protected` **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver) = CredentialResolver()

</span>


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### register
Registers the given connection in all referenced discovery services. This method can be used for dynamic service discovery.

> `public` register(context: [IContext](../../../components/context/icontext)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### resolve
Resolves a single component connection. If the connections are configured to be retrieved from Discovery service,
it finds a IDiscovery and resolves the connection there.

> `public` resolve(context: [IContext](../../../components/context/icontext)): Promise<[ConfigParams](../../../components/config/config_params)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise<[ConfigParams](../../../components/config/config_params)> - resolved connection.


#### resolveAll
Resolves all component connections. If connections are configured to be retrieved from Discovery service it finds a IDiscovery and resolves the connection there.

> resolveAll(context: [IContext](../../../components/context/icontext)): Promise<[ConfigParams](../../../components/config/config_params)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise<[ConfigParams](../../../components/config/config_params)> - resolved connections.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples

```typescript
let config = ConfigParams.fromTuples(
     "connection.host", "10.1.1.100",
     "connection.port", 8080
);

let connectionResolver = new HttpConnectionResolver();

connectionResolver.configure(config);
connectionResolver.setReferences(references);

let connection = await connectionResolver.resolve("123");
// Now use connection...
```


### See also
- #### [ConnectionParams](../../../config/connect/connection_params)
- #### [ConnectionResolver](../../../config/connect/connection_resolver)
