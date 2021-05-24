---
type: docs
title: "MongoDbConnection"
linkTitle: "MongoDbConnection"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mongodb-python"
description: >
    MongoDB connection using a plain driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description

The MongoDbConnection class allows you to create a MongoDB connection using a plain driver.

Important points

- By defining a connection and sharing it through multiple persistence components you can reduce number of used database connections.

#### Configuration parameters
**connection(s)**:    
- **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:    
- **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: (optional) user name
- **password**: (optional) user password

**options**:
- **max_pool_size**: (optional) maximum connection pool size (default: 2)
- **keep_alive**: (optional) enable connection keep alive (default: true)
- **connect_timeout**: (optional) connection timeout in milliseconds (default: 5000)
- **socket_timeout**: (optional) socket timeout in milliseconds (default: 360000)
- **auto_reconnect**: (optional) enable auto reconnection (default: true)
- **reconnect_interval**: (optional) reconnection interval in milliseconds (default: 1000)
- **max_page_size**: (optional) maximum page size (default: 100)
- **replica_set**: (optional) name of replica set
- **ssl**: (optional) enable SSL connection (default: false)
- **auth_source**: (optional) authentication source
- **debug**: (optional) enable debug output (default: false).

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> MongoDbConnection()

### Fields

<span class="hide-title-link">

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _connection_resolver
The connection resolver.
> **_connection_resolver**: [MongoDbConnectionResolver](../mongodb_connection_resolver) 

#### _options
The configuration options.
> **_options**: [ConfigParams](../../../commons/config/config_params) 

#### _connection
The MongoDB connection object.
> **_connection**: Any

#### _database_name
The MongoDB database name.
> **_database_name**: str

#### _db
The MongoDB database object.
> **_db**: Any
</span>


### Instance methods

#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### get_connection
Gets the connection.

> get_connection(): Any

- **return**: Any - connection to a MongoDB


#### get_database
Gets the MongoDB.

> get_database(): Any

- **return**: Any - a MongoDB


#### is_open
Checks if the component is opened.

> is_open(): bool

- **return**: bool - true if the component has been opened and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### set_references
Sets the references to the dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
