---
type: docs
title: "KafkaConnectionResolver"
linkTitle: "KafkaConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-kafka-go"
description: >
    Resolves a Kafka connection and credential parameters, validates them and generates connection options.

---

### Description

KafkaConnectionResolver is used to resolve Kafka connections and credential parameters, validate them and generate connection options.

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

#### NewKafkaConnectionResolver
Method that creates a new instance of the connection resolver component.

> NewKafkaConnectionResolver() [*KafkaConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
Connection resolver.
> **ConnectionResolver**: [*ConnectionResolver](../../../config/connect/connection_resolver)

#### CredentialResolver
Credential resolver.
> **CredentialResolver**: [*CredentialResolver](../../../config/auth/credential_resolver)

</span>


### Methods

#### Compose
Composes Kafka connection options from connection and credential parameters.

> (c [*KafkaConnectionResolver]) Compose(correlationId string, connections [[]*ConnectionParams](../../../config/connect/connection_params), credential [*CredentialParams](../../../config/auth/credential_params)) ([*ConfigParams](../../../components/config/config_params), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connections**: [[]*ConnectionParams](../../../config/connect/connection_params) - connection parameters
- **credential**: [*CredentialParams](../../../config/auth/credential_params) - credential parameters
- **returns**: ([*ConfigParams](../../../components/config/config_params), error) - resolved Kafka connection options.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*KafkaConnectionResolver]) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves Kafka connection options from connection and credential parameters.

> (c [*KafkaConnectionResolver]) Resolve(correlationId string) ([*ConfigParams](../../../components/config/config_params), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: ([*ConfigParams](../../../components/config/config_params), error) - resolved Kafka connection options.


#### SetReferences
Sets references to dependent components.

> (c [*KafkaConnectionResolver]) SetReferences(ctx context.Context,references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

