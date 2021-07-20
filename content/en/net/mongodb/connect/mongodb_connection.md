---
type: docs
title: "MongoDbConnection"
linkTitle: "MongoDbConnection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mongodb-dotnet"
description: >
    MongoDB connection using the official driver.

---

**Inherits:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable)

### Description

The MongoDbConnection class allows you to create a MongoDB connection using the official driver.

**Important points**

- By defining a connection and sharing it through multiple persistence components you can reduce the number of used database connections.

#### Configuration parameters
**connection(s)**:    
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:    
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` MongoDbConnection()

### Fields

<span class="hide-title-link">

#### _areSessionsSupported
Determines if the database supports sessions or not
> `private` **_areSessionsSupported**: bool

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [MongoDbConnectionResolver](../mongodb_connection_resolver) 

#### _options
Configuration options.
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params) 

#### _connection
MongoDB connection object.
> `protected` **_connection**: MongoClient

#### _databaseName
MongoDB database name.
> `protected` **_databaseName**: string

#### _database
MongoDB database object.
> `protected` **_database**: IMongoDatabase

</span>


### Instance methods

#### CloseAsync
Closes a component and frees used resources.

> `public virtual` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### Configure
Configures a component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets the connection.

> `public` MongoClient GetConnection()

- **return**: MongoClient - connection to a MongoDB database


#### GetDatabase
Gets the MongoDB database.

> `public` IMongoDatabase GetDatabase()

- **return**: IMongoDatabase - MongoDB database


#### IsOpen
Checks if the component is opened.

> `public virtual` bool IsOpen()

- **return**: bool - True if the component has been opened and False otherwise.


#### Open
Opens the component.

> `public virtual` Task OpenAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### SetReferences
Sets the references to the dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
