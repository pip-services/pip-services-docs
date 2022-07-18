---
type: docs
title: "AwsConnectionParams"
linkTitle: "AwsConnectionParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Contains connection parameters to authenticate against Amazon Web Services (AWS)
    and connect to specific AWS resources.
 
---

**Inherits:** [ConnectionParams](../../../components/connect/connection_params)

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

Creates an new instance of the connection parameters.
> `public` AwsConnectionParams()


Creates an new instance of the connection parameters.

> `public` AwsConnectionParams(IDictionary\<string, string\> map)

- **map**: IDictionary\<string, string\> - (optional) an object to be converted into key-value pairs to initialize this connection.

Creates an new instance of the connection parameters.

> `public` AwsConnectionParams([ConnectionParams](../../../components/connect/connection_params) connection, [CredentialParams](../../../components/auth/credential_params) credential)

- **connection**: [ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters

### Properties


#### AccessId
Gets or sets the AWS access id.

> `public` string AccessId { get; set; }

#### AccessKey
Gets or sets the AWS client key.

> `public` string AccessKey { get; set; }


#### Account
Gets or sets the AWS account id.

> `public` string Account { get; set; }

#### Arn
Gets or sets the AWS resource ARN.

> `public` string Arn { get; set; }


#### Partition
Gets or sets the AWS partition name.

> `public` string Partition { get; set; }

#### Region
Gets or sets the AWS region.

> `public` string Region { get; set; }


#### Service
Gets or sets the AWS service name.

> `public` string Service { get; set; }


#### Resource
Gets or sets the AWS resource id.

> `public` string Resource { get; set; }


#### ResourceType
Gets or sets the AWS resource type.

> `public` string ResourceType { get; set; }


### Instance methods

#### Validate
Validates this connection parameters. 

> [ConfigException](../../../commons/errors/config_exception) Validate(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: [ConfigException](../../../commons/errors/config_exception) - ConfigException or null if validation passed successfully

### Static methods

#### FromConfig
Retrieves AwsConnectionParams from configuration parameters.
The values are retrieved from "connection" and "credential" sections.

See [mergeConfigs](#mergeconfigs)

> `public static` [AwsConnectionParams]() FromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


#### FromString
Creates a new AwsConnectionParams object filled with key-value pairs serialized as a string.

Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*

> `public static new` [AwsConnectionParams]() FromString(string line)

- **line**: string - string with serialized key-value pairs as "key1=value1;key2=value2;...".
- **returns**: [AwsConnectionParams]() - new AwsConnectionParams object.

#### MergeConfigs
Retrieves AwsConnectionParams from multiple configuration parameters.
The values are retrieved from "connection" and "credential" sections.

> `public static` [AwsConnectionParams]() MergeConfigs(params [ConfigParams[]](../../../commons/config/config_params) configs)

- **configs**: [ConfigParams[]](../../../commons/config/config_params) - list with configuration parameters.
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


### Examples

```cs
var connection = AwsConnectionParams.FromTuples(
    "region", "us-east-1",
    "access_id", "XXXXXXXXXXXXXXX",
    "secret_key", "XXXXXXXXXXXXXXX",
    "service", "s3",
    "bucket", "mybucket");

var region = connection.Region;                     // Result: "us-east-1"
var accessId = connection.AccessId;                 // Result: "XXXXXXXXXXXXXXX"
var secretKey = connection.AccessKey;               // Result: "XXXXXXXXXXXXXXX"
var pin = connection.GetAsNullableString("bucket");      // Result: "mybucket" 
```

### See also
- #### [AwsConnectionResolver](../aws_connection_resolver)
