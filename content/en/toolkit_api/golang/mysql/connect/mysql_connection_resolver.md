---
type: docs
title: "MySqlConnectionResolver"
linkTitle: "MySqlConnectionResolver"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-mysql-gox"
description: >
    Helper class that resolves MySQL connection and credential parameters,
    validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description

The MySqlConnectionResolver class allows you to create a MySQL connection and credential parameters resolver that validates the parameters and generates a connection URI.

Important points

- It is able to process multiple connections to MySQL cluster nodes.

#### Configuration parameters

- **connection(s)**:
    - **discovery_key**:               (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**:                        host name or IP address
    - **port**:                        port number (default: 27017)
    - **database**:                    database name
    - **uri**:                         resource URI or connection string with all parameters in it

- **credential(s)**:
    - **store_key**:                   (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**:                    username
    - **password**:                    user's password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) stores to resolve credentials

### Constructors

#### NewMysqlConnectionResolver
NewMysqlConnectionResolver creates new connection resolver

> NewMysqlConnectionResolver() [*MysqlConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
The connection resolver
> **ConnectionResolver**: [*ConnectionResolver](../../../components/connect/connection_resolver) 

#### CredentialResolver
The credential resolver
> **CredentialResolver**: [*CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Instance methods


#### Configure
Configures components by passing configuration parameters.

> (c [*MysqlConnectionResolver]()) Configure(ctx context.Context, config [*ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves a MySQL configuration from connection and credential parameters.

> (c [*MysqlConnectionResolver]()) Resolve(ctx context.Context, correlationId string) (uri string, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (uri string, err error) - resolved connection config or return error.


#### SetReferences
Sets references to dependent components.

> (c [*MysqlConnectionResolver]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
