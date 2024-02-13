---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-config-node"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

### Description

The ICredentialStore interface is used to store and look up credentials used to authenticate against external services.

### Instance methods

#### lookup
Lookups credential parameters by its key.

> lookup(context: [IContext](../../../components/context/icontext), key: string): Promise<[CredentialParams](../credential_params)>

- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential.
- **returns**: Promise<[CredentialParams](../credential_params)> - found credential parameters or null if nothing was found.


#### store
Stores credential parameters into the store.

> store(context: [IContext](../../../components/context/icontext), key: string, credential: [CredentialParams](../credential_params)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - a credential to be stored.



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../connection_params)
