---
type: docs
title: "SqlServerConnectionResolver"
linkTitle: "SqlServerConnectionResolver"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-sqlserver-gox"
description: >
    Helper class that resolves a SqlServer connection and credential parameters,
    validates them and generates a connection URI.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description
The SqlServerConnectionResolver class is used to resolve SqlServer connections and credential paramters, validate them and generate connection URIs.

**Important points**  

- It is able to process multiple connections to SqlServer cluster nodes.


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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) stores to resolve credentials

### Constructors

#### NewSqlServerConnectionResolver
Creates a new instance of this class.

> NewSqlServerConnectionResolver() [*SqlServerConnectionResolver]()


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

> (c [*SqlServerConnectionResolver]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves a SqlServer connection URI from connection and credential parameters.

> (c [*SqlServerConnectionResolver]()) Resolve(ctx context.Context, correlationId string) (config map[string]any, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (config map[string]any, err error) - resolved config.


#### SetReferences
Sets references to dependent components.

> (c [*SqlServerConnectionResolver]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
