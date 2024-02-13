---
type: docs
title: "AzureFunctionConnectionResolver"
linkTitle: "AzureFunctionConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-azure-go"
description: >
    Helper class used to retrieve Azure connection and credential parameters,
    validate them and compose a [AzureFunctionConnectionParams](../azure_function_connection_params) value.
 
---

**Implements:** [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

Helper class to retrieve Azure connection and credential parameters,
validate them and compose a [AzureFunctionConnectionParams](../azure_function_connection_params) value.


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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../connect/connection_resolver) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### connectionResolver
Connection resolver.
> **connectionResolver**: [*ConnectionResolver](../../../config/connect/connection_resolver)

#### credentialResolver
Credential resolver.
> **credentialResolver**: [*CredentialResolver](../../../config/auth/credential_resolver)

</span>

### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> (c [*AzureFunctionConnectionResolver]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### Resolve
Resolves connection and credential parameters and generates a single
[AzureFunctionConnectionParams](../azure_function_connection_params) value.

> (c [*AzureFunctionConnectionResolver]()) Resolve(context [IContext](../../../components/context/icontext)) ([*AzureFunctionConnectionParams](), error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **returns**: ([*AzureFunctionConnectionParams](), error) - receives an AzureFunctionConnectionParams value or error.

#### SetReferences
Sets references to dependent components.

> (c [*AzureFunctionConnectionResolver]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


### Examples

```go
config := config.NewConfigParamsFromTuples(
	"connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
	"connection.app_name", "myapp",
	"connection.function_name", "myfunction",
	"credential.auth_code", "XXXXXXXXXX",
)
ctx := context.Background()
connectionResolver := connect.NewAzureConnectionResolver()
connectionResolver.Configure(ctx, config)
connectionResolver.SetReferences(ctx, references)

connectionParams, _ := connectionResolver.Resolve("123")
```

### See also
- #### [ConnectionParams](../../../config/connect/connection_params)
- #### [IDiscovery](../../../config/connect/idiscovery)

