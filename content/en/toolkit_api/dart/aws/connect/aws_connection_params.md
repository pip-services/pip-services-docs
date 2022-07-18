---
type: docs
title: "AwsConnectionParams"
linkTitle: "AwsConnectionParams"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-aws-dart"
description: >
    Contains connection parameters to authenticate against Amazon Web Services (AWS)
    and connect to specific AWS resources.
 
---

**Implements:** [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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

> AwsConnectionParams([values])

- **values**: dynamic - (optional) object to be converted into key-value pairs to initialize this connection.

### Instance methods

#### getAccessId
Gets the AWS access id.

> String getAccessId()

- **returns**: String - AWS access id.

#### getAccessKey
Gets the AWS client key.

> String getAccessKey()

- **returns**: String - AWS client key.

#### getAccount
Gets the AWS account id.
> String getAccount()

- **returns**: String - AWS account id.

#### getArn
Gets the AWS resource ARN.
If the ARN is not defined, it automatically generates it from other properties.

> String getArn()

- **returns**: String - AWS resource ARN.

#### getPartition
Gets the AWS partition name.

> String getPartition()

- **returns**: String - AWS partition name.


#### getRegion
Gets the AWS region.

> String getRegion()

- **returns**: String - AWS region.

#### getResource
Gets the AWS resource id.

> String getResource()

- **returns**: String - AWS resource id.


#### getResourceType
Gets the AWS resource type.

> String getResourceType()

- **returns**: String - AWS resource type.

#### getService
Gets the AWS service name.

> String getService()

- **returns**: String - AWS service name.

#### setAccessId
Sets the AWS access id.

> void setAccessId(String value)

- **value**: String - AWS access id.

#### setAccessKey
Sets the AWS client key.

> void setAccessKey(String value)

- **value**: String - new AWS client key.

#### setAccount
Sets the AWS account id.

> void setAccount(String value)

- **value**: String - AWS account id.

#### setArn
Sets the AWS resource ARN.
When it sets the value, it automatically parses the ARN
and sets individual parameters.

> void setArn(String value)

- **value**: String - new AWS resource ARN.

#### setPartition
Sets the AWS partition name.

> void setPartition(String value)

- **value**: String - new AWS partition name.

#### setRegion
Sets the AWS region.

> `void setRegion(String value)

- **value**: String - new AWS region.

#### setResource
Sets the AWS resource id.

> void setResource(String value)

- **value**: String - new AWS resource id.


#### setResourceType
Sets the AWS resource type.

> void setResourceType(String value)

- **value**: String - new AWS resource type.


#### setService
Sets the AWS service name.

> void setService(String value)

- **value**: String - new AWS service name.

#### validate
Validates this connection parameters 

> Future validate(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

### Static methods

#### fromConfig
Retrieves AwsConnectionParams from configuration parameters.
The values are retrieved from "connection" and "credential" sections.

See [mergeConfigs](#mergeconfigs)

> `static` [AwsConnectionParams]() fromConfig([ConfigParams](../../../commons/config/config_params) config) 

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


#### fromString
Creates a new AwsConnectionParams object filled with key-value pairs serialized as a string.

Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*

> `static` [AwsConnectionParams]() fromString(String line)

- **line**: String - string with serialized key-value pairs as "key1=value1;key2=value2;...".
- **returns**: [AwsConnectionParams]() - new AwsConnectionParams object.

#### mergeConfigs
Retrieves AwsConnectionParams from multiple configuration parameters.
The values are retrieved from "connection" and "credential" sections.

> `static` [AwsConnectionParams]() mergeConfigs(List<[ConfigParams](../../../commons/config/config_params)> configs)

- **configs**: List<[ConfigParams](../../../commons/config/config_params)> - list with configuration parameters.
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


### Examples

```dart
var connection = AwsConnectionParams.fromTuples(
    'region', 'us-east-1',
    'access_id', 'XXXXXXXXXXXXXXX',
    'secret_key', 'XXXXXXXXXXXXXXX',
    'service', 's3',
    'bucket', 'mybucket'
);

var region = connection.getRegion();                     // Result: 'us-east-1'
var accessId = connection.getAccessId();                 // Result: 'XXXXXXXXXXXXXXX'
var secretKey = connection.getAccessKey();               // Result: 'XXXXXXXXXXXXXXX'
var pin = connection.getAsNullableString('bucket');      // Result: 'mybucket'
```

### See also
- #### [AwsConnectionResolver](../aws_connection_resolver)
