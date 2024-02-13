---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-config-dart"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---

### Description

The IDiscovery interface is used to create discovery services which are used to store and resolve connection parameters used to connect to external services.

### Instance methods

#### register
Registers connection parameters into the discovery service.

> Future<[ConnectionParams](../connection_params)> register(IContext? context, String key, [ConnectionParams](../connection_params) connection)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - connection to be registered.
- **returns**: Future<[ConnectionParams](../connection_params)> - registered connection parameters.


#### resolveAll
Resolves all connection parameters by their key.

> Future\<List\<[ConnectionParams](../connection_params)\>\> resolveAll(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - key to uniquely identify the connections.
- **returns**: Future\<List\<[ConnectionParams](../connection_params)\>\> - list with resolved connections.


#### resolveOne
Resolves a single connection parameters by its key.

> Future<[ConnectionParams?](../connection_params)> resolveOne(IContext? context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - key to uniquely identify the connection.
- **returns**: Future<[ConnectionParams?](../connection_params)> - resolved connection.
