---
type: docs
title: "AwsConnectionResolver"
linkTitle: "AwsConnectionResolver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-aws-dart"
description: >
    Helper class used to retrieve AWS connection and credential parameters,
    validate them and compose a [AwsConnectionParams](../aws_connection_params) value.
 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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

### Fields

<span class="hide-title-link">

#### connectionResolver
Connection resolver.
> **connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### connectionResolver
Credential resolver.
> **connectionResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>

### Instance methods

#### configure
Configures a component by passing its configuration parameters.

`@override`
void configure([ConfigParams](../../../commons/config/config_params) config)
- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### resolve
Resolves a connection and credential parameters and generates a single
AWSConnectionParams value.

> Future<[AwsConnectionParams](../aws_connection_params)> resolve(String correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain. 
- **returns**: Future<[AwsConnectionParams](../aws_connection_params)> - receives an AWSConnectionParams value or error.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```dart
var config = ConfigParams.fromTuples([
    'connection.region', 'us-east1',
    'connection.service', 's3',
    'connection.bucket', 'mybucket',
    'credential.access_id', 'XXXXXXXXXX',
    'credential.access_key', 'XXXXXXXXXX'
]);

var connectionResolver = AwsConnectionResolver();
connectionResolver.configure(config);
connectionResolver.setReferences(references);
var connection = await connectionResolver.resolve('123');
    // Now use connection...
```

### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
