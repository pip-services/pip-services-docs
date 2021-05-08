---
type: docs
title: "CompositeConnectionResolver"
linkTitle: "CompositeConnectionResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Helper class that resolves connection and credential parameters,
    validates them and generates connection options.
---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)


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

##### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials [ICredentialStore](../../auth/icredential_store)


### Fields

<span class="hide-title-link">

#### _options
The connection options
> **_options**: [ConfigParams](../../../commons/config/config_params)

#### _connection_resolver
The connections resolver.
> **_connection_resolver**: [ConnectionResolver](../connection_resolver)

#### _credential_resolver
The credentials resolver.
> **_credential_resolver**: [CredentialResolver](../../auth/credential_resolver)

#### _cluster_supported
The cluster support (multiple connections)
> **_cluster_supported**: bool

#### _default_protocol
The default protocol
> **_default_protocol**: str

#### _default_port
The default protocol
> **_default_port**: int

#### _supported_protocols
The list of supported protocols
> **_supported_protocols**: List[str]


</span>

### Methods

#### compose
Composes Composite connection options from connection and credential parameters.

>  compose(correlation_id: Optional[str], connections: List[[ConnectionParams](../connection_params)], credential: [CredentialParams](../../auth/credential_params), parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **connections**: List[[ConnectionParams](../connection_params)] - connection parameters
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters
- **parameters**: [ConfigParams](../../../commons/config/config_params) - optional parameters
- **returns**: [ConfigParams](../../../commons/config/config_params) - resolved options or error.


#### _compose_options
A composite of several merger options

>  _compose_options(connections: List[[ConnectionParams](../connection_params)], credential: [CredentialParams](../../auth/credential_params), parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **connections**: List[[ConnectionParams](../connection_params)] - TODO add description
- **credential**: [CredentialParams](../../auth/credential_params) - TODO add description
- **parameters**: [ConfigParams](../../../commons/config/config_params) - TODO add description
- **returns**: [ConfigParams](../../../commons/config/config_params) - TODO add description


#### configure
Configures component by passing configuration parameters.

>  configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### _finalize_options
Finalize merged options
This method can be overriden in child classes.

>  _finalize_options(options: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **options**: [ConfigParams](../../../commons/config/config_params) - options: connection options
- **returns**: [ConfigParams](../../../commons/config/config_params) - finalized connection options


#### _merge_connection
Merges connection options with connection parameters
This method can be overriden in child classes.

>  _merge_connection(self, options: [ConfigParams](../../../commons/config/config_params), connection: [ConnectionParams](../connection_params)): [ConfigParams](../../../commons/config/config_params)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **connection**: [ConnectionParams](../connection_params) - connection parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.


#### _merge_credential
Merges connection options with credential parameters
This method can be overriden in child classes.

>  _merge_credential(options: [ConfigParams](../../../commons/config/config_params), credential: [CredentialParams](../../auth/credential_params)): [ConfigParams](../../../commons/config/config_params)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.


#### _merge_optional
Merges connection options with optional parameters
This method can be overriden in child classes.

>  _merge_optional(options: [ConfigParams](../../../commons/config/config_params), parameters: [ConfigParams](../../../commons/config/config_params)): [ConfigParams](../../../commons/config/config_params)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **parameters**: [CredentialParams](../../auth/credential_params) - optional parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.


#### resolve
Resolves connection options from connection and credential parameters.

>  resolve(correlation_id: Optional[str]): [ConfigParams](../../../commons/config/config_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: [ConfigParams](../../../commons/config/config_params) - resolved options or error


#### set_references
Sets references to dependent components.

>  set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### _validate_connection
Validates connection parameters. 
Throws error if validation failed.
This method can be overriden in child classes.

>  _validate_connection(correlation_id: Optional[str], connection: [ConnectionParams](../connection_params))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **connection**: [ConnectionParams](../connection_params) - connection parameters to be validated


#### _validate_credential
Validates credential parameters.
This method can be overriden in child classes.
This method can be overriden in child classes.

>  _validate_connection(correlation_id: Optional[str], credential: [CredentialParams](../../auth/credential_params))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **credential**: [CredentialParams](../../auth/credential_params) - credential parameters to be validated
