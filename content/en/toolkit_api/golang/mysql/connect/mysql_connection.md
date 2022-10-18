---
type: docs
title: "MySqlConnection"
linkTitle: "MySqlConnection"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-mysql-gox"
description: >
    MySQL connection using the official driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description

The MySqlConnection class allows you to create a connection to a MySQL database using a plain driver.

#### Configuration parameters


- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it

- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: username
    - **password**: user's password

- **options**:
    - **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
    - **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
    - **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
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
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### Options
The configuration options.
> **Options**: [*ConfigParams](../../../commons/config/config_params)


</span>


### Instance methods

#### Close
Closes the component and frees used resources.

> (c [*MySqlConnection]()) Close(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.


#### Configure
Configures the component by passing configuration parameters.

> (c [*MySqlConnection]()) Configure(ctx context.Context, config *cconf.ConfigParams)

- **ctx**: context.Context - operation context
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


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

> (c [*MySqlConnection]()) Open(ctx context.Context, correlationId string) error

- **ctx**: context.Context - operation context
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error - error or nil if no errors occurred.

#### setReferences
Sets references to dependent components.

> (c [*MySqlConnection]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
