---
type: docs
title: "AwsConnectionResolver"
linkTitle: "AwsConnectionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-aws-go"
description: >
    Helper class used to retrieve AWS connection and credential parameters,
    validate them and compose a [AwsConnectionParams](../aws_connection_params) value.
 
---

### Description

The AwsConnectionResolver class allows you to retrieve AWS connection and credential parameters, validate them and compose a [AwsConnectionParams](../aws_connection_params) value.


#### Configuration parameters

- **connections**:                   
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **region**: (optional) AWS region
    - **partition**: (optional) AWS partition
    - **service**: (optional) AWS service
    - **resource_type**: (optional) AWS resource type
    - **resource**: (optional) AWS resource id
    - **arn**: (optional) AWS resource ARN
- **credentials**:    
    - **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **access_id**: AWS access/client id
    - **access_key**: AWS access/client id

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services to resolve connection.
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials.

### Constructors

#### NewAwsConnectionResolver
Creates new instance of component
> NewAwsConnectionResolver() [*AwsConnectionResolver]()

### Fields

<span class="hide-title-link">

#### connectionResolver
Connection resolver.
> **connectionResolver**: [*ConnectionResolver](../../../components/connect/connection_resolver)

#### credentialResolver
Credential resolver.
> **credentialResolver**: [*CredentialResolver](../../../components/auth/credential_resolver)

</span>

### Methods

#### Configure
Configures a component by passing its configuration parameters.

> (c [*AwsConnectionResolver]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### Resolve
Resolves a connection and credential parameters and generates a single
AWSConnectionParams value.

> (c [*AwsConnectionResolver]()) Resolve(correlationId string) (connection [*AwsConnectionParams](../aws_connection_params), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain. 
- **returns**: (connection [*AwsConnectionParams](../aws_connection_params), err error) - receives an AWSConnectionParams value or error.

#### SetReferences
Sets references to dependent components.

> (c [*AwsConnectionResolver]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```go
config := NewConfigParamsFromTuples(
     "connection.region", "us-east1",
     "connection.service", "s3",
     "connection.bucket", "mybucket",
     "credential.access_id", "XXXXXXXXXX",
     "credential.access_key", "XXXXXXXXXX"
 );

connectionResolver := NewAwsConnectionResolver();
connectionResolver.Configure(config);
connectionResolver.SetReferences(references);
err, connection :=connectionResolver.Resolve("123")
// Now use connection...
```

### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
