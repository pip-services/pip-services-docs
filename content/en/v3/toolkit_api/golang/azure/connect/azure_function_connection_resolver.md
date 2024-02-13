---
type: docs
title: "AzureFunctionConnectionResolver"
linkTitle: "AzureFunctionConnectionResolver"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-azure-gox"
description: >
    Helper class used to retrieve Azure connection and credential parameters,
    validate them and compose a [AzureFunctionConnectionParams](../azure_function_connection_params) value.
 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### connectionResolver
Connection resolver.
> **connectionResolver**: [*ConnectionResolver](../../../components/connect/connection_resolver)

#### credentialResolver
Credential resolver.
> **credentialResolver**: [*CredentialResolver](../../../components/auth/credential_resolver)

</span>

### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> (c [*AzureFunctionConnectionResolver]()) Configure(ctx context.Context, config [*ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Resolve
Resolves connection and credential parameters and generates a single
[AzureFunctionConnectionParams](../azure_function_connection_params) value.

> (c [*AzureFunctionConnectionResolver]()) Resolve(correlationId string) ([*AzureFunctionConnectionParams](), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain. 
- **returns**: ([*AzureFunctionConnectionParams](), error) - receives an AzureFunctionConnectionParams value or error.

#### SetReferences
Sets references to dependent components.

> (c [*AzureFunctionConnectionResolver]()) SetReferences(ctx context.Context, references [IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


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
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
