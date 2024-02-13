---
type: docs
title: "MySqlConnectionResolver"
linkTitle: "MySqlConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-mysql-go"
description: >
    Helper class that resolves MySQL connection and credential parameters,
    validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

The MySqlConnectionResolver class allows you to create a MySQL connection and credential parameters resolver that validates the parameters and generates a connection URI.

Important points

- It is able to process multiple connections to MySQL cluster nodes.

#### Configuration parameters

- **connection(s)**:
    - **discovery_key**:               (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**:                        host name or IP address
    - **port**:                        port number (default: 27017)
    - **database**:                    database name
    - **uri**:                         resource URI or connection string with all parameters in it

- **credential(s)**:
    - **store_key**:                   (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**:                    username
    - **password**:                    user's password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) stores to resolve credentials

### Constructors

#### NewMySqlConnectionResolver
NewMySqlConnectionResolver creates new connection resolver

> NewMySqlConnectionResolver() [*MySqlConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
The connection resolver
> **ConnectionResolver**: [*ConnectionResolver](../../../config/connect/connection_resolver) 

#### CredentialResolver
The credential resolver
> **CredentialResolver**: [*CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Instance methods


#### Configure
Configures components by passing configuration parameters.

> (c [*MySqlConnectionResolver]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves a MySQL configuration from connection and credential parameters.

> (c [*MySqlConnectionResolver]()) Resolve(ctx context.Context, context [IContext](../../../components/context/icontext)) (uri string, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (uri string, err error) - resolved connection config or return error.


#### SetReferences
Sets references to dependent components.

> (c [*MySqlConnectionResolver]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

