---
type: docs
title: "HttpConnectionResolver"
linkTitle: "HttpConnectionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
description: >
    Helper class to retrieve connections for HTTP-based services and clients.

---

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

### Constructors

#### NewHttpConnectionResolver
NewHttpConnectionResolver creates new instance NewHttpConnectionResolver

> NewHttpConnectionResolver() [*HttpConnectionResolver]()


### Fields

<span class="hide-title-link">

#### ConnectionResolver
Creates a connection resolver.
> **ConnectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### CredentialResolver
The base credential resolver.
> **CredentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*HttpConnectionResolver]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Register
Registers the given connection in all referenced discovery services. This method can be used for dynamic service discovery.

> (c [*HttpConnectionResolver]()) Register(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not registered

#### Resolve
Resolves a single component connection. If the connections are configured to be retrieved from Discovery service,
it finds a IDiscovery and resolves the connection there.

> (c [*HttpConnectionResolver]()) Resolve(correlationId string) (connection [*ccon.ConnectionParams](../../../components/connect/connection_params), credential [*cauth.CredentialParams](../../../components/auth/credential_params), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (connection [*ccon.ConnectionParams](../../../components/connect/connection_params), credential *cauth.CredentialParams, err error) - resolved connection and credential or error.


#### ResolveAll
Resolves all component connections. If connections are configured to be retrieved from Discovery service it finds a IDiscovery and resolves the connection there.

> (c [*HttpConnectionResolver]()) ResolveAll(correlationId string) (connections [][*ccon.ConnectionParams](../../../components/connect/connection_params), credential [*cauth.CredentialParams](../../../components/auth/credential_params), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (connections [][*ccon.ConnectionParams](../../../components/connect/connection_params), credential [*cauth.CredentialParams](../../../components/auth/credential_params), err error) - resolved connections.


#### SetReferences
Sets references to dependent components.

> (c [*HttpConnectionResolver]()) SetReferences(references [crefer.IReferences](../../../commons/refer/ireferences))

- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples

```go
config := cconf.NewConfigParamsFromTuples(
     "connection.host", "10.1.1.100",
     "connection.port", 8080,
);
connectionResolver = NewHttpConnectionResolver();
connectionResolver.Configure(config);
connectionResolver.SetReferences(references);
connection, err := connectionResolver.Resolve("123")
// Now use connection...
```


### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [ConnectionResolver](../../../components/connect/connection_resolver)
