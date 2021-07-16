---
type: docs
title: "AwsConnectionParams"
linkTitle: "AwsConnectionParams"
gitUrl: "https://github.com/pip-services3-go/pip-services3-aws-go"
description: >
    Contains connection parameters to authenticate against Amazon Web Services (AWS)
    and connect to specific AWS resources.
 
---

**Implements:** [ConfigParams](../../../commons/config/config_params)

### Description
The AwsConnectionParams class contains connection parameters used to authenticate against Amazon Web Services (AWS) and connect to specific AWS resources.

**Important points**

- This class is able to compose and parse AWS resource ARNs.


#### Configuration parameters

- **access_id**: application access id
- **client_id**: alternative to access_id
- **access_key**: application secret key
- **client_key**: alternative to access_key
- **secret_key**: alternative to access_key

In addition to standard parameters, [CredentialParams](../../../components/auth/credential_params) may contain any number of custom parameters

### Constructors

#### NewAwsConnectionParams
Creates an new instance of the connection parameters.

> NewAwsConnectionParams(values map[string]string) [*AwsConnectionParams]()

- **values**: map[string]string - (optional) object to be converted into key-value pairs to initialize this connection.

#### NewAwsConnectionParams
Creates an new instance of the connection parameters.

> NewEmptyAwsConnectionParams() [*AwsConnectionParams]()

#### NewAwsConnectionParamsFromConfig
Retrieves AwsConnectionParams from configuration parameters.
The values are retrieved from "connection" and "credential" sections.

See [mergeConfigs](#mergeconfigs)

> NewAwsConnectionParamsFromConfig(config [*ConfigParams](../../../commons/config/config_params)) [*AwsConnectionParams]()

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters
- **returns**: [*AwsConnectionParams]() - generated AwsConnectionParams object.


#### NewAwsConnectionParamsFromString
Creates a new AwsConnectionParams object filled with key-value pairs serialized as a string.

Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*

> NewAwsConnectionParamsFromString(line string) [*AwsConnectionParams]()

- **line**: string - string with serialized key-value pairs as "key1=value1;key2=value2;...".
- **returns**: [*AwsConnectionParams]() - new AwsConnectionParams object.

#### NewAwsConnectionParamsMergeConfigs
Retrieves AwsConnectionParams from multiple configuration parameters.
The values are retrieved from "connection" and "credential" sections.

> NewAwsConnectionParamsMergeConfigs(configs [[]*ConfigParams](../../../commons/config/config_params)) [*AwsConnectionParams]()

- **configs**: [[]*ConfigParams](../../../commons/config/config_params) - list with configuration parameters.
- **returns**: [*AwsConnectionParams]() - generated AwsConnectionParams object.

### Methods

#### GetAccessId
Gets the AWS access id.

> (c [*AwsConnectionParams]()) GetAccessId() string

- **returns**: string - AWS access id.

#### GetAccessKey
Gets the AWS client key.

> (c [*AwsConnectionParams]()) GetAccessKey() string

- **returns**: string - AWS client key.

#### GetAccount
Gets the AWS account id.
> (c [*AwsConnectionParams]()) GetAccount() string

- **returns**: string - AWS account id.

#### GetArn
Gets the AWS resource ARN.
If the ARN is not defined, it automatically generates it from other properties.

> (c [*AwsConnectionParams]()) GetArn() string

- **returns**: string - AWS resource ARN.

#### GetPartition
Gets the AWS partition name.

> (c [*AwsConnectionParams]()) GetPartition() string

- **returns**: string - AWS partition name.


#### GetRegion
Gets the AWS region.

> (c [*AwsConnectionParams]()) GetRegion() string

- **returns**: string - AWS region.

#### GetResource
Gets the AWS resource id.

> (c [*AwsConnectionParams]()) GetResource() string

- **returns**: string - AWS resource id.


#### GetResourceType
Gets the AWS resource type.

> (c [*AwsConnectionParams]()) GetResourceType() string

- **returns**: string - AWS resource type.

#### GetService
Gets the AWS service name.

> (c [*AwsConnectionParams]()) GetService() string

- **returns**: string - AWS service name.

#### SetAccessId
Sets the AWS access id.

> (c [*AwsConnectionParams]()) SetAccessId(value string)

- **value**: string - AWS access id.

#### SetAccessKey
Sets the AWS client key.

> (c [*AwsConnectionParams]()) SetAccessKey(value string)

- **value**: string - new AWS client key.

#### SetAccount
Sets the AWS account id.

> (c [*AwsConnectionParams]()) SetAccount(value string)

- **value**: string - AWS account id.

#### SetArn
Sets the AWS resource ARN.
When it sets the value, it automatically parses the ARN
and sets individual parameters.

> (c [*AwsConnectionParams]()) SetArn(value string)

- **value**: string - new AWS resource ARN.

#### SetPartition
Sets the AWS partition name.

> (c [*AwsConnectionParams]()) SetPartition(value string)

- **value**: string - new AWS partition name.

#### SetRegion
Sets the AWS region.

> (c [*AwsConnectionParams]()) SetRegion(value string)

- **value**: string - new AWS region.

#### SetResource
Sets the AWS resource id.

> (c [*AwsConnectionParams]()) SetResource(value string)

- **value**: string - new AWS resource id.


#### SetResourceType
Sets the AWS resource type.

> (c [*AwsConnectionParams]()) SetResourceType(value string)

- **value**: string - new AWS resource type.


#### SetService
Sets the AWS service name.

> (c [*AwsConnectionParams]()) SetService(value string)

- **value**: string - new AWS service name.

#### Validate
Validates this connection parameters 

> (c [*AwsConnectionParams]()) Validate(correlationId string) [*ApplicationError](../../../commons/errors/application_error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: [*ApplicationError](../../../commons/errors/application_error) - a ConfigException or nil if validation passed successfully.


### Examples

```go
connection := NewAwsConnectionParamsFromTuples(
    "region", "us-east-1",
    "access_id", "XXXXXXXXXXXXXXX",
    "secret_key", "XXXXXXXXXXXXXXX",
    "service", "s3",
    "bucket", "mybucket"
);

region := connection.getRegion();                     // Result: "us-east-1"
accessId := connection.getAccessId();                 // Result: "XXXXXXXXXXXXXXX"
secretKey := connection.getAccessKey();               // Result: "XXXXXXXXXXXXXXX"
pin := connection.getAsNullableString("bucket");      // Result: "mybucket"  
```

### See also
- #### [AwsConnectionResolver](../aws_connection_resolver)
