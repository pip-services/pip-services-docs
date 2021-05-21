---
type: docs
title: "CredentialResolver"
linkTitle: "CredentialResolver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Helper class used to retrieve component credentials.

---

**Inherits**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CredentialResolver class is used to retrieve component credentials.

Important points

- If credentials are configured to be retrieved from [ICredentialStore](../icredentialStore), it will automatically locate [ICredentialStore](../icredentialStore) in component references and retrieve the credentials from there using the store_key parameter.

##### Configuration parameters

**credential**: 
- **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../icredentialStore)
- **...**: other credential parameters

**credentials**: alternative to credential
- **[credential params 1]**: first credential parameters
    - **...** : credential parameters for key 1
- **...**
- **[credential params N]**:       Nth credential parameters
    - **...** : credential parameters for key N

##### References
- **\*:credential-store:\*:\*:1.0** -  (optional) Credential stores to resolve credentials


### Constructors
Creates a new instance of credentials resolver.

> `public` CredentialResolver([ConfigParams](../../../commons/config/config_params) config = null, [IReferences](../../../commons/refer/ireferences) references = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../commons/refer/ireferences) - (optional) component references


### Instance methods

#### Add
Adds a new credential to component credentials

> `public` void Add([CredentialParams](../credential_params) connection)

- **connection**: [CredentialParams](../credential_params) - new credential parameters to be added


#### Configure
Configures component by passing configuration parameters.

> `public` void Configure([ConfigParams](../../../commons/config/config_params) config, bool configAsDefault = true)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.
- **configAsDefault**: bool - boolean parameter for default configuration. If "true" the default value will be added to the result.


#### GetAll
Gets all credentials configured in component configuration.

Redirect to CredentialStores is not done at this point.
If you need fully fleshed credential use **lookup** method instead.

> `public` List<[CredentialParams](../credential_params)> GetAll()

- **returns**: List<[CredentialParams](../credential_params)> - a list with credential parameters


#### LookupAsync
Looks up component credential parameters. If credentials are configured to be retrieved
from Credential store it finds a [ICredentialStore](../icredential_store)` and lookups credentials there.

> `public` Task<[CredentialParams](../credential_params)> LookupAsync(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Task<[CredentialParams](../credential_params)> - resolved credential parameters or null if nothing was found.


#### SetReferences
Sets references to dependent components.

> `public` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples
```cs
var config = ConfigParams.FromTuples(
    "credential.user", "jdoe",
    "credential.pass",  "pass123" 
);

var credentialResolver = new CredentialResolver();
credentialResolver.Configure(config);

credentialResolver.SetReferences(references);
credentialResolver.LookupAsync("123");


### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredentialStore)
