---
type: docs
title: "CredentialResolver"
linkTitle: "CredentialResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Helper class used to retrieve component credentials.

---

**Inherits**: [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The CredentialResolver class is used to retrieve component credentials.

**Important points**

- If credentials are configured to be retrieved from [ICredentialStore](../icredential_store), it will automatically locate [ICredentialStore](../icredential_store) in component references and retrieve the credentials from there using the store_key parameter.

#### Configuration parameters

**credential**: 
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../icredential_store)
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

> `public`  CredentialResolver([ConfigParams](../../../components/config/config_params) config, [IReferences](../../../components/refer/ireferences) references)

- **config**: [ConfigParams](../../../components/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../components/refer/ireferences) - (optional) component references


### Instance methods

#### add
Adds a new credential to component credentials

> `public` void add([CredentialParams](../credential_params) connection)

- **connection**: [CredentialParams](../credential_params) - new credential parameters to be added


#### configure
Configures component by passing configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config, boolean configAsDefault)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.
- **configAsDefault**: boolean - boolean parameter for default configuration. If "true" the default value will be added to the result.


#### getAll
Gets all credentials configured in component configuration.     

Redirect to CredentialStores is not done at this point.
If you need fully fleshed credential use the **lookup** method instead.

> `public` List<[CredentialParams](../credential_params)> getAll()

- **returns**: List<[CredentialParams](../credential_params)> - list with credential parameters

#### lookup

> `public` [CredentialParams](../credential_params) lookup([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: [CredentialParams](../credential_params) - resolved credential parameters or null if nothing was found.

#### lookupInStores

> `public` [CredentialParams](../credential_params) lookupInStores([IContext](../../../components/context/icontext) context, [CredentialParams](../credential_params) credential) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **credential**: [CredentialParams](../credential_params) - credential.
- **returns**: [CredentialParams](../credential_params) - resolved credential parameters or null if nothing was found.

#### SetReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

### Examples
```java
var config = ConfigParams.FromTuples(
    "credential.user", "jdoe",
    "credential.pass",  "pass123" 
);

var credentialResolver = new CredentialResolver();
credentialResolver.Configure(config);

credentialResolver.SetReferences(references);
credentialResolver.LookupAsync("123");
```

### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)
