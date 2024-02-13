---
type: docs
title: "PostgresConnection"
linkTitle: "PostgresConnection"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-postgres-gox"
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

- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it

- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: username
    - **password**: user's password

- **options**:
    - **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
    - **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
    - **max_pool_size**: (optional) maximum number of clients the pool can contain (default: 10)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
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
> **Logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### Options
The configuration options.
> **Options**: [*ConfigParams](../../../components/config/config_params)


</span>


### Methods

#### Close
Closes a component and frees the used resources.

> (c [*PostgresConnection]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil if no errors occurred.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*PostgresConnection]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets a connection to a Postgres database.

> (c [*PostgresConnection]()) GetConnection() *pgxpool.Pool

- **returns**: *pgxpool.Pool - connection to a Postgres database.


#### GetDatabaseName
Gets the database name.

> (c [*PostgresConnection]()) GetDatabaseName() string

- **returns**: string - database name

#### Open
Opens the component.

> (c [*PostgresConnection]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil if no errors occurred.

#### SetReferences
Sets references to dependent components.

> (c [*PostgresConnection]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx** context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.
