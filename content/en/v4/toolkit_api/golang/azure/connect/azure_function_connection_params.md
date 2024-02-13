---
type: docs
title: "AzureFunctionConnectionParams"
linkTitle: "AzureFunctionConnectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-azure-go"
description: >
    Contains connection parameters to authenticate against Azure
    and connect to specific Azure resources.
---

### Description
Contains connection parameters to authenticate against Azure Functions
and connect to specific Azure Function.

The class is able to compose and parse Azure Function connection parameters.

In addition to standard parameters [CredentialParams](../../../config/auth/credential_params) may contain any number of custom parameters


#### Configuration parameters

- **connections**: 
    - **uri**:           full connection uri with specific app and function name
    - **protocol**:      connection protocol
    - **app_name**:      alternative app name
    - **function_name**: application function name
- **credentials**: 
    - **auth_code**:     authorization code or null if using custom auth

### Constructors

#### NewEmptyAzureFunctionConnectionParams
Creates an new instance of the connection parameters.

> NewEmptyAzureFunctionConnectionParams() [*AzureFunctionConnectionParams]()

#### NewAzureFunctionConnectionParams
Creates an new instance of the connection parameters.

> NewAzureFunctionConnectionParams(values map[string]string) [*AzureFunctionConnectionParams]()

- **values**: map[string]string - (optional) an object to be converted into key-value pairs to initialize this connection.

#### NewAzureFunctionConnectionParamsFromString
Creates a new AzureFunctionConnectionParams object filled with key-value pairs serialized as a string.

> NewAzureFunctionConnectionParamsFromString(line string) [*AzureFunctionConnectionParams]()

- **line**: string - a string with serialized key-value pairs as "key1=value1;key2=value2;...". Example: "Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"

#### NewAzureFunctionConnectionParamsFromConfig
Retrieves AzureFunctionConnectionParams from configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> NewAzureFunctionConnectionParamsFromConfig(config [*ConfigParams](../../../components/config/config_params)) [*AzureFunctionConnectionParams]()

- **config**: [*ConfigParams](../../../components/config/config_params) - configuration parameters

#### NewAzureFunctionConnectionParamsFromTuples
Creates a new ConfigParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> NewAzureFunctionConnectionParamsFromTuples(tuples ...any) [*AzureFunctionConnectionParams]()

- **tuples**: ...any - the tuples to fill a new ConfigParams object.

#### NewAzureFunctionConnectionParamsFromMaps
Retrieves AzureFunctionConnectionParams from multiple configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> NewAzureFunctionConnectionParamsFromMaps(configs ...map[string]string) [*AzureFunctionConnectionParams]()

- **configs**: ...map[string]string - a list with configuration parameters

### Instance methods

#### AppName
Gets the Azure app name.

> (c [*AzureFunctionConnectionParams]()) AppName() (string, bool)

- **returns**: (string, bool) - the Azure app name.


#### AuthCode
Gets the Azure auth code.

> (c [*AzureFunctionConnectionParams]()) AuthCode() (string, bool)

- **returns**: (string, bool) - the Azure auth code.


#### FunctionName
Gets the Azure function name.

> (c [*AzureFunctionConnectionParams]()) FunctionName() (string, bool)

- **returns**: (string, bool) - the Azure function name.


#### FunctionUri
Gets the Azure function uri.

> (c [*AzureFunctionConnectionParams]()) FunctionUri() (string, bool)

- **returns**: (string, bool) - the Azure function uri.


#### Protocol
Gets the Azure function connection protocol.

> (c [*AzureFunctionConnectionParams]()) Protocol() (string, bool)

- **returns**: string - the Azure function connection protocol.


#### SetAppName
Sets the Azure app name.

> (c [*AzureFunctionConnectionParams]()) SetAppName(value string)

- **value**: string - a new Azure app name.

#### SetAuthCode
Sets the Azure auth code.

> (c [*AzureFunctionConnectionParams]()) SetAuthCode(value string)

- **value**: string -  a new Azure auth code.

#### SetFunctionName
Sets the Azure function name.

> (c [*AzureFunctionConnectionParams]()) SetFunctionName(value string)

- **value**: string - a new Azure function name.

#### SetFunctionUri
Sets the Azure function uri.

> (c [*AzureFunctionConnectionParams]()) SetFunctionUri(value string)

- **value**: string - a new Azure function uri.

#### SetProtocol
Sets the Azure function connection protocol.

> (c [*AzureFunctionConnectionParams]()) SetProtocol(value string)

- **value**: string - a new Azure function connection protocol.

#### Validate
Validates this connection parameters 

> (c [*AzureFunctionConnectionParams]()) Validate(context [IContext](../../../components/context/icontext)) error

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - validation error.

### Examples

```go
connection := connect.NewAzureFunctionConnectionParamsFromTuples(
	"connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
	"connection.protocol", "http",
	"connection.app_name", "myapp",
	"connection.function_name", "myfunction",
	"connection.auth_code", "code",
)
uri, _ := connection.FunctionUri()          	// Result: "http://myapp.azurewebsites.net/api/myfunction"
protocol, _ := connection.Protocol()        	// Result: "http"
appName, _ := connection.AppName()    			// Result: "myapp"
functionName, _ := connection.FunctionName()	// Result: "myfunction"
authCode, _ := connection.AuthCode()  			// Result: "code"
```


### See also
- #### [AzureFunctionConnectionResolver](../azure_function_connection_resolver)
