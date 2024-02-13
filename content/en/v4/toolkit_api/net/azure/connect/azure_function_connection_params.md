---
type: docs
title: "AzureFunctionConnectionParams"
linkTitle: "AzureFunctionConnectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-azure-dotnet"
description: >
    Contains connection parameters to authenticate against Azure
    and connect to specific Azure resources.
---

**Inherits:** [ConfigParams](../../../components/config/config_params)

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
Creates an new instance of the connection parameters.

> `public` AzureFunctionConnectionParams(IDictionary\<string, string\> values)

- **values**: IDictionary\<string, string\> - (optional) an object to be converted into key-value pairs to initialize this connection.

Creates an new instance of the connection parameters.

> `public` AzureFunctionConnectionParams()

### Properties

#### AppName
The Azure app name.

> `public` string AppName { get; set; }


#### AuthCode
The Azure auth code.

> `public` string AuthCode { get; set; }

#### FunctionName
The Azure function name.

> `public` string FunctionName { get; set; }


#### FunctionUri
The Azure function uri.

> `public` string FunctionUri { get; set; }


#### Protocol
The Azure function connection protocol.

> `public` string Protocol { get; set; }


### Instance methods

#### Validate
Validates this connection parameters 

> `public` void Validate(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Static methods

#### FromConfig
Validates this connection parameters 

> `public static` [AzureFunctionConnectionParams]() FromConfig([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters
- **returns**: [AzureFunctionConnectionParams]() - the generated AzureFunctionConnectionParams object.

#### MergeConfigs
Retrieves AzureFunctionConnectionParams from multiple configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> `public static` [AzureFunctionConnectionParams]() MergeConfigs(params [ConfigParams[]](../../../components/config/config_params) configs)

- **config**: string - a list with configuration parameters
- **returns**: [AzureFunctionConnectionParams]() - the generated AzureFunctionConnectionParams object.



### Examples

```cs
var connection = AzureFunctionConnectionParams.FromTuples(
    "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
    "connection.protocol", "http",
    "connection.app_name", "myapp",
    "connection.function_name", "myfunction",
    "credential.auth_code", "code",
);

var uri = connection.FunctionUri;             // Result: "http://myapp.azurewebsites.net/api/myfunction"
var protocol = connection.AppName;            // Result: "http"
var appName = connection.AppName;             // Result: "myapp"
var functionName = connection.FunctionName;   // Result: "myfunction"
var authCode = connection.getAuthCode;           // Result: "code"
```


### See also
- #### [AzureFunctionConnectionResolver](../azure_function_connection_resolver)
