---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

**Implements**: [Factory](../../build/factory)

### Description

The ICredentialStore interface is used to store and look up credentials used to authenticate against external services.

### Instance methods

#### lookup
Lookups credential parameters by its key.

> Future<[CredentialParams](../credential_params)> lookup(String correlationId, String key)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a key to uniquely identify the credential.
- **returns**: Future<[CredentialParams](../credential_params)> - found credential parameters or null if nothing was found.


#### store
Stores credential parameters into the store.

> Future store(String correlationId, String key, [CredentialParams](../credential_params) credential)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.
- **key**: String - a key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - a credential to be stored.



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../connection_params)
