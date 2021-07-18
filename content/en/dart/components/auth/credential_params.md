---
type: docs
title: "CredentialParams"
linkTitle: "CredentialParams"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Contains credentials to authenticate against external services.
    
---

**Extends**: [ConfigParams](../../../commons/config/config_params)

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

> CredentialParams([dynamic values])

- **values**: dynamic - (optional) an object to be converted into key-value pairs to initialize these credentials.


### Instance methods

#### getAccessId
Gets the application access id. The value can be stored in parameters "access_id" pr "client_id"

> String getAccessId()

- **returns**: String - the application access id.


#### getAccessKey
Gets the application secret key.
The value can be stored in parameters "access_key", "client_key" or "secret_key".

> String getAccessKey()

- **returns**: String - the application secret key.


#### getPassword
Get the user password. The value can be stored in parameters "password" or "pass".

> String getPassword()

- **returns**: String - the user password.


#### getStoreKey
Gets the key to retrieve these credentials from [ICredentialStore](../icredential_store).
If this key is null, then all parameters are already present.

> String getStoreKey()

- **returns**: String - the store key to retrieve credentials.


#### getUsername
Gets the user name. The value can be stored in parameters "username" or "user".

> String getUsername()

- **returns**: String - the user name.


#### setAccessId
Sets the application access id.

> void setAccessId(String value)

- **value**: String - a new application access id.


#### setAccessKey
Sets the application secret key.

> void setAccessKey(String value)

- **value**: String - a new application secret key.


#### setPassword
Sets the user password.

> void setPassword(String value)

- **password**: String - a new user password.


#### setStoreKey
Sets the key to retrieve these parameters from [ICredentialStore](../icredential_store).

> void setStoreKey(String value)

- **value**: String - a new key to retrieve credentials.


#### setUsername
Sets the user name.

> void setUsername(String value)

- **value**: String - a new user name.


#### useCredentialStore
Checks if these credential parameters shall be retrieved from [ICredentialStore](../icredential_store).
The credential parameters are redirected to [ICredentialStore](../icredential_store) when store_key parameter is set.

> bool useCredentialStore()

- **value**: bool - true if credentials shall be retrieved from [ICredentialStore](../icredential_store)

### Static methods

#### fromConfig
Retrieves a single CredentialParams from configuration parameters
from "credential" section. If "credentials" section is present instead,
then it returns only the first credential element.

> `static` [CredentialParams]() fromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) -  containing a section named "credential(s)".
- **returns**: [CredentialParams]() - the generated CredentialParams object.


#### fromString
Creates a new CredentialParams object filled with key-value pairs serialized as a string.

> `static` [CredentialParams]() fromString(String line)

- **line**: String - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**
- **returns**: [CredentialParams]() - a new CredentialParams object.


#### fromTuples
Creates a new CredentialParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `static` [CredentialParams]() fromTuples(List\<dynamic\> tuples)

- **tuples**: List\<dynamic\> - the tuples to fill a new CredentialParams object.
- **returns**: [CredentialParams]() - a new CredentialParams object.


#### manyFromConfig
Retrieves all CredentialParams from configuration parameters
from "credentials" section. If "credential" section is present instead,
then it returns a list with only one CredentialParams.

> `static` List<[CredentialParams]()> manyFromConfig([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters to retrieve credentials
- **returns**: List<[CredentialParams]()> - a list of retrieved CredentialParams

### Examples

```dart
var credential = CredentialParams.fromTuples(
    'user', 'jdoe',
    'pass', 'pass123',
    'pin', '321'
);

var username = credential.getUsername();             // Result: 'jdoe'
var password = credential.getPassword();             // Result: 'pass123'
var pin = credential.getAsNullableString('pin');     // Result: 321 
```

### See also
- #### [ConfigParams](../../../commons/config/config_params)
- #### [ConnectionParams](../connect/connection_params)
- #### [CredentialResolver](../credential_resolver)
- #### [ICredentialStore](../icredential_store)
