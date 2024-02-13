---
type: docs
title: "KafkaConnectionResolver"
linkTitle: "KafkaConnectionResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-kafka-python"
description: >
    Helper class that resolves a Kafka connection and credential parameters, validates them and generates connection options.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description

The KafkaConnectionResolver class is used to resolve Kafka connections and credential parameters, validate them and generate connection options.

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



### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver.
> **_connection_resolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> **_credential_resolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>


### Instance methods

#### compose
Composes Kafka connection options from connection and credential parameters.

> compose(correlation_id: Optional[str], connections: List[[ConnectionParams](../../../components/connect/connection_params)], credential: [CredentialParams](../../../components/auth/credential_params)): Any

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **connections**: List[[ConnectionParams](../../../components/connect/connection_params)] - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: Any - resolved Kafka connection options.


#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### resolve
Resolves Kafka connection options from connection and credential parameters.

> resolve(correlation_id:  Optional[str]): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **returns**: [ConfigParams](../../../commons/config/config_params) - resolved Kafka connection options.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
