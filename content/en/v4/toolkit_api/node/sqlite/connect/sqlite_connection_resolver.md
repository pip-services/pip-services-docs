---
type: docs
title: "SqliteConnectionResolver"
linkTitle: "SqliteConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-sqlite-node"
description: >
    Helper class that resolves a SQLite connection and credential parameters, validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description
Within database management, the SqliteConnectionResolver class plays a crucial role as it not only resolves SQLite connections and credential parameters but also takes charge of validating these crucial elements, ensuring their accuracy and security, ultimately leading to the generation of reliable and efficient connection URIs for smooth database interactions.

**Important points**  

- It is able to process multiple connections to SQLite cluster nodes.


#### Configuration parameters

- **connection(s)**:    
  - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
  - **database**: database file path
  - **uri**: resource URI with file:// protocol



#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) stores to resolve credentials


### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### _credentialResolver
Credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Instance methods


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### resolve
Resolves a SQLite connection URI from connection and credential parameters.

> `public` resolve(context:  [IContext](../../../components/context/icontext)): Promise\<string\>

- **context**:  [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise\<string\> - resolved config.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.
