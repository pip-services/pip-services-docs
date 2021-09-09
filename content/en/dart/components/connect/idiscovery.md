---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---

### Description

The IDiscovery interface is used to create discovery services which are used to store and resolve connection parameters used to connect to external services.

### Instance methods

#### register
Registers connection parameters into the discovery service.

> Future<[ConnectionParams](../connection_params)> register(String correlationId, String key, [ConnectionParams](../connection_params) connection)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - connection to be registered.
- **returns**: Future<[ConnectionParams](../connection_params)> - registered connection parameters.


#### resolveAll
Resolves all connection parameters by their key.

> Future\<List\<[ConnectionParams](../connection_params)\>\> resolveAll(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - key to uniquely identify the connections.
- **returns**: Future\<List\<[ConnectionParams](../connection_params)\>\> - list with resolved connections.


#### resolveOne
Resolves a single connection parameters by its key.

> Future<[ConnectionParams](../connection_params)> resolveOne(String correlationId, String key)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **key**: String - key to uniquely identify the connection.
- **returns**: Future<[ConnectionParams](../connection_params)> - resolved connection.
