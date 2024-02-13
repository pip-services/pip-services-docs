---
type: docs
title: "HttpConnectionResolver"
linkTitle: "HttpConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-config-dotnet"
description: >
    Helper class to retrieve connections for HTTP-based services and clients.

---

**Inherits:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

The HttpConnectionResolver class is used to retrieve connections for HTTP-based services and clients.

**Important points**                             

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
Base credential resolver.
> `protected` **_credentialResolver**: [CredentialResolver](../../auth/credential_resolver) = CredentialResolver()

</span>


### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### RegisterAsync
Registers the given connection in all referenced discovery services. This method can be used for dynamic service discovery.

> `public` Task RegisterAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### ResolveAsync
Resolves a single component connection. If the connections are configured to be retrieved from Discovery service,
it finds a IDiscovery and resolves the connection there.

> `public` Task<[ConnectionParams](../../../config/connect/connection_params)> ResolveAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Task<[ConnectionParams](../../../config/connect/connection_params)> - resolved connection.


#### ResolveAllAsync
Resolves all component connections. If the connections are configured to be retrieved from a Discovery service it finds a IDiscovery and resolves the connection there.

> `public` Task\<List\<[ConnectionParams](../../../config/connect/connection_params)\>\> ResolveAllAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Task\<List\<[ConnectionParams](../../../config/connect/connection_params)\>\> - resolved connections.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

### Examples

```cs
var config = ConfigParams.FromTuples(
    "connection.host", "10.1.1.100",
    "connection.port", 8080 );

var connectionResolver = new HttpConnectionResolver();
connectionResolver.Configure(config);
connectionResolver.SetReferences(references);

var params = connectionResolver.ResolveAsync("123");
```


### See also
- #### [ConnectionParams](../../../config/connect/connection_params)
- #### [ConnectionResolver](../../../config/connect/connection_resolver)

