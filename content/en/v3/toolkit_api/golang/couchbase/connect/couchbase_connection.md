---
type: docs
title: "CouchbaseConnection"
linkTitle: "CouchbaseConnection"
gitUrl: "https://github.com/pip-services3-go/pip-services3-couchbase-go"
description: >
    Couchbase connection using the default Couchbase driver.

---

### Description
The CouchbaseConnection class allows you to create connections to a Couchbase database using the default Couchbase driver.

**Important points**

- This is the most basic persistence component that is only able to store data items of any type. 
- Specific CRUD operations over the data items must be implemented in child classes by accessing the **c._collection** or **c._model** properties.

#### Configuration parameters

- **bucket**: (optional) Couchbase bucket's name
- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: (optional) username
    - **password**: (optional) user's password
- **options**:
    - **auto_create**: (optional) automatically create a missing bucket (default: false)
    - **auto_index**: (optional) automatically create a primary index (default: false)
    - **flush_enabled**: (optional) bucket flush enabled (default: false)
    - **bucket_type**: (optional) bucket type (default: couchbase)
    - **ram_quota**: (optional) RAM quota in MB (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials

### Constructors

#### NewCouchbaseConnection
Creates a new instance of the connection component.

> NewCouchbaseConnection(bucketName string) [*CouchbaseConnection]()

- **bucketName**: string - name of couchbase bucket

### Fields

<span class="hide-title-link">


#### Connection
Couchbase cluster connection object.
> **Connection**: *gocb.Cluster

#### ConnectionResolver
Connection resolver.
> **ConnectionResolver**: [*CouchbaseConnectionResolver](../couchbase_connection_resolver)

#### Logger
Logger.
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### Options
Configuration options.
> **Options**: [*ConfigParams](../../../commons/config/config_params)

#### BucketName
Couchbase bucket's name.
> **BucketName**: string

#### Bucket
Couchbase bucket's object.
> **Bucket**: *gocb.Bucket

</span>


### Methods

#### Close
Closes the component and frees used resources.

> (c [*CouchbaseConnection]()) Close(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil if no errors occured.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*CouchbaseConnection]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetBucket
Gets the Couchbase bucket's object.
> (c [*CouchbaseConnection]()) GetBucket() *gocb.Bucket

- **returns**: *gocb.Bucket - Couchbase bucket's object.


#### GetBucketName
Gets Couchbase bucket's name.

> (c [*CouchbaseConnection]()) GetBucketName() string

- **returns**: string - Couchbase bucket's name.

#### getConnection
Gets the connection.
> (c [*CouchbaseConnection]()) GetConnection() *gocb.Cluster

- **returns**: *gocb.Cluster - connection to a Couchbase database

#### IsOpen
Checks if the component is open.

> (c [*CouchbaseConnection]()) IsOpen() bool

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> (c [*CouchbaseConnection]()) Open(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or if nil no errors occured.

#### SetReferences
Sets references to dependent components.

> (c [*CouchbaseConnection]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
