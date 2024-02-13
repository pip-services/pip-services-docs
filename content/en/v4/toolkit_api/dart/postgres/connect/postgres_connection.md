---
type: docs
title: "PostgresConnection"
linkTitle: "PostgresConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-postgres-dart"
description: >
    PostgreSQL connection using the official driver.

   
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description

The PostgresConnection class allows you to create connections to PostgreSQL databases using the official driver.

Important points

-  By defining a connection and sharing it through multiple persistence components you can reduce the number of used database connections.

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
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores used to resolve credentials


### Fields

<span class="hide-title-link">


#### connection_
The PostgreSQL connection pool object.
> **connection_**: PostgreSQLConnection

#### _connectionResolver
The connection resolver.
> **connectionResolver_**: [PostgresConnectionResolver](../postgres_connection_resolver)

#### databaseName_
The PostgreSQL database name.
> **databaseName_**: string

#### logger_
The logger.
> **logger_**: [CompositeLogger](../../../observability/log/composite_logger)

#### options_
The configuration options.
> **options_**: [ConfigParams](../../../components/config/config_params)


</span>


### Instance methods

#### close
Closes the component and frees used resources.

> Future close(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing its configuration parameters.

> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### getConnection
Gets a connection to a Postgres database.

> PostgreSQLConnection? getConnection()

- **returns**: PostgreSQLConnection - connection to a Postgres database.


#### getDatabaseName
Gets the database name.

> String? getDatabaseName()

- **returns**: string - database name
