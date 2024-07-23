
**/src/build/BeaconsControllerFactory.py**

```python
from pip_services4_components.refer import Descriptor
from pip_services4_components.build import Factory

from ..logic.BeaconsService import BeaconsService
from ..persistence.BeaconsFilePersistence import BeaconsFilePersistence
from ..persistence.BeaconsMemoryPersistence import BeaconsMemoryPersistence
from ..persistence.BeaconsMongoDbPersistence import BeaconsMongoDbPersistence
from ..controllers.version1.BeaconsHttpControllersV1 import BeaconsHttpControllerV1


class BeaconsControllerFactory(Factory):

    MemoryPersistenceDescriptor = Descriptor('beacons', 'persistence', 'memory', '*', '1.0')
    FilePersistenceDescriptor = Descriptor('beacons', 'persistence', 'file', '*', '1.0')
    MongoDbPersistenceDescriptor = Descriptor('beacons', 'persistence', 'mongodb', '*', '1.0')
    ServiceDescriptor = Descriptor('beacons', 'service', 'default', '*', '1.0')
    HttpControllerV1Descriptor = Descriptor('beacons', 'controller', 'http', '*', '1.0')

    def __init__(self):
        super(BeaconsControllerFactory, self).__init__()

        self.register_as_type(BeaconsControllerFactory.MemoryPersistenceDescriptor, BeaconsMemoryPersistence)
        self.register_as_type(BeaconsControllerFactory.MongoDbPersistenceDescriptor, BeaconsMongoDbPersistence)
        self.register_as_type(BeaconsControllerFactory.ServiceDescriptor, BeaconsService)
        self.register_as_type(BeaconsControllerFactory.HttpControllerV1Descriptor, BeaconsHttpControllerV1)
```
