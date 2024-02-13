---
type: docs
title: "AwsConnectionParams"
linkTitle: "AwsConnectionParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-aws-nodex"
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

> `public` constructor(values: any = null)

- **values**: any - (optional) object to be converted into key-value pairs to initialize this connection.

### Instance methods

#### getAccessId
Gets the AWS access id.

> `public` getAccessId(): string

- **returns**: string - AWS access id.

#### getAccessKey
Gets the AWS client key.

> `public` getAccessKey(): string

- **returns**: string - AWS client key.

#### getAccount
Gets the AWS account id.
> `public` getAccount(): string

- **returns**: string - AWS account id.

#### getArn
Gets the AWS resource ARN.
If the ARN is not defined, it automatically generates it from other properties.

> `public` getArn(): string

- **returns**: string - AWS resource ARN.

#### getPartition
Gets the AWS partition name.

> `public` getPartition(): string

- **returns**: string - AWS partition name.


#### getRegion
Gets the AWS region.

> `public` getRegion(): string

- **returns**: string - AWS region.

#### getResource
Gets the AWS resource id.

> `public` getResource(): string

- **returns**: string - AWS resource id.


#### getResourceType
Gets the AWS resource type.

> `public` getResourceType(): string

- **returns**: string - AWS resource type.

#### getService
Gets the AWS service name.

> `public` getService(): string

- **returns**: string - AWS service name.

#### setAccessId
Sets the AWS access id.

> `public` setAccessId(value: string)

- **value**: string - AWS access id.

#### setAccessKey
Sets the AWS client key.

> `public` setAccessKey(value: string)

- **value**: string - new AWS client key.

#### setAccount
Sets the AWS account id.

> `public` setAccount(value: string)

- **value**: string - AWS account id.

#### setArn
Sets the AWS resource ARN.
When it sets the value, it automatically parses the ARN
and sets individual parameters.

> `public` setArn(value: string)

- **value**: string - new AWS resource ARN.

#### setPartition
Sets the AWS partition name.

> `public` setPartition(value: string)

- **value**: string - new AWS partition name.

#### setRegion
Sets the AWS region.

> `public` setRegion(value: string)

- **value**: string - new AWS region.

#### setResource
Sets the AWS resource id.

> `public` setResource(value: string)

- **value**: string - new AWS resource id.


#### setResourceType
Sets the AWS resource type.

> `public` setResourceType(value: string)

- **value**: string - new AWS resource type.


#### setService
Sets the AWS service name.

> `public` setService(value: string)

- **value**: string - new AWS service name.

#### validate
Validates this connection parameters 

> `public` validate(correlationId: string)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

### Static methods

#### fromConfig
Retrieves AwsConnectionParams from configuration parameters.
The values are retrieved from "connection" and "credential" sections.

See [mergeConfigs](#mergeconfigs)

> `public static` fromConfig(config: [ConfigParams](../../../commons/config/config_params)): [AwsConnectionParams]()

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


#### fromString
Creates a new AwsConnectionParams object filled with key-value pairs serialized as a string.

Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*

> `public static` fromString(line: string): [AwsConnectionParams]()

- **line**: string - string with serialized key-value pairs as "key1=value1;key2=value2;...".
- **returns**: [AwsConnectionParams]() - new AwsConnectionParams object.

#### mergeConfigs
Retrieves AwsConnectionParams from multiple configuration parameters.
The values are retrieved from "connection" and "credential" sections.

> `public static` mergeConfigs(...configs: [ConfigParams[]](../../../commons/config/config_params)): [AwsConnectionParams]()

- **configs**: [ConfigParams[]](../../../commons/config/config_params) - list with configuration parameters.
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


### Examples

```typescript
let connection = AwsConnectionParams.fromTuples(
    "region", "us-east-1",
    "access_id", "XXXXXXXXXXXXXXX",
    "secret_key", "XXXXXXXXXXXXXXX",
    "service", "s3",
    "bucket", "mybucket"
);
 
let region = connection.getRegion();                     // Result: "us-east-1"
let accessId = connection.getAccessId();                 // Result: "XXXXXXXXXXXXXXX"
let secretKey = connection.getAccessKey();               // Result: "XXXXXXXXXXXXXXX"
let pin = connection.getAsNullableString("bucket");      // Result: "mybucket"   
```

### See also
- #### [AwsConnectionResolver](../aws_connection_resolver)
