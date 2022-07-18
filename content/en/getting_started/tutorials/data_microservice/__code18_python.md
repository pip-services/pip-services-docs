
**/src/build/BeaconsServiceFactory.py**

```python
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory

from ..logic.BeaconsController import BeaconsController
from ..persistence.BeaconsFilePersistence import BeaconsFilePersistence
from ..persistence.BeaconsMemoryPersistence import BeaconsMemoryPersistence
from ..persistence.BeaconsMongoDbPersistence import BeaconsMongoDbPersistence
from ..services.version1.BeaconsHttpServiceV1 import BeaconsHttpServiceV1


class BeaconsServiceFactory(Factory):

    MemoryPersistenceDescriptor = Descriptor('beacons', 'persistence', 'memory', '*', '1.0')
    FilePersistenceDescriptor = Descriptor('beacons', 'persistence', 'file', '*', '1.0')
    MongoDbPersistenceDescriptor = Descriptor('beacons', 'persistence', 'mongodb', '*', '1.0')
    ControllerDescriptor = Descriptor('beacons', 'controller', 'default', '*', '1.0')
    HttpServiceV1Descriptor = Descriptor('beacons', 'service', 'http', '*', '1.0')

    def __init__(self):
        super(BeaconsServiceFactory, self).__init__()

        self.register_as_type(BeaconsServiceFactory.MemoryPersistenceDescriptor, BeaconsMemoryPersistence)
        self.register_as_type(BeaconsServiceFactory.FilePersistenceDescriptor, BeaconsFilePersistence)
        self.register_as_type(BeaconsServiceFactory.MongoDbPersistenceDescriptor, BeaconsMongoDbPersistence)
        self.register_as_type(BeaconsServiceFactory.ControllerDescriptor, BeaconsController)
        self.register_as_type(BeaconsServiceFactory.HttpServiceV1Descriptor, BeaconsHttpServiceV1)
```
