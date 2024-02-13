---
type: docs
title: "CompositeConnectionResolver"
linkTitle: "CompositeConnectionResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Helper class that resolves connection and credential parameters,
    validates them and generates connection options.
---

**Inherits**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CompositeConnectionResolver class allows you to resolve connection and credential parameters, validate them and generate connection options.

#### Configuration parameters

**connection(s)**:
  - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../idiscovery)
  - **protocol**: communication protocol
  - **host**: host name or IP address
  - **port**: port number
  - **uri**: resource URI or connection string with all parameters in it
  
**credential(s)**:
  - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../auth/icredential_store)
  - **username**: username
  - **password**: user's password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials [ICredentialStore](../../auth/icredential_store)


### Fields

<span class="hide-title-link">

#### _options
Connection options
> `protected` **_options**: [ConfigParams](../../../commons/config/config_params)

#### _connectionResolver
Connections resolver.
> `protected` **_connectionResolver**: [ConnectionResolver](../connection_resolver)

#### _credentialResolver
Credentials resolver.
> `protected` **_credentialResolver**: [CredentialResolver](../../auth/credential_resolver)

#### _clusterSupported
Cluster support (multiple connections)
> `protected` **_clusterSupported**: bool

#### _defaultProtocol
Default protocol
> `protected` **_defaultProtocol**: string

#### _defaultPort
Default port
> `protected` **_defaultPort**: int

#### _supported_protocols
List of supported protocols
> `protected` **_supportedProtocols**: IList\<string\>


</span>

### Instance methods

#### Compose
Composes composite connection options from connection and credential parameters.

> `public` [ConfigParams](../../../commons/config/config_params) Compose(string correlationId, IList<[ConnectionParams](../connection_params)> connections, [CredentialParams](../../auth/credential_params) credential, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connections**: IList<[ConnectionParams](../connection_params)> - connection parameters
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [ConfigParams](../../../commons/config/config_params) - optional parameters
- **returns**: [ConfigParams](../../../commons/config/config_params) - resolved options or error.


#### ComposeOptions
Composite of several merger options

> `protected` [ConfigParams](../../../commons/config/config_params) ComposeOptions(IList<[ConnectionParams](../connection_params)> connections, [CredentialParams](../../auth/credential_params) credential, [ConfigParams](../../../commons/config/config_params) parameters)

- **connections**: [ConnectionParams](../connection_params)[] - connection parameters
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: IList<[ConnectionParams](../connection_params)> - optional parameters
- **returns**: [ConfigParams](../../../commons/config/config_params) - resolved options or error


#### Configure
Configures component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### FinalizeOptions
Finalize merged options.
This method can be overriden in child classes.

> `protected` [ConfigParams](../../../commons/config/config_params) FinalizeOptions([ConfigParams](../../../commons/config/config_params) options)

- **options**: [ConfigParams](../../../commons/config/config_params) - options: connection options
- **returns**: [ConfigParams](../../../commons/config/config_params) - finalized connection options


#### MergeConnection
Merges connection options with connection parameters. 
This method can be overriden in child classes.

> `protected` [ConfigParams](../../../commons/config/config_params) MergeConnection([ConfigParams](../../../commons/config/config_params) options, [ConnectionParams](../connection_params) connection)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **connection**: [ConnectionParams](../connection_params) - connection parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.


#### MergeCredential
Merges connection options with credential parameters.
This method can be overriden in child classes.

> `protected` [ConfigParams](../../../commons/config/config_params) MergeCredential([ConfigParams](../../../commons/config/config_params) options, [CredentialParams](../../auth/credential_params) credential)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.


#### MergeOptional
Merges connection options with optional parameters.
This method can be overriden in child classes.

> `protected` [ConfigParams](../../../commons/config/config_params) MergeOptional([ConfigParams](../../../commons/config/config_params) options, [ConfigParams](../../../commons/config/config_params) parameters)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **parameters**: [CredentialParams](../../auth/credential_params) - optional parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.


#### ResolveAsync
Resolves connection options from connection and credential parameters.

> `public` Task<[ConfigParams](../../../commons/config/config_params)> ResolveAsync(string correlationId): 

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task<[ConfigParams](../../../commons/config/config_params)> - resolved options or error


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### ValidateConnection
Validates connection parameters. 
Throws error if validation failed.
This method can be overriden in child classes.

> `protected` void ValidateConnection(string correlationId, [ConnectionParams](../connection_params)) connection)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connection**: [ConnectionParams](../connection_params) - connection parameters to be validated


#### ValidateCredential
Validates credential parameters.
This method can be overriden in child classes.

> `protected` void ValidateCredential(string correlationId, [CredentialParams](../../auth/credential_params) credential)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be validated
