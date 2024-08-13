
**/build/FacadeFactory.go**

```go
package build

import (
	service1 "github.com/pip-services-samples/pip-samples-facade-go/services/version1"
	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

type FacadeFactory struct {
	cbuild.Factory
	FacadeServiceV1Descriptor *cref.Descriptor
}

func NewFacadeFactory() *FacadeFactory {

	c := FacadeFactory{
		Factory: *cbuild.NewFactory(),
	}
	c.FacadeServiceV1Descriptor = cref.NewDescriptor("pip-facades-example", "controller", "http", "*", "1.0")
	c.RegisterType(c.FacadeServiceV1Descriptor, service1.NewFacadeServiceV1)
	return &c
}

```
