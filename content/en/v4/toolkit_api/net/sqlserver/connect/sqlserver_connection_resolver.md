---
type: docs
title: "SqlServerConnectionResolver"
linkTitle: "SqlServerConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-messaging-dotnet"
description: >
    Helper class that resolves SQL Server connection and credential parameters,
    validates them and generates a connection URI.

   
---

**Inherits:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

The SqlServerConnectionResolver class allows you to resolve SQL Server connection and credential parameters, validate these parameters, and generate a connection URI.

**Important points**

-  It is able to process multiple connections to SQL Server cluster nodes.

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
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` SqlServerConnectionResolver()

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


#### Configure
Configures the component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### ResolveAsync
Resolves a SQL Server config from connection and credential parameters.

> `public` Task\<string\> ResolveAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Task\<string\> - resolved connection config or raised error


#### SetReferences
Sets the references to dependent components.

> `public` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.
