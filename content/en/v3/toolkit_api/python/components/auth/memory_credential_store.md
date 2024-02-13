---
type: docs
title: "MemoryCredentialStore"
linkTitle: "MemoryCredentialStore"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Credential store that keeps credentials in memory.
---

**Implements**: [ICredentialStore](../icredential_store), [IReconfigurable](../../../commons/config/ireconfigurable)

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

> MemoryCredentialStore(config: [ConfigParams](../../../commons/config/config_params) = None)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) configuration with credential parameters.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### lookup
Lookups credential parameters by its key.

> lookup(correlation_id: Optional[str], key: str): [CredentialParams](../credential_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a key to uniquely identify the credential.
- **returns**: [CredentialParams](../credential_params) - found credential parameters or None if nothing was found


#### read_credentials
Reads credentials from configuration parameters.
Each section represents an individual CredentialParams.

> read_credentials(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be read


#### store
Stores credential parameters into the store.

> store(correlation_id: Optional[str], key: str, credential: [CredentialParams](../credential_params))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a key to uniquely identify the credential parameters.
- **credential**: [CredentialParams](../credential_params) - a credential parameters to be stored.

### Examples

```python
config = ConfigParams.from_tuples("key1.user", "jdoe",
    "key1.pass", "pass123",
    "key2.user", "bsmith",
    "key2.pass", "mypass"
)

credentialStore = MemoryCredentialStore()
credentialStore.read_credentials(config)
credentialStore.lookup("123", "key1")
```

### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)
