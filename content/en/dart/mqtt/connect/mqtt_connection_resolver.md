---
type: docs
title: "MqttConnectionResolver"
linkTitle: "MqttConnectionResolver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-mqtt-dart"
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

#### connectionResolver
Connection resolver
> **connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### credentialResolver
Credential resolver
> **credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>


### Instance methods

#### compose
Composes MQTT connection options from connection and credential parameters.

> Future<[ConfigParams](../../../commons/config/config_params)> compose(String correlationId, [ConnectionParams](../../../components/connect/connection_params) connection, [CredentialParams](../../../components/auth/credential_params) credential)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **connections**: [ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: Future<[ConfigParams](../../../commons/config/config_params)> - resolved MQTT connection options


#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### resolve
Resolves MQTT connection options from connection and credential parameters.

> Future<[ConfigParams](../../../commons/config/config_params)> resolve(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **returns**: Future<[ConfigParams](../../../commons/config/config_params)> - resolved MQTT connection options.


#### setReferences
Sets references to dependent components.

> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
