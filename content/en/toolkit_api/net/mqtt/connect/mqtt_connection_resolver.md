---
type: docs
title: "MqttConnectionResolver"
linkTitle: "MqttConnectionResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mqtt-dotnet"
description: >
    Helper class that resolves an MQTT connection and credential parameters, 
    validates them and generates connection options.

---

**Inherits:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

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
> `private` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
Credential resolver
> `private` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>


### Instance methods

#### Compose
Composes MQTT connection options from connection and credential parameters.

> `public` [ConfigParams](../../../commons/config/config_params) Compose(string correlationId, List<[ConnectionParams](../../../components/connect/connection_params)> connections, [CredentialParams](../../../components/auth/credential_params) credential)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connections**: List<[ConnectionParams](../../../components/connect/connection_params)> - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: [ConfigParams](../../../commons/config/config_params) - resolved MQTT connection options


#### Configure
Configures the component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves MQTT connection options from connection and credential parameters.

> `public` Task<[ConfigParams](../../../commons/config/config_params)> ResolveAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task<[ConfigParams](../../../commons/config/config_params)> - resolved MQTT connection options.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
