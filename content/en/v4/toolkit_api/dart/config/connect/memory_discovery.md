---
type: docs
title: "MemoryDiscovery"
linkTitle: "MemoryDiscovery"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-config-dart"
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
Creates a new instance of the class.

> MemoryDiscovery([[ConfigParams?](../../../components/config/config_params) config])

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) configuration with connection parameters.


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### readConnections
Reads connections from configuration parameters.
Each section represents an individual Connection params

> void readConnections([ConfigParams](../../../components/config/config_params) config)

- **connections**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be read


#### register
Registers connection parameters into the discovery service.

`@override`
> Future<[ConnectionParams](../connection_params)> register(IContext? context, String key, [ConnectionParams](../connection_params) connection)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - connection to be registered.
- **returns**: [ConnectionParams](../connection_params) - registered connection parameters.


#### resolveAll
Resolves all connection parameters by their key.

`@override`
> Future\<List\<[ConnectionParams](../connection_params)\>\> resolveAll(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - key to uniquely identify the connections.
- **returns**: Future\<List\<[ConnectionParams](../connection_params)\>\> - list with resolved connections.


#### resolveOne
Resolves a single connection parameters by its key.

`@override`
> Future<[ConnectionParams?](../connection_params)> resolveOne(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - key to uniquely identify the connection. 
- **returns**: Future<[ConnectionParams?](../connection_params)> - resolved connection.

### Examples

```dart
var config = ConfigParams.fromTuples(
    'connections.key1.host', '10.1.1.100',
    'connections.key1.port', '8080',
    'connections.key2.host', '10.1.1.100',
    'connections.key2.port', '8082'
);

var discovery = new MemoryDiscovery();
discovery.configure(config);

var connection await discovery.resolveOne('123', 'key1');
// Result: host=10.1.1.100;port=8080
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
