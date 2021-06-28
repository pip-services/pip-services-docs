---
type: docs
title: "HttpConnectionResolver"
linkTitle: "HttpConnectionResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Helper class to retrieve connections for HTTP-based services and clients.

---

**Inherits:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

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

#### Configure
Configures component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### RegisterAsync
Registers the given connection in all referenced discovery services. This method can be used for dynamic service discovery.

> `public` Task RegisterAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### ResolveAsync
Resolves a single component connection. If the connections are configured to be retrieved from Discovery service,
it finds a IDiscovery and resolves the connection there.

> `public` Task<[ConnectionParams](../../../components/connect/connection_params)> ResolveAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task<[ConnectionParams](../../../components/connect/connection_params)> - resolved connection.


#### ResolveAllAsync
Resolves all component connections. If connections are configured to be retrieved from Discovery service it finds a IDiscovery and resolves the connection there.

> `public` Task\<List\<[ConnectionParams](../../../components/connect/connection_params)\>\> ResolveAllAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task\<List\<[ConnectionParams](../../../components/connect/connection_params)\>\> - resolved connections.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

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
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [ConnectionResolver](../../../components/connect/connection_resolver)
