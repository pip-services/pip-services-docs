---
type: docs
title: "SqlServerConnection"
linkTitle: "SqlServerConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-sqlserver-node"
description: >
    SQLServer connection using the official driver.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description

The SqlServerConnection class allows you to create a connection to an SQLServer database using the official driver.

Important points

- By defining a connection and sharing it through multiple persistence components you can reduce number of used database connections.

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
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">


#### _connection
The SQLServer connection pool object.
> `protected` **_connection**: any

#### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [SqlServerConnectionResolver](../sqlserver_connection_resolver)

#### _databaseName
The SQLServer database name.
> `protected` **_databaseName**: string

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _options
The configuration options.
> `protected` **_options**: [ConfigParams](../../../components/config/config_params)


</span>


### Instance methods

#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### getConnection
Gets the connection to an SQLServer database.

> `public` getConnection(): any

- **returns**: any - connection to an SQLServer database.


#### getDatabaseName
Gets the name of an SQLServer database.

> `public` getDatabaseName(): string

- **returns**: string - database name.
