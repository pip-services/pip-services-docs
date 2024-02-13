---
type: docs
title: "MemoryCredentialStore"
linkTitle: "MemoryCredentialStore"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Credential store that keeps credentials in memory.
---


### Description

The MemoryCredentialStore class is used to create credential stores that keep their contained credentials in memory.

#### Configuration parameters

- **[credential key 1]**:
- **...** : credential parameters for key 1
- **[credential key 2]**:
- **...** : credential parameters for key N
- **...** :

#### References
- **\*:credential-store:\*:\*:1.0** -  (optional) credential stores to resolve credentials



### Constructors

#### NewMemoryCredentialStore
Creates a new instance of the credential store.

> NewMemoryCredentialStore(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params)) [*MemoryCredentialStore]()

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../components/config/config_params) - (optional) configuration with credential parameters.

#### NewEmptyMemoryCredentialStore
Creates a new instance of the credential store.

> NewEmptyMemoryCredentialStore() [*MemoryCredentialScotore]()


### Methods

#### Configure
Configures component by passing configuration parameters.

> (c [*MemoryCredentialStore]()) Configure(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Lookup
Looks up credential parameters by its key.

> (c [*MemoryCredentialStore]()) Lookup(ctx context.Context, context [IContext](../../../components/context/icontext), key string) (result [*CredentialParams](../credential_params), err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key used to uniquely identify the credential.
- **returns**: (result [*CredentialParams](../credential_params), err error) - found credential parameters or nil if nothing was found


#### ReadCredentials
Reads credentials from configuration parameters.
Each section represents an individual CredentialParams.

> (c [*MemoryCredentialStore]()) ReadCredentials(config [*config.ConfigParams](../../../components/config/config_params))

- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be read


#### Store
Stores credential parameters into the store.

> (c [*MemoryCredentialStore]()) Store(ctx context.Context, context [IContext](../../../components/context/icontext), key string, credential [*CredentialParams](../credential_params)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the credential parameters.
- **credential**: [*CredentialParams](../credential_params) - credential parameters to be stored.
- **returns**: error - return error if not stored.

### Examples

```go
config := NewConfigParamsFromTuples(
	"key1.user", "jdoe",
	"key1.pass", "pass123",
	"key2.user", "bsmith",
	"key2.pass", "mypass"
)
credentialStore := NewEmptyMemoryCredentialStore()
credentialStore.ReadCredentials(config)
res, err := credentialStore.Lookup(context.Backgroudn(), "123", "key1")

```

### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)

