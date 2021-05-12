---
type: docs
title: "ConnectionResolver"
linkTitle: "ConnectionResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
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

> ConnectionResolver(config: [ConfigParams](../../../commons/config/config_params) = None, references: [IReferences](../../../commons/refer/ireferences) = None)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../commons/refer/ireferences) - (optional) component references


### Instance methods

#### add
Adds a new connection to component connections

> add(connection: [ConnectionParams](../connection_params))

- **returns**: [ConnectionParams](../connection_params) - new connection parameters to be added


#### configure
Configures component by passing configuration parameters.

>  configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### get_all
Gets all connections configured in component configuration.
Redirect to Discovery services is not done at this point.
If you need fully fleshed connection use **resolve** method instead.

>  get_all(): List[[ConnectionParams](../connection_params)]

- **returns**: List[[ConnectionParams](../connection_params)] - a list with connection parameters


#### register
Registers the given connection in all referenced discovery services.
This method can be used for dynamic service discovery.

>  register(correlation_id: Optional[str], connection: [ConnectionParams](../connection_params))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **connection**: [ConnectionParams](../connection_params) - a connection to register.


#### resolve
Resolves a single component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

>  resolve(correlation_id: Optional[str]): Optional[[ConnectionParams](../connection_params)]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: Optional[[ConnectionParams](../connection_params)] - resolved connection parameters or None if nothing was found.


#### resolve_all
Resolves all component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

>  resolve_all(self, correlation_id: Optional[str]): List[[ConnectionParams](../connection_params)]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: List[[ConnectionParams](../connection_params)] - a list of resolved connections.


#### set_references
Sets references to dependent components.

>  set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```python
config = ConfigParams.from_tuples("connection.host", "10.1.1.100", "connection.port", 8080)

connectionResolver = ConnectionResolver()
connectionResolver.configure(config)
connectionResolver.set_references(references)
connectionResolver.resolve("123")
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
