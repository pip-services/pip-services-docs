---
type: docs
title: "MongoDbConnection"
linkTitle: "MongoDbConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-mongodb-node"
description: >
    MongoDB connection using the official driver.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description

The MongoDbConnection class allows you to create a MongoDB connection using the official driver.

Important points

- By defining a connection and sharing it through multiple persistence components you can reduce the number of used database connections.

#### Configuration parameters
**connection(s)**:    
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:    
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
- **username**: (optional) username
- **password**: (optional) user's password

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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` constructor()

### Fields

<span class="hide-title-link">

#### _logger
The logger.
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _connectionResolver
The connection resolver.
> `protected` **_connectionResolver**: [MongoDbConnectionResolver](../mongodb_connection_resolver) 

#### _options
The configuration options.
> `protected` **_options**: [ConfigParams](../../../components/config/config_params) 

#### _connection
The MongoDB connection object.
> `protected` **_connection**: any

#### _databaseName
The MongoDB database name.
> `protected` **_databaseName**: string

#### _db
The MongoDB database object.
> `protected` **_db**: any

  
</span>


### Instance methods

#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### getConnection
Gets the connection.

> `public` getConnection(): any

- **return**: any - connection to a MongoDB database


#### getDatabase
Gets the MongoDB database.

> `public` getDatabase(): any 

- **return**: any - MongoDB database


#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **return**: boolean - True if the component has been opened and False otherwise.


#### open
Opens the component.

> `public` async open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets the references to the dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
