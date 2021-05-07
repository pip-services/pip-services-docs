---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---


### Methods

#### register
Registers connection parameters into the discovery service.

>  register(correlation_id: Optional[str], key: str, connection: [ConnectionParams](../connection_params)): [ConnectionParams](../connection_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - a connection to be registered.
- **returns**: [ConnectionParams](../connection_params) - the registered connection parameters.


#### resolve_all
Resolves all connection parameters by their key.

>  resolve_all(correlation_id: Optional[str], key: str): List[[ConnectionParams](../connection_params)]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a key to uniquely identify the connections.
- **returns**: List[[ConnectionParams](../connection_params)] - a list with resolved connections.


#### resolve_one
Resolves a single connection parameters by its key.

>  resolve_one(correlation_id: Optional[str], key: str): [ConnectionParams](../connection_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a key to uniquely identify the connection.
- **returns**: [ConnectionParams](../connection_params) - a resolved connection.