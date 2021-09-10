---
type: docs
title: "AzureConnectionParams"
linkTitle: "AzureConnectionParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-azure-nodex"
description: >
    Contains connection parameters to authenticate against Azure
    and connect to specific Azure resources.
---

**Extends:** [ConfigParams](../../../commons/config/config_params)

### Description
Contains connection parameters to authenticate against Azure Functions
and connect to specific Azure Function.

The class is able to compose and parse Azure Function connection parameters.

In addition to standard parameters [CredentialParams](../../../components/auth/credential_params) may contain any number of custom parameters


#### Configuration parameters

- **uri**:           full connection uri with specific app and function name
- **protocol**:      connection protocol
- **app_name**:      alternative app name
- **function_name**: application function name
- **auth_code**:     authorization code or null if using custom auth

### Constructors
Creates an new instance of the connection parameters.

> `public` constructor(values: any = null)

- **values**: any - (optional) an object to be converted into key-value pairs to initialize this connection.


### Instance methods

#### getAppName
Gets the Azure app name.

> `public` getAppName(): string

- **returns**: string - the Azure app name.


#### getAuthCode
Gets the Azure auth code.

> `public` getAuthCode(): string

- **returns**: string - the Azure auth code.


#### getFunctionName
Gets the Azure function name.

> `public` getFunctionName(): string

- **returns**: string - the Azure function name.


#### getFunctionUri
Gets the Azure function uri.

> `public` getFunctionUri(): string

- **returns**: string - the Azure function uri.


#### getProtocol
Gets the Azure function connection protocol.

> `public` getProtocol(): string

- **returns**: string - the Azure function connection protocol.


#### setAppName
Sets the Azure app name.

> `public` setAppName(value: string)

- **value**: string - a new Azure app name.

#### setAuthCode
Sets the Azure auth code.

> `public` setAuthCode(value: string)

- **value**: string -  a new Azure auth code.

#### setFunctionName
Sets the Azure function name.

> `public` setFunctionName(value: string)

- **value**: string - a new Azure function name.

#### setFunctionUri
Sets the Azure function uri.

> `public` setFunctionUri(value: string)

- **value**: string - a new Azure function uri.

#### setProtocol
Sets the Azure function connection protocol.

> `public` setProtocol(value: string)

- **value**: string - a new Azure function connection protocol.

#### validate
Validates this connection parameters 

> `public` validate(correlationId: string)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### fromConfig
Validates this connection parameters 

> `public static` fromConfig(config: [ConfigParams](../../../commons/config/config_params)): [AzureConnectionParams]()

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters
- **returns**: [AzureConnectionParams]() - the generated AzureConnectionParams object.

#### mergeConfigs
Retrieves AzureConnectionParams from multiple configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> `public static` mergeConfigs(...configs: [ConfigParams](../../../commons/config/config_params)[]): [AzureConnectionParams]()

- **config**: string - a list with configuration parameters
- **returns**: [AzureConnectionParams]() - the generated AzureConnectionParams object.



### Examples

```typescript
let connection = AzureConnectionParams.fromTuples(
    "uri", "http://myapp.azurewebsites.net/api/myfunction",
    "protocol", "http",
    "app_name", "myapp",
    "function_name", "myfunction",
    "auth_code", "code",
);

const uri = connection.getFunctionUri();             // Result: "http://myapp.azurewebsites.net/api/myfunction"
const protocol = connection.getAppName();            // Result: "http"
const appName = connection.getAppName();             // Result: "myapp"
const functionName = connection.getFunctionName();   // Result: "myfunction"
const authCode = connection.getAuthCode();           // Result: "code"
```


### See also
- #### [AzureConnectionResolver](../azure_connection_resolver)