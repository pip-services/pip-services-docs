
And add the [DefaultMongoDbFactory](../../../toolkit_api/golang/mongodb/build/default_mongodb_factory/) to the microservice's ProcessContainer:

```go
import (
	factory "github.com/pip-services-samples/service-beacons-go/build"
	cproc "github.com/pip-services4/pip-services4-go/pip-services4-container-go/container"
	rbuild "github.com/pip-services4/pip-services4-go/pip-services4-http-go/build"
	cpg "github.com/pip-services4/pip-services4-go/pip-services4-postgres-go/build"
)

type BeaconsProcess struct {
	cproc.ProcessContainer
}

func NewBeaconsProcess() *BeaconsProcess {
	c := &BeaconsProcess{
		ProcessContainer: *cproc.NewProcessContainer("beacons", "Beacons microservice"),
	}

	c.AddFactory(factory.NewBeaconsServiceFactory())
	c.AddFactory(rbuild.NewDefaultHttpFactory())
	c.AddFactory(cpg.NewDefaultPostgresFactory())

	return c
}

```
