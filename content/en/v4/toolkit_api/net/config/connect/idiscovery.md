---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-config-dotnet"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---

### Description

The IDiscovery interface is used to create discovery services which are used to store and resolve connection parameters to connect to external services.

### Instance methods

#### RegisterAsync
Registers connection parameters into the discovery service.

> Task<[ConnectionParams](../connection_params)> RegisterAsync(IContext context, string key, [ConnectionParams](../connection_params) connection)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - connection to be registered.
- **returns**: Task<[ConnectionParams](../connection_params)> - registered connection parameters.


#### ResolveAllAsync
Resolves all connection parameters by their key.

> Task<List\<[ConnectionParams](../connection_params)\>> ResolveAllAsync(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the connections.
- **returns**: Task<List\<[ConnectionParams](../connection_params)\>> - list with resolved connections.


#### ResolveOneAsync
Resolves a single connection parameters by its key.

> Task<[ConnectionParams](../connection_params)> ResolveOneAsync(IContext context, string key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the connection.
- **returns**: Task<[ConnectionParams](../connection_params)> - resolved connection.
