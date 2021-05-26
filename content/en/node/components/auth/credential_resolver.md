---
type: docs
title: "CredentialResolver"
linkTitle: "CredentialResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Helper class used to retrieve component credentials.

---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CredentialResolver class is used to retrieve component credentials.

Important points

- If credentials are configured to be retrieved from [ICredentialStore](../icredentialStore), it will automatically locate [ICredentialStore](../icredentialStore) in component references and retrieve the credentials from there using the store_key parameter.

#### Configuration parameters

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

> `public` constructor(config: [ConfigParams](../../../commons/config/config_params) = null, references: [IReferences](../../../commons/refer/ireferences) = null)

- **config**: [ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters
- **references**: [IReferences](../../../commons/refer/ireferences) - (optional) component references


### Instance methods

#### add
Adds a new credential to component credentials

> `public` add(connection: [CredentialParams](../credential_params)): void

- **connection**: [CredentialParams](../credential_params) - new credential parameters to be added


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### getAll
Gets all credentials configured in component configuration.

Redirect to CredentialStores is not done at this point.
If you need fully fleshed credential use **lookup** method instead.

> `public` getAll(): [CredentialParams](../credential_params)[]

- **returns**: [CredentialParams](../credential_params)[] - a list with credential parameters


#### lookup
Looks up component credential parameters. If credentials are configured to be retrieved
from Credential store it finds a [ICredentialStore](../icredential_store)` and lookups credentials there.

> `public` lookup(correlationId: string): Promise<[CredentialParams](../credential_params)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Promise<[CredentialParams](../credential_params)> - resolved credential parameters or null if nothing was found.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples
```typescript
let config = ConfigParams.fromTuples(
    "credential.user", "jdoe",
    "credential.pass",  "pass123"
);
     
let credentialResolver = new CredentialResolver();
credentialResolver.configure(config);
credentialResolver.setReferences(references);
    
let credential = credentialResolver.lookup("123");
// Now use the credential...
```


### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredentialStore)
