---
type: docs
title: "RabbitMQConnectionResolver"
linkTitle: "RabbitMQConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-rabbitmq-dart"
description: >
    Helper class that resolves an RabbitMQ connection and credential parameters, 
    validates them and generates connection options.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

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


### Fields

<span class="hide-title-link">

#### connectionResolver
Connection resolver
> **connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver)

#### credentialResolver
Credential resolver
> **credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

</span>


### Instance methods

#### compose
Composes RabbitMQ connection options from connection and credential parameters.

> Future<[ConfigParams](../../../components/config/config_params)> compose(IContext? context, [ConnectionParams?](../../../config/connect/connection_params) connection, [CredentialParams?](../../../config/auth/credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: [ConnectionParams?](../../../config/connect/connection_params) - connection parameters
- **credential**: [CredentialParams?](../../../config/auth/credential_params) - credential parameters
- **returns**: Future<[ConfigParams](../../../components/config/config_params)> - resolved RabbitMQ connection options


#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### resolve
Resolves RabbitMQ connection options from connection and credential parameters.

> Future<[ConfigParams](../../../components/config/config_params)> resolve(IContext? context)

- **context**: [IContext](../../../components/config/config_params) - (optional) a context to trace execution through a call chain.
- **returns**: Future<[ConfigParams](../../../components/config/config_params)> - resolved RabbitMQ connection options.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
