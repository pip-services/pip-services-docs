---
type: docs
title: "CompositeConnectionResolver"
linkTitle: "CompositeConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-config-node"
description: >
    Helper class that resolves connection and credential parameters,
    validates them and generates connection options.
---

**Implements**: [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The CompositeConnectionResolver class allows you to resolve connection and credential parameters, validate them and generate connection options.

#### Configuration parameters

**connection(s)**:
  - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../idiscovery)
  - **protocol**: communication protocol
  - **host**: host name or IP address
  - **port**: port number
  - **uri**: resource URI or connection string with all parameters in it
  
**credential(s)**:
  - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../auth/icredential_store)
  - **username**: user name
  - **password**: user password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials [ICredentialStore](../../auth/icredential_store)


### Fields

<span class="hide-title-link">

#### _options
The connection options
> `protected` **_options**: [ConfigParams](../../../components/config/config_params)

#### _connectionResolver
The connections resolver.
> `protected` **_connectionResolver**: [ConnectionResolver](../connection_resolver)

#### _credentialResolver
The credentials resolver.
> `protected` **_credentialResolver**: [CredentialResolver](../../auth/credential_resolver)

#### _clusterSupported
The cluster support (multiple connections)
> `protected` **_clusterSupported**: boolean

#### _defaultProtocol
The default protocol
> `protected` **_defaultProtocol**: string

#### _defaultPort
The default port
> `protected` **_defaultPort**: number

#### _supported_protocols
The list of supported protocols
> `protected` **_supportedProtocols**: string[]


</span>

### Instance methods

#### compose
Composes Composite connection options from connection and credential parameters.

> `public` compose(context: [IContext](../../../components/context/icontext), connections: [ConnectionParams](../connection_params)[], credential: [CredentialParams](../../auth/credential_params), parameters: [ConfigParams](../../../components/config/config_params)): [ConfigParams](../../../components/config/config_params)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **connections**: [ConnectionParams](../connection_params)[] - connection parameters
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [ConfigParams](../../../components/config/config_params) - optional parameters
- **returns**: [ConfigParams](../../../components/config/config_params) - resolved options or error.


#### composeOptions
A composite of several merger options

> `protected` composeOptions(connections: [ConnectionParams](../connection_params)[], credential: [CredentialParams](../../auth/credential_params), parameters: [ConfigParams](../../../components/config/config_params)): [ConfigParams](../../../components/config/config_params)

- **connections**: [ConnectionParams](../connection_params)[] - connection parameters
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [ConfigParams](../../../components/config/config_params) - optional parameters
- **returns**: [ConfigParams](../../../components/config/config_params) - resolved options or error


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### finalizeOptions
Finalize merged options.
This method can be overriden in child classes.

> `protected` finalizeOptions(options: [ConfigParams](../../../components/config/config_params)): [ConfigParams](../../../components/config/config_params)

- **options**: [ConfigParams](../../../components/config/config_params) - options: connection options
- **returns**: [ConfigParams](../../../components/config/config_params) - finalized connection options


#### mergeConnection
Merges connection options with connection parameters. 
This method can be overriden in child classes.

> `protected` mergeConnection( options: [ConfigParams](../../../components/config/config_params), connection: [ConnectionParams](../connection_params)): [ConfigParams](../../../components/config/config_params)

- **options**: [ConfigParams](../../../components/config/config_params) - connection options
- **connection**: [ConnectionParams](../connection_params) - connection parameters to be merged
- **returns**: [ConfigParams](../../../components/config/config_params) - merged connection options.


#### mergeCredential
Merges connection options with credential parameters.
This method can be overriden in child classes.

> `protected` mergeCredential(options: [ConfigParams](../../../components/config/config_params), credential: [CredentialParams](../../auth/credential_params)): [ConfigParams](../../../components/config/config_params)

- **options**: [ConfigParams](../../../components/config/config_params) - connection options
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be merged
- **returns**: [ConfigParams](../../../components/config/config_params) - merged connection options.


#### mergeOptional
Merges connection options with optional parameters.
This method can be overriden in child classes.

> `protected` mergeOptional(options: [ConfigParams](../../../components/config/config_params), parameters: [ConfigParams](../../../components/config/config_params)): [ConfigParams](../../../components/config/config_params)

- **options**: [ConfigParams](../../../components/config/config_params) - connection options
- **parameters**: [CredentialParams](../../auth/credential_params) - optional parameters to be merged
- **returns**: [ConfigParams](../../../components/config/config_params) - merged connection options.


#### resolve
Resolves connection options from connection and credential parameters.

> `public` resolve(context: [IContext](../../../components/context/icontext)): Promise<[ConfigParams](../../../components/config/config_params)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **returns**: Promise<[ConfigParams](../../../components/config/config_params)> - resolved options or error


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### validateConnection
Validates connection parameters. 
Throws error if validation failed.
This method can be overriden in child classes.

> `protected` validateConnection(context: [IContext](../../../components/context/icontext), connection: [ConnectionParams](../connection_params)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **connection**: [ConnectionParams](../connection_params) - connection parameters to be validated


#### validateCredential
Validates credential parameters.
This method can be overriden in child classes.

> `protected` validateCredential(context: [IContext](../../../components/context/icontext), credential: [CredentialParams](../../auth/credential_params)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through call chain.
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be validated
