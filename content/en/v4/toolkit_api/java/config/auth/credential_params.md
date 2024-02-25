---
type: docs
title: "CredentialParams"
linkTitle: "CredentialParams"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Contains credentials to authenticate against external services.
    
---

**Implemets**: [ConfigParams](../../../components/config/config_params)

### Description

The CredentialParams class allows you to create credential parameters that can be used to authenticate against external services.

**Important points**

- Credential parameters are used together with connection parameters, but usually stored in a separate store, protected from unauthorized access.

#### Configuration parameters

- **store_key**: key to retrieve parameters from credential store
- **username**: user name
- **user**: alternative to username
- **password**: user's password
- **pass**: alternative to password
- **access_id**: application access id
- **client_id**: alternative to access_id
- **access_key**: application secret key
- **client_key**: alternative to access_key
- **secret_key**: alternative to access_key

In addition to standard parameters CredentialParams may contain any number of custom parameters.

### Constructors
Creates a new credential parameters and fills it with values.

> `public` CredentialParams(Map<?, ?> map)

- **map**: Map<? - (optional) map to be converted into key-value pairs to initialize these credentials.

Creates an empty instance of credential parameters.

> `public` CredentialParams()


### Instance methods

#### useCredentialStore
Checks if these credential parameters shall be retrieved from [ICredentialStore](../icredential_store).
The credential parameters are redirected to [ICredentialStore](../icredential_store) when store_key parameter is set.

> `public` boolean useCredentialStore()

- **returns**: boolean - true if credential parameters must be retrieved from [ICredentialStore](../icredential_store).

#### getStoreKey
Gets the key to retrieve these credentials from CredentialStore. If this key is null, then all parameters are already present.

> `public` String getStoreKey()

- **returns**: String - the store key to retrieve credentials.

#### setStoreKey
Sets the key to retrieve these parameters from CredentialStore.

> `public` void setStoreKey(String value)

- **value**: String - value a new key to retrieve credentials.

#### getUsername
Gets the user name. The value can be stored in parameters "username" or "user".

> `public` String getStoreKey()

- **returns**: String - username.

#### setUsername
Sets the username.

> `public` void setUsername(String value)

- **value**: String - value a new user name.

#### getPassword
Gets the user password. The value can be stored in parameters "password" or "pass".

> `public`String getPassword()

- **returns**: String - user's password.

#### setPassword
Sets the username.

> `public` void setPassword(String password)

- **password**: String - new user's password.

#### getAccessId
Gets the application access id. The value can be stored in parameters "access_id" pr "client_id"

> `public`String getAccessId()

- **returns**: String - application access id.

#### setAccessId
Sets the application access id.

> `public` void setAccessId(String value)

- **value**: String - new application access id.

#### getAccessKey
Gets the application secret key. The value can be stored in parameters "access_key", "client_key" or "secret_key".

> `public`String getAccessKey()

- **returns**: String - application secret key.

#### setAccessId
Sets the application secret key.

> `public` void setAccessKey(String value)

- **value**: String - value a new application secret key.


### Static methods

#### fromConfig
Retrieves a single CredentialParams from configuration parameters
from "credential" section. If "credentials" section is present instead,
then it returns only the first credential element.

> `public static` [CredentialParams]() fromConfig([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) -  containing a section named "credential(s)".
- **returns**: [CredentialParams]() - generated CredentialParams object.


#### fromString
Creates a new CredentialParams object filled with key-value pairs serialized as a string.

> `public static` [CredentialParams]() fromString(String line)

- **line**: String - string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**
- **returns**: [CredentialParams]() - new CredentialParams object.

#### fromTuples
Creates a new CredentialParams object filled with provided key-value pairs called tuples. Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `public static` CredentialParams fromTuples(Object... tuples)

- **returns**: [CredentialParams]() - new CredentialParams object.

#### fromValue
Creates a new CredentialParams object filled with key-value pairs from specified object.

> `public static` [CredentialParams]() fromValue(Object value)

- **returns**: [CredentialParams]() - CredentialParams object.


#### ManyFromConfig
Retrieves all CredentialParams from configuration parameters
from the "credentials" section. If the "credential" section is present instead,
then it returns a list with only one CredentialParams.

> `public static` List<[CredentialParams]()> manyFromConfig([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to retrieve credentials
- **returns**: List<[CredentialParams]()> - list of retrieved CredentialParams

#### mergeConfigs
Merges two or more CredentialParams into one. The following ConfigParams override previously defined parameters.

> `public static` [CredentialParams]() mergeConfigs(List<C[ConfigParams](../../../components/config/config_params)> configs)

- **configs**: [ConfigParams](../../../components/config/config_params) - configuration parameters.
- **returns**: [CredentialParams]() - CredentialParams object.

### Examples

```java
 {
  CredentialParams credential = CredentialParams.fromTuples(
   "user", "jdoe",
   "pass", "pass123",
   "pin", "321"
  );
 
  String username = credential.getUsername();             // Result: "jdoe"
  String password = credential.getPassword();             // Result: "pass123"
  int pin = credential.getAsNullableString("pin");     // Result: 321
  }  
```

### See also
- #### [ConfigParams](../../../components/config/config_params)
- #### [ConnectionParams](../../connect/connection_params)
- #### [CredentialResolver](../credential_resolver)
- #### [ICredentialStore](../icredential_store)
