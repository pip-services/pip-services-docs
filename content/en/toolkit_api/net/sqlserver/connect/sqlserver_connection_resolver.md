---
type: docs
title: "SqlServerConnectionResolver"
linkTitle: "SqlServerConnectionResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-sqlserver-dotnet"
description: >
    Helper class that resolves SQL Server connection and credential parameters,
    validates them and generates a connection URI.

   
---

**Inherits:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description

The SqlServerConnectionResolver class allows you to resolve SQL Server connection and credential parameters, validate these parameters, and generate a connection URI.

**Important points**

-  It is able to process multiple connections to SQL Server cluster nodes.

#### Configuration parameters

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **database**: database name
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
- **username**: username
- **password**: user's password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) stores to resolve credentials


### Constructors
Creates a new instance of the connection component.

> `public` SqlServerConnectionResolver()

### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credentialResolver
Credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Instance methods


#### Configure
Configures the component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### ResolveAsync
Resolves a SQL Server config from connection and credential parameters.

> `public` Task\<string\> ResolveAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task\<string\> - resolved connection config or raised error


#### SetReferences
Sets the references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
