---
type: docs
title: "HttpConnectionResolver"
linkTitle: "HttpConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-http-python"
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

#### _connection_resolver
Creates a connection resolver.
> **_connection_resolver**: [ConnectionResolver](../../../config/connect/connection_resolver) = ConnectionResolver()

#### _credential_resolver
The base credential resolver.
> **_credential_resolver**: [CredentialResolver](../../../config/auth/credential_resolver) = CredentialResolver()

</span>


### Instance methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### register
Registers the given connection in all referenced discovery services. This method can be used for dynamic service discovery.

> register(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### resolve
Resolves a single component connection. If the connections are configured to be retrieved from Discovery service,
it finds a IDiscovery and resolves the connection there.

> resolve(context: Optional[IContext]): [ConfigParams](../../../components/config/config_params)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chainn.
- **returns**: [ConfigParams](../../../components/config/config_params) - resolved connection.


#### resolve_all
Resolves all component connections. If connections are configured to be retrieved from Discovery service it finds a IDiscovery and resolves the connection there.

> resolve_all(context: Optional[IContext]): [ConfigParams](../../../components/config/config_params)

- > resolve_all(context: Optional[str]): [ConfigParams](../../../components/config/config_params).
- **returns**: [ConfigParams](../../../components/config/config_params) - resolved connections.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples

```python
config = ConfigParams.from_tuples("connection.host", "10.1.1.100","connection.port", 8080)
connectionResolver = HttpConnectionResolver()
connectionResolver.configure(config)
connectionResolver.set_references(references)
params = connectionResolver.resolve("123")
```


### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [ConnectionResolver](../../../config/connect/connection_resolver)

