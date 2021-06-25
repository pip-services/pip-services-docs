---
type: docs
title: "MySqlConnection"
linkTitle: "MySqlConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mysql-nodex"
description: >
    MySQL connection using the official driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description

The MySqlConnection class allows you to create a connection to a MySQL database using a plain driver.

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
- **max_pool_size**: (optional) maximum connection pool size (default
- **keep_alive**: (optional) enable connection keep alive (default
- **connect_timeout**: (optional) connection timeout in milliseconds (d
- **auto_reconnect**: (optional) enable auto reconnection (default: tr
- **max_page_size**: (optional) maximum page size (default: 100)
- **debug**: (optional) enable debug output (default: false).


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">


#### _connection
The SQLServer connection pool object.
> `private` **_connection**: MySqlData.MySqlClient.MySqlConnection

#### _connectionResolver
The connection resolver.
> `private` **_connectionResolver**: [MySqlConnectionResolver](../mysql_connection_resolver)

#### _databaseName
The SQLServer database name.
> `private` **_databaseName**: string

#### _databaseServer
The database server name.
> `private` **_databaseServer**: string

#### _logger
The logger.
> `private` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _options
The configuration options.
> `private` **_options**: [ConfigParams](../../../commons/config/config_params)

#### _sshConfigs
The SSH configuration object.
> `private` **_sshConfigs**: [ConfigParams](../../../commons/config/config_params)

#### _sshEnabled
The flag enabled ssh.
> `private` **_sshEnabled**: bool


</span>


### Instance methods

#### CloseAsync
Closes the component and frees used resources.

> `public` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures the component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets the connection.
> `public` MySqlData.MySqlClient.MySqlConnection GetConnection()

- **returns**: MySqlData.MySqlClient.MySqlConnection - connection to a MySQL database


#### GetDatabaseName
Gets the database name

> `public` string GetDatabaseName()

- **returns**: string - database name


#### IsOpen
Checks if the component is opened.

> `public` bool IsOpen()

- **returns**: bool - True if the component has been opened and False otherwise.


#### OpenAsync
Opens the component.

> `public` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
