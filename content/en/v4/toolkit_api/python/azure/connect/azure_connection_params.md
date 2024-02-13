---
type: docs
title: "AzureConnectionParams"
linkTitle: "AzureConnectionParams"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-azure-python"
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

> AzureConnectionParams(values: Any = None)

- **values**: Any - (optional) an object to be converted into key-value pairs to initialize this connection.


### Instance methods

#### get_app_name
Gets the Azure app name.

> get_app_name(): Optional[str]

- **returns**: Optional[str] - the Azure app name.


#### get_auth_code
Gets the Azure auth code.

> getAuthCode(): Optional[str]

- **returns**: Optional[str] - the Azure auth code.


#### get_function_name
Gets the Azure function name.

> get_function_name(): Optional[str]

- **returns**: Optional[str] - the Azure function name.


#### get_function_uri
Gets the Azure function uri.

> get_function_uri(): str

- **returns**: str - the Azure function uri.


#### get_protocol
Gets the Azure function connection protocol.

> get_protocol(): Optional[str]

- **returns**: Optional[str] - the Azure function connection protocol.


#### set_app_name
Sets the Azure app name.

> set_app_name(value: str)

- **value**: str - a new Azure app name.

#### set_auth_code
Sets the Azure auth code.

> set_auth_code(value: str)

- **value**: str -  a new Azure auth code.

#### set_function_name
Sets the Azure function name.

> set_function_name(value: str)

- **value**: srt - a new Azure function name.

#### set_function_uri
Sets the Azure function uri.

> set_function_uri(value: str)

- **value**: srt - a new Azure function uri.

#### set_protocol
Sets the Azure function connection protocol.

> set_protocol(value: str)

- **value**: srt - a new Azure function connection protocol.

#### validate
Validates this connection parameters 

> validate(context: Optional[IContext])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Static methods

#### from_config
Validates this connection parameters 

> `staticmethod` from_config(config: [ConfigParams](../../../components/config/config_params)): [AzureConnectionParams]()

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters
- **returns**: [AzureConnectionParams]() - the generated AzureConnectionParams object.

#### from_tuples
Creates a new ConfigParams object filled with provided key-args pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `staticmethod` from_tuples(*tuples: Any): [AzureConnectionParams]()

- **config**: [ConfigParams](../../../components/config/config_params) - the tuples to fill a new ConfigParams object.
- **returns**: [AzureConnectionParams]() - a new ConfigParams object.

#### merge_configs
Retrieves AzureConnectionParams from multiple configuration parameters.
The values are retrieves from "connection" and "credential" sections.

> `staticmethod` merge_configs(*configs: [ConfigParams](../../../components/config/config_params)): [AzureConnectionParams]()

- **config**: [ConfigParams](../../../components/config/config_params) - a list with configuration parameters
- **returns**: [AzureConnectionParams]() - the generated AzureConnectionParams object.



### Examples

```python
connection = AzureConnectionParams.from_tuples(
    "connection.uri", "http://myapp.azurewebsites.net/api/myfunction",
    "connection.protocol", "http",
    "connection.app_name", "myapp",
    "connection.function_name", "myfunction",
    "connection.auth_code", "code",
)

uri = connection.get_function_uri()             # Result: "http://myapp.azurewebsites.net/api/myfunction"
protocol = connection.get_protocol()            # Result: "http"
appName = connection.get_app_name()             # Result: "myapp"
functionName = connection.get_function_name()   # Result: "myfunction"
authCode = connection.get_auth_code()           # Result: "code"
```


### See also
- #### [AzureConnectionResolver](../azure_connection_resolver)
