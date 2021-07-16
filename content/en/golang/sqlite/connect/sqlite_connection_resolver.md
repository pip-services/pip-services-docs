---
type: docs
title: "SqliteConnectionResolver"
linkTitle: "SqliteConnectionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-sqlite-go"
description: >
    Helper class that resolves a SQLite connection and credential parameters,
    validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description
The SqliteConnectionResolver class is used to resolve SQLite connections and credential paramters, validate them and generate connection URIs.

**Important points**  

- It is able to process multiple connections to SQLite cluster nodes.


#### Configuration parameters

- **connection(s)**:    
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **database**: database file path
    - **uri**: resource URI with file:// protocol



#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) stores to resolve credentials

### Constructors

#### NewSqliteConnectionResolver
NewSqliteConnectionResolver creates new connection resolver

> NewSqliteConnectionResolver() [*SqliteConnectionResolver]()


### Fields

<span class="hide-title-link">

#### ConnectionResolver
Connection resolver
> **ConnectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### CredentialResolver
Credential resolver
> **CredentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Methods


#### Configure
Configures a component by passing its configuration parameters.

> (c [*SqliteConnectionResolver]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves a SQLite connection URI from connection and credential parameters.

> (c [*SqliteConnectionResolver]()) Resolve(correlationId string) (config map[string]interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (config map[string]interface{}, err error) - resolved config.


#### SetReferences
Sets references to dependent components.

> (c [*SqliteConnectionResolver]()) SetReferences(references [crefer.IReferences](../../../commons/refer/ireferences))

- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
