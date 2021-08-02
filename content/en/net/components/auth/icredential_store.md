---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

**Inherits**: [Factory](../../build/factory)

### Description

The ICredentialStore interface is used to store and look up credentials used to authenticate against external services.

### Instance methods

#### LookupAsync
Lookups credential parameters by its key.

> Task<[CredentialParams](../credential_params)> LookupAsync(string correlationId, stringkey)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - key to uniquely identify the credential.
- **returns**: Task<[CredentialParams](../credential_params)> - found credential parameters or null if nothing was found.


#### StoreAsync
Stores credential parameters into the store.

> Task StoreAsync(string correlationId, string key, [CredentialParams](../credential_params) credential)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **key**: string - key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - credential to be stored.



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../connection_params)
