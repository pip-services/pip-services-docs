---
type: docs
title: "NatsConnectionResolver"
linkTitle: "NatsConnectionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-nats-go"
description: >
    Helper class that resolves NATS connection and credential parameters, 
    validates them and generates connection options.

---

### Description

The NatsConnectionResolver class is used to resolve NATS connections and credential parameters, validate them and generate connection options.

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

#### ConnectionResolver
Connection resolver.
> **ConnectionResolver**: [*ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> **CredentialResolver**: [*CredentialResolver](../../../components/auth/credential_resolver)

</span>


### Instance methods

#### Compose
Composes NATS connection options from connection and credential parameters.

> (c [*NatsConnectionResolver]()) Compose(correlationId string, connections [[]*ConnectionParams](../../../components/connect/connection_params), credential [*CredentialParams](../../../components/auth/credential_params)) ([*ConfigParams](../../../commons/config/config_params), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connections**: [[]*ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [*CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: ([*ConfigParams](../../../commons/config/config_params), error) - resolved NATS connection options.


#### Configure
Configures the component by passing its configuration parameters.

> (c [*NatsConnectionResolver]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves NATS connection options from connection and credential parameters.

> (c [*NatsConnectionResolver]()) Resolve(correlationId string) ([*ConfigParams](../../../commons/config/config_params), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: ([*ConfigParams](../../../commons/config/config_params), error) - resolved NATS connection options.


#### SetReferences
Sets references to dependent components.

> (c [*NatsConnectionResolver]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
