---
type: docs
title: "MemoryDiscovery"
linkTitle: "MemoryDiscovery"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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
Creates a new instance of the class.

> MemoryDiscovery([[ConfigParams](../../../commons/config/config_params) config])

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) configuration with connection parameters.


### Instance methods

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### readConnections
Reads connections from configuration parameters.
Each section represents an individual Connection params

> void readConnections([ConfigParams](../../../commons/config/config_params) config)

- **connections**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be read


#### register
Registers connection parameters into the discovery service.

`@override`
> Future<[ConnectionParams](../connection_params)> register(String correlationId, String key, [ConnectionParams](../connection_params) connection)
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - connection to be registered.
- **returns**: [ConnectionParams](../connection_params) - registered connection parameters.


#### resolveAll
Resolves all connection parameters by their key.

`@override`
> Future\<List\<[ConnectionParams](../connection_params)\>\> resolveAll(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.
- **key**: String - key to uniquely identify the connections.
- **returns**: Future\<List\<[ConnectionParams](../connection_params)\>\> - list with resolved connections.


#### resolveOne
Resolves a single connection parameters by its key.

`@override`
> Future<[ConnectionParams](../connection_params)> resolveOne(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through a call chain.
- **key**: String - key to uniquely identify the connection. 
- **returns**: Future<[ConnectionParams](../connection_params)> - resolved connection.

### Examples

```dart
var config = ConfigParams.fromTuples(
    'key1.host', '10.1.1.100',
    'key1.port', '8080',
    'key2.host', '10.1.1.100',
    'key2.port', '8082'
);

var discovery = new MemoryDiscovery();
discovery.readConnections(config);
var connection await discovery.resolve('123', 'key1');
    // Result: host=10.1.1.100;port=8080
```

### See also
- #### [IDiscovery](../idiscovery)
- #### [ConnectionParams](../connection_params)
