---
type: docs
title: "CredentialParams"
linkTitle: "CredentialParams"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Contains credentials to authenticate against external services.
    
---

**Implements**: [ConfigParams](../../../commons/config/config_params)

### Description

The CredentialParams class allows you to create credential parameters that can be used to authenticate against external services.

Important points

- Credential parameters are used together with connection parameters, but usually stored in a separate store, protected from unauthorized access.

##### Configuration parameters

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

> CredentialParams(values: Any = None)

- **values**: Any - (optional) an object to be converted into key-value pairs to initialize these credentials.


### Instance methods

#### get_access_id
Gets the application access id. The value can be stored in parameters "access_id" pr "client_id"

> get_access_id(): str

- **returns**: str - the application access id.


#### get_access_key
Gets the application secret key.
The value can be stored in parameters "access_key", "client_key" or "secret_key".

> get_access_key(): str

- **returns**: str - the application secret key.


#### get_password
Get the user password. The value can be stored in parameters "password" or "pass".

> get_password(): str

- **returns**: str - the user password.


#### get_store_key
Gets the key to retrieve these credentials from [ICredentialStore](../icredential_store).
If this key is null, than all parameters are already present.

> get_store_key(): str

- **returns**: str - the store key to retrieve credentials.


#### get_username
Gets the user name. The value can be stored in parameters "username" or "user".

> get_username(): str

- **returns**: str - the user name.


#### set_access_id
Sets the application access id.

> set_access_id(value: str)

- **value**: str - a new application access id.


#### set_access_key
Sets the application secret key.

> set_access_key(value: str)

- **value**: str - a new application secret key.


#### set_password
Sets the user password.

> set_password(password: str)

- **password**: str - a new user password.


#### set_store_key
Sets the key to retrieve these parameters from [ICredentialStore](../icredential_store).

> set_store_key(value: str)

- **value**: str - a new key to retrieve credentials.


#### set_username
Sets the user name.

> set_username(value: str)

- **value**: str - a new user name.


#### use_credential_store
Checks if these credential parameters shall be retrieved from [ICredentialStore](../icredential_store).
The credential parameters are redirected to [ICredentialStore](../icredential_store) when store_key parameter is set.

> use_credential_store(): bool

- **value**: bool - true if credentials shall be retrieved from [ICredentialStore](../icredential_store)

### Static methods

#### from_config
Retrieves a single CredentialParams from configuration parameters
from "credential" section. If "credentials" section is present instead,
then is returns only the first credential element.

> `static` from_config(config: [ConfigParams](../../../commons/config/config_params)): [CredentialParams]()

- **config**: [ConfigParams](../../../commons/config/config_params) -  containing a section named "credential(s)".
- **returns**: [CredentialParams]() - the generated CredentialParams object.


#### from_string
Creates a new CredentialParams object filled with key-value pairs serialized as a string.

> `static` from_string(line: str): [CredentialParams]()

- **line**: str - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**
- **returns**: [CredentialParams]() - a new CredentialParams object.


#### from_tuples
Creates a new CredentialParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `static` from_tuples(*tuples: Any): [CredentialParams]()

- **tuples**: Any - the tuples to fill a new CredentialParams object.
- **returns**: [CredentialParams]() - a new CredentialParams object.


#### many_from_config
Retrieves all CredentialParams from configuration parameters
from "credentials" section. If "credential" section is present instead,
than it returns a list with only one CredentialParams.

> `static` many_from_config(config: [ConfigParams](../../../commons/config/config_params)): List[[CredentialParams]()]

- **config**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters to retrieve credentials
- **returns**: List[[CredentialParams]()] - a list of retrieved CredentialParams

### Examples

```python
credential = CredentialParams.from_tuples
("user", "jdoe", "pass", "pass123", "pin", "321")

username = credential.get_username()           # Result: "jdoe"
password = credential.get_password()           # Result: "pass123"
pin = credential.get_as_nullable_string("pin") # Result: 321
```

### See also
- #### [ConfigParams](../../../commons/config/config_params)
- #### [ConnectionParams](../connect/connection_params)
- #### [CredentialResolver](../credential_resolver)
- #### [ICredentialStore](../icredentialStore)
