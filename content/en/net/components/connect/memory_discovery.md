---
type: docs
title: "MemoryDiscovery"
linkTitle: "MemoryDiscovery"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Discovery service that keeps connections in memory.
---

**Inherits**: [IDiscovery](../idiscovery), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The MemoryDiscovery class allows you to create discovery services that keep connections in memory.


#### Configuration parameters

- **[connection key 1]**:
- **...** : connection parameters for key 1
- **[connection key 2]**:
- **...** : connection parameters for key N


### Constructors
Creates a new instance of discovery service.

> `public` MemoryDiscovery([ConfigParams](../../../commons/config/config_params) config = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) configuration with connection parameters.


Creates a new instance of discovery service.

> `public` MemoryDiscovery()


### Instance methods

#### Configure
Configures component by passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### ReadConnections!
**TODO: this method is not realized yet for this language**

Reads connections from configuration parameters.
Each section represents an individual Connection params

> `public` void ReadConnections([ConfigParams](../../../commons/config/config_params) connections)

- **connections**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be read


#### RegisterAsync
Registers connection parameters into the discovery service.

> `public` Task\<void\> RegisterAsync(string correlationId, string key, [ConnectionParams](../connection_params) connection) 
- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - a connection to be registered.


#### ResolveAllAsync
Resolves all connection parameters by their key.

> `public` Task<List\<[ConnectionParams](../connection_params)\>> ResolveAllAsync(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a key to uniquely identify the connections.
- **returns**: Task<List\<[ConnectionParams](../connection_params)\>> - a list with resolved connections.


#### ResolveOneAsync
Resolves a single connection parameters by its key.

> `public` Task<[ConnectionParams](../connection_params)> ResolveOneAsync(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a key to uniquely identify the connection. 
- **returns**: Task<[ConnectionParams](../connection_params)> - a resolved connection.

### Examples

```cs
ConfigParams config = ConfigParams.FromTuples(
    "key1.host", "10.1.1.100",
    "key1.port", "8080",
    "key2.host", "10.1.1.100",
    "key2.port", "8082"
);

MemoryDiscovery discovery = new MemoryDiscovery();
discovery.ReadConnections(config);
discovery.Resolve("123", "key1");
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
