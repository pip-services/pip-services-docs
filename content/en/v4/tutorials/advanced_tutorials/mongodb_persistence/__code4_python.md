
```python
 class BeaconsControllerFactory(Factory):

    MemoryPersistenceDescriptor = Descriptor('beacons', 'persistence', 'memory', '*', '1.0')
    FilePersistenceDescriptor = Descriptor('beacons', 'persistence', 'file', '*', '1.0')
    MongoDbPersistenceDescriptor = Descriptor('beacons', 'persistence', 'mongodb', '*', '1.0')
    ServiceDescriptor = Descriptor('beacons', 'service', 'default', '*', '1.0')
    HttpControllerV1Descriptor = Descriptor('beacons', 'controller', 'http', '*', '1.0')

    def __init__(self):
        super(BeaconsControllerFactory, self).__init__()

        self.register_as_type(BeaconsControllerFactory.MemoryPersistenceDescriptor, BeaconsMemoryPersistence)
        self.register_as_type(BeaconsControllerFactory.FilePersistenceDescriptor, BeaconsFilePersistence)
        self.register_as_type(BeaconsControllerFactory.MongoDbPersistenceDescriptor, BeaconsMongoDbPersistence)
        self.register_as_type(BeaconsControllerFactory.ControllerDescriptor, BeaconsService)
        self.register_as_type(BeaconsControllerFactory.HttpControllerV1Descriptor, BeaconsHttpControllerV1)
```
