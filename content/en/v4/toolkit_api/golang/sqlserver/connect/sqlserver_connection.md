---
type: docs
title: "SqlServerConnection"
linkTitle: "SqlServerConnection"
gitUrl: "github.com/pip-services4/pip-services4-go/tree/main/pip-services4-sqlserver-go"
description: >
    SqlServer connection using the default driver.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description
The SqlServerConnection class allows you to create SqlServer connections using the default driver.

**Important points**

By defining a connection and sharing it through multiple persistence components
you can reduce the number of used database connections.

#### Configuration parameters

- **connection(s)**:
	- **discovery_key**: (optional) a key to retrieve the connection from IDiscovery
	- **host**: host name or IP address
	- **port**: port number (default: 8082)
	- **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
	- **store_key**: (optional) a key to retrieve the credentials from ICredentialStore
	- **username**: (optional) user name
	- **password**: (optional) user password
- **options**:
	- **connect_timeout**:      (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
	- **idle_timeout**:         (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
	- **max_pool_size**:        (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">


#### Connection
SqlServer connection pool object.
> **Connection**: *sql.DB

#### ConnectionResolver
Connection resolver.
> **ConnectionResolver**: [*SqlServerConnectionResolver](../sqlserver_connection_resolver)

#### DatabaseName
SqlServer database name.
> **DatabaseName**: string

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### Options
Configuration options.
> **Options**: [*ConfigParams](../../../components/config/config_params)


</span>

### Constructors

#### NewSqlServerConnection

Creates a new instance of the connection component.

> NewSqlServerConnection() [*SqlServerConnection]()


### Methods

#### Close
Closes the component and frees used resources.

> (c [*SqlServerConnection]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occured.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*SqlServerConnection]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets the connection.
> (c [*SqlServerConnection]()) GetConnection() *sql.DB

- **returns**: *sql.DB - connection to a SqlServer database


#### GetDatabaseName
Gets the database name.

> (c [*SqlServerConnection]()) GetDatabaseName() string

- **returns**: string - database name


#### IsOpen
Checks if the component is open.

> (c [*SqlServerConnection]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*SqlServerConnection]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occured.

#### SetReferences
Sets references to dependent components.

> (c [*SqlServerConnection]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

