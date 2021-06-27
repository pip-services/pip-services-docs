---
type: docs
title: "PostgresConnection"
linkTitle: "PostgresConnection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-postgres-dotnet"
description: >
    PostgreSQL connection using the official driver.

   
---

**Inherits:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)

### Description

The PostgresConnection class allows you to create connections to PostgreSQL databases using the official driver.

Important points

-  By defining a connection and sharing it through multiple persistence components you can reduce the number of used database connections.

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
- **\*:credential-store:\*:\*:1.0** (optional) credential stores used to resolve credentials


### Fields

<span class="hide-title-link">


#### _connection
The PostgreSQL connection pool object.
> `protected` **_connection**: NpgsqlConnection

#### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [PostgresConnectionResolver](../postgres_connection_resolver)

#### _databaseName
The PostgreSQL database name.
> `protected` **_databaseName**: string

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _options
The configuration options.
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params)


</span>


### Instance methods


#### Configure
Configures the component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### IsOpen
Checks if the component is opened.

> `public virtual` bool IsOpen()

- **returns**: bool - true if the component has been opened and false otherwise.

#### OpenAsync
Opens the component.

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### GetConnection
Gets a connection to a Postgres database.

> `public` NpgsqlConnection GetConnection()

- **returns**: NpgsqlConnection - connection to a Postgres database.


#### GetDatabaseName
Gets the database name.

> `public` string GetDatabaseName()

- **returns**: string - database name

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


