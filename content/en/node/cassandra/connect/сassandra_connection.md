---
type: docs
title: "CassandraConnection"
linkTitle: "CassandraConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-cassandra-nodex"
description: >
    Cassandra connection using the default driver.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)

### Description
The CassandraConnection class allows you to create Cassandra connections using the default driver.

Important points

- By defining a connection and sharing it through multiple persistence components you can reduce number of used database connections.

#### Configuration parameters

- **connection(s)**:    
    - **discovery_key**: (optional) key used to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 9042)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) key used to retrieve the credentials from [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/interfaces/auth.icredentialstore.html ICredentialStore]]
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


### Fields

<span class="hide-title-link">


#### _connection
Cassandra connection pool object.
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

#### _datacenter
Cassandra datacenter's name.
> `protected` **_datacenter**: string

#### _keyspace
Cassandra keyspace's name.
> `protected` **_keyspace**: string

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

- **returns**: any - connection to a Cassandra database


#### getDatacenter
Gets Cassandra datacenter's name.

> `public` getDatacenter(): string

- **returns**: string - Cassandra datacenter's name.

#### getKeyspace
Gets Cassandra keyspace's name.
> `public` getKeyspace(): string

- **returns**: string - Cassandra keyspace name.

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
