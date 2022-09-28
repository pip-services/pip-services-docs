
**/build/FacadeFactory.go**

```go
package build

import (
	service1 "github.com/pip-services-samples/pip-samples-facade-go/services/version1"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-go/pip-services3-components-go/build"
)

type FacadeFactory struct {
	cbuild.Factory
	FacadeServiceV1Descriptor *cref.Descriptor
}

func NewFacadeFactory() *FacadeFactory {

	c := FacadeFactory{
		Factory: *cbuild.NewFactory(),
	}
	c.FacadeServiceV1Descriptor = cref.NewDescriptor("pip-facades-example", "service", "http", "*", "1.0")
	c.RegisterType(c.FacadeServiceV1Descriptor, service1.NewFacadeServiceV1)
	return &c
}

```
