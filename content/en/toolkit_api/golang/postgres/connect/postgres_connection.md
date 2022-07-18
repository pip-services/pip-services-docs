---
type: docs
title: "PostgresConnection"
linkTitle: "PostgresConnection"
gitUrl: "https://github.com/pip-services3-go/pip-services3-postgres-go"
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

### Constructors

#### NewPostgresConnection
NewPostgresConnection creates a new instance of the connection component.

> NewPostgresConnection() [*PostgresConnection]()

### Fields

<span class="hide-title-link">


#### Connection
The PostgreSQL connection pool object.
> **Connection**: *pgxpool.Pool

#### ConnectionResolver
The connection resolver.
> **ConnectionResolver**: [*PostgresConnectionResolver](../postgres_connection_resolver)

#### DatabaseName
The PostgreSQL database name.
> **DatabaseName**: string

#### Logger
The logger.
> **Logger**: [CompositeLogger](../../../components/log/composite_logger)

#### Options
The configuration options.
> **Options**: [*ConfigParams](../../../commons/config/config_params)


</span>


### Methods

#### Close
Closes the component and frees used resources.

> (c [*PostgresConnection]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - returns error if not received.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*PostgresConnection]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets a connection to a Postgres database.

> (c [*PostgresConnection]()) GetConnection() *pgxpool.Pool

- **returns**: *pgxpool.Pool - connection to a Postgres database.


#### GetDatabaseName
Gets the database name.

> (c [*PostgresConnection]()) GetDatabaseName() string

- **returns**: string - database name
