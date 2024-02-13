---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

### Description

The ICredentialStore interface is used to store and look up credentials used to authenticate against external services.

### Methods

#### Lookup
Lookups credential parameters by its key.

> Lookup(ctx context.Context, correlationId string, key string) ([*CredentialParams](../credential_params), error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - key used to uniquely identify the credential.
- **returns**: ([*CredentialParams](../credential_params), error) - found credential parameters or nil if nothing was found.


#### Store
Stores credential parameters into the store.

> Store(ctx context.Context, correlationId string, key string, credential [*CredentialParams](../credential_params)) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - key used to uniquely identify the credential.
- **credential**: [*CredentialParams](../credential_params) - credential to be stored.
- **returns**: error - return error if not stored



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../../connect/connection_params)
