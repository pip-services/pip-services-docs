---
type: docs
title: "AzureConnectionResolver"
linkTitle: "AzureConnectionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
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

#### _connectionResolver
Connection resolver.
> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
Credential resolver.
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>

### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### resolve
Resolves connection and credential parameters and generates a single
[AzureConnectionParams](../azure_connection_params) value.

> `public` resolve(correlationId: string): Promise<[AzureConnectionParams](../azure_connection_params)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain. 
- **returns**: Promise<[AzureConnectionParams](../azure_connection_params)> - receives an AzureConnectionParams value or error.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```typescript
let config = ConfigParams.fromTuples(
    "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
    "connection.app_name", "myapp",
    "connection.function_name", "myfunction",
    "credential.auth_code", "XXXXXXXXXX",
);

let connectionResolver = new AzureConnectionResolver();
connectionResolver.configure(config);
connectionResolver.setReferences(references);

const connectionParams = await connectionResolver.resolve("123");
```

### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
