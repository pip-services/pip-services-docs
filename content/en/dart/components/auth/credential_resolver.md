---
type: docs
title: "CredentialResolver"
linkTitle: "CredentialResolver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Helper class used to retrieve component credentials.

---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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

> CredentialResolver([[ConfigParams](../../../commons/config/config_params) config, [IReferences](../../../commons/refer/ireferences) references])

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../commons/refer/ireferences) - (optional) component references


### Instance methods

#### add
Adds a new credential to component credentials

> void add([CredentialParams](../credential_params) credential)

- **connection**: [CredentialParams](../credential_params) - new credential parameters to be added


#### configure
Configures component by passing configuration parameters.

> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getAll
Gets all credentials configured in component configuration.

Redirect to CredentialStores is not done at this point.
If you need fully fleshed credential use **lookup** method instead.

> List<[CredentialParams](../credential_params)> getAll()

- **returns**: List<[CredentialParams](../credential_params)> - a list with credential parameters


#### lookup
Looks up component credential parameters. If credentials are configured to be retrieved
from Credential store it finds a [ICredentialStore](../icredential_store)` and lookups credentials there.

> Future<[CredentialParams](../credential_params)> lookup(String correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Future<[CredentialParams](../credential_params)> - resolved credential parameters or null if nothing was found.


#### setReferences
Sets references to dependent components.

> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples
```dart
var config = ConfigParams.fromTuples([
    'credential.user', 'jdoe',
    'credential.pass',  'pass123'
]);

var credentialResolver = new CredentialResolver();
credentialResolver.configure(config);
credentialResolver.setReferences(references);
credentialResolver.lookup('123', (err, credential) => {
    // Now use credential...
});
```


### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)
