---
type: docs
title: "SqliteConnection"
linkTitle: "SqliteConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-sqlite-nodex"
description: >
    SQLite connection using the default driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description
The SqliteConnection class allows you to create SQLite connections using the default driver.

Important points

By defining a connection and sharing it through multiple persistence components
you can reduce number of used database connections.

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


#### _connection
SQLite connection pool object.
> `protected` **_connection**: any

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [SqliteConnectionResolver](../sqlite_connection_resolver)

#### _databaseName
SQLite database name.
> `protected` **_databaseName**: string

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _options
Configuration options.
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params)


</span>

### Constructors
Creates a new instance of the connection component.

> `public` constructor()


### Instance methods

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getConnection
Gets the connection.
> `public` getConnection(): any

- **returns**: any - connection to a SQLite database


#### getDatabaseName
Gets the database name.

> `public` getDatabaseName(): string

- **returns**: string - database name


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
