---
type: docs
title: "MqttConnectionResolver"
linkTitle: "MqttConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-mqtt-node"
description: >
    Helper class that resolves an MQTT connection and credential parameters, 
    validates them and generates connection options.

---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

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



### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver)

#### _credentialResolver
Credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

</span>


### Instance methods

#### compose
Composes MQTT connection options from connection and credential parameters.

> `public` compose(context: [IContext](../../../components/context/icontext), connections: [ConnectionParams[]](../../../config/connect/connection_params), credential: [CredentialParams](../../../config/auth/credential_params)): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: [ConnectionParams[]](../../../config/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../config/auth/credential_params) - credential parameters
- **returns**: Promise\<any\> - resolved MQTT connection options


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### resolve
Resolves MQTT connection options from connection and credential parameters.

> `public` resolve(context: [IContext](../../../components/context/icontext)): Promise\<any\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise\<any\> - resolved MQTT connection options.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
