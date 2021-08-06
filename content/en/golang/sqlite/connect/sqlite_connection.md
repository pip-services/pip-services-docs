---
type: docs
title: "SqliteConnection"
linkTitle: "SqliteConnection"
gitUrl: "https://github.com/pip-services3-go/pip-services3-sqlite-go"
description: >
    SQLite connection using the default driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description
The SqliteConnection class allows you to create SQLite connections using the default driver.

**Important points**

By defining a connection and sharing it through multiple persistence components
you can reduce the number of used database connections.

#### Configuration parameters


- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **database**: database file path
    - **uri**: resource URI with file:// protocol


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
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
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### Options
Configuration options.
> **Options**: [*ConfigParams](../../../commons/config/config_params)


</span>

### Constructors

#### NewSqliteConnection

Creates a new instance of the connection component.

> NewSqliteConnection() [*SqliteConnection]()


### Methods

#### Close
Closes the component and frees used resources.

> (c [*SqliteConnection]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occured.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*SqliteConnection]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


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

> (c [*SqliteConnection]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occured.

#### SetReferences
Sets references to dependent components.

> (c [*SqliteConnection]()) SetReferences(references [cref.IReferences](../../../commons/refer/ireferences))

- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
