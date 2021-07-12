---
type: docs
title: "MqttConnectionResolver"
linkTitle: "MqttConnectionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mqtt-nodex"
description: >
    Helper class that resolves an MQTT connection and credential parameters, 
    validates them and generates connection options.

---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

### Description

The MqttConnectionResolver class allows you to resolve MQTT connections and credential parameters, validate them, and generate connection options.

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
Connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
Credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>


### Instance methods

#### compose
Composes MQTT connection options from connection and credential parameters.

> `public` compose(correlationId: string, connections: [ConnectionParams[]](../../../components/connect/connection_params), credential: [CredentialParams](../../../components/auth/credential_params)): Promise\<any\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connections**: [ConnectionParams[]](../../../components/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: Promise\<any\> - resolved MQTT connection options


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### resolve
Resolves MQTT connection options from connection and credential parameters.

> `public` resolve(correlationId: string): Promise\<any\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise\<any\> - resolved MQTT connection options.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
