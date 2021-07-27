---
type: docs
title: "CompositeConnectionResolver"
linkTitle: "CompositeConnectionResolver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Helper class that resolves connection and credential parameters,
    validates them and generates connection options.
---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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
>  **_options**: [ConfigParams](../../../commons/config/config_params)

#### _connectionResolver
The connections resolver.
>  **_connectionResolver**: [ConnectionResolver](../connection_resolver)

#### _credentialResolver
The credentials resolver.
>  **_credentialResolver**: [CredentialResolver](../../auth/credential_resolver)

#### _clusterSupported
The cluster support (multiple connections)
>  **_clusterSupported**: bool

#### _defaultProtocol
The default protocol
>  **_defaultProtocol**: String

#### _defaultPort
The default port
>  **_defaultPort**: int

#### _supported_protocols
The list of supported protocols
>  **_supportedProtocols**: List\<String\>


</span>

### Instance methods

#### compose
Composes Composite connection options from connection and credential parameters.

> [ConfigParams](../../../commons/config/config_params) compose(correlationId: String, List<[ConnectionParams](../connection_params)> connections, [CredentialParams](../../auth/credential_params) credential, [ConfigParams](../../../commons/config/config_params) parameters)

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **connections**: List<[ConnectionParams](../connection_params)> - connection parameters
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [ConfigParams](../../../commons/config/config_params) - optional parameters
- **returns**: [ConfigParams](../../../commons/config/config_params) - resolved options or error.


#### composeOptions
A composite of several merger options

> [ConfigParams](../../../commons/config/config_params) composeOptions(List<[ConnectionParams](../connection_params)> connections, [CredentialParams](../../auth/credential_params) credential, [ConfigParams](../../../commons/config/config_params) parameters)

- **connections**: List<[ConnectionParams](../connection_params)> - connection parameters
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [ConfigParams](../../../commons/config/config_params) - optional parameters
- **returns**: [ConfigParams](../../../commons/config/config_params) - resolved options or error


#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### finalizeOptions
Finalize merged options.
This method can be overriden in child classes.

> [ConfigParams](../../../commons/config/config_params) finalizeOptions([ConfigParams](../../../commons/config/config_params) options)

- **options**: [ConfigParams](../../../commons/config/config_params) - options: connection options
- **returns**: [ConfigParams](../../../commons/config/config_params) - finalized connection options


#### mergeConnection
Merges connection options with connection parameters. 
This method can be overriden in child classes.

> [ConfigParams](../../../commons/config/config_params) mergeConnection([ConfigParams](../../../commons/config/config_params) options, [ConnectionParams](../connection_params) connection)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **connection**: [ConnectionParams](../connection_params) - connection parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.


#### mergeCredential
Merges connection options with credential parameters.
This method can be overriden in child classes.

> [ConfigParams](../../../commons/config/config_params) mergeCredential([ConfigParams](../../../commons/config/config_params) options, [CredentialParams](../../auth/credential_params) credential)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.


#### mergeOptional
Merges connection options with optional parameters.
This method can be overriden in child classes.

> [ConfigParams](../../../commons/config/config_params) mergeOptional([ConfigParams](../../../commons/config/config_params) options, [ConfigParams](../../../commons/config/config_params) parameters)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **parameters**: [CredentialParams](../../auth/credential_params) - optional parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.


#### resolve
Resolves connection options from connection and credential parameters.

>  Future<[ConfigParams](../../../commons/config/config_params)> resolve(String correlationId)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **returns**: Future<[ConfigParams](../../../commons/config/config_params)> - resolved options or error


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### validateConnection
Validates connection parameters. 
Throws error if validation failed.
This method can be overriden in child classes.

> void validateConnection(String correlationId, [ConnectionParams](../connection_params) connection)

- **correlationId**: String - (optional) transaction id to trace execution through a call chain.
- **connection**: [ConnectionParams](../connection_params) - connection parameters to be validated


#### validateCredential
Validates credential parameters.
This method can be overriden in child classes.

> void validateCredential(String correlationId, [CredentialParams](../../auth/credential_params) credential)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be validated
