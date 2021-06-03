---
type: docs
title: "SqlServerConnectionResolver"
linkTitle: "SqlServerConnectionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-sqlserver-nodex"
description: >
    Helper class that resolves SQLServer connection and credential parameters,
    validates them and generates a connection URI.

   
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description

The SqlServerConnectionResolver class allows you to resolve connection and credential parameters, validates these parameters, and generate a connection URI.

Important points

-  It is able to process multiple connections to PostgreSQL cluster nodes.

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

> SqlServerConnectionResolver()

### Fields

<span class="hide-title-link">

#### _connectionResolver
The connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credentialResolver
The credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Instance methods


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### resolve
Resolves SQLServer config from connection and credential parameters.

> `public` resolve(correlationId: string): Promise\<string\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise\<string\> - resolved connection config or raise error


#### setReferences
Sets the references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
