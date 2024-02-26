---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

### Description

The ICredentialStore interface is used to store and look up credentials used to authenticate against external services.

### Instance methods

#### lookup
Lookups credential parameters by its key.

> [CredentialParams](../credential_params) lookup([IContext](../../../components/context/icontext) context, String key)

- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential.
- **returns**: [CredentialParams](../credential_params) - found credential parameters or null if nothing was found.


#### store
Stores credential parameters into the store.

> void store([IContext](../../../components/context/icontext) context, String key, [CredentialParams](../credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id to trace execution through call chain.
- **key**: String - a key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - a credential to be stored.



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../connection_params)
