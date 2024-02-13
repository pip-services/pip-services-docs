---
type: docs
title: "MemoryDiscovery"
linkTitle: "MemoryDiscovery"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Discovery service that keeps connections in memory.
---

**Implements:** [IDiscovery](../idiscovery), [IReconfigurable](../../../components/config/ireconfigurable)

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

> NewMemoryDiscovery(ctx context.Context, config [*config.ConfigParam](../../../components/config/config_params)) [*MemoryDiscovery]()

- **ctx**: ctx context.Context - operation context.
- **config**: [*config.ConfigParam](../../../components/config/config_params) - (optional) configuration with connection parameters.


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*MemoryDiscovery]()) Configure(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params))

- **ctx**: ctx context.Context - operation context.
- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### ReadConnections
Reads connections from configuration parameters.
Each section represents an individual Connection params.

> (c [*MemoryDiscovery]()) ReadConnections(config [*config.ConfigParams](../../../components/config/config_params))

- **connections**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be read


#### Register
Registers connection parameters into the discovery service.

> (c [*MemoryDiscovery]()) Register(context [IContext](../../../components/context/icontext), key string, connection [*ConnectionParams](../connection_params)) (result [*ConnectionParams](../connection_params), err error)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the connection parameters.
- **connection**: [*ConnectionParams](../connection_params) - connection to be registered.
- **returns**: (result [*ConnectionParams](../connection_params), err error) - the registered connection parameters.


#### ResolveAll
Resolves all connection parameters by their key.

> (c [*MemoryDiscovery]()) ResolveAll(context [IContext](../../../components/context/icontext), key string) (result [][*ConnectionParams](../connection_params), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the connections.
- **returns**: (result [][*ConnectionParams](../connection_params), err error) - list with resolved connections.


#### ResolveOne
Resolves a single connection parameters by its key.

> (c [*MemoryDiscovery]()) ResolveOne(context [IContext](../../../components/context/icontext), key string) (result [*ConnectionParams](../connection_params), err error)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key used to uniquely identify the connection. 
- **returns**: (result [*ConnectionParams](../connection_params), err error) - resolved connection.

### Examples

```go
config := NewConfigParamsFromTuples(
	"key1.host", "10.1.1.100",
	"key1.port", "8080",
	"key2.host", "10.1.1.100",
	"key2.port", "8082",
)

discovery := NewMemoryDiscovery()
discovery.ReadConnections(config)
conn, err := discovery.ResolveOne("123", "key1")

// Result: host=10.1.1.100;port=8080
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)

