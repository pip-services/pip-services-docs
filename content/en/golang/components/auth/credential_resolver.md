---
type: docs
title: "CredentialResolver"
linkTitle: "CredentialResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    Helper class used to retrieve component credentials.

---


### Description

The CredentialResolver class is used to retrieve component credentials.

Important points

- If credentials are configured to be retrieved from [ICredentialStore](../icredentialStore), it will automatically locate [ICredentialStore](../icredentialStore) in component references and retrieve the credentials from there using the store_key parameter.

#### Configuration parameters

**credential**: 
- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../icredentialStore)
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

#### NewCredentialResolver
Creates a new instance of credentials resolver.

> NewCredentialResolver(config [*config.ConfigParams](../../../commons/config/config_params), references [refer.IReferences](../../../commons/refer/ireferences)) [*CredentialResolver]()

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - (optional) component configuration parameters
- **references**: [refer.IReferences](../../../commons/refer/ireferences) - (optional) component references

#### NewEmptyCredentialResolver
Creates a new instance of credentials resolver.

> NewEmptyCredentialResolver() *CredentialResolver


### Methods

#### Add
Adds a new credential to a credential component.

> (c [*CredentialResolver]()) Add(credential [*CredentialParams](../credential_params))

- **connection**: [*CredentialParams](../credential_params) - new credential parameters to be added


#### Configure
Configures component by passing configuration parameters.

> (c [*CredentialResolver]()) Configure(config [*config.ConfigParams](../../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### GetAll
Gets all credentials configured in component configuration.

Redirect to CredentialStores is not done at this point.
If you need fully fleshed credential use **lookup** method instead.

> (c [*CredentialResolver]()) GetAll() [][*CredentialParams](../credential_params)

- **returns**: [][*CredentialParams](../credential_params) - list with credential parameters


#### Lookup
Looks up component's credential parameters. If credentials are configured to be retrieved
from a credential store it finds a [ICredentialStore](../icredential_store)` and lookups the credentials there.

> (c [*CredentialResolver]()) Lookup(correlationId string) ([*CredentialParams](../credential_params), error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: ([*CredentialParams](../credential_params), error) - resolved credential parameters or nil if nothing was found.


#### SetReferences
Sets references to dependent components.

> (c [*CredentialResolver]()) SetReferences(references [refer.IReferences](../../../commons/refer/ireferences))

- **references**: [refer.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

### Examples
```go
config := NewConfigParamsFromTuples(
    "credential.user", "jdoe",
    "credential.pass",  "pass123"
);
  
credentialResolver := NewCredentialResolver();
credentialResolver.Configure(config);
credentialResolver.SetReferences(references);
  
credentialResolver.Lookup("123", (err, credential) => {
    // Now use credential...
});
```


### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredentialStore)
