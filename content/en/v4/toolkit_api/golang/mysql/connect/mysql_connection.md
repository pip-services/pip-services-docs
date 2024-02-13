---
type: docs
title: "MySqlConnection"
linkTitle: "MySqlConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-mysql-go"
description: >
    MySQL connection using the official driver.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description

The MySqlConnection class allows you to create a connection to a MySQL database using a plain driver.

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
    - **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials

### Constructors

#### NewMySqlConnection
NewMySqlConnection creates a new instance of the connection component.

> NewMySqlConnection() [*MySqlConnection]()


### Fields

<span class="hide-title-link">


#### Connection
The MySQL connection pool object.
> **Connection**: *sql.DB

#### ConnectionResolver
The connection resolver.
> **ConnectionResolver**: [*MySqlConnectionResolver](../mysql_connection_resolver)

#### DatabaseName
The MySQL database name.
> **DatabaseName**: string

#### Logger
The logger.
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### Options
The configuration options.
> **Options**: [*ConfigParams](../../../components/config/config_params)


</span>


### Instance methods

#### Close
Closes the component and frees used resources.

> (c [*MySqlConnection]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.


#### Configure
Configures the component by passing configuration parameters.

> (c [*MySqlConnection]()) Configure(ctx context.Context, config *cconf.ConfigParams)

- **ctx**: context.Context - operation context
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets the connection.
> (c [*MySqlConnection]()) GetConnection() *sql.DB

- **returns**: *sql.DB - connection to a MySQL database

#### GetDatabaseName
Gets the database name

> (c [*MySqlConnection]()) GetDatabaseName() string

- **returns**: string - database name


#### IsOpen
Checks if the component is opened.

> (c [*MySqlConnection]()) IsOpen() bool

- **returns**: bool - True if the component has been opened and False otherwise.


#### Open
Opens the component.

> (c [*MySqlConnection]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error or nil if no errors occurred.

#### setReferences
Sets references to dependent components.

> (c [*MySqlConnection]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

