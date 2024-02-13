---
type: docs
title: "RabbitMQConnectionResolver"
linkTitle: "RabbitMQConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-rabbitmq-node"
description: >
    Helper class for connections

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

Helper class that resolves RabbitMQ connection and credential parameters,
validates them and generates connection options.

#### Configuration parameters

- **connection(s)**:
    - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number
    - **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**: user name
    - **password**: user password

#### References

- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials

### Constructors

Creates a new instance of the factory.

> `public` constructor()

### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> `protected` **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

</span>

### Instance methods

#### compose
Composes RabbitMQ connection options from connection and credential parameters.

> `public` compose(context: [IContext](../../../components/context/icontext), connection: [ConnectionParams](../../../config/connect/connection_params), credential: [CredentialParams](../../../config/auth/credential_params)): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connection**: [ConnectionParams](../../../config/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../config/auth/credential_params) - credential parameters
- **returns**: Promise\<any\> - resolved RabbitMQ connection options.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### resolve
Resolves RabbitMQ connection options from connection and credential parameters.

> `public` resolve(context: [IContext](../../../components/context/icontext)): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise\<any\> - resolved RabbitMQ connection options.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
