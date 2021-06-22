---
type: docs
title: "MongoDbConnection"
linkTitle: "MongoDbConnection"
gitUrl: "https://github.com/pip-services3-go/pip-services3-mongodb-go"
description: >
    MongoDB connection using the official driver.

---

### Description

The MongoDbConnection class allows you to create a MongoDB connection using the official driver.

Important points

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

#### NewMongoDbConnection
Creates a new instance of the connection component.

> NewMongoDbConnection() [*MongoDbConnection]()

### Fields

<span class="hide-title-link">

#### Logger
The logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### ConnectionResolver
The connection resolver.
> **ConnectionResolver**: [*MongoDbConnectionResolver](../mongodb_connection_resolver) 

#### Options
The configuration options.
> **Options**: [*ConfigParams](../../../commons/config/config_params) 

#### Connection
The MongoDB connection object.
> **Connection**: *mongodrv.Client

#### DatabaseName
The MongoDB database name.
> **DatabaseName**: string

#### Db
The MongoDB database object.
> **Db**: *mongodrv.Database
</span>


### Methods

#### Close
Closes a component and frees used resources.

> (c [*MongoDbConnection]()) Close(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error -  error or nil no errors occured.

#### Configure
Configures a component by passing its configuration parameters.

> (c [*MongoDbConnection]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetConnection
Gets the connection.

> (c [*MongoDbConnection]()) GetConnection() *mongodrv.Client

- **return**: *mongodrv.Client - connection to a MongoDB database


#### GetDatabase
Gets the MongoDB database.

> (c [*MongoDbConnection]()) GetDatabase() *mongodrv.Database

- **return**:  *mongodrv.Database - MongoDB database


#### IsOpen
Checks if the component is opened.

> (c [*MongoDbConnection]()) IsOpen() bool

- **return**: bool - True if the component has been opened and False otherwise.


#### Open
Opens the component.

> (c [*MongoDbConnection]()) Open(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: error -  error or nil no errors occured.


#### SetReferences
Sets the references to the dependent components.

> (c [*MongoDbConnection]()) SetReferences(references [crefer.IReferences](../../../commons/refer/ireferences))

- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
