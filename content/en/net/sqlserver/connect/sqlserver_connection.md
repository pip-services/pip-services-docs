---
type: docs
title: "SqlServerConnection"
linkTitle: "SqlServerConnection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-sqlserver-dotnet"
description: >
    SQLServer connection using the official driver.

---

**Inherits:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description

The SqlServerConnection class allows you to create a connection to an SQLServer database using the official driver.

Important points

- By defining a connection and sharing it through multiple persistence components you can reduce the number of used database connections.

#### Configuration parameters

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: username
- **password**: user's password

**options**:
- **max_pool_size**: (optional) maximum connection pool size (default: 2)
- **keep_alive**: (optional) enable connection keep alive (default: true)
- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5 sec)
- **auto_reconnect**: (optional) enable auto reconnection (default: true)
- **max_page_size**: (optional) maximum page size (default: 100)
- **debug**: (optional) enable debug output (default: false).


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">


#### _connection
SQLServer connection pool object.
> `protected` **_connection**: SqlConnection

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [SqlServerConnectionResolver](../sqlserver_connection_resolver)

#### _databaseName
SQLServer database name.
> `protected` **_databaseName**: string

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _options
Configuration options.
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params)


</span>


### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets the connection to an SQLServer database.

> `public` SqlConnection GetConnection()

- **returns**: SqlConnection - connection to an SQLServer database.


#### GetDatabaseName
Gets the name of an SQLServer database.

> `public` string GetDatabaseName()

- **returns**: string - database's name.
