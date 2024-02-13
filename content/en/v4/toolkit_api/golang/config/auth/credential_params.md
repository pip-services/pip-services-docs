---
type: docs
title: "CredentialParams"
linkTitle: "CredentialParams"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Contains credentials to authenticate against external services.
    
---

**Implements**: [ConfigParams](../../../components/config/config_params)

### Description

The CredentialParams class allows you to create credential parameters that can be used to authenticate against external services.

Important points

- Credential parameters are used together with connection parameters, but usually stored in a separate store, protected from unauthorized access.

#### Configuration parameters

- **store_key**: key to retrieve parameters from a credential store
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

#### NewEmptyCredentialParams
Creates a new CredentialParams object  and fills it with values.

> NewEmptyCredentialParams() [*CredentialParams]()

#### NewCredentialParams
Creates a new CredentialParams object and fills it with values.

> NewCredentialParams(values map[string]string) [*CredentialParams]()

- **values**: map[string]string - (optional) object to be converted into key-value pairs to initialize these credentials.

#### NewCredentialParamsFromValue
Method that creates a ConfigParams object based on the values that are stored in the 'value' object's properties.

> NewCredentialParamsFromValue(value interface{}) [*CredentialParams]()

- **value**: interface{} - configuration parameters in the form of an object with properties.



#### NewManyCredentialParamsFromConfig
Retrieves a single CredentialParams from configuration parameters
from the "credential" section. If the "credentials" section is present instead,
then it returns only the first credential element.

> NewManyCredentialParamsFromConfig(config [*config.ConfigParams](../../../components/config/config_params)) [][*CredentialParams]()

- **config**: [*config.ConfigParams](../../../components/config/config_params) -  containing a section named "credential(s)".
- **returns**: [][*CredentialParams]() - generated CredentialParams object.


#### NewCredentialParamsFromString
Creates a new CredentialParams object filled with key-value pairs serialized as a string.

> NewCredentialParamsFromString(line string) [*CredentialParams]()

- **line**: string - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**
- **returns**: [CredentialParams]() - new CredentialParams object.


#### NewCredentialParamsFromTuples
Creates a new CredentialParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> NewCredentialParamsFromTuples(tuples ...interface{}) [*CredentialParams]()

- **tuples**: ...interface{} - tuples used to fill a new CredentialParams object.
- **returns**: [*CredentialParams]() - a new CredentialParams object.


#### NewManyCredentialParamsFromConfig
Retrieves all CredentialParams from configuration parameters
from "credentials" section. If "credential" section is present instead,
then it returns a list with only one CredentialParams.

> NewManyCredentialParamsFromConfig(config [*config.ConfigParams](../../../components/config/config_params)) [][*CredentialParams]()

- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to retrieve credentials
- **returns**: [][*CredentialParams]() - list of retrieved CredentialParams


### Methods

#### AccessId
Gets the application access id. The value can be stored in parameters "access_id" pr "client_id"

> (c [*CredentialParams]()) AccessId() string

- **returns**: string - application access id.


#### AccessKey
Gets the application secret key.
The value can be stored in parameters "access_key", "client_key" or "secret_key".

> (c [*CredentialParams]()) AccessKey() string

- **returns**: string - application secret key.


#### Password
Gets the user password. The value can be stored in parameters "password" or "pass".

> (c [*CredentialParams]()) Password() string

- **returns**: string - user password.


#### StoreKey
Gets the key to retrieve these credentials from [ICredentialStore](../icredential_store).
If this key is nil, then all parameters are already present.

> (c [*CredentialParams]()) StoreKey() string

- **returns**: string - store key to retrieve credentials.


#### Username
Gets the user name. The value can be stored in parameters "username" or "user".

> (c [*CredentialParams]()) Username() string

- **returns**: string - user name.


#### SetAccessId
Sets the application access id.

> (c [*CredentialParams]()) SetAccessId(value string)

- **value**: string - new application access id.


#### SetAccessKey
Sets the application secret key.

> (c [*CredentialParams]()) SetAccessKey(value string)

- **value**: string - new application secret key.


#### SetPassword
Sets the user password.

> (c [*CredentialParams]()) SetPassword(value string)

- **password**: string - new user password.


#### SetStoreKey
Sets the key to retrieve these parameters from [ICredentialStore](../icredential_store).

> (c [*CredentialParams]()) SetStoreKey(value string)

- **value**: string - new key to retrieve credentials.


#### SetUsername
Sets the user name.

> (c [*CredentialParams]()) SetUsername(value string)

- **value**: string - new user name.


#### UseCredentialStore
Checks if these credential parameters shall be retrieved from [ICredentialStore](../icredential_store).
The credential parameters are redirected to [ICredentialStore](../icredential_store) when the store_key parameter is set.

> (c [*CredentialParams]()) UseCredentialStore() bool

- **value**: bool - true if credentials shall be retrieved from [ICredentialStore](../icredential_store)


### Examples

```go
credential := NewCredentialParamsFromTuples(
	"user", "jdoe",
	"pass", "pass123",
	"pin", "321"
)

username := credential.Username()  // Result: "jdoe"
password := credential.Password()  // Result: "pass123"
```

### See also
- #### [ConfigParams](../../../components/config/config_params)
- #### [ConnectionParams](../../connect/connection_params)
- #### [CredentialResolver](../credential_resolver)
- #### [ICredentialStore](../icredential_store)

