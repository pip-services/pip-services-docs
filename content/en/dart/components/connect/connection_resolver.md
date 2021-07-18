---
type: docs
title: "ConnectionResolver"
linkTitle: "ConnectionResolver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

> ConnectionResolver([[ConfigParams](../../../commons/config/config_params) config, [IReferences](../../../commons/refer/ireferences) references])

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../commons/refer/ireferences) - (optional) component references


### Instance methods

#### add
Adds a new connection to component connections

> void add([ConnectionParams](../connection_params) connection)

- **connection**: [ConnectionParams](../connection_params) - new connection parameters to be added


#### configure
Configures component by passing configuration parameters.

> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getAll
Gets all connections configured in component configuration.
Redirect to Discovery services is not done at this point.
If you need fully fleshed connection use **resolve** method instead.

> List<[ConnectionParams](../connection_params)> getAll()

- **returns**: List<[ConnectionParams](../connection_params) - a list with connection parameters


#### register
Registers the given connection in all referenced discovery services.
This method can be used for dynamic service discovery.

> Future\<[ConnectionParams](../connection_params)\> register(String correlationId, [ConnectionParams](../connection_params) connection)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **connection**: Future\<[ConnectionParams](../connection_params)\> - a connection to register.
- **returns**: Future\<[ConnectionParams](../connection_params)\> - Future that receives registered connection or throws error.


#### resolve
Resolves a single component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> Future<[ConnectionParams](../connection_params)> resolve(String correlationId)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **returns**: Future<[ConnectionParams](../connection_params)> - resolved connection parameters or null if nothing was found.


#### resolveAll
Resolves all component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> Future\<List\<[ConnectionParams](../connection_params)\>\> resolveAll(String correlationId)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **returns**: Future\<List\<[ConnectionParams](../connection_params)\>\> - a list of resolved connections.


#### setReferences
Sets references to dependent components.

> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```dart
var config = ConfigParams.fromTuples(
    'connection.host', '10.1.1.100',
    'connection.port', 8080
);

var connectionResolver = new ConnectionResolver();
connectionResolver.configure(config);
connectionResolver.setReferences(references);
connection await = connectionResolver.resolve('123')
    // Now use connection...
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
