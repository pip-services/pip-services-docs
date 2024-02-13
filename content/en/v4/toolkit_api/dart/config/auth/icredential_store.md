---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-config-dart"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

**Implements**: [Factory](../../../components/build/factory)

### Description

The ICredentialStore interface is used to store and look up credentials used to authenticate against external services.

### Instance methods

#### lookup
Lookups credential parameters by its key.

> Future<[CredentialParams?](../credential_params)> lookup(IContext? context, String? key)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - key to uniquely identify the credential.
- **returns**: Future<[CredentialParams?](../credential_params)> - found credential parameters or null if nothing was found.


#### store
Stores credential parameters into the store.

> Future store(IContext? context, String key, [CredentialParams](../credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: String - key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - credential to be stored.



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../../connect/connection_params)
