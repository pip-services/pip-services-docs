
**/build/BeaconsServiceFactory.go**

```go
package build

import (
	logic "github.com/pip-services-samples/service-beacons-gox/logic"
	persist "github.com/pip-services-samples/service-beacons-gox/persistence"
	services1 "github.com/pip-services-samples/service-beacons-gox/services/version1"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
)

type BeaconsServiceFactory struct {
	cbuild.Factory
}

func NewBeaconsServiceFactory() *BeaconsServiceFactory {
	c := &BeaconsServiceFactory{
		Factory: *cbuild.NewFactory(),
	}

	memoryPersistenceDescriptor := cref.NewDescriptor("beacons", "persistence", "memory", "*", "1.0")
	postgresPersistenceDescriptor := cref.NewDescriptor("beacons", "persistence", "postgres", "*", "1.0")
	mongoPersistenceDescriptor := cref.NewDescriptor("beacons", "persistence", "mongodb", "*", "1.0")
	filePersistenceDescriptor := cref.NewDescriptor("beacons", "persistence", "file", "*", "1.0")
	controllerDescriptor := cref.NewDescriptor("beacons", "controller", "default", "*", "1.0")
	httpServiceV1Descriptor := cref.NewDescriptor("beacons", "service", "http", "*", "1.0")

	c.RegisterType(postgresPersistenceDescriptor, persist.NewBeaconsPostgresPersistence)
	c.RegisterType(mongoPersistenceDescriptor, persist.NewBeaconsMongoPersistence)
	c.RegisterType(memoryPersistenceDescriptor, persist.NewBeaconsMemoryPersistence)
	c.RegisterType(filePersistenceDescriptor, persist.NewBeaconsFilePersistence)
	c.RegisterType(controllerDescriptor, logic.NewBeaconsController)
	c.RegisterType(httpServiceV1Descriptor, services1.NewBeaconsHttpServiceV1)

	return c
}

```
