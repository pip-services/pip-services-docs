---
type: docs
title: "CredentialParams"
linkTitle: "CredentialParams"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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

> `public` constructor(values: any = null)

- **values**: any - (optional) an object to be converted into key-value pairs to initialize these credentials.


### Instance methods

#### getAccessId
Gets the application access id. The value can be stored in parameters "access_id" pr "client_id"

> `public` getAccessId(): string

- **returns**: string - the application access id.


#### getAccessKey
Gets the application secret key.
The value can be stored in parameters "access_key", "client_key" or "secret_key".

> `public` getAccessKey(): string

- **returns**: string - the application secret key.


#### getPassword
Get the user password. The value can be stored in parameters "password" or "pass".

> `public` getPassword(): string

- **returns**: string - the user password.


#### getStoreKey
Gets the key to retrieve these credentials from [ICredentialStore](../icredential_store).
If this key is null, then all parameters are already present.

> `public` getStoreKey(): string

- **returns**: string - the store key to retrieve credentials.


#### getUsername
Gets the user name. The value can be stored in parameters "username" or "user".

> `public` getUsername(): string

- **returns**: string - the user name.


#### setAccessId
Sets the application access id.

> `public` setAccessId(value: string): void

- **value**: string - a new application access id.


#### setAccessKey
Sets the application secret key.

> `public` set_access_key(value: string): void

- **value**: string - a new application secret key.


#### setPassword
Sets the user password.

> `public` setPassword(password: string): void

- **password**: string - a new user password.


#### setStoreKey
Sets the key to retrieve these parameters from [ICredentialStore](../icredential_store).

> `public` setStoreKey(value: string): void

- **value**: string - a new key to retrieve credentials.


#### setUsername
Sets the user name.

> `public` setUsername(value: string): void

- **value**: string - a new user name.


#### useCredentialStore
Checks if these credential parameters shall be retrieved from [ICredentialStore](../icredential_store).
The credential parameters are redirected to [ICredentialStore](../icredential_store) when store_key parameter is set.

> `public` useCredentialStore(): bool

- **value**: bool - true if credentials shall be retrieved from [ICredentialStore](../icredential_store)

### Static methods

#### fromConfig
Retrieves a single CredentialParams from configuration parameters
from "credential" section. If "credentials" section is present instead,
then it returns only the first credential element.

> `public static` fromConfig(config: [ConfigParams](../../../commons/config/config_params)): [CredentialParams]()

- **config**: [ConfigParams](../../../commons/config/config_params) -  containing a section named "credential(s)".
- **returns**: [CredentialParams]() - the generated CredentialParams object.


#### fromString
Creates a new CredentialParams object filled with key-value pairs serialized as a string.

> `public static` fromString(line: string): [CredentialParams]()

- **line**: string - a string with serialized key-value pairs as **"key1=value1;key2=value2;..."**
Example: **"Key1=123;Key2=ABC;Key3=2016-09-16T00:00:00.00Z"**
- **returns**: [CredentialParams]() - a new CredentialParams object.


#### fromTuples
Creates a new CredentialParams object filled with provided key-value pairs called tuples.
Tuples parameters contain a sequence of key1, value1, key2, value2, ... pairs.

> `public static` fromTuples(...tuples: any): [CredentialParams]()

- **tuples**: any - the tuples to fill a new CredentialParams object.
- **returns**: [CredentialParams]() - a new CredentialParams object.


#### manyFromConfig
Retrieves all CredentialParams from configuration parameters
from "credentials" section. If "credential" section is present instead,
then it returns a list with only one CredentialParams.

> `public static` manyFromConfig(config: [ConfigParams](../../../commons/config/config_params)): [CredentialParams]()[]

- **config**: [ConfigParams](../../../commons/config/config_params) - a configuration parameters to retrieve credentials
- **returns**: [CredentialParams]()[] - a list of retrieved CredentialParams

### Examples

```typescript
let credential = CredentialParams.fromTuples(
    "user", "jdoe",
    "pass", "pass123",
    "pin", "321"
);
    
let username = credential.getUsername();             // Result: "jdoe"
let password = credential.getPassword();             // Result: "pass123"
let pin = credential.getAsNullableString("pin");     // Result: 321   
```

### See also
- #### [ConfigParams](../../../commons/config/config_params)
- #### [ConnectionParams](../connect/connection_params)
- #### [CredentialResolver](../credential_resolver)
- #### [ICredentialStore](../icredentialStore)
