---
type: docs
title: "MemoryCredentialStore"
linkTitle: "MemoryCredentialStore"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Credential store that keeps credentials in memory.
---

**Implements**: [ICredentialStore](../icredential_store), [IReconfigurable](../../../components/config/ireconfigurable)

### Description

The MemoryCredentialStore class is used to create credential stores that keep their contained credentials in memory.

#### Configuration parameters

- **[credential key 1]**:
- **...** : credential parameters for key 1
- **[credential key 2]**:
- **...** : credential parameters for key N
- **...** :

#### References
- **\*:credential-store:\*:\*:1.0** -  (optional) Credential stores to resolve credentials



### Constructors
Creates a new instance of the credential store.

> `public` MemoryCredentialStore([ConfigParams](../../../components/config/config_params) credentials)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) configuration with credential parameters.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### lookup
Lookups credential parameters by its key.

> `public` [CredentialParams](../credential_params) lookup([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - a key to uniquely identify the credential.
- **returns**: [CredentialParams](../credential_params) - found credential parameters or null if nothing was found


#### readCredentials
Reads credentials from configuration parameters.
Each section represents an individual CredentialParams.

> `public` void readCredentials([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be read


#### store
Stores credential parameters into the store.

> `public` void store([IContext](../../../components/context/icontext) context, String key, [CredentialParams](../credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - a key to uniquely identify the credential parameters.
- **credential**: [CredentialParams](../credential_params) - a credential parameters to be stored.

### Examples

```java
{
  ConfigParams config = ConfigParams.fromTuples(
       "key1.user", "jdoe",
       "key1.pass", "pass123",
       "key2.user", "bsmith",
       "key2.pass", "mypass"
  );
 
  MemoryCredentialStore credentialStore = new MemoryCredentialStore();
  credentialStore.readCredentials(config);
 
  credentialStore.lookup("123", "key1");
  }
```

### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)
