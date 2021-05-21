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

> `public` constructor(config: [ConfigParams](../../../commons/config/config_params) = null, references: [IReferences](../../../commons/refer/ireferences) = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../commons/refer/ireferences) - (optional) component references


### Instance methods

#### add
Adds a new connection to component connections

> `public` add(connection: [ConnectionParams](../connection_params)): void

- **connection**: [ConnectionParams](../connection_params) - new connection parameters to be added


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getAll
Gets all connections configured in component configuration.
Redirect to Discovery services is not done at this point.
If you need fully fleshed connection use **resolve** method instead.

>  getAll(): [ConnectionParams](../connection_params)[]

- **returns**: [ConnectionParams](../connection_params)[] - a list with connection parameters


#### register
Registers the given connection in all referenced discovery services.
This method can be used for dynamic service discovery.

> `public` register(correlationId: string, connection: [ConnectionParams](../connection_params)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **connection**: [ConnectionParams](../connection_params) - a connection to register.


#### resolve
Resolves a single component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> `public` resolve(correlationId: string): Promise<[ConnectionParams](../connection_params)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Promise<[ConnectionParams](../connection_params)> - resolved connection parameters or null if nothing was found.


#### resolveAll
Resolves all component connection. If connections are configured to be retrieved
from Discovery service it finds a [IDiscovery](../idiscovery) and resolves the connection there.

> `public` resolveAll(correlationId: string): Promise<[ConnectionParams](../connection_params)[]>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Promise<[ConnectionParams](../connection_params)[]> - a list of resolved connections.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### Examples

```typescript
let config = ConfigParams.fromTuples(
    "connection.host", "10.1.1.100",
    "connection.port", 8080
);
   
let connectionResolver = new ConnectionResolver();
connectionResolver.configure(config);
connectionResolver.setReferences(references);
  
let connection = await connectionResolver.resolve("123");
// Now use connection...
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
