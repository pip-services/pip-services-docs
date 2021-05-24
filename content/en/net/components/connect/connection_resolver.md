---
type: docs
title: "ConnectionResolver"
linkTitle: "ConnectionResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
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
Creates a new instance of connection resolver.

> `public` ConnectionResolver([ConfigParams](../../../commons/config/config_params) config = null, [IReferences](../../../commons/refer/ireferences) references = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../commons/refer/ireferences) - (optional) component references


### Instance methods

#### Add
Adds a new connection to component connections

> `public` void Add([ConnectionParams](../connection_params) connection)

- **connection**: [ConnectionParams](../connection_params) - new connection parameters to be added


#### Configure
Configures component by passing configuration parameters.

> `public` void Configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetAll
Gets all connections configured in component configuration.
Redirect to Discovery services is not done at this point.
If you need fully fleshed connection use **Resolve** method instead.

> `public` List<[ConnectionParams](../connection_params)> GetAll()

- **returns**: List<[ConnectionParams](../connection_params)> - a list with connection parameters


#### RegisterAsync
Registers the given connection in all referenced discovery services.
This method can be used for dynamic service discovery.

> `public` Task\<void\> RegisterAsync(string correlationId, [ConnectionParams](../connection_params) connection)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **connection**: [ConnectionParams](../connection_params) - a connection to register.


#### ResolveAsync
Resolves a single component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> `public` Task<[ConnectionParams](../connection_params)> ResolveAsync(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Task<[ConnectionParams](../connection_params)> - resolved connection parameters or null if nothing was found.


#### ResolveAllAsync
Resolves all component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> `public` Task<List\<[ConnectionParams](../connection_params)\>> ResolveAllAsync(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Task<List\<[ConnectionParams](../connection_params)\>> - a list of resolved connections.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```cs
var config = ConfigParams.FromTuples(
    "connection.host", "10.1.1.100",
    "connection.port", 8080
);

var connectionResolver = new ConnectionResolver();
connectionResolver.Configure(config);
connectionResolver.SetReferences(references);
connectionResolver.ResolveAsync("123");
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
