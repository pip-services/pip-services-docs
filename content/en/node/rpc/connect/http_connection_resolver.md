---
type: docs
title: "HttpConnectionResolver"
linkTitle: "HttpConnectionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    Helper class to retrieve connections for HTTP-based services and clients.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description

The HttpConnectionResolver class is used to retrieve connections for HTTP-based services and clients.

Important points

- In addition to its regular functions, ConnectionResolver is able to parse http:// URIs and validate connection parameters before returning them.

#### Configuration parameters

- **connection**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **...** : other connection parameters
- **connections**: alternative to connection
    - **[connection params 1]**: first connection parameters
    -  **...**
    - **[connection params N]**: Nth connection parameters
    -  **...**


#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve a connection



### Fields

<span class="hide-title-link">

#### _connectionResolver
Creates a connection resolver.
> `protected` **_credentialResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) = ConnectionResolver()

#### _credentialResolver
The base credential resolver.
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) = CredentialResolver()

</span>


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### register
Registers the given connection in all referenced discovery services. This method can be used for dynamic service discovery.

> `public` register(correlationId: string): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### resolve
Resolves a single component connection. If the connections are configured to be retrieved from Discovery service,
it finds a IDiscovery and resolves the connection there.

> `public` resolve(correlationId: string): Promise<[ConfigParams](../../../commons/config/config_params)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise<[ConfigParams](../../../commons/config/config_params)> - resolved connection.


#### resolveAll
Resolves all component connections. If connections are configured to be retrieved from Discovery service it finds a IDiscovery and resolves the connection there.

> resolveAll(correlationId: string): Promise<[ConfigParams](../../../commons/config/config_params)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise<[ConfigParams](../../../commons/config/config_params)> - resolved connections.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

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
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [ConnectionResolver](../../../components/connect/connection_resolver)
