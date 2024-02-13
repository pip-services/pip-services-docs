---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-config-python"
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

> lookup(context: Optional[IContext], key: str): [CredentialParams](../credential_params)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a key to uniquely identify the credential.
- **returns**: [CredentialParams](../credential_params) - found credential parameters or None if nothing was found.


#### store
Stores credential parameters into the store.

> store(context: Optional[IContext], key: str, credential: [CredentialParams](../credential_params))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: str - a key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - a credential to be stored.



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../../connect/connection_params)
