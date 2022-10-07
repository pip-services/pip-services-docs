
And add the [DefaultMongoDbFactory](../../../toolkit_api/golang/mongodb/build/default_mongodb_factory/) to the microservice's ProcessContainer:

```go
import (
	factory "github.com/pip-services-samples/service-beacons-gox/build"
	cproc "github.com/pip-services3-gox/pip-services3-container-gox/container"
	rbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
	sbuild "github.com/pip-services3-gox/pip-services3-swagger-gox/build"
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
	c.AddFactory(sbuild.NewDefaultSwaggerFactory())

	return c
}


```
