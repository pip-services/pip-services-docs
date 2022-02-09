---
type: docs
title: "AzureConnectionResolver"
linkTitle: "AzureConnectionResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-gcp-nodex"
description: >
    Helper class used to retrieve Azure connection and credential parameters,
    validate them and compose a [AzureConnectionParams](../azure_connection_params) value.
 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### _connection_resolver
Connection resolver.
> **_connection_resolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> **_credential_resolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>

### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### resolve
Resolves connection and credential parameters and generates a single
[AzureConnectionParams](../azure_connection_params) value.

> resolve(correlation_id: Optional[str]): [AzureConnectionParams](../azure_connection_params)

- **correlationId**: Optional[str] - (optional) transaction id used to trace execution through the call chain. 
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
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
