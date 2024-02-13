---
type: docs
title: "AzureFunctionConnectionResolver"
linkTitle: "AzureFunctionConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-azure-dart"
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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials.

### Fields

<span class="hide-title-link">

#### connectionResolver
Connection resolver.
> `final` **_connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver)

#### credentialResolver
Credential resolver.
> `final` **credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

</span>

### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### resolve
Resolves connection and credential parameters and generates a single
[AzureFunctionConnectionParams](../azure_function_connection_params) value.

> Future<AzureFunctionConnectionParams> resolve(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain. 
- **returns**:  Future([AzureFunctionConnectionParams](../azure_function_connection_params)) - receives an AzureFunctionConnectionParams value or error.

#### setReferences
Sets references to dependent components.

> void setReferences(IReferences references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.



### Examples

```dart
var config = ConfigParams.fromTuples([
         'connection.uri', 'http://myapp.azurewebsites.net/api/myfunction',
         'connection.app_name', 'myapp',
         'connection.function_name', 'myfunction',
         'credential.auth_code', 'XXXXXXXXXX',
     ]);

     var connectionResolver = AzureConnectionResolver();
     connectionResolver.configure(config);
     connectionResolver.setReferences(references);

     final connectionParams = await connectionResolver.resolve(Context.fromTraceId('123'));
         // Now use connection...
```

### See also
- #### [ConnectionParams](../../../config/connect/connection_params)
- #### [IDiscovery](../../../config/connect/idiscovery)
