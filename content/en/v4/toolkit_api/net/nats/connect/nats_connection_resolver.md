---
type: docs
title: "NatsConnectionResolver"
linkTitle: "NatsConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-kafka-dotnet"
description: >
    Helper class that resolves NATS connections and credential parameters, 
    validates them and generates connection options.

---

**ImpInherits:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

The NatsConnectionResolver class is used to resolve NATS connections and credential parameters, validate them and generate connection options.

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
Connection resolver.
> `private` **_connectionResolver**: [ConnectionResolver](../../../connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> `private` **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

</span>


### Instance methods

#### Compose
Composes NATS connection options from connection and credential parameters.

> `public` [ConfigParams](../../../components/config/config_params) Compose(IContext context, List<[ConnectionParams](../../../config/connect/connection_params)> connections, [CredentialParams](../../../config/auth/credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: List<[ConnectionParams](../../../config/connect/connection_params)> - connection parameters.
- **credential**: [CredentialParams](../../../config/auth/credential_params) - credential parameters.
- **returns**: [ConfigParams](../../../components/config/config_params) - resolved NATS connection options.


#### Configure
Configures the component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### ResolveAsync
Resolves NATS connection options from connection and credential parameters.

> `public` Task<[ConfigParams](../../../components/config/config_params)> ResolveAsync(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Task<[ConfigParams](../../../components/config/config_params)> - resolved NATS connection options.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.
