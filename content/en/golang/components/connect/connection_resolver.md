---
type: docs
title: "ConnectionResolver"
linkTitle: "ConnectionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Helper class used to retrieve component connections.

---

### Description

The ConnectionResolver class is used to retrieve component connections.

Important points

- If the connections are configured to be retrieved from [IDiscovery](../idiscovery), the connection resolver will automatically locate [IDiscovery](../idiscovery) in component references and retrieve the connections from there using the discovery_key parameter.

#### Configuration parameters

**connection**:  
- **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../idiscovery)
- **...** : other connection parameters

**connections**:  alternative to connection
- **[connection params 1]**: first connection parameters
    - **...** :  connection parameters for key 1
- **[connection params N]**: Nth connection parameters
    - **...** : connection parameters for key N

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../idiscovery) services to resolve connections




### Constructors

#### NewConnectionResolver
Creates a new instance of connection resolver.

> NewConnectionResolver(config [*config.ConfigParams](../../../commons/config/config_params), references [refer.IReferences](../../../commons/refer/ireferences)) [*ConnectionResolver]()

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters
- **references**: [refer.IReferences](../../../commons/refer/ireferences) - (optional) component references

#### NewEmptyConnectionResolver
Creates a new instance of connection resolver.

> NewEmptyConnectionResolver() [*ConnectionResolver]()


### Methods

#### Add
Adds a new connection to component connections

> (c [*ConnectionResolver]()) Add(connection [*ConnectionParams](../connection_params))

- **connection**: [*ConnectionParams](../connection_params) - new connection parameters to be added


#### Configure
Configures component by passing configuration parameters.

> (c [*ConnectionResolver]()) Configure(config [*config.ConfigParams](../../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetAll
Gets all connections configured in component configuration.
Redirect to Discovery services is not done at this point.
If you need fully fleshed connection use **resolve** method instead.

> (c [*ConnectionResolver]()) GetAll() [][*ConnectionParams](../connection_params)

- **returns**: [][*ConnectionParams](../connection_params) - a list with connection parameters


#### Register
Registers the given connection in all referenced discovery services.
This method can be used for dynamic service discovery.

> (c [*ConnectionResolver]()) Register(correlationId string, connection [*ConnectionParams](../connection_params)) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **connection**: [*ConnectionParams](../connection_params) - a connection to register.
- **returns**: error - return error if not registered.


#### Resolve
Resolves a single component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> (c [*ConnectionResolver]()) Resolve(correlationId string) ([*ConnectionParams](../connection_params), error)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: ([*ConnectionParams](../connection_params), error) - resolved connection parameters or null if nothing was found.


#### ResolveAll
Resolves all component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> (c [*ConnectionResolver]()) ResolveAll(correlationId string) ([][*ConnectionParams](../connection_params), error)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: ([][*ConnectionParams](../connection_params), error) - a list of resolved connections.


#### SetReferences
Sets references to dependent components.

> (c [*ConnectionResolver]()) SetReferences(references [refer.IReferences](../../../commons/refer/ireferences))

- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```go
config = NewConfigParamsFromTuples(
    "connection.host", "10.1.1.100",
    "connection.port", 8080
);
connectionResolver := NewConnectionResolver();
connectionResolver.Configure(config);
connectionResolver.SetReferences(references);
  
res, err := connectionResolver.Resolve("123");
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
