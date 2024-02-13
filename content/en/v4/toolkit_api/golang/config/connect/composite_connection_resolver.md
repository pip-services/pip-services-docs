---
type: docs
title: "CompositeConnectionResolver"
linkTitle: "CompositeConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Helper class that resolves connection and credential parameters,
    validates them and generates connection options.
---

### Description

The CompositeConnectionResolver class allows you to resolve connection and credential parameters, validate them and generates connection options.

#### Configuration parameters

**connection(s)**:
  - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../idiscovery)
  - **protocol**: communication protocol
  - **host**: host name or IP address
  - **port**: port number
  - **uri**: resource URI or connection string with all parameters in it
  
**credential(s)**:
  - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../auth/icredential_store)
  - **username**: user name
  - **password**: user password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials [ICredentialStore](../../auth/icredential_store)


### Fields

<span class="hide-title-link">

#### Options
Connection options
> **Options**: [ConfigParams](../../../components/config/config_params)

#### ConnectionResolver
Connections resolver.
> **ConnectionResolver**: [ConnectionResolver](../connection_resolver)

#### CredentialResolver
Credentials resolver.
> **CredentialResolver**: [CredentialResolver](../../auth/credential_resolver)

#### ClusterSupported
Cluster support (multiple connections)
> **ClusterSupported**: bool

#### DefaultProtocol
Default protocol
> **DefaultProtocol**: string

#### DefaultPort
Default port
> **DefaultPort**: int

#### SupportedProtocols
List of supported protocols
> **SupportedProtocols**: []string


</span>

### Methods

#### Compose
Composes Composite connection options from connection and credential parameters.

> (c [*CompositeConnectionResolver]()) Compose(correlationId string, connections [][*ConnectionParams](../connection_params), credential [*auth.CredentialParams](../../auth/credential_params), parameters [*config.ConfigParams](../../../components/config/config_params)) (options [*config.ConfigParams](../../../components/config/config_params), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connections**: [][*ConnectionParams](../connection_params) - connection parameters
- **credential**: [*auth.CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [*config.ConfigParams](../../../components/config/config_params) - optional parameters
- **returns**: (options [*config.ConfigParams](../../../components/config/config_params), err error) - resolved options or error.


#### ComposeOptions
A composite of several merger options

> (c [*CompositeConnectionResolver]()) ComposeOptions(connections [][*ConnectionParams](../connection_params), credential [*auth.CredentialParams](../../auth/credential_params), parameters [*config.ConfigParams](../../../components/config/config_params)) [*config.ConfigParams](../../../components/config/config_params)

- **connections**: [][*ConnectionParams](../connection_params) - connection parameters
- **credential**: [*auth.CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [*config.ConfigParams](../../../components/config/config_params) - optional parameters
- **returns**: [*config.ConfigParams](../../../components/config/config_params) - resolved options or error


#### Configure
Configures component by passing configuration parameters.

> (c [*CompositeConnectionResolver]()) Configure(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### FinalizeOptions
Finalize merged options.
This method can be overriden in child classes.

> (c [*CompositeConnectionResolver]()) FinalizeOptions(options [*config.ConfigParams](../../../components/config/config_params)) [*config.ConfigParams](../../../components/config/config_params)

- **options**: [*config.ConfigParams](../../../components/config/config_params) - options: connection options
- **returns**: [*config.ConfigParams](../../../components/config/config_params) - finalized connection options


#### MergeConnection
Merges connection options with connection parameters. 
This method can be overriden in child classes.

> (c [*CompositeConnectionResolver]()) MergeConnection(options [*config.ConfigParams](../../../components/config/config_params), connection [*ConnectionParams](../connection_params)) [*config.ConfigParams](../../../components/config/config_params)

- **options**: [ConfigParams](../../../components/config/config_params) - connection options
- **connection**: [*ConnectionParams](../connection_params) - connection parameters to be merged
- **returns**: [*config.ConfigParams](../../../components/config/config_params) - merged connection options.


#### MergeCredential
Merges connection options with credential parameters.
This method can be overriden in child classes.

> (c [*CompositeConnectionResolver]()) MergeCredential(options [*config.ConfigParams](../../../components/config/config_params), credential [*auth.CredentialParams](../../auth/credential_params)) [*config.ConfigParams](../../../components/config/config_params)

- **options**: [ConfigParams](../../../components/config/config_params) - connection options
- **credential**: [*auth.CredentialParams](../../auth/credential_params) - credential parameters to be merged
- **returns**: [*config.ConfigParams](../../../components/config/config_params) - merged connection options.


#### MergeOptional
Merges connection options with optional parameters.
This method can be overriden in child classes.

> (c [*CompositeConnectionResolver]()) MergeOptional(options [*config.ConfigParams](../../../components/config/config_params), parameters [*config.ConfigParams](../../../components/config/config_params)) [*config.ConfigParams](../../../components/config/config_params)

- **options**: [*config.ConfigParams](../../../components/config/config_params) - connection options
- **parameters**: [*config.ConfigParams](../../../components/config/config_params) - optional parameters to be merged
- **returns**: [*config.ConfigParams](../../../components/config/config_params) - merged connection options.


#### Resolve
Resolves connection options from connection and credential parameters.

> (c [*CompositeConnectionResolver]()) Resolve(correlationId string) (options [*config.ConfigParams](../../../components/config/config_params), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (options [*config.ConfigParams](../../../components/config/config_params), err error) - resolved options or error


#### SetReferences
Sets references to dependent components.

> (c [*CompositeConnectionResolver]()) SetReferences(ctx context.Context, references [refer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [refer.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


#### ValidateConnection
Validates connection parameters. 
Throws error if validation failed.
This method can be overriden in child classes.

> (c [*CompositeConnectionResolver]()) ValidateConnection(correlationId string, connection [*ConnectionParams](../connection_params)) error

- **correlationId**: string - (optional) transaction id usedd to trace execution through the call chain.
- **connection**: [*ConnectionParams](../connection_params) - connection parameters to be validated
- **returns**: error - returns error if validation failed


#### ValidateCredential
Validates credential parameters.
This method can be overriden in child classes.

> (c [*CompositeConnectionResolver]()) ValidateCredential(correlationId string, credential [*auth.CredentialParams](../../auth/credential_params)) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **credential**: [*auth.CredentialParams](../../auth/credential_params) - credential parameters to be validated
- **returns**: error - returns error if validation failed

