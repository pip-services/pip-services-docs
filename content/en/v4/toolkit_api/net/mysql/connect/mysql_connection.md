---
type: docs
title: "MySqlConnection"
linkTitle: "MySqlConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-kafka-dotnet"
description: >
    MySQL connection using the official driver.

---

**Inherits:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description

The MySqlConnection class allows you to create a connection to a MySQL database using the official driver.

#### Configuration parameters


**connection(s)**:    
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:    
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">


#### _connection
MySQL connection pool object.
> `private` **_connection**: MySqlData.MySqlClient.MySqlConnection

#### _connectionResolver
Connection resolver.
> `private` **_connectionResolver**: [MySqlConnectionResolver](../mysql_connection_resolver)

#### _databaseName
MySQL database name.
> `private` **_databaseName**: string

#### _databaseServer
Database server name.
> `private` **_databaseServer**: string

#### _logger
Logger.
> `private` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _options
Configuration options.
> `private` **_options**: [ConfigParams](../../../components/config/config_params)

#### _sshConfigs
SSH configuration object.
> `private` **_sshConfigs**: [ConfigParams](../../../components/config/config_params)

#### _sshEnabled
Flag enabled ssh.
> `private` **_sshEnabled**: bool


</span>


### Instance methods

#### CloseAsync
Closes the component and frees used resources.

> `public` Task CloseAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### Configure
Configures the component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets the connection.
> `public` MySqlData.MySqlClient.MySqlConnection GetConnection()

- **returns**: MySqlData.MySqlClient.MySqlConnection - connection to a MySQL database


#### GetDatabaseName
Gets the database name.

> `public` string GetDatabaseName()

- **returns**: string - database name


#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
