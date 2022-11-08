---
type: docs
title: "GcpConnectionParams"
linkTitle: "GcpConnectionParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-gcp-dotnet"
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
    - **account**: the service account name    
    - **auth_token**:    Google-generated ID token or null if using custom auth

### Constructors
Creates an new instance of the connection parameters.

> `public` GcpConnectionParams(IDictionary\<string, string\> values)

- **values**: IDictionary<string, string> - (optional) an object to be converted into key-value pairs to initialize this connection.

Creates an new instance of the connection parameters.

> `public` GcpConnectionParams()


### Fields

<span class="hide-title-link">

#### AuthToken
An ID token with the request to authenticate themselves

> `public` **AuthToken**: string

#### Function
The Google function name.

> `public` **Function**: string

#### Uri
The Google Platform service uri.

> `public` **Uri**: string


#### Protocol
The Google function connection protocol.

> `public` **Protocol**: string

#### ProjectId
The Google Cloud Platform project ID.

> `public` **ProjectId**: string

#### Region
The region where your function is deployed.

> `public` **Region**: string

</span>

### Instance methods

#### Validate
Validates this connection parameters 

> `public` void Validate(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

### Static methods

#### FromString
Creates a new GcpConnectionParams object filled with key-value pairs serialized as a string.

> `public static` [GcpConnectionParams]() FromString(string line)

- **line**: string - a string with serialized key-value pairs as "key1=value1;key2=value2;..."  
Example: "Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"
- **returns**: [GcpConnectionParams]() - a new GcpConnectionParams object.


#### FromConfig
Validates this connection parameters 

> `public static` FromConfig([ConfigParams](../../../commons/config/config_params) config): [GcpConnectionParams]()

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **returns**: [GcpConnectionParams]() - the generated GcpConnectionParams object.

#### MergeConfigs
Retrieves GcpConnectionParams from multiple configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> `public static` MergeConfigs(params [ConfigParams](../../../commons/config/config_params)[] configs): [GcpConnectionParams]()

- **configs**: [ConfigParams](../../../commons/config/config_params)[] - a list with configuration parameters
- **returns**: [GcpConnectionParams]() - the generated GcpConnectionParams object.



### Examples

```cs
var connection = GcpConnectionParams.FromTuples(
    "connection.uri", "http://east-my_test_project.cloudfunctions.net/myfunction",
    "connection.protocol", "http",
    "connection.region", "east",
    "connection.function", "myfunction",
    "connection.project_id", "my_test_project",
    "credential.auth_token", "1234"
);
var uri = connection.Uri;                     // Result: 'http://east-my_test_project.cloudfunctions.net/myfunction'
var region = connection.Region;               // Result: 'east'
var protocol = connection.Protocol;           // Result: 'http'
var functionName = connection.Function;       // Result: 'myfunction'
var projectId = connection.ProjectId;         // Result: 'my_test_project'
var authToken = connection.AuthToken;         // Result: '123'
```


### See also
- #### [GcpConnectionResolver](../gcp_connection_resolver)