---
type: docs
title: "AzureFunctionConnectionParams"
linkTitle: "AzureFunctionConnectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-azure-dart"
description: >
    Contains connection parameters to authenticate against Azure
    and connect to specific Azure resources.
---

**Extends:** [ConfigParams](../../../components/config/config_params)

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

> AzureFunctionConnectionParams([values]) : super(values)

- **values**: any - (optional) an object to be converted into key-value pairs to initialize this connection.


### Instance methods

#### getAppName
Gets the Azure app name.

> String? getAppName()

- **returns**: string - the Azure app name.


#### getAuthCode
Gets the Azure auth code.

> String? getAuthCode()

- **returns**: string - the Azure auth code.


#### getFunctionName
Gets the Azure function name.

> String? getFunctionName()

- **returns**: string - the Azure function name.


#### getFunctionUri
Gets the Azure function uri.

> String? getFunctionUri()

- **returns**: string - the Azure function uri.


#### getProtocol
Gets the Azure function connection protocol.

> String? getProtocol()

- **returns**: string - the Azure function connection protocol.


#### setAppName
Sets the Azure app name.

> void setAppName(String value)

- **value**: string - a new Azure app name.

#### setAuthCode
Sets the Azure auth code.

> void setAuthCode(String value)

- **value**: string -  a new Azure auth code.

#### setFunctionName
Sets the Azure function name.

> void setFunctionName(String value)

- **value**: string - a new Azure function name.

#### setFunctionUri
Sets the Azure function uri.

> void setFunctionUri(String value)

- **value**: string - a new Azure function uri.

#### setProtocol
Sets the Azure function connection protocol.

> void setProtocol(String value)

- **value**: string - a new Azure function connection protocol.

#### validate
Validates this connection parameters 

> Future validate(IContext? context) async

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Static methods

#### fromConfig
Validates this connection parameters 

> static AzureFunctionConnectionParams fromConfig(ConfigParams config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters
- **returns**: [AzureFunctionConnectionParams]() - the generated AzureFunctionConnectionParams object.

#### mergeConfigs
Retrieves AzureFunctionConnectionParams from multiple configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> static AzureFunctionConnectionParams mergeConfigs

- **config**: string - a list with configuration parameters
- **returns**: [AzureFunctionConnectionParams]() - the generated AzureFunctionConnectionParams object.



### Examples

```dart
  var connection = AzureConnectionParams.fromTuples([
         'connection.uri', 'http://myapp.azurewebsites.net/api/myfunction',
         'connection.protocol', 'http',
         'connection.app_name', 'myapp',
         'connection.function_name', 'myfunction',
         'connection.auth_code', 'code',
     ]);

     final uri = connection.getFunctionUri();             // Result: 'http://myapp.azurewebsites.net/api/myfunction'
     final protocol = connection.getAppName();            // Result: 'http'
     final appName = connection.getAppName();             // Result: 'myapp'
     final functionName = connection.getFunctionName();   // Result: 'myfunction'
     final authCode = connection.getAuthCode();           // Result: 'code'
```


### See also
- #### [AzureFunctionConnectionResolver](../azure_function_connection_resolver)
