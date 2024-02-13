---
type: docs
title: "GcpConnectionParams"
linkTitle: "GcpConnectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-gcp-go"
description: >
    Contains connection parameters to authenticate against Google
    and connect to specific Google resources.
---

### Description
Contains connection parameters to authenticate against Google Functions
and connect to specific Google Function.

The class is able to compose and parse Google Function connection parameters.

In addition to standard parameters [CredentialParams](../../../config/connect/connection_params) may contain any number of custom parameters


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

#### NewEmptyGcpConnectionParams
Creates an new instance of the connection parameters.

> NewEmptyGcpConnectionParams() [*GcpConnectionParams]()

#### NewGcpConnectionParams
Creates an new instance of the connection parameters.

> NewGcpConnectionParams(values map[string]string) [*GcpConnectionParams]()

- **values**: map[string]string - (optional) an object to be converted into key-value pairs to initialize this connection.

#### NewGcpConnectionParamsFromConfig
Retrieves GcpConnectionParams from configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> NewGcpConnectionParamsFromConfig(config [*ConfigParams](../../../components/config/config_params)) *GcpConnectionParams 

- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameterss.

#### NewGcpConnectionParamsFromTuples
Creates a new ConfigParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> NewGcpConnectionParamsFromTuples(tuples ...any) [*GcpConnectionParams]()

- **tuples**: ...any - the tuples to fill a new ConfigParams object.

#### NewGcpConnectionParamsFromMaps
Retrieves GcpConnectionParams from multiple configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> NewGcpConnectionParamsFromMaps(configs ...map[string]string) [*GcpConnectionParams]()

- **configs**: ...map[string]string - a list with configuration parameters.

### Instance methods

#### AuthToken
Gets an ID token with the request to authenticate themselves

> (c [*GcpConnectionParams]()) AuthToken() (string, bool)

- **returns**: (string, bool) - the ID token.


#### Function
Gets the Google function name.

> (c [*GcpConnectionParams]()) Function() (string, bool)

- **returns**: (string, bool) - the Google function name.


#### Uri
Gets the Google Platform service uri.

> (c [*GcpConnectionParams]()) Uri() (string, bool)

- **returns**: (string, bool) - the Google function uri.


#### Protocol
Gets the Google function connection protocol.

> (c [*GcpConnectionParams]()) Protocol() (string, bool)

- **returns**: (string, bool) - the Google function connection protocol.

#### ProjectId
Gets the Google Cloud Platform project ID.

> (c [*GcpConnectionParams]()) ProjectId() (string, bool)

- **returns**: (string, bool) - the project ID.

#### Region
Gets the region where your function is deployed.

> (c [*GcpConnectionParams]()) Region() (string, bool)

- **returns**: (string, bool) - the region of deployed function.

#### SetAuthToken
Sets an ID token with the request to authenticate themselves

> (c [*GcpConnectionParams]()) SetAuthToken(value string)

- **value**: string -  a new ID token.

#### SetFunction
Sets the Google function name.

> (c [*GcpConnectionParams]()) SetFunction(value string)

- **value**: string - a new Google function name.

#### SetUri
Sets the Google Platform service uri.

> (c [*GcpConnectionParams]()) SetUri(value string)

- **value**: string - a new Google function uri.

#### SetProtocol
Sets the Google function connection protocol.

> (c [*GcpConnectionParams]()) SetProtocol(value string)

- **value**: string - a new Google function connection protocol.

#### SetProjectId
Sets the Google Cloud Platform project ID.

> (c [*GcpConnectionParams]()) SetProjectId(value string)

- **value**: string - a new project ID.

#### SetRegion
Sets the region where your function is deployed.

> (c [*GcpConnectionParams]()) SetRegion(value string)

- **returns**: string - the region of deployed function

#### Validate
Validates this connection parameters 

> (c [*GcpConnectionParams]()) Validate(context [IContext](../../../components/context/icontext)) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - error validation.


### Examples

```go
connection := connect.NewGcpConnectionParamsFromTuples(
	"connection.uri", "http://east-my_test_project.cloudfunctions.net/myfunction",
	"connection.protocol", "http",
	"connection.region", "east",
	"connection.function", "myfunction",
	"connection.project_id", "my_test_project",
	"credential.auth_token", "1234",
)
uri, _ := connection.Uri()               // Result: "http://east-my_test_project.cloudfunctions.net/myfunction"
region, _ := connection.Region()         // Result: "east"
protocol, _ := connection.Protocol()     // Result: "http"
functionName, _ := connection.Function() // Result: "myfunction"
projectId, _ := connection.ProjectId()   // Result: "my_test_project"
authToken, _ := connection.AuthToken()   // Result: "1234"
```


### See also
- #### [GcpConnectionResolver](../gcp_connection_resolver)
