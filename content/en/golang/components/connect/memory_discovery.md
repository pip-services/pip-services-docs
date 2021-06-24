---
type: docs
title: "MemoryDiscovery"
linkTitle: "MemoryDiscovery"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Discovery service that keeps connections in memory.
---

**Implements:** [IDiscovery](../idiscovery), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The MemoryDiscovery class allows you to create discovery services that keep connections in memory.


#### Configuration parameters

- **[connection key 1]**:
- **...** : connection parameters for key 1
- **[connection key 2]**:
- **...** : connection parameters for key N


### Constructors

#### NewMemoryDiscovery
Creates a new instance of discovery service.

> NewMemoryDiscovery(config [*config.ConfigParam](../../../commons/config/config_params)) [*MemoryDiscovery]()

- **config**: [*config.ConfigParam](../../../commons/config/config_params) - (optional) configuration with connection parameters.


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*MemoryDiscovery]()) Configure(config [*config.ConfigParams](../../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### ReadConnections
Reads connections from configuration parameters.
Each section represents an individual Connection params.

> (c [*MemoryDiscovery]()) ReadConnections(config [*config.ConfigParams](../../../commons/config/config_params))

- **connections**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be read


#### Register
Registers connection parameters into the discovery service.

> (c [*MemoryDiscovery]()) Register(correlationId string, key string, connection [*ConnectionParams](../connection_params)) (result [*ConnectionParams](../connection_params), err error)
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - key to uniquely identify the connection parameters.
- **connection**: [*ConnectionParams](../connection_params) - connection to be registered.
- **returns**: (result [*ConnectionParams](../connection_params), err error) - the registered connection parameters.


#### ResolveAll
Resolves all connection parameters by their key.

> (c [*MemoryDiscovery]()) ResolveAll(correlationId string, key string) (result [][*ConnectionParams](../connection_params), err error)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - key to uniquely identify the connections.
- **returns**: (result [][*ConnectionParams](../connection_params), err error) - list with resolved connections.


#### ResolveOne
Resolves a single connection parameters by its key.

> (c [*MemoryDiscovery]()) ResolveOne(correlationId string, key string) (result [*ConnectionParams](../connection_params), err error)
- **correlationId**: string - (optional) transaction id used to trace execution through a call chain.
- **key**: string - key used to uniquely identify the connection. 
- **returns**: (result [*ConnectionParams](../connection_params), err error) - resolved connection.

### Examples

```go
config := NewConfigParamsFromTuples(
    "key1.host", "10.1.1.100",
    "key1.port", "8080",
    "key2.host", "10.1.1.100",
    "key2.port", "8082"
);
  
discovery := NewMemoryDiscovery();
discovery.ReadConnections(config);
  
discovery.Resolve("123", "key1", (err, connection) => {
    // Result: host=10.1.1.100;port=8080
});
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
