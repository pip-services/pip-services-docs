---
type: docs
title: "NatsConnectionResolver"
linkTitle: "NatsConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-nats-go"
description: >
    Helper class that resolves NATS connection and credential parameters, 
    validates them and generates connection options.

---

### Description

The NatsConnectionResolver class is used to resolve NATS connections and credential parameters, validate them and generate connection options.

#### Configuration parameters

- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: username
    - **password**: user's password

#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials



### Fields

<span class="hide-title-link">

#### ConnectionResolver
Connection resolver.
> **ConnectionResolver**: [*ConnectionResolver](../../../config/connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> **CredentialResolver**: [*CredentialResolver](../../../config/auth/credential_resolver)

</span>


### Methods

#### Compose
Composes NATS connection options from connection and credential parameters.

> (c [*NatsConnectionResolver]()) Compose(context [IContext](../../../components/context/icontext), connections [[]*ConnectionParams](../../../config/connect/connection_params), credential [*CredentialParams](../../../config/auth/credential_params)) ([*ConfigParams](../../../components/config/config_params), error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: [[]*ConnectionParams](../../../config/connect/connection_params) - connection parameters
- **credential**: [*CredentialParams](../../../config/auth/credential_params) - credential parameters
- **returns**: ([*ConfigParams](../../../components/config/config_params), error) - resolved NATS connection options.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*NatsConnectionResolver]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves NATS connection options from connection and credential parameters.

> (c [*NatsConnectionResolver]()) Resolve(context [IContext](../../../components/context/icontext)) ([*ConfigParams](../../../components/config/config_params), error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: ([*ConfigParams](../../../components/config/config_params), error) - resolved NATS connection options.


#### SetReferences
Sets references to dependent components.

> (c [*NatsConnectionResolver]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

