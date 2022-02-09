---
type: docs
title: "GoogleConnectionParams"
linkTitle: "GoogleConnectionParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-gcp-nodex"
description: >
    Contains connection parameters to authenticate against Google
    and connect to specific Google resources.
---

**Extends:** [ConfigParams](../../../commons/config/config_params)

### Description
Contains connection parameters to authenticate against Google Functions
and connect to specific Google Function.

The class is able to compose and parse Google Function connection parameters.

In addition to standard parameters [CredentialParams](../../../components/auth/credential_params) may contain any number of custom parameters


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

> `public` constructor(values: any = null)

- **values**: any - (optional) an object to be converted into key-value pairs to initialize this connection.


### Instance methods

#### getAuthToken
Gets an ID token with the request to authenticate themselves

> `public` getAuthToken(): string

- **returns**: string - the ID token.


#### getFunctionName
Gets the Google function name.

> `public` getFunctionName(): string

- **returns**: string - the Google function name.


#### getFunctionUri
Gets the Google function uri.

> `public` getFunctionUri(): string

- **returns**: string - the Google function uri.


#### getProtocol
Gets the Google function connection protocol.

> `public` getProtocol(): string

- **returns**: string - the Google function connection protocol.

#### getProjectId
Gets the Google Cloud Platform project ID.

> `public` getProjectId(): string

- **returns**: string - the project ID.

#### getRegion
Gets the region where your function is deployed.

> `public` getRegion(): string

- **returns**: string - the region of deployed function.

#### setAuthToken
Sets an ID token with the request to authenticate themselves

> `public` setAuthToken(value: string)

- **value**: string -  a new ID token.

#### setFunctionName
Sets the Google function name.

> `public` setFunctionName(value: string)

- **value**: string - a new Google function name.

#### setFunctionUri
Sets the Google function uri.

> `public` setFunctionUri(value: string)

- **value**: string - a new Google function uri.

#### setProtocol
Sets the Google function connection protocol.

> `public` setProtocol(value: string)

- **value**: string - a new Google function connection protocol.

#### setProjectId
Sets the Google Cloud Platform project ID.

> `public` setProjectId(value: string)

- **value**: string - a new project ID.

#### setRegion
Sets the region where your function is deployed.

> `public` setRegion(value: string)

- **returns**: string - the region of deployed function

#### validate
Validates this connection parameters 

> `public` validate(correlationId: string)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

### Static methods

#### fromString
Creates a new GoogleConnectionParams object filled with key-value pairs serialized as a string.

> `public` static fromString(line: string): [GoogleConnectionParams]()

- **line**: string - a string with serialized key-value pairs as "key1=value1;key2=value2;..."  
Example: "Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"
- **returns**: [GoogleConnectionParams]() - a new GoogleConnectionParams object.


#### fromConfig
Validates this connection parameters 

> `public static` fromConfig(config: [ConfigParams](../../../commons/config/config_params)): [GoogleConnectionParams]()

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **returns**: [GoogleConnectionParams]() - the generated GoogleConnectionParams object.

#### mergeConfigs
Retrieves GoogleConnectionParams from multiple configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> `public static` mergeConfigs(...configs: [ConfigParams](../../../commons/config/config_params)[]): [GoogleConnectionParams]()

- **config**: string - a list with configuration parameters
- **returns**: [GoogleConnectionParams]() - the generated GoogleConnectionParams object.



### Examples

```typescript
let connection = GoogleConnectionParams.fromTuples(
    'connection.uri', 'http://east-my_test_project.cloudfunctions.net/myfunction',
    'connection.protocol', 'http',
    'connection.region', 'east',
    'connection.function_name', 'myfunction',
    'credential.project_id', 'my_test_project',
    'credential.auth_token', '1234',
);

const uri = connection.getFunctionUri();             // Result: 'http://east-my_test_project.cloudfunctions.net/myfunction'
const region = connection.getRegion();               // Result: 'east'
const protocol = connection.getProtocol();           // Result: 'http'
const functionName = connection.getFunctionName();   // Result: 'myfunction'
const projectId = connection.getProjectId();         // Result: 'my_test_project'
const authToken = connection.getAuthToken();         // Result: '123'
```


### See also
- #### [GoogleConnectionResolver](../google_connection_resolver)