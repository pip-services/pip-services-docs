---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-config-python"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---

### Description

The IDiscovery interface is used to create discovery services which are used to store and resolve connection parameters used to connect to external services.

### Instance methods

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
