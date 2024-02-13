---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---

### Description

The IDiscovery interface is used to create discovery services which are used to store and resolve connection parameters used to connect to external services.

### Methods

#### Register
Registers connection parameters into the discovery service.

> Register(context [IContext](../../../components/context/icontext), key string, connection [*ConnectionParams](../connection_params)) (result [*ConnectionParams](../connection_params), err error)

- **context**: string[IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the connection parameters.
- **connection**: [*ConnectionParams](../connection_params) - connection to be registered.
- **returns**: (result [*ConnectionParams](../connection_params), err error) - registered connection parameters.


#### ResolveAll
Resolves all connection parameters by their key.

> ResolveAll(context [IContext](../../../components/context/icontext), key string) (result [][*ConnectionParams](../connection_params), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the connections.
- **returns**: (result [][*ConnectionParams](../connection_params), err error) - list with resolved connections.


#### ResolveOne
Resolves a single connection parameters by its key.

> ResolveOne(context [IContext](../../../components/context/icontext), key string) (result [*ConnectionParams](../connection_params), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key used to uniquely identify the connection.
- **returns**: (result [*ConnectionParams](../connection_params), err error) - resolved connection.

