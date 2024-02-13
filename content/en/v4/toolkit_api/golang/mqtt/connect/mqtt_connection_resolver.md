---
type: docs
title: "MqttConnectionResolver"
linkTitle: "MqttConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-mqtt-go"
description: >
    Helper class that resolves an MQTT connection and credential parameters, 
    validates them and generates connection options.

---

### Description

The MqttConnectionResolver class allows you to resolve MQTT connections and credential parameters, validate them, and generate connection options.

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

#### NewMqttConnectionResolver
Creates a new instance of connection resolver component.

> NewMqttConnectionResolver() [*MqttConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
Connection resolver
> **ConnectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver)

#### CredentialResolver
Credential resolver
> **CredentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

</span>


### Methods

#### Compose
Composes MQTT connection options from connection and credential parameters.

> (c [*MqttConnectionResolver]()) Compose(context [IContext](../../../components/context/icontext), connection [*ConnectionParams](../../../config/connect/connection_resolver), credential [*CredentialParams](../../../config/auth/credential_resolver)) (options [*ConfigParams](../../../config/auth/credential_params), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connection**: [*ConnectionParams](../../../config/connect/connection_paramss) - connection parameters
- **credential**: [*CredentialParams](../../../config/auth/credential_params) - credential parameters
- **returns**: (options [*ConfigParams](../../../components/config/config_params), err error) - resolved MQTT connection options


#### Configure
Configures the component by passing its configuration parameters.

> (c [*MqttConnectionResolver]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves MQTT connection options from connection and credential parameters.

> (c [*MqttConnectionResolver]()) Resolve(context [IContext](../../../components/context/icontext)) (options [*ConfigParams](../../../components/config/config_params), err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (options [*ConfigParams](../../../components/config/config_params), err error) - resolved MQTT connection options.


#### SetReferences
Sets references to dependent components.

> (c [*MqttConnectionResolver]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

