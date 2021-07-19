---
type: docs
title: "MqttConnectionResolver"
linkTitle: "MqttConnectionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-mqtt-go"
description: >
    Helper class that resolves an MQTT connection and credential parameters, 
    validates them and generates connection options.

---

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

### Constructors

#### NewMqttConnectionResolver
Creates a new instance of connection resolver component.

> NewMqttConnectionResolver() [*MqttConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
Connection resolver
> **ConnectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### CredentialResolver
Credential resolver
> **CredentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>


### Methods

#### Compose
Composes MQTT connection options from connection and credential parameters.

> (c [*MqttConnectionResolver]()) Compose(correlationId string, connection [*ConnectionParams](../../../components/connect/connection_params), credential [*CredentialParams](../../../components/auth/credential_params)) (options [*ConfigParams](../../../commons/config/config_params), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connection**: [*ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [*CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: (options [*ConfigParams](../../../commons/config/config_params), err error) - resolved MQTT connection options


#### Configure
Configures the component by passing its configuration parameters.

> (c [*MqttConnectionResolver]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves MQTT connection options from connection and credential parameters.

> (c [*MqttConnectionResolver]()) Resolve(correlationId string) (options [*ConfigParams](../../../commons/config/config_params), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (options [*ConfigParams](../../../commons/config/config_params), err error) - resolved MQTT connection options.


#### SetReferences
Sets references to dependent components.

> (c [*MqttConnectionResolver]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
