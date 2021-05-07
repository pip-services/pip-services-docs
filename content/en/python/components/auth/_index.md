---
type: docs
title: "Auth"
linkTitle: "Auth"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    
    This package ontains interfaces and classes for credential stores, which can be used to save or retrieve credential parameters. 



---
---

<div class="module-body"> 
**Important points**
    
- Examples of credentials are passwords, logins, application keys, and secrets. 
- Credentials' information is usually linked with connection parameters. 
- Configuration and connection parameters are stored separately from authentication information as they need added security and protection
 

### Interfaces

#### [ICredentialStore](icredential_store)
Interface for credential stores which are used to store and lookup credentials
to authenticate against external services.

### Classes

#### [CredentialParams](credential_params)
Contains credentials to authenticate against external services.
They are used together with connection parameters, but usually stored
in a separate store, protected from unauthorized access.

#### [CredentialResolver](credential_resolver)
Helper class to retrieve component credentials.

If credentials are configured to be retrieved from [ICredentialStore](icredential_store),
it automatically locates [ICredentialStore](icredential_store) in component references
and retrieve credentials from there using store_key parameter.

#### [DefaultCredentialStoreFactory](default_credential_store_factory)
Creates [ICredentialStore](icredential_store) components by their descriptors.

#### [MemoryCredentialStore](memory_credential_store)
Credential store that keeps credentials in memory.

</div>
