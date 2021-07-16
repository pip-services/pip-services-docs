---
type: docs
title: "CredentialParams"
linkTitle: "CredentialParams"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Contains credentials to authenticate against external services.
    
---

**Implemets**: [ConfigParams](../../../commons/config/config_params)

### Description

The CredentialParams class allows you to create credential parameters that can be used to authenticate against external services.

Important points

- Credential parameters are used together with connection parameters, but usually stored in a separate store, protected from unauthorized access.

#### Configuration parameters

- **store_key**: key to retrieve parameters from credential store
- **username**: user name
- **user**: alternative to username
- **password**: user password
- **pass**: alternative to password
- **access_id**: application access id
- **client_id**: alternative to access_id
- **access_key**: application secret key
- **client_key**: alternative to access_key
- **secret_key**: alternative to access_key

In addition to standard parameters CredentialParams may contain any number of custom parameters.

### Constructors
Creates a new credential parameters and fills it with values.

> `public` CredentialParams(IDictionary\<string, string\> values)

- **values**: IDictionary\<string, string\> - (optional) an object to be converted into key-value pairs to initialize these credentials.

Creates an empty instance of credential parameters.

> `public` CredentialParams()


### Properties

#### UseCredentialStore
Checks if these credential parameters shall be retrieved from [ICredentialStore](../icredential_store).
The credential parameters are redirected to [ICredentialStore](../icredential_store) when store_key parameter is set.

> `public` bool UseCredentialStore { get; }

#### StoreKey
Gets and sets the key to retrieve these credentials from [ICredentialStore](../icredential_store).
If this key is null, then all parameters are already present.

> `public` string StoreKey { get; set; }

#### Username
Gets and sets the user name. The value can be stored in parameters "username" or "user".

> `public` string Username { get; set; }

#### Password
Gets and sets the user password. The value can be stored in parameters "password" or "pass".

> `public` string Password { get; set; }

#### AccessId
Gets and sets the application access id. The value can be stored in parameters "access_id" pr "client_id"

> `public` string AccessId { get; set; }

#### AccessKey
Gets and sets the application secret key.
The value can be stored in parameters "access_key", "client_key" or "secret_key".

> `public` string AccessKey { get; set; }


### Static methods

#### FromConfig
Retrieves a single CredentialParams from configuration parameters
from "credential" section. If "credentials" section is present instead,
then it returns only the first credential element.

> `public static` [CredentialParams]() FromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) -  containing a section named "credential(s)".
- **returns**: [CredentialParams]() - the generated CredentialParams object.


#### FromString
Creates a new CredentialParams object filled with key-value pairs serialized as a string.

> `public new static` [CredentialParams]() FromString(string line)

- **line**: string - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**
- **returns**: [CredentialParams]() - a new CredentialParams object.


#### ManyFromConfig
Retrieves all CredentialParams from configuration parameters
from "credentials" section. If "credential" section is present instead,
then it returns a list with only one CredentialParams.

> `public static` List<[CredentialParams]()> ManyFromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters to retrieve credentials
- **returns**: List<[CredentialParams]()> - a list of retrieved CredentialParams

### Examples

```cs
var credential = CredentialParams.FromTuples(
    "user", "jdoe",
    "pass", "pass123",
    "pin", "321" 
);

var username = credential.GetUsername();             // Result: "jdoe"
var password = credential.GetPassword();             // Result: "pass123"
var pin = credential.GetAsNullableString("pin");     // Result: 321  
```

### See also
- #### [ConfigParams](../../../commons/config/config_params)
- #### [ConnectionParams](../connect/connection_params)
- #### [CredentialResolver](../credential_resolver)
- #### [ICredentialStore](../icredential_store)
