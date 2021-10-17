
**/build/ClientFacadeFactory.go**

```go
package build

import (
	bbuild "github.com/pip-services-samples/client-beacons-go/build"
	accbuild "github.com/pip-services-users/pip-clients-accounts-go/build"
	passbuild "github.com/pip-services-users/pip-clients-passwords-go/build"
	rolebuild "github.com/pip-services-users/pip-clients-roles-go/build"
	sessbuild "github.com/pip-services-users/pip-clients-sessions-go/build"
	cbuild "github.com/pip-services3-go/pip-services3-components-go/build"
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
