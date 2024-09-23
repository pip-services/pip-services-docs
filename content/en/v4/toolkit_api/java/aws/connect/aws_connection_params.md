---
type: docs
title: "AwsConnectionParams"
linkTitle: "AwsConnectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-aws-java"
description: >
    Contains connection parameters to authenticate against Amazon Web Services (AWS)
    and connect to specific AWS resources.
 
---

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

In addition to standard parameters, [CredentialParams](../../../config/auth/credential_params) may contain any number of custom parameters

### Constructors
Creates an new instance of the connection parameters.

> `public` AwsConnectionParams(Map<?, ?> values)

- **values**: Map<?, ?> - (optional) object to be converted into key-value pairs to initialize this connection.

### Instance methods

#### getAccessId
Gets the AWS access id.

> `public` String getAccessId()

- **returns**: string - AWS access id.

#### getAccessKey
Gets the AWS client key.

> `public` String getAccessKey()

- **returns**: string - AWS client key.

#### getAccount
Gets the AWS account id.
> `public` String getAccount()

- **returns**: string - AWS account id.

#### getArn
Gets the AWS resource ARN.
If the ARN is not defined, it automatically generates it from other properties.

> `public` String getArn()

- **returns**: string - AWS resource ARN.

#### getPartition
Gets the AWS partition name.

> `public` String getPartition()

- **returns**: string - AWS partition name.


#### getRegion
Gets the AWS region.

> `public` String getRegion()

- **returns**: string - AWS region.

#### getResource
Gets the AWS resource id.

> `public` String getResource()

- **returns**: string - AWS resource id.


#### getResourceType
Gets the AWS resource type.

> `public` String getResourceType()

- **returns**: string - AWS resource type.

#### getService
Gets the AWS service name.

> `public` String getResource()

- **returns**: string - AWS service name.

#### setAccessId
Sets the AWS access id.

> `public` void setAccessId(String value)

- **value**: string - AWS access id.

#### setAccessKey
Sets the AWS client key.

> `public` void setAccessId(String value)

- **value**: string - new AWS client key.

#### setAccount
Sets the AWS account id.

> `public` void setAccount(String value)

- **value**: string - AWS account id.

#### setArn
Sets the AWS resource ARN.
When it sets the value, it automatically parses the ARN
and sets individual parameters.

> `public` void setArn(String value)

- **value**: string - new AWS resource ARN.

#### setPartition
Sets the AWS partition name.

> `public` void setPartition(String value)

- **value**: string - new AWS partition name.

#### setRegion
Sets the AWS region.

> `public` void setRegion(String value)

- **value**: string - new AWS region.

#### setResource
Sets the AWS resource id.

> `public` void setResourceType(String value)

- **value**: string - new AWS resource id.


#### setResourceType
Sets the AWS resource type.

> `public` void setResourceType(String value)

- **value**: string - new AWS resource type.


#### setService
Sets the AWS service name.

> `public` void setService(String value)

- **value**: string - new AWS service name.

#### validate
Validates this connection parameters 

> `public` void validate([IContext](../../../components/context/icontext) context) throws ConfigException
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Static methods

#### fromConfig
Retrieves AwsConnectionParams from configuration parameters.
The values are retrieved from "connection" and "credential" sections.

See [mergeConfigs](#mergeconfigs)

> `public static` [AwsConnectionParams]() fromConfig([ConfigParams](../../../components/config/config_params) config) 

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


#### fromString
Creates a new AwsConnectionParams object filled with key-value pairs serialized as a string.

Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*

> `public static` [AwsConnectionParams]() fromString(String line)

- **line**: string - string with serialized key-value pairs as "key1=value1;key2=value2;...".
- **returns**: [AwsConnectionParams]() - new AwsConnectionParams object.

#### mergeConfigs
Retrieves AwsConnectionParams from multiple configuration parameters.
The values are retrieved from "connection" and "credential" sections.

> `public static` [AwsConnectionParams]() mergeConfigs([ConfigParams[]](../../../components/config/config_params)... configs)

- **configs**: [ConfigParams[]](../../../components/config/config_params) - list with configuration parameters.
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


### Examples

```java
var connection = AwsConnectionParams.fromTuples(
    "region", "us-east-1",
    "access_id", "XXXXXXXXXXXXXXX",
    "secret_key", "XXXXXXXXXXXXXXX",
    "service", "s3",
    "bucket", "mybucket"
);
 
var region = connection.getRegion();                     // Result: "us-east-1"
var accessId = connection.getAccessId();                 // Result: "XXXXXXXXXXXXXXX"
var secretKey = connection.getAccessKey();               // Result: "XXXXXXXXXXXXXXX"
var pin = connection.getAsNullableString("bucket");      // Result: "mybucket"   
```


### See also
- #### [AwsConnectionResolver](../aws_connection_resolver)
