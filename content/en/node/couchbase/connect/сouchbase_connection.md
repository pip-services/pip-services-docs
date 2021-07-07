---
type: docs
title: "CouchbaseConnection"
linkTitle: "CouchbaseConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-couchbase-nodex"
description: >
    Couchbase connection using plain couchbase driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description
This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing **this._collection** or **this._model** properties.

#### Configuration parameters

- **bucket**: (optional) Couchbase bucket name
- **connection(s)**:    
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: (optional) user name
    - **password**: (optional) user password
- **options**:
    - **auto_create**: (optional) automatically create missing bucket (default: false)
    - **auto_index**: (optional) automatically create primary index (default: false)
    - **flush_enabled**: (optional) bucket flush enabled (default: false)
    - **bucket_type**: (optional) bucket type (default: couchbase)
    - **ram_quota**: (optional) RAM quota in MB (default: 100)

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">


#### _connection
The Couchbase cluster connection object.
> `protected` **_connection**: any

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [CassandraConnectionResolver](../cassandra_connection_resolver)

#### _logger
Logger.
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _options
Configuration options.
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params)

#### _bucketName
The Couchbase bucket name.
> `protected` **_bucketName**: string

#### _bucket
The Couchbase bucket object.
> `protected` **_bucket**: any

</span>

### Constructors
Creates a new instance of the connection component.

> `public` constructor(bucketName?: string)

- **bucketName**: string - the name of couchbase bucket


### Instance methods

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### configure
Configures the component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getBucket
Gets Couchbase bucket object.
> `public` getBucket(): any

- **returns**: any - Couchbase bucket object.


#### getBucketName
Gets Couchbase bucket name.

> `public` getBucketName(): string

- **returns**: string - Couchbase bucket name.

#### getConnection
Gets the connection.
> `public` getConnection(): any

- **returns**: any - connection to a Couchbase database

#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component has been opened and false otherwise.


#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
