---
type: docs
title: "GcpConnectionParams"
linkTitle: "GcpConnectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-gcp-python"
description: >
    Contains connection parameters to authenticate against Google
    and connect to specific Google resources.
---

**Implements:** [ConfigParams](../../../components/config/config_params)

### Description
Contains connection parameters to authenticate against Google Functions
and connect to specific Google Function.

The class is able to compose and parse Google Function connection parameters.

In addition to standard parameters [CredentialParams](../../../config/auth/credential_params) may contain any number of custom parameters


#### Configuration parameters

- **connections**:                   
     - **uri**:           full connection uri with specific app and function name
     - **protocol**:      connection protocol
     - **project_id**:    is your Google Cloud Platform project ID
     - **region**:        is the region where your function is deployed
     - **function_name**: is the name of the HTTP function you deployed
- **credentials**:    
    - **auth_token**:    Google-generated ID token or null if using custom auth

### Constructors
Creates an new instance of the connection parameters.

> GcpConnectionParams(values: Any = None)

- **values**: Any - (optional) an object to be converted into key-value pairs to initialize this connection.


### Instance methods

#### get_auth_token
Gets an ID token with the request to authenticate themselves

> get_auth_token(): Optional[str]

- **returns**: Optional[str] - the ID token.


#### get_function
Gets the Google function name.

> get_function(): string

- **returns**: string - the Google function name.


#### get_uri
Gets the Google Platform service uri.

> get_uri(): string

- **returns**: string - the Google service uri.


#### get_protocol
Gets the Google function connection protocol.

> get_protocol(): Optional[str]

- **returns**: string - the Google function connection protocol.

#### get_project_id
Gets the Google Cloud Platform project ID.

> get_project_id(): Optional[str]

- **returns**: Optional[str] - the project ID.

#### get_region
Gets the region where your function is deployed.

> get_region(): Optional[str]

- **returns**: Optional[str] - the region of deployed function.

#### set_auth_token
Sets an ID token with the request to authenticate themselves

> set_auth_token(value: str)

- **value**: str -  a new ID token.

#### setFunction
Sets the Google function name.

> setFunction(value: str)

- **value**: string - a new Google function name.

#### set_uri
Sets the Google Platform service uri.

> set_uri(value: str)

- **value**: string - a new Google function uri.

#### set_protocol
Sets the Google function connection protocol.

> set_protocol(value: str)

- **value**: str - a new Google function connection protocol.

#### set_project_id
Sets the Google Cloud Platform project ID.

> set_project_id(value: str)

- **value**: str - a new project ID.

#### set_region
Sets the region where your function is deployed.

> set_region(value: str)

- **returns**: string - the region of deployed function

#### validate
Validates this connection parameters 

> validate(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Static methods

#### from_string
Creates a new GcpConnectionParams object filled with key-value pairs serialized as a string.

> `staticmethod` from_string(line: str): [GcpConnectionParams]()

- **line**: str - a string with serialized key-value pairs as "key1=value1;key2=value2;..."  
Example: "Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"
- **returns**: [GcpConnectionParams]() - a new GcpConnectionParams object.


#### from_config
Validates this connection parameters 

> `staticmethod` from_config(config: [ConfigParams](../../../components/config/config_params)): [GcpConnectionParams]()

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters
- **returns**: [GcpConnectionParams]() - the generated GcpConnectionParams object.

#### merge_configs
Retrieves GcpConnectionParams from multiple configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> `staticmethod` merge_configs(...configs: [ConfigParams](../../../components/config/config_params)[]): [GcpConnectionParams]()

- **config**: str - a list with configuration parameters
- **returns**: [GcpConnectionParams]() - the generated GcpConnectionParams object.



### Examples

```python
connection = GcpConnectionParams.from_tuples(
    'connection.uri', 'http://east-my_test_project.cloudfunctions.net/myfunction',
    'connection.protocol', 'http',
    'connection.region', 'east',
    'connection.function', 'myfunction',
    'connection.project_id', 'my_test_project',
    'credential.auth_token', '1234',
)

uri = connection.get_function_uri()            # Result: 'http://east-my_test_project.cloudfunctions.net/myfunction'
region = connection.get_region()               # Result: 'east'
protocol = connection.get_protocol()           # Result: 'http'
functionName = connection.get_function_name()  # Result: 'myfunction'
projectId = connection.get_project_id()        # Result: 'my_test_project'
authToken = connection.get_auth_token()        # Result: '123'
```


### See also
- #### [GcpConnectionResolver](../gcp_connection_resolver)
