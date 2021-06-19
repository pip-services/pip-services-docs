---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

### Description

The ICredentialStore interface is used to store and look up credentials used to authenticate against external services.

### Methods

#### Lookup
Lookups credential parameters by its key.

> Lookup(correlationId string, key string) ([*CredentialParams](../credential_params), error)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential.
- **returns**: ([*CredentialParams](../credential_params), error) - found credential parameters or nil if nothing was found.


#### Store
Stores credential parameters into the store.

> Store(correlationId string, key string, credential [*CredentialParams](../credential_params)) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential.
- **credential**: [*CredentialParams](../credential_params) - a credential to be stored.
- **returns**: error - return error if not stored



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../connection_params)
