---
type: docs
title: "HttpConnectionResolver"
linkTitle: "HttpConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Helper class to retrieve connections for HTTP-based services and clients.

---

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

### Constructors

#### NewHttpConnectionResolver
NewHttpConnectionResolver creates new instance NewHttpConnectionResolver

> NewHttpConnectionResolver() [*HttpConnectionResolver]()


### Fields

<span class="hide-title-link">

#### ConnectionResolver
Creates a connection resolver.
> **ConnectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver)

#### CredentialResolver
The base credential resolver.
> **CredentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

</span>


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*HttpConnectionResolver]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Register
Registers the given connection in all referenced discovery services. This method can be used for dynamic service discovery.

> (c [*HttpConnectionResolver]()) Register(context [IContext](../../../components/context/icontext)) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - returns error if not registered

#### Resolve
Resolves a single component connection. If the connections are configured to be retrieved from Discovery service,
it finds a IDiscovery and resolves the connection there.

> (c [*HttpConnectionResolver]()) Resolve(context [IContext](../../../components/context/icontext)) (connection [*ccon.ConnectionParams](../../../config/connect/connection_params), credential [*cauth.CredentialParams](../../../config/auth/credential_params), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (connection [*ccon.ConnectionParams](../../../config/connect/connection_params), credential *cauth.CredentialParams, err error) - resolved connection and credential or error.


#### ResolveAll
Resolves all component connections. If connections are configured to be retrieved from Discovery service it finds a IDiscovery and resolves the connection there.

> (c [*HttpConnectionResolver]()) ResolveAll(context [IContext](../../../components/context/icontext)) (connections [][*ccon.ConnectionParams](../../../config/connect/connection_params), credential [*cauth.CredentialParams](../../../config/auth/credential_params), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (connections [][*ccon.ConnectionParams](../../../config/connect/connection_params), credential [*cauth.CredentialParams](../../../config/auth/credential_params), err error) - resolved connections.


#### SetReferences
Sets references to dependent components.

> (c [*HttpConnectionResolver]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```go
config := cconf.NewConfigParamsFromTuples(
	"connection.host", "10.1.1.100",
	"connection.port", 8080,
)

connectionResolver = NewHttpConnectionResolver()
connectionResolver.Configure(context.Background(), config)
connectionResolver.SetReferences(context.Background(), references)

connection, err := connectionResolver.Resolve("123")
// Now use connection...
```


### See also
- #### [ConnectionParams](../../../config/connect/connection_params)
- #### [ConnectionResolver](../../../config/connect/connection_resolver)

