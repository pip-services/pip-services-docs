
```go

import (
	controllers1 "github.com/pip-services-samples/service-beacons-go/controllers/version1"
	persist "github.com/pip-services-samples/service-beacons-go/persistence"
	logic "github.com/pip-services-samples/service-beacons-go/service"
	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
	cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
)

type BeaconsServiceFactory struct {
	cbuild.Factory
}

func NewBeaconsServiceFactory() *BeaconsServiceFactory {
	c := &BeaconsServiceFactory{
		Factory: *cbuild.NewFactory(),
	}

	memoryPersistenceDescriptor := cref.NewDescriptor("beacons", "persistence", "memory", "*", "1.0")
	mongoPersistenceDescriptor := cref.NewDescriptor("beacons", "persistence", "mongodb", "*", "1.0")
	filePersistenceDescriptor := cref.NewDescriptor("beacons", "persistence", "file", "*", "1.0")
	serviceDescriptor := cref.NewDescriptor("beacons", "service", "default", "*", "1.0")
	httpcontrollerV1Descriptor := cref.NewDescriptor("beacons", "controller", "http", "*", "1.0")

	c.RegisterType(mongoPersistenceDescriptor, persist.NewBeaconsMongoPersistence)
	c.RegisterType(memoryPersistenceDescriptor, persist.NewBeaconsMemoryPersistence)
	c.RegisterType(filePersistenceDescriptor, persist.NewBeaconsFilePersistence)
	c.RegisterType(serviceDescriptor, logic.NewBeaconsService)
	c.RegisterType(httpcontrollerV1Descriptor, controllers1.NewBeaconsHttpControllerV1)

	return c
}
```
