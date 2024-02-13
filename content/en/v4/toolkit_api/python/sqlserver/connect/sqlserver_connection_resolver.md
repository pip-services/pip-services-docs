---
type: docs
title: "SqlServerConnectionResolver"
linkTitle: "SqlServerConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-swagger-python"
description: >
    Helper class that resolves SQLServer connection and credential parameters,
    validates them and generates a connection URI.

   
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

The SqlServerConnectionResolver class allows you to resolve connection and credential parameters, validates these parameters, and generate a connection URI.

Important points

-  It is able to process multiple connections to PostgreSQL cluster nodes.

#### Configuration parameters

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **database**: database name
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
- **username**: username
- **password**: user's password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> SqlServerConnectionResolver()

### Fields

<span class="hide-title-link">

#### _connection_resolver
The connection resolver
> **_connection_resolver**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### _credential_resolver
The credential resolver
> **_credential_resolver**: [CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Instance methods


#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### resolve
Resolves SQLServer config from connection and credential parameters.

> resolve(context: Optional[IContext]): str

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: str - resolved connection config or raise error


#### get_database
Gets a connection to an SQLServer database

> get_database(): Any

- **return**: Any - connection to an SQLServer database


#### set_references
Sets the references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
