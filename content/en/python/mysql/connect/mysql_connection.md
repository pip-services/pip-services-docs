---
type: docs
title: "MySqlConnection"
linkTitle: "MySqlConnection"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mysql-python"
description: >
    MySQL connection using plain driver.


    By defining a connection and sharing it through multiple persistence components
    you can reduce number of used database connections.
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)


#### Configuration parameters


**connection(s)**:    
- **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:    
- **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: user name
- **password**: user password

**options**:
- **connect_timeout**: (optional) number of milliseconds to wait before timing out when connecting a new client (default: 0)
- **idle_timeout**: (optional) number of milliseconds a client must sit idle in the pool and not be checked out (default: 10000)
- **max_pool_size**: (optional) maximum number of clients the pool should contain (default: 10)


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** (optional) Credential stores to resolve credentials


### Fields

<span class="hide-title-link">


#### _connection
The SQLServer connection pool object.
> **_connection**: Any

#### _connection_resolver
The connection resolver.
> **_connection_resolver**: [MySqlConnectionResolver](../mysql_connection_resolver)

#### _database_name
The SQLServer database name.
> **_database_name**: str

#### _logger
The logger.
> **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _options
The configuration options.
> **_options**: [ConfigParams](../../../commons/config/config_params)


</span>


### Methods

#### close
Closes component and frees used resources.

> close(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### get_connection
TODO add description

> get_connection(): Any

- **returns**: Any - TODO add description


#### get_database_name
TODO add description

> get_database_name(): str

- **returns**: str - TODO add description


#### is_open
Checks if the component is opened.

> is_open(): bool

- **returns**: bool - true if the component has been opened and false otherwise.


#### open
Opens the component.

> open(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.