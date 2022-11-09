---
type: docs
title: "AzureFunctionConnectionResolver"
linkTitle: "AzureFunctionConnectionResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-azure-dotnet"
description: >
    Helper class used to retrieve Azure connection and credential parameters,
    validate them and compose a [AzureFunctionConnectionParams](../azure_function_connection_params) value.
 
---

**Inherits:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>

### Instance methods

#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### ResolveAsync
Resolves connection and credential parameters and generates a single
[AzureFunctionConnectionParams](../azure_function_connection_params) value.

> `public` Task<[AzureFunctionConnectionParams](../azure_function_connection_params)> ResolveAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain. 
- **returns**: Task<[AzureFunctionConnectionParams](../azure_function_connection_params)> - receives an AzureFunctionConnectionParams value or error.

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```cs
var config = ConfigParams.FromTuples(
    "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
    "connection.app_name", "myapp",
    "connection.function_name", "myfunction",
    "credential.auth_code", "XXXXXXXXXX",
);

var connectionResolver = new AzureFunctionConnectionResolver();
connectionResolver.Configure(config);
connectionResolver.SetReferences(references);

var connectionParams = await connectionResolver.ResolveAsync("123");
```

### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
