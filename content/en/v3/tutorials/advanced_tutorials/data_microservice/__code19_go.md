
**/containers/BeaconsProcess.go**

```go
package containers

import (
	factory "github.com/pip-services-samples/service-beacons-gox/build"
	cproc "github.com/pip-services3-gox/pip-services3-container-gox/container"
	cpg "github.com/pip-services3-gox/pip-services3-postgres-gox/build"
	rbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
)

type BeaconsProcess struct {
	*cproc.ProcessContainer
}

func NewBeaconsProcess() *BeaconsProcess {
	c := &BeaconsProcess{
		ProcessContainer: cproc.NewProcessContainer("beacons", "Beacons microservice"),
	}

	c.AddFactory(factory.NewBeaconsServiceFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(cpg.NewDefaultPostgresFactory())

	return c
}


```
