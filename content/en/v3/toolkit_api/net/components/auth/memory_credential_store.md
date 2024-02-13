---
type: docs
title: "MemoryCredentialStore"
linkTitle: "MemoryCredentialStore"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Credential store that keeps credentials in memory.
---

**Inherits**: [ICredentialStore](../icredential_store), [IReconfigurable](../../../commons/config/ireconfigurable)

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

> `public` MemoryCredentialStore([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) configuration with credential parameters.


Creates a new instance of the credential store.

> `public` MemoryCredentialStore()


### Instance methods

#### Configure
Configures component by passing configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### LookupAsync
Lookups credential parameters by its key.

> `public` Task<[CredentialParams](../credential_params)> LookupAsync(string correlationId, string key)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential.
- **returns**: Task<[CredentialParams](../credential_params)> - found credential parameters or null if nothing was found


#### ReadCredentials
Reads credentials from configuration parameters.
Each section represents an individual CredentialParams.

> `public` void ReadCredentials([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be read


#### StoreAsync
Stores credential parameters into the store.

> `public` Task StoreAsync(string correlationId, string key, [CredentialParams](../credential_params) credential)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - key to uniquely identify the credential parameters.
- **credential**: [CredentialParams](../credential_params) - credential parameters to be stored.

### Examples

```cs
var config = ConfigParams.FromTuples(
    "key1.user", "jdoe",
    "key1.pass", "pass123",
    "key2.user", "bsmith",
    "key2.pass", "mypass" 
);

var credentialStore = new MemoryCredentialStore();
credentialStore.ReadCredentials(config);
credentialStore.LookupAsync("123", "key1");
```

### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)
