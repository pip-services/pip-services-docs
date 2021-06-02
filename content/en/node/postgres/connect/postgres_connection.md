---
type: docs
title: "PostgresConnection"
linkTitle: "PostgresConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-postgres-nodex"
description: >
    PostgreSQL connection using the official driver.

   
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

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
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores used to resolve credentials


### Fields

<span class="hide-title-link">


#### _connection
The PostgreSQL connection pool object.
> `protected` **_connection**: any

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

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getConnection
Gets a connection to a Postgres database.

> `public` getConnection(): any

- **returns**: any - connection to a Postgres database.


#### getDatabaseName
Gets the database name.

> `public` getDatabaseName(): string

- **returns**: string - database name
