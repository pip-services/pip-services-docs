---
type: docs
title: "CassandraConnection"
linkTitle: "CassandraConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-cassandra-node"
description: >
    Cassandra connection using the default driver.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable),
[IOpenable](../../../components/run/iopenable)

### Description
The CassandraConnection class allows you to create Cassandra connections using the default driver.

**Important points**

- By defining a connection and sharing it through multiple persistence components you can reduce the number of used database connections.

#### Configuration parameters

- **connection(s)**:    
    - **discovery_key**: (optional) key used to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 9042)
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:    
    - **store_key**: (optional) key used to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store/)
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
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _options
Configuration options.
> `protected` **_options**: [ConfigParams](../../../components/config/config_params)

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

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### configure
Configures the component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


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

- **returns**: string - Cassandra keyspace's name.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.
