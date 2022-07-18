---
type: docs
title: "PostgresConnectionResolver"
linkTitle: "PostgresConnectionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-postgres-go"
description: >
    Helper class that resolves PostgreSQL connection and credential parameters,
    validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description

The PostgresConnectionResolver class allows you to create a PostgresSQL connection and credential parameters resolver that validates these parameters and generates a connection URI.

Important points

- It is able to process multiple connections to PostgreSQL cluster nodes.

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
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials ([ICredentialStore](../../../components/auth/icredential_store))


### Constructors

#### NewPostgresConnectionResolver
NewPostgresConnectionResolver creates new connection resolver

> NewPostgresConnectionResolver() [*PostgresConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
The connection resolver
> **ConnectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credentialResolver
The credential resolver
> **ConnectionResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Methods


#### Configure
Configures component by passing configuration parameters.

> (c [*PostgresConnectionResolver]()) Configure(config [*cconf.ConfigParams](../../../commons/config/config_params))

- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves PostgreSQL config from connection and credential parameters.

> (c [*PostgresConnectionResolver]()) Resolve(correlationId string) (uri string, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (uri string, err error) - resolved connection config or raised error.


#### SetReferences
Sets references to dependent components.

> (c [*PostgresConnectionResolver]()) SetReferences(references [crefer.IReferences](../../../commons/refer/ireferences))

- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
