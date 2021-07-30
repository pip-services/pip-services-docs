---
type: docs
title: "AwsConnectionResolver"
linkTitle: "AwsConnectionResolver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
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

#### _connection_resolver
Connection resolver.
> **_connection_resolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credential_resolver
Credential resolver.
> **_credential_resolver**: [CredentialResolver](../../../components/auth/credential_resolver)

</span>

### Instance methods

#### configure
Configures a component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### resolve
Resolves a connection and credential parameters and generates a single
AWSConnectionParams value.

> resolve(correlation_id: Optional[str]): [AwsConnectionParams](../aws_connection_params)

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain. 
- **returns**: [AwsConnectionParams](../aws_connection_params) - receives an AWSConnectionParams value or error.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.



### Examples

```python
config = ConfigParams.from_tuples(
    "connection.region", "us-east1",
    "connection.service", "s3",
    "connection.bucket", "mybucket",
    "credential.access_id", "XXXXXXXXXX",
    "credential.access_key", "XXXXXXXXXX"
)

connection_resolver = AwsConnectionResolver()
connection_resolver.configure(config)
connection_resolver.set_references(references)
connection_params = connection_resolver.resolve("123")
```

### See also
- #### [ConnectionParams](../../../components/connect/connection_params)
- #### [IDiscovery](../../../components/connect/idiscovery)
