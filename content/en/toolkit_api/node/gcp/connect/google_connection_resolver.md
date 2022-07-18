---
type: docs
title: "GoogleConnectionResolver"
linkTitle: "GoogleConnectionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-gcp-nodex"
description: >
    Helper class used to retrieve Google connection and credential parameters,
    validate them and compose a [GoogleConnectionParams](../google_connection_params) value.
 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

Helper class to retrieve Google connection and credential parameters,
validate them and compose a [GoogleConnectionParams](../google_connection_params) value.


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
[GoogleConnectionParams](../google_connection_params) value.

> `public` resolve(correlationId: string): Promise<[GoogleConnectionParams](../google_connection_params)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain. 
- **returns**: Promise<[GoogleConnectionParams](../google_connection_params)> - receives an GoogleConnectionParams value or error.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```typescript
let config = ConfigParams.fromTuples(
    'connection.uri', 'http://east-my_test_project.cloudfunctions.net/myfunction',
    'connection.protocol', 'http',
    'connection.region', 'east',
    'connection.function_name', 'myfunction',
    'credential.project_id', 'my_test_project',
    'credential.auth_token', '1234',
);
   
let connectionResolver = new GoogleConnectionResolver();
connectionResolver.configure(config);
connectionResolver.setReferences(references);
    
const connectionParams = await connectionResolver.resolve("123");
```

### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
