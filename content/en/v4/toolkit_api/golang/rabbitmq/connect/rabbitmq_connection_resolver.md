---
type: docs
title: "RabbitMQConnectionResolver"
linkTitle: "RabbitMQConnectionResolver"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-rabbitmq-gox"
description: >
    Helper class that resolves a RabbitMQ connection and credential parameters, 
    validates them and generates connection options.

---

### Description

The RabbitMQConnectionResolver class allows you to resolve RabbitMQ connections and credential parameters, validate them, and generate connection options.

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

### Constructors

#### NewRabbitMQConnectionResolver
Create new instance of RabbitMQConnectionResolver

> NewRabbitMQConnectionResolver() [*RabbitMQConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
Connection resolver
> **ConnectionResolver**: [*ConnectionResolver](../../../config/connect/connection_resolver)

#### CredentialResolver
Credential resolver
> **CredentialResolver**: [*CredentialResolver](../../../config/auth/credential_resolver)

</span>


### Instance methods

#### Compose
Composes RabbitMQ connection options from connection and credential parameters.

> (c [*RabbitMQConnectionResolver]()) Compose(context [IContext](../../../components/context/icontext), connection [*ConnectionParams](../../../config/connect/connection_params), credential [*CredentialParams](../../../config/auth/credential_params)) (options [*ConfigParams](../../../components/config/config_params), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: [*ConnectionParams](../../../config/connect/connection_params) - connection parameters
- **credential**: [*CredentialParams](../../../config/auth/credential_params) - credential parameters
- **returns**: (options [*ConfigParams](../../../components/config/config_params), err error) - resolved RabbitMQ connection options


#### Configure
Configures the component by passing its configuration parameters.

> (c [*RabbitMQConnectionResolver]()) Configure(ctx context.Context, config *cconf.ConfigParams)

- **ctx**: context.Context - operation context.
- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves RabbitMQ connection options from connection and credential parameters.

> (c [*RabbitMQConnectionResolver]()) Resolve(context [IContext](../../../components/context/icontext)) (options [*ConfigParams](../../../components/config/config_params), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (options [*ConfigParams](../../../components/config/config_params), err error) - resolved RabbitMQ connection options.


#### SetReferences
Sets references to dependent components.

> (c [*RabbitMQConnectionResolver]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

