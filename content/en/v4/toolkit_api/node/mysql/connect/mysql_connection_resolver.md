---
type: docs
title: "MySqlConnectionResolver"
linkTitle: "MySqlConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-mqysl-node"
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

**connection(s)**:
- **discovery_key**:               (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
- **host**:                        host name or IP address
- **port**:                        port number (default: 27017)
- **database**:                    database name
- **uri**:                         resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**:                   (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
- **username**:                    username
- **password**:                    user's password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) stores to resolve credentials


### Fields

<span class="hide-title-link">

#### _connectionResolver
The connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### _credentialResolver
The credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Instance methods


#### configure
Configures components by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### resolve
Resolves a MySQL configuration from connection and credential parameters.

> `public` resolve(context: [IContext](../../../components/context/icontext)): Promise\<string\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise\<string\> - resolved connection config or raise error


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
