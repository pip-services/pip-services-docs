---
type: docs
title: "PostgresConnection"
linkTitle: "PostgresConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-aws-python"
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


#### _connection
The PostgreSQL connection pool object.
> **_connection**: Any

#### _connection_resolver
The connection resolver.
> **_connection_resolver**: [PostgresConnectionResolver](../postgres_connection_resolver)

#### _database_name
The PostgreSQL database name.
> **_database_name**: str

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _options
The configuration options.
> **_options**: [ConfigParams](../../../components/config/config_params)


</span>


### Instance methods

#### close
Closes the component and frees used resources.

> close(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### get_connection
Gets a connection to a Postgres database.

> get_connection(): Any

- **returns**: Any - connection to a Postgres database.


#### get_database_name
Gets the database name.

> get_database_name(): str

- **returns**: str - database name
