---
type: docs
title: "CredentialResolver"
linkTitle: "CredentialResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-config-go"
description: >
    Helper class used to retrieve component credentials.

---


### Description

The CredentialResolver class is used to retrieve component credentials.

Important points

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

#### NewCredentialResolver
Creates a new instance of credentials resolver.

> NewCredentialResolver(ctx context.Contextб config [*config.ConfigParams](../../../components/config/config_params), references [refer.IReferences](../../../components/refer/ireferences)) [*CredentialResolver]()

- **ctx**: context.Context - operation context. 
- **config**: [*config.ConfigParams](../../../components/config/config_params) - (optional) component configuration parameters
- **references**: [refer.IReferences](../../../components/refer/ireferences) - (optional) component references

#### NewEmptyCredentialResolver
Creates a new instance of credentials resolver.

> NewEmptyCredentialResolver() [*CredentialResolver]()


### Methods

#### Add
Adds a new credential to a credential component.

> (c [*CredentialResolver]()) Add(credential [*CredentialParams](../credential_params))

- **connection**: [*CredentialParams](../credential_params) - new credential parameters to be added


#### Configure
Configures component by passing configuration parameters.

> (c [*CredentialResolver]()) Configure(ctx context.Context, config [*config.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context. 
- **config**: [*config.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### GetAll
Gets all credentials configured in component configuration.

Redirect to CredentialStores is not done at this point.
If you need fully fleshed credential use **lookup** method instead.

> (c [*CredentialResolver]()) GetAll() [][*CredentialParams](../credential_params)

- **returns**: [][*CredentialParams](../credential_params) - list with credential parameters


#### Lookup
Looks up component's credential parameters. If credentials are configured to be retrieved
from a credential store it finds a [ICredentialStore](../icredential_store)` and lookups the credentials there.

> (c [*CredentialResolver]()) Lookup(ctx context.Context, Lookup(context [IContext](../../../components/context/icontext)) ([*CredentialParams](../credential_params), error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: ([*CredentialParams](../credential_params), error) - resolved credential parameters or nil if nothing was found.


#### SetReferences
Sets references to dependent components.

> (c [*CredentialResolver]()) SetReferences(ctx context.Context, references [refer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context. 
- **references**: [refer.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

### Examples
```go
config := NewConfigParamsFromTuples(
	"credential.user", "jdoe",
	"credential.pass",  "pass123"
)
credentialResolver := NewCredentialResolver()
credentialResolver.Configure(context.Background(), config)
credentialResolver.SetReferences(context.Background(), references)
cred, err := credentialResolver.Lookup(context.Background(), "123")
// Now use credential...
```


### See also
- #### [CredentialParams](../credential_params)
- #### [ICredentialStore](../icredential_store)

