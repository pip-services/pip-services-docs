---
type: docs
title: "MemoryDiscovery"
linkTitle: "MemoryDiscovery"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-config-python"
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
Creates a new instance of discovery service.

> MemoryDiscovery(config: [ConfigParams](../../../commons/config/config_params) = None)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) configuration with connection parameters.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### read_connections
Reads connections from configuration parameters.
Each section represents an individual Connection params

>  read_connections(connections: [ConfigParams](../../../commons/config/config_params))

- **connections**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be read


#### register
Registers connection parameters into the discovery service.

>  register(context: Optional[IContext], key: str, connection: [ConnectionParams](../connection_params)): [ConnectionParams](../connection_params)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - a connection to be registered.
- **returns**: [ConnectionParams](../connection_params) - the registered connection parameters.


#### resolve_all
Resolves all connection parameters by their key.

>  resolve_all(context: Optional[IContext], key: str): List[[ConnectionParams](../connection_params)]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a key to uniquely identify the connections.
- **returns**: List[[ConnectionParams](../connection_params)] - a list with resolved connections.


#### resolve_one
Resolves a single connection parameters by its key.

>  resolve_one(context: Optional[IContext], key: str): [ConnectionParams](../connection_params)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a key to uniquely identify the connection. 
- **returns**: [ConnectionParams](../connection_params) - a resolved connection.

### Examples

```python
config = ConfigParams.from_tuples(
    "key1.host", "10.1.1.100",
    "key1.port", "8080",
    "key2.host", "10.1.1.100",
    "key2.port", "8082"
)

discovery = MemoryDiscovery()
discovery.configure(config)

connection = discovery.resolve_one("123", "key1")
# Result: host=10.1.1.100;port=8080
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
