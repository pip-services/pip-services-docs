---
type: docs
title: "CompositeConnectionResolver"
linkTitle: "CompositeConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-config-dart"
description: >
    Helper class that resolves connection and credential parameters,
    validates them and generates connection options.
---

**Implements**: [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

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
>  **_options**: [ConfigParams?](../../../components/config/config_params)

#### _connectionResolver
Connections resolver.
>  **_connectionResolver**: [ConnectionResolver](../connection_resolver)

#### _credentialResolver
Credentials resolver.
>  **_credentialResolver**: [CredentialResolver](../../auth/credential_resolver)

#### _clusterSupported
Cluster support (multiple connections)
>  **_clusterSupported**: bool

#### _defaultProtocol
Default protocol
>  **_defaultProtocol**: String?

#### _defaultPort
Default port
>  **_defaultPort**: int

#### _supported_protocols
List of supported protocols
>  **_supportedProtocols**: List\<String\>?


</span>

### Instance methods

#### compose
Composes composite connection options from connection and credential parameters.

> [ConfigParams](../../../components/config/config_params) compose(context: IContext, List<[ConnectionParams](../connection_params)> connections, [CredentialParams](../../auth/credential_params) credential, [ConfigParams](../../../components/config/config_params) parameters)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: List<[ConnectionParams](../connection_params)> - connection parameters
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [ConfigParams](../../../components/config/config_params) - optional parameters
- **returns**: [ConfigParams](../../../components/config/config_params) - resolved options or error.


#### composeOptions
A composite of several merger options

> [ConfigParams](../../../components/config/config_params) composeOptions(List<[ConnectionParams](../connection_params)> connections, [CredentialParams](../../auth/credential_params) credential, [ConfigParams](../../../components/config/config_params) parameters)

- **connections**: List<[ConnectionParams](../connection_params)> - connection parameters
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [ConfigParams](../../../components/config/config_params) - optional parameters
- **returns**: [ConfigParams](../../../components/config/config_params) - resolved options or error


#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### finalizeOptions
Finalize merged options.
This method can be overriden in child classes.

> [ConfigParams](../../../components/config/config_params) finalizeOptions([ConfigParams](../../../components/config/config_params) options)

- **options**: [ConfigParams](../../../components/config/config_params) - options: connection options
- **returns**: [ConfigParams](../../../components/config/config_params) - finalized connection options


#### mergeConnection
Merges connection options with connection parameters. 
This method can be overriden in child classes.

> [ConfigParams](../../../components/config/config_params) mergeConnection([ConfigParams](../../../components/config/config_params) options, [ConnectionParams](../connection_params) connection)

- **options**: [ConfigParams](../../../components/config/config_params) - connection options
- **connection**: [ConnectionParams](../connection_params) - connection parameters to be merged
- **returns**: [ConfigParams](../../../components/config/config_params) - merged connection options.


#### mergeCredential
Merges connection options with credential parameters.
This method can be overriden in child classes.

> [ConfigParams](../../../components/config/config_params) mergeCredential([ConfigParams](../../../components/config/config_params) options, [CredentialParams](../../auth/credential_params) credential)

- **options**: [ConfigParams](../../../components/config/config_params) - connection options
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be merged
- **returns**: [ConfigParams](../../../components/config/config_params) - merged connection options.


#### mergeOptional
Merges connection options with optional parameters.
This method can be overriden in child classes.

> [ConfigParams](../../../components/config/config_params) mergeOptional([ConfigParams](../../../components/config/config_params) options, [ConfigParams](../../../components/config/config_params) parameters)

- **options**: [ConfigParams](../../../components/config/config_params) - connection options
- **parameters**: [CredentialParams](../../auth/credential_params) - optional parameters to be merged
- **returns**: [ConfigParams](../../../components/config/config_params) - merged connection options.


#### resolve
Resolves connection options from connection and credential parameters.

>  Future<[ConfigParams](../../../components/config/config_params)> resolve(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Future<[ConfigParams](../../../components/config/config_params)> - resolved options or error


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### validateConnection
Validates connection parameters. 
Throws error if validation failed.
This method can be overriden in child classes.

> void validateConnection(IContext? context, [ConnectionParams?](../connection_params) connection)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connection**: [ConnectionParams?](../connection_params) - connection parameters to be validated


#### validateCredential
Validates credential parameters.
This method can be overriden in child classes.

> void validateCredential(IContext? context, [CredentialParams?](../../auth/credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be validated
