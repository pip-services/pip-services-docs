---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---

### Description

The IDiscovery interface is used to create discovery services which are used to store and resolve connection parameters used to connect to external services.

### Instance methods

#### RegisterAsync
Registers connection parameters into the discovery service.

> Task<[ConnectionParams](../connection_params)> RegisterAsync(string correlationId, string key, [ConnectionParams](../connection_params) connection)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - a connection to be registered.
- **returns**: Task<[ConnectionParams](../connection_params)> - the registered connection parameters.


#### ResolveAllAsync
Resolves all connection parameters by their key.

> Task<List\<[ConnectionParams](../connection_params)\>> ResolveAllAsync(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the connections.
- **returns**: Task<List\<[ConnectionParams](../connection_params)\>> - a list with resolved connections.


#### ResolveOneAsync
Resolves a single connection parameters by its key.

> Task<[ConnectionParams](../connection_params)> ResolveOneAsync(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a key to uniquely identify the connection.
- **returns**: Task<[ConnectionParams](../connection_params)> - a resolved connection.
