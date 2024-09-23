---
type: docs
title: "MemoryDiscovery"
linkTitle: "MemoryDiscovery"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
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
Creates a new instance of discovery service.

> `public` constructor(config: [ConfigParams](../../../components/config/config_params) = null)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) configuration with connection parameters.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` MemoryDiscovery([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### readConnections
Reads connections from configuration parameters.
Each section represents an individual Connection params

> `public` void readConnections([ConfigParams](../../../components/config/config_params) config)

- **connections**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be read


#### register
Registers connection parameters into the discovery service.

> `public` void register([IContext](../../../components/context/icontext) context, String key, [ConnectionParams](../connection_params) connection)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - a connection to be registered.


#### resolveAll
Resolves all connection parameters by their key.

> `public` List<[ConnectionParams](../connection_params)> resolveAll([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a key to uniquely identify the connections.
- **returns**: List<[ConnectionParams](../connection_params)> - a list with resolved connections.


#### resolveOne
Resolves a single connection parameters by its key.

> `public` [ConnectionParams](../connection_params) resolveOne([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a key to uniquely identify the connection. 
- **returns**: [ConnectionParams](../connection_params) - a resolved connection.

### Examples

```java
{
  ConfigParams config = ConfigParams.fromTuples(
       "key1.host", "10.1.1.100",
       "key1.port", "8080",
       "key2.host", "10.1.1.100",
       "key2.port", "8082"
  );
 
  MemoryDiscovery discovery = new MemoryDiscovery();
  discovery.readConnections(config);
 
  discovery.resolve("123", "key1");
  }
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
