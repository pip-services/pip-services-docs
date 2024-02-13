---
type: docs
title: "Auth"
linkTitle: "Auth"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    
    This package contains interfaces and classes for credential stores, which can be used to save or retrieve credential parameters. 

---
---

**Important points**   
    
- Examples of credentials are passwords, logins, application keys, and secrets. 
- Credentials' information is usually linked with connection parameters. 
- Configuration and connection parameters are stored separately from authentication information as they need added security and protection.

<div class="module-body">  

<br>

### Interfaces

#### [ICredentialStore](icredential_store)
Interface for credential stores which are used to store and lookup credentials
to authenticate against external services.

<br>

### Types

#### [CredentialParams](credential_params)
Contains credentials used to authenticate against external services.
They are used together with connection parameters, but usually stored
in a separate store, protected from unauthorized access.

#### [CredentialResolver](credential_resolver)
Helper class to retrieve component credentials.

If credentials are configured to be retrieved from [ICredentialStore](icredential_store),
it automatically locates [ICredentialStore](icredential_store) in component references
and retrieves credentials from there using store_key parameter.

#### [MemoryCredentialStore](memory_credential_store)
Credential store that keeps credentials in memory.

</div>

