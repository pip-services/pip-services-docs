---
type: docs
title: "MemoryCredentialStore"
linkTitle: "MemoryCredentialStore"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Credential store that keeps credentials in memory.
---

**Implements**: [ICredentialStore](../icredential_store), [IReconfigurable](../../../commons/config/ireconfigurable)

### Description

The MemoryCredentialStore class is used to create credential stores that keep their contained credentials in memory.

##### Configuration parameters

- **[credential key 1]**:
- **...** : credential parameters for key 1
- **[credential key 2]**:
- **...** : credential parameters for key N
- **...** :

##### References
- **\*:credential-store:\*:\*:1.0** -  (optional) Credential stores to resolve credentials



### Constructors
Creates a new instance of the credential store.

> `public` constructor(config: [ConfigParams](../../../commons/config/config_params) = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) configuration with credential parameters.


### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### lookup
Lookups credential parameters by its key.

> `public` lookup(correlationId: string, key: string): Promise<[CredentialParams](../credential_params)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential.
- **returns**: Promise<[CredentialParams](../credential_params)> - found credential parameters or null if nothing was found


#### readCredentials
Reads credentials from configuration parameters.
Each section represents an individual CredentialParams.

> `public` readCredentials(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be read


#### store
Stores credential parameters into the store.

> `public` store(correlationId: string, key: string, credential: [CredentialParams](../credential_params)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential parameters.
- **credential**: [CredentialParams](../credential_params) - a credential parameters to be stored.

### Examples

```typescript
let config = ConfigParams.fromTuples(
    "key1.user", "jdoe",
    "key1.pass", "pass123",
    "key2.user", "bsmith",
    "key2.pass", "mypass"
);
    
let credentialStore = new MemoryCredentialStore();
credentialStore.readCredentials(config);
    
let credential = await credentialStore.lookup("123", "key1");
// Result: user=jdoe;pass=pass123
```

### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)
