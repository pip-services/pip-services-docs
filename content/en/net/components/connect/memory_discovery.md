---
type: docs
title: "MemoryDiscovery"
linkTitle: "MemoryDiscovery"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Discovery service that keeps connections in memory.
---

**Implemenst:** [IDiscovery](../idiscovery), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The MemoryDiscovery class allows you to create discovery services that keep connections in memory.


#### Configuration parameters

- **[connection key 1]**:
- **...** : connection parameters for key 1
- **[connection key 2]**:
- **...** : connection parameters for key N


### Constructors
Creates a new instance of discovery service.

> `public` constructor(config: [ConfigParams](../../../commons/config/config_params) = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) configuration with connection parameters.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### readConnections
Reads connections from configuration parameters.
Each section represents an individual Connection params

> `public` readConnections(connections: [ConfigParams](../../../commons/config/config_params)): void

- **connections**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be read


#### register
Registers connection parameters into the discovery service.

> `public` register(correlationId: string, key: string, connection: [ConnectionParams](../connection_params)): Promise<[ConnectionParams](../connection_params)>
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - a connection to be registered.
- **returns**: Promise<[ConnectionParams](../connection_params)> - the registered connection parameters.


#### resolveAll
Resolves all connection parameters by their key.

> `public` resolveAll(correlationId: string, key: string): Promise<[ConnectionParams](../connection_params)[]>

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a key to uniquely identify the connections.
- **returns**: Promise<[ConnectionParams](../connection_params)[]> - a list with resolved connections.


#### resolveOne
Resolves a single connection parameters by its key.

> `public` resolve_one(correlationId: string, key: string): Promise<[ConnectionParams](../connection_params)>

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a key to uniquely identify the connection. 
- **returns**: Promise<[ConnectionParams](../connection_params)> - a resolved connection.

### Examples

```typescript
let config = ConfigParams.fromTuples(
    "key1.host", "10.1.1.100",
    "key1.port", "8080",
    "key2.host", "10.1.1.100",
    "key2.port", "8082"
);

let discovery = new MemoryDiscovery();
discovery.readConnections(config);

let connection = await discovery.resolve("123", "key1");
// Result: host=10.1.1.100;port=8080
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
