
```go
package build

import (
	bbuild "github.com/pip-services-samples/client-beacons-gox/build"
	accbuild "github.com/pip-services-users/pip-clients-accounts-go/build"
	passbuild "github.com/pip-services-users/pip-clients-passwords-go/build"
	rolebuild "github.com/pip-services-users/pip-clients-roles-go/build"
	sessbuild "github.com/pip-services-users/pip-clients-sessions-go/build"
	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
)

type ClientFacadeFactory struct {
	cbuild.CompositeFactory
}

func NewClientFacadeFactory() *ClientFacadeFactory {
	c := &ClientFacadeFactory{
		CompositeFactory: *cbuild.NewCompositeFactory(),
	}

	c.Add(accbuild.NewAccountsClientFactory())
	c.Add(sessbuild.NewSessionsClientFactory())
	c.Add(passbuild.NewPasswordsClientFactory())
	c.Add(rolebuild.NewRolesClientFactory())
	c.Add(bbuild.NewBeaconsClientFactory())
	return c
}

```
