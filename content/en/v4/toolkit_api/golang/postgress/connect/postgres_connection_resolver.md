---
type: docs
title: "PostgresConnectionResolver"
linkTitle: "PostgresConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/blob/main/pip-services4-postgres-go"
description: >
    Helper class that resolves PostgreSQL connection and credential parameters,
    validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

The PostgresConnectionResolver class allows you to create a PostgresSQL connection and credential parameters resolver that validates these parameters and generates a connection URI.

Important points

- It is able to process multiple connections to PostgreSQL cluster nodes.

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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials ([ICredentialStore](../../../config/auth/icredential_store))


### Constructors

#### NewPostgresConnectionResolver
NewPostgresConnectionResolver creates new connection resolver

> NewPostgresConnectionResolver() [*PostgresConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
The connection resolver
> **ConnectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### _credentialResolver
The credential resolver
> **ConnectionResolver**: [CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Methods


#### Configure
Configures component by passing configuration parameters.

> (c [*PostgresConnectionResolver]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves PostgreSQL config from connection and credential parameters.

> (c [*PostgresConnectionResolver]()) Resolve(ctx context.Context, context [IContext](../../../components/context/icontext)) (uri string, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (uri string, err error) - resolved connection config or raised error.


#### SetReferences
Sets references to dependent components.

> (c [*PostgresConnectionResolver]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

