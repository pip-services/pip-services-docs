---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---

### Description

The IDiscovery interface is used to create discovery services which are used to store and resolve connection parameters used to connect to external services.

### Methods

#### Register
Registers connection parameters into the discovery service.

> Register(correlationId string, key string, connection [*ConnectionParams](../connection_params)) (result [*ConnectionParams](../connection_params), err error)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the connection parameters.
- **connection**: [*ConnectionParams](../connection_params) - a connection to be registered.
- **returns**: (result [*ConnectionParams](../connection_params), err error) - the registered connection parameters.


#### ResolveAll
Resolves all connection parameters by their key.

> ResolveAll(correlationId string, key string) (result [][*ConnectionParams](../connection_params), err error)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the connections.
- **returns**: (result [][*ConnectionParams](../connection_params), err error) - a list with resolved connections.


#### ResolveOne
Resolves a single connection parameters by its key.

> ResolveOne(correlationId string, key string) (result [*ConnectionParams](../connection_params), err error)

- **correlationId**: string - (optional) transaction id to trace execution through a call chain.
- **key**: string - a key to uniquely identify the connection.
- **returns**: (result [*ConnectionParams](../connection_params), err error) - a resolved connection.
