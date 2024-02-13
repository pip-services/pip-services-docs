---
type: docs
title: "ConnectionResolver"
linkTitle: "ConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Helper class used to retrieve component's connections.

---

### Description

The ConnectionResolver class is used to retrieve a component's connections.

Important points

- If the connections are configured to be retrieved from [IDiscovery](../idiscovery), the connection resolver will automatically locate [IDiscovery](../idiscovery) in component references and retrieve the connections from there using the discovery_key parameter.

#### Configuration parameters

**connection**:  
- **discovery_key**: (optional) key used to retrieve the connection from [IDiscovery](../idiscovery)
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
Creates a new instance of ConnectionResolver.

> NewConnectionResolver(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params), references [refer.IReferences](../../../components/refer/ireferences)) [*ConnectionResolver]()

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../components/config/config_params) - (optional) component configuration parameters
- **references**: [refer.IReferences](../../../components/refer/ireferences) - (optional) component references

#### NewEmptyConnectionResolver
Creates a new instance of ConnectionResolver.

> NewEmptyConnectionResolver() [*ConnectionResolver]()


### Methods

#### Add
Adds a new connection to component connections.

> (c [*ConnectionResolver]()) Add(connection [*ConnectionParams](../connection_params))

- **connection**: [*ConnectionParams](../connection_params) - new connection parameters to be added


#### Configure
Configures component by passing configuration parameters.

> (c [*ConnectionResolver]()) Configure(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GetAll
Gets all connections configured in component configuration.
Redirect to Discovery services is not done at this point.
If you need fully fleshed connection use the **resolve** method instead.

> (c [*ConnectionResolver]()) GetAll() [][*ConnectionParams](../connection_params)

- **returns**: [][*ConnectionParams](../connection_params) - list with connection parameters


#### Register
Registers the given connection in all referenced discovery services.
This method can be used for dynamic service discovery.

> (c [*ConnectionResolver]()) Register(context [IContext](../../../components/context/icontext), connection [*ConnectionParams](../connection_params)) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connection**: [*ConnectionParams](../connection_params) - connection to a register.
- **returns**: error - returned error if not registered.


#### Resolve
Resolves a single component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> (c [*ConnectionResolver]()) Resolve(context [IContext](../../../components/context/icontext)) ([*ConnectionParams](../connection_params), error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: ([*ConnectionParams](../connection_params), error) - resolved connection parameters or nil if nothing was found.


#### ResolveAll
Resolves all component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> (c [*ConnectionResolver]()) ResolveAll(context [IContext](../../../components/context/icontext)) ([][*ConnectionParams](../connection_params), error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: ([][*ConnectionParams](../connection_params), error) - list of resolved connections.


#### SetReferences
Sets references to dependent components.

> (c [*ConnectionResolver]()) SetReferences(ctx context.Context, references [refer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [refer.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### Examples

```go
config = NewConfigParamsFromTuples(
	"connection.host", "10.1.1.100",
	"connection.port", 8080,
)
connectionResolver := NewConnectionResolver()
connectionResolver.Configure(context.Background(), config)
connectionResolver.SetReferences(context.Background(), references)
res, err := connectionResolver.Resolve("123")
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)

