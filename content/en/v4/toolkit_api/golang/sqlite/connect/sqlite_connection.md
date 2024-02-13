---
type: docs
title: "SqliteConnection"
linkTitle: "SqliteConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-sqlite-go"
description: >
    SQLite connection using the default driver.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description
The SqliteConnection class allows you to create SQLite connections using the default driver.

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
	- **max_pool_size**: (optional) maximum connection pool size (default: 2)
	- **keep_alive**: (optional) enable connection keep alive in ms, if zero connection are keeped indefinitely (default: 0)
	- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5000)
	- **socket_timeout**: (optional) socket timeout in milliseconds (default: 360000)
	- **auto_reconnect**: (optional) enable auto reconnection (default: true) (Not used)
	- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000) (Not used)
	- **max_page_size**: (optional) maximum page size (default: 100)
	- **replica_set**: (optional) name of replica set
	- **ssl**: (optional) enable SSL connection (default: false) (Not release in this version)
	- **auth_source**: (optional) authentication source
	- **debug**: (optional) enable debug output (default: false). (Not used)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">


#### Connection
SQLite connection pool object.
> **Connection**: *sql.DB

#### ConnectionResolver
Connection resolver.
> **ConnectionResolver**: [*SqliteConnectionResolver](../sqlite_connection_resolver)

#### DatabaseName
SQLite database name.
> **DatabaseName**: string

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### Options
Configuration options.
> **Options**: [*ConfigParams](../../../components/config/config_params)


</span>

### Constructors

#### NewSqliteConnection

Creates a new instance of the connection component.

> NewSqliteConnection() [*SqliteConnection]()


### Methods

#### Close
Closes the component and frees used resources.

> (c [*SqliteConnection]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occured.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*SqliteConnection]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets the connection.
> (c [*SqliteConnection]()) GetConnection() *sql.DB

- **returns**: *sql.DB - connection to a SQLite database


#### GetDatabaseName
Gets the database name.

> (c [*SqliteConnection]()) GetDatabaseName() string

- **returns**: string - database name


#### IsOpen
Checks if the component is open.

> (c [*SqliteConnection]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### Open
Opens the component.

> (c [*SqliteConnection]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occured.

#### SetReferences
Sets references to dependent components.

> (c [*SqliteConnection]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

