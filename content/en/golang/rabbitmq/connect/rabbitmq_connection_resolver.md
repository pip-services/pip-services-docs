---
type: docs
title: "RabbitMQConnectionResolver"
linkTitle: "RabbitMQConnectionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rabbitmq-go"
description: >
    Helper class that resolves an RabbitMQ connection and credential parameters, 
    validates them and generates connection options.

---

### Description

The RabbitMQConnectionResolver class allows you to resolve RabbitMQ connections and credential parameters, validate them, and generate connection options.

#### Configuration parameters

- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**: username
    - **password**: user's password

#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials

### Constructors

#### NewRabbitMQConnectionResolver
Create new instance of RabbitMQConnectionResolver

> NewRabbitMQConnectionResolver() [*RabbitMQConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
Connection resolver
> **ConnectionResolver**: [*ConnectionResolver](../../../components/connect/connection_resolver)

#### CredentialResolver
Credential resolver
> **CredentialResolver**: [*CredentialResolver](../../../components/auth/credential_resolver)

</span>


### Instance methods

#### Compose
Compose method are composes RabbitMQ connection options from connection and credential parameters.

> (c [*RabbitMQConnectionResolver]()) Compose(correlationId string, connection [*ConnectionParams](../../../components/connect/connection_params), credential [*CredentialParams](../../../components/auth/credential_params)) (options [*ConfigParams](../../../commons/config/config_params), err error)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **connections**: [*ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [*CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: (options [*ConfigParams](../../../commons/config/config_params), err error) - resolved RabbitMQ connection options


#### Configure
Configures the component by passing its configuration parameters.

> (c [*RabbitMQConnectionResolver]()) Configure(config *cconf.ConfigParams)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves RabbitMQ connection options from connection and credential parameters.

> (c [*RabbitMQConnectionResolver]()) Resolve(correlationId string) (options [*ConfigParams](../../../commons/config/config_params), err error)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **returns**: (options [*ConfigParams](../../../commons/config/config_params), err error) - resolved RabbitMQ connection options.


#### SetReferences
Sets references to dependent components.

> (c [*RabbitMQConnectionResolver]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
