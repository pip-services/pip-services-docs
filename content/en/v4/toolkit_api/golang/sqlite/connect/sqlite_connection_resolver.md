---
type: docs
title: "SqliteConnectionResolver"
linkTitle: "SqliteConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-sqlite-go"
description: >
    Helper class that resolves a SQLite connection and credential parameters,
    validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description
The SqliteConnectionResolver class is used to resolve SQLite connections and credential paramters, validate them and generate connection URIs.

**Important points**  

- It is able to process multiple connections to SQLite cluster nodes.


#### Configuration parameters

- **connection(s)**:
    - **discovery_key**: (optional) a key to retrieve the connection from IDiscovery
    - **host**: host name or IP address
    - **port**: port number (default: 8082)
    - **database**: database name
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) a key to retrieve the credentials from ICredentialStore
    - **username**: user name
    - **password**: user password



#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) stores to resolve credentials

### Constructors

#### NewSqliteConnectionResolver
Creates a new instance of this class.

> NewSqliteConnectionResolver() [*SqliteConnectionResolver]()


### Fields

<span class="hide-title-link">

#### ConnectionResolver
Connection resolver
> **ConnectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### CredentialResolver
Credential resolver
> **CredentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Methods


#### Configure
Configures a component by passing its configuration parameters.

> (c [*SqliteConnectionResolver]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves a SQLite connection URI from connection and credential parameters.

> (c [*SqliteConnectionResolver]()) Resolve(ctx context.Context, context [IContext](../../../components/context/icontext)) (config map[string]interface{}, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (config map[string]interface{}, err error) - resolved config.


#### SetReferences
Sets references to dependent components.

> (c [*SqliteConnectionResolver]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

