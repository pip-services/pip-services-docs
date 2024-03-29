---
type: docs
title: "CredentialResolver"
linkTitle: "CredentialResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-config-python"
description: >
    Helper class used to retrieve component credentials.

---

**Implements**: [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The CredentialResolver class is used to retrieve component credentials.

Important points

- If credentials are configured to be retrieved from [ICredentialStore](../icredential_store), it will automatically locate [ICredentialStore](../icredential_store) in component references and retrieve the credentials from there using the store_key parameter.

#### Configuration parameters

**credential**: 
- **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../icredential_store)
- **...**: other credential parameters

**credentials**: alternative to credential
- **[credential params 1]**: first credential parameters
    - **...** : credential parameters for key 1
- **...**
- **[credential params N]**:       Nth credential parameters
    - **...** : credential parameters for key N

#### References
- **\*:credential-store:\*:\*:1.0** -  (optional) Credential stores to resolve credentials


### Constructors
Creates a new instance of credentials resolver.

> CredentialResolver(config: [ConfigParams](../../../components/config/config_params) = None, references: [IReferences](../../../components/refer/ireferences) = None)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../components/refer/ireferences) - (optional) component references


### Instance methods

#### add
Adds a new credential to component credentials

> add(connection: [CredentialParams](../credential_params))

- **connection**: [CredentialParams](../credential_params) - new credential parameters to be added


#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../components/config/config_params))

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### get_all
Gets all credentials configured in component configuration.

Redirect to CredentialStores is not done at this point.
If you need fully fleshed credential use **lookup** method instead.

> get_all(): List[[CredentialParams](../credential_params)]

- **returns**: List[[CredentialParams](../credential_params)] - a list with credential parameters


#### lookup
Looks up component credential parameters. If credentials are configured to be retrieved
from Credential store it finds a [ICredentialStore](../icredential_store)` and lookups credentials there.

> lookup(context: Optional[IContext]): Optional[[CredentialParams](../credential_params)]

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Optional[[CredentialParams](../credential_params)] - resolved credential parameters or None if nothing was found.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../components/refer/ireferences))

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples
```python
config = ConfigParams.from_tuples("credential.user", "jdoe",
                                  "credential.pass",  "pass123")

credentialResolver = CredentialResolver()
credentialResolver.configure(config)
credentialResolver.set_references(references)
credentialResolver.lookup("123")
```


### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)
