---
type: docs
title: "PostgresConnectionResolver"
linkTitle: "PostgresConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-postgres-dart"
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


### Fields

<span class="hide-title-link">

#### connectionResolver_
The connection resolver
> **connectionResolver_**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### credentialResolver
The credential resolver
> **credentialResolver_**: [CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Instance methods


#### configure
Configures component by passing configuration parameters.

> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### resolve
Resolves PostgreSQL config from connection and credential parameters.

> Future<Map<String, dynamic>> resolve(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Future<Map<String, dynamic>> - resolved connection config or raised error.


#### setReferences
Sets references to dependent components.

> void setReferences(IReferences references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
