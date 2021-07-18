---
type: docs
title: "MemoryCredentialStore"
linkTitle: "MemoryCredentialStore"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
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

> MemoryCredentialStore([[ConfigParams](../../../commons/config/config_params) config])

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) configuration with credential parameters.


### Instance methods

#### configure
Configures component by passing configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### lookup
Lookups credential parameters by its key.

`@override`
> Future<[CredentialParams](../credential_params)> lookup(String correlationId, String key)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a key to uniquely identify the credential.
- **returns**: Future<[CredentialParams](../credential_params)> - found credential parameters or null if nothing was found


#### readCredentials
Reads credentials from configuration parameters.
Each section represents an individual CredentialParams.

> void readCredentials([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be read


#### store
Stores credential parameters into the store.

> Future store(String correlationId, String key, [CredentialParams](../credential_params) credential)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a key to uniquely identify the credential parameters.
- **credential**: [CredentialParams](../credential_params) - a credential parameters to be stored.

### Examples

```dart
var config = ConfigParams.fromTuples(
    'key1.user', 'jdoe',
    'key1.pass', 'pass123',
    'key2.user', 'bsmith',
    'key2.pass', 'mypass'
);

var credentialStore = MemoryCredentialStore();
credentialStore.readCredentials(config);
var credential = await credentialStore.lookup('123', 'key1')
// Result: user=jdoe;pass=pass123
```

### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)
