
```go
package container

import (
	ffactory "github.com/pip-services-samples/pip-samples-facade-go/build"
	cproc "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
	httpbuild "github.com/pip-services4/pip-services4-go/pip-services4-http-go/build"
	mbuild "github.com/pip-services4/pip-services4-go/pip-services4-mongodb-go/build"
)

type FacadeProcess struct {
	*cproc.ProcessContainer
}

func NewFacadeProcess() *FacadeProcess {

	c := FacadeProcess{}
	c.ProcessContainer = cproc.NewProcessContainer("pip-facades-example", "Public facade for pip-vault 2.0")
	c.AddFactory(ffactory.NewClientFacadeFactory())
	c.AddFactory(ffactory.NewFacadeFactory())
	c.AddFactory(httpbuild.NewDefaultHttpFactory())
	c.AddFactory(mbuild.NewDefaultMongoDbFactory())

	return &c
}

```
