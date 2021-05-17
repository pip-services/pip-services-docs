---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
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

> lookup(correlationId: string, key: string): Promise<[CredentialParams](../credential_params)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential.
- **credential**: Promise<[CredentialParams](../credential_params)> - found credential parameters or null if nothing was found.


#### store
Stores credential parameters into the store.

> store(correlationId: string, key: string, credential: [CredentialParams](../credential_params)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **key**: string - a key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - a credential to be stored.



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../connection_params)
