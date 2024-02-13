---
type: docs
title: "MySqlConnection"
linkTitle: "MySqlConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-mysql-dart"
description: >
    MySQL connection using the official driver.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description

The MySqlConnection class allows you to create a connection to a MySQL database using a plain driver.

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
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)

Note: the options below are currently not supported.
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">


#### _connection
The MySQL connection pool object.
> **connection_**: any

#### _connectionResolver
The connection resolver.
> **connectionResolver_**: [MySqlConnectionResolver](../mysql_connection_resolver)

#### _databaseName
The MySQL database name.
> **databaseName_**: string

#### _logger
The logger.
> **logger_**: [CompositeLogger](../../../observability/log/composite_logger)

#### _options
The configuration options.
> **options_**: [ConfigParams](../../../components/config/config_params)


</span>


### Instance methods

#### close
Closes the component and frees used resources.

> Future close(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing configuration parameters.

> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### getConnection
Gets the connection.
> mysql_driver.MySqlConnection? getConnection()

- **returns**: connection to a MySQL database


#### getDatabaseName
Gets the database name

> String? getDatabaseName()

- **returns**: string - database name


#### isOpen
Checks if the component is opened.

> bool isOpen()

- **returns**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> Future open(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

> void setReferences(IReferences references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
