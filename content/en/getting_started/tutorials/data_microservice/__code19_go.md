
**/containers/BeaconsProcess.go**

```go
package containers

import (
	factory "github.com/pip-services-samples/service-beacons-go/build"
	cproc "github.com/pip-services3-go/pip-services3-container-go/container"
	rbuild "github.com/pip-services3-go/pip-services3-rpc-go/build"
	sbuild "github.com/pip-services3-go/pip-services3-swagger-go/build"
)

type BeaconsProcess struct {
	cproc.ProcessContainer
}

func NewBeaconsProcess() *BeaconsProcess {
	c := &BeaconsProcess{
		ProcessContainer: *cproc.NewProcessContainer("beacons", "Beacons microservice"),
	}

	c.AddFactory(factory.NewBeaconsServiceFactory())
	c.AddFactory(rbuild.NewDefaultRpcFactory())
	c.AddFactory(sbuild.NewDefaultSwaggerFactory())

	return c
}


```
