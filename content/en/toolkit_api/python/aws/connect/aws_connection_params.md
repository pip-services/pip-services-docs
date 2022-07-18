---
type: docs
title: "AwsConnectionParams"
linkTitle: "AwsConnectionParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-aws-python"
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

> AwsConnectionParams(values: Any = None)

- **values**: Any - (optional) object to be converted into key-value pairs to initialize this connection.

### Instance methods

#### get_access_id
Gets the AWS access id.

> get_access_id(): str

- **returns**: str - AWS access id.

#### get_access_key
Gets the AWS client key.

> get_access_key(): str

- **returns**: str - AWS client key.

#### get_account
Gets the AWS account id.
> get_account(): str

- **returns**: str - AWS account id.

#### get_arn
Gets the AWS resource ARN.
If the ARN is not defined, it automatically generates it from other properties.

> get_arn(): str

- **returns**: str - AWS resource ARN.

#### get_partition
Gets the AWS partition name.

> get_partition(): str

- **returns**: str - AWS partition name.


#### get_region
Gets the AWS region.

> get_region(): str

- **returns**: str - AWS region.

#### get_resource
Gets the AWS resource id.

> get_resource(): str

- **returns**: str - AWS resource id.


#### get_resource_type
Gets the AWS resource type.

> get_resource_type(): str

- **returns**: str - AWS resource type.

#### get_service
Gets the AWS service name.

> get_service(): str

- **returns**: str - AWS service name.

#### set_access_id
Sets the AWS access id.

> set_access_id(value: str)

- **value**: str - AWS access id.

#### set_access_key
Sets the AWS client key.

> set_access_key(value: str)

- **value**: str - new AWS client key.

#### set_account
Sets the AWS account id.

> set_account(value: str)

- **value**: str - AWS account id.

#### set_arn
Sets the AWS resource ARN.
When it sets the value, it automatically parses the ARN
and sets individual parameters.

> set_arn(value: str)

- **value**: str - new AWS resource ARN.

#### set_partition
Sets the AWS partition name.

> set_partition(value: str)

- **value**: str - new AWS partition name.

#### set_region
Sets the AWS region.

> set_region(value: str)

- **value**: str - new AWS region.

#### set_resource
Sets the AWS resource id.

> set_resource(value: str)

- **value**: str - new AWS resource id.


#### set_resource_type
Sets the AWS resource type.

> set_resource_type(value: str)

- **value**: str - new AWS resource type.


#### set_service
Sets the AWS service name.

> set_service(value: str)

- **value**: str - new AWS service name.

#### validate
Validates this connection parameters 

> validate(correlation_id: Optional[str])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

### Static methods

#### from_config
Retrieves AwsConnectionParams from configuration parameters.
The values are retrieved from "connection" and "credential" sections.

See [mergeConfigs](#merge_configs)

> `static` from_config(config: [ConfigParams](../../../commons/config/config_params)): [AwsConnectionParams]()

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


#### from_string
Creates a new AwsConnectionParams object filled with key-value pairs serialized as a string.

Example: *"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"*

> `static` from_string(line: str): [AwsConnectionParams]()

- **line**: str - string with serialized key-value pairs as "key1=value1;key2=value2;...".
- **returns**: [AwsConnectionParams]() - new AwsConnectionParams object.

#### merge_configs
Retrieves AwsConnectionParams from multiple configuration parameters.
The values are retrieved from "connection" and "credential" sections.

> `static` merge_configs(*configs: [ConfigParams](../../../commons/config/config_params)): [AwsConnectionParams]()

- **configs**: [ConfigParams](../../../commons/config/config_params) - list with configuration parameters.
- **returns**: [AwsConnectionParams]() - generated AwsConnectionParams object.


### Examples

```python
connection = AwsConnectionParams.from_tuples(
    "region", "us-east-1",
    "access_id", "XXXXXXXXXXXXXXX",
    "secret_key", "XXXXXXXXXXXXXXX",
    "service", "s3",
    "bucket", "mybucket"
)

region = connection.get_region()                      # Result: "us-east-1"
access_id = connection.get_access_id()                # Result: "XXXXXXXXXXXXXXX"
secret_key = connection.get_access_key()              # Result: "XXXXXXXXXXXXXXX"
pin = connection.get_as_nullable_string("bucket")     # Result: "mybucket"  
```

### See also
- #### [AwsConnectionResolver](../aws_connection_resolver)
