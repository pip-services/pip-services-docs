---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-config-node"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---

### Description

The IDiscovery interface is used to create discovery services which are used to store and resolve connection parameters used to connect to external services.

### Instance methods

#### register
Registers connection parameters into the discovery service.

>  register(context: [IContext](../../../components/context/icontext), key: string, connection: [ConnectionParams](../connection_params)): Promise<[ConnectionParams](../connection_params)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - a connection to be registered.
- **returns**: Promise<[ConnectionParams](../connection_params)> - the registered connection parameters.


#### resolveAll
Resolves all connection parameters by their key.

>  resolveAll(context: [IContext](../../../components/context/icontext), key: string): Promise<[ConnectionParams](../connection_params)[]>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a key to uniquely identify the connections.
- **returns**: Promise<[ConnectionParams](../connection_params)[]> - a list with resolved connections.


#### resolveOne
Resolves a single connection parameters by its key.

>  resolveOne(context: [IContext](../../../components/context/icontext), key: string): Promise<[ConnectionParams](../connection_params)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a key to uniquely identify the connection.
- **returns**: Promise<[ConnectionParams](../connection_params)> - a resolved connection.
