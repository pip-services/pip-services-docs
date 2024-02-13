---
type: docs
title: "AzureConnectionResolver"
linkTitle: "AzureConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-azure-python"
description: >
    Helper class used to retrieve Azure connection and credential parameters,
    validate them and compose a [AzureConnectionParams](../azure_connection_params) value.
 
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

Helper class to retrieve Azure connection and credential parameters,
validate them and compose a [AzureConnectionParams](../azure_connection_params) value.


#### Configuration parameters

- **connections**:                   
     - **uri**:           full connection uri with specific app and function name
     - **protocol**:      connection protocol
     - **project_id**:    is your Google Cloud Platform project ID
     - **region**:        is the region where your function is deployed
     - **function_name**: is the name of the HTTP function you deployed
- **credentials**:    
    - **auth_token**:    Google-generated ID token or null if using custom auth

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### _connection_resolver
Connection resolver.
> **_connection_resolver**: [ConnectionResolver](../../../config/connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> **_credential_resolver**: [CredentialResolver](../../../config/auth/credential_resolver)

</span>

### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_param))

- **config**: [ConfigParams](../../../components/config/config_param) - configuration parameters to be set.

#### resolve
Resolves connection and credential parameters and generates a single
[AzureConnectionParams](../azure_connection_params) value.

> resolve(context: Optional[IContext): [AzureConnectionParams](../azure_connection_params)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **returns**: [AzureConnectionParams](../azure_connection_params) - receives an AzureConnectionParams value or error.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```python
config = ConfigParams.from_tuples(
    "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
    "connection.app_name", "myapp",
    "connection.function_name", "myfunction",
    "credential.auth_code", "XXXXXXXXXX",
)

connection_resolver = AzureConnectionResolver()
connection_resolver.configure(config)
connection_resolver.set_references(references)
connection_params = connection_resolver.resolve("123")
```

### See also
- #### [ConnectionParams](../../../config/connect/connection_params)
- #### [IDiscovery](../../../config/connect/idiscovery)
