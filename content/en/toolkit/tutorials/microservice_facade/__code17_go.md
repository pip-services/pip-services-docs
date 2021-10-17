
**/container/FacadeProcess.go**

```go
package container

import (
	ffactory "github.com/pip-services-samples/pip-samples-facade-go/build"
	cproc "github.com/pip-services3-go/pip-services3-container-go/container"
	mbuild "github.com/pip-services3-go/pip-services3-mongodb-go/build"
	rpcbuild "github.com/pip-services3-go/pip-services3-rpc-go/build"
)

type FacadeProcess struct {
	*cproc.ProcessContainer
}

func NewFacadeProcess() *FacadeProcess {

	c := FacadeProcess{}
	c.ProcessContainer = cproc.NewProcessContainer("pip-facades-example", "Public facade for pip-vault 2.0")
	c.AddFactory(ffactory.NewClientFacadeFactory())
	c.AddFactory(ffactory.NewServiceFacadeFactory())
	c.AddFactory(ffactory.NewFacadeFactory())
	c.AddFactory(rpcbuild.NewDefaultRpcFactory())
	c.AddFactory(mbuild.NewDefaultMongoDbFactory())

	return &c
}
```
