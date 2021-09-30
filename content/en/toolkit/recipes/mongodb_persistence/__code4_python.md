
```python
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
