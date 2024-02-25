---
type: docs
title: "IDiscovery"
linkTitle: "IDiscovery"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Interface for discovery services which are used to store and resolve connection parameters to connect to external services.
---

### Description

The IDiscovery interface is used to create discovery services which are used to store and resolve connection parameters used to connect to external services.

### Instance methods

#### register
Registers connection parameters into the discovery service.

>  void register([IContext](../../../components/context/icontext) context, String key, [ConnectionParams](../connection_params) connection) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a key to uniquely identify the connection parameters.
- **connection**: [ConnectionParams](../connection_params) - a connection to be registered.


#### resolveAll
Resolves all connection parameters by their key.

>  List<[ConnectionParams](../connection_params)> resolveAll([IContext](../../../components/context/icontext) context, String key) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: String - a key to uniquely identify the connections.
- **returns**: List<[ConnectionParams](../connection_params)> - a list with resolved connections.


#### resolveOne
Resolves a single connection parameters by its key.

>  [ConnectionParams](../connection_params) resolveOne([IContext](../../../components/context/icontext) context, String key) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **key**: string - a key to uniquely identify the connection.
- **returns**: [ConnectionParams](../connection_params) - a resolved connection.
