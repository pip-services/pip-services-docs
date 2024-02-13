---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

### Description

The ICredentialStore interface is used to store and look up credentials used to authenticate against external services.

### Methods

#### Lookup
Lookups credential parameters by its key.

> Lookup(ctx context.Context, context [IContext](../../../components/context/icontext), key string) ([*CredentialParams](../credential_params), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key used to uniquely identify the credential.
- **returns**: ([*CredentialParams](../credential_params), error) - found credential parameters or nil if nothing was found.


#### Store
Stores credential parameters into the store.

> Store(ctx context.Context, context [IContext](../../../components/context/icontext), key string, credential [*CredentialParams](../credential_params)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **key**: string - key used to uniquely identify the credential.
- **credential**: [*CredentialParams](../credential_params) - credential to be stored.
- **returns**: error - return error if not stored



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../../connect/connection_params)

