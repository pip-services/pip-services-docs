---
type: docs
title: "PostgresConnectionResolver"
linkTitle: "PostgresConnectionResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mongodb-python"
description: >
    Helper class that resolves PostgreSQL connection and credential parameters,
    validates them and generates a connection URI.

    It is able to process multiple connections to PostgreSQL cluster nodes.
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable),
[IOpenable](../../../commons/run/iopenable)


#### Configuration parameters
**connection(s)**:
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **database**: database name
    - **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: user name
    - **password**: user password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors
Creates a new instance of the connection component.

> MongoDbConnection()

### Fields

<span class="hide-title-link">

#### _connection_resolver
The connection resolver
> **_connection_resolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credential_resolver
The connection resolver
> **_credential_resolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Methods


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### resolve
Resolves PostgreSQL config from connection and credential parameters.

> resolve(correlation_id: Optional[str]) -> Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: Any - resolved connection config or raise error


#### get_database
TODO add description

> get_database(): Any

- **return**: Any - TODO add description


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.