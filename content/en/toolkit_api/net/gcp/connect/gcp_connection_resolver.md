---
type: docs
title: "GcpConnectionResolver"
linkTitle: "GcpConnectionResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
description: >
    Helper class used to retrieve Google connection and credential parameters,
    validate them and compose a [GcpConnectionParams](../gcp_connection_params) value.
 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

Helper class to retrieve Google connection and credential parameters,
validate them and compose a [GcpConnectionParams](../gcp_connection_params) value.


#### Configuration parameters

- **connections**:                   
     - **uri**:           full connection uri with specific app and function name
     - **protocol**:      connection protocol
     - **project_id**:    is your Google Cloud Platform project ID
     - **region**:        is the region where your function is deployed
     - **function_name**: is the name of the HTTP function you deployed
- **credentials**:    
    - **account**: the service account name
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

#### Configure
Configures a component by passing its configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### ResolveAsync
Resolves connection and credential parameters and generates a single
[GcpConnectionParams](../gcp_connection_params) value.

> `public` Task<[GcpConnectionParams](../gcp_connection_params)> ResolveAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain. 
- **returns**: Task<[GcpConnectionParams](../gcp_connection_params)> - receives an GcpConnectionParams value or error.

#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```cs
var config = GcpConnectionParams.FromTuples(
    "connection.uri", "http://east-my_test_project.cloudfunctions.net/myfunction",
    "connection.protocol", "http",
    "connection.region", "east",
    "connection.function", "myfunction",
    "connection.project_id", "my_test_project",
    "credential.auth_token", "1234"

);

var connectionResolver = new GcpConnectionResolver();
connectionResolver.Configure(config);
connectionResolver.SetReferences(references);

var connectionParams = await connectionResolver.ResolveAsync("123");
```

### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
