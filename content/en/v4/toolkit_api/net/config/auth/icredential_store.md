---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-config-dotnet"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

**Inherits**: [Factory](../../../components/build/factory)

### Description

The ICredentialStore interface is used to store and look up credentials used to authenticate against external services.

### Instance methods

#### LookupAsync
Lookups credential parameters by its key.

> Task<[CredentialParams](../credential_params)> LookupAsync(IContext context, stringkey)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the credential.
- **returns**: Task<[CredentialParams](../credential_params)> - found credential parameters or null if nothing was found.


#### StoreAsync
Stores credential parameters into the store.

> Task StoreAsync(IContext context, string key, [CredentialParams](../credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - credential to be stored.



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../../connect/connection_params)
