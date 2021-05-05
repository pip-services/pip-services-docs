---
type: docs
title: "ICredentialStore"
linkTitle: "ICredentialStore"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Interface for credential stores which are used to store and lookup credentials
    to authenticate against external services.
---

**Implements**: [Factory](../../build/factory)

See also [CredentialParams](../credential_params), [ConnectionParams](../connection_params)


### Methods

#### lookup
Lookups credential parameters by its key.

> lookup(correlation_id: Optional[str], key: str): [CredentialParams](../credential_params)

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - found credential parameters or None if nothing was found


#### store
Stores credential parameters into the store.

> store(correlation_id: Optional[str], key: str, credential: [CredentialParams](../credential_params))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **key**: str - a key to uniquely identify the credential.
- **credential**: [CredentialParams](../credential_params) - a credential to be stored.



### See also
- #### [CredentialParams](../credential_params)
- #### [ConnectionParams](../connection_params)